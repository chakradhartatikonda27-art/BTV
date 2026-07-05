const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route: Get all published articles
app.get('/api/articles', (req, res) => {
  db.all('SELECT * FROM articles', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const articles = {};
    rows.forEach(row => {
      articles[row.id] = {
        id: row.id,
        category: row.category,
        location: row.location,
        author: row.author,
        readTime: row.readTime,
        image: row.image,
        title: { en: row.title_en, te: row.title_te },
        description: { en: row.description_en, te: row.description_te },
        text: { en: row.body_en, te: row.body_te }
      };
    });
    res.json(articles);
  });
});

// Route: Get all video shorts
app.get('/api/shorts', (req, res) => {
  db.all('SELECT * FROM shorts', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const shorts = rows.map(row => ({
      id: row.id,
      location: row.location,
      topic: row.topic,
      image: row.image,
      videoUrl: row.videoUrl,
      duration: row.duration,
      views: row.views,
      title: { en: row.title_en, te: row.title_te },
      body: { en: row.body_en, te: row.body_te }
    }));
    res.json(shorts);
  });
});

// Route: Get all submissions with comments
app.get('/api/submissions', (req, res) => {
  db.all('SELECT * FROM submissions', [], (err, subRows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    db.all('SELECT * FROM comments', [], (err, commentRows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const submissions = subRows.map(sub => {
        const subComments = commentRows
          .filter(c => c.submissionId === sub.id)
          .map(c => ({ author: c.author, text: c.text, time: c.time }));
        
        let parsedHistory = [];
        try {
          parsedHistory = JSON.parse(sub.history || '[]');
        } catch (e) {
          parsedHistory = [];
        }

        return {
          ...sub,
          history: parsedHistory,
          comments: subComments
        };
      });
      res.json(submissions);
    });
  });
});

// Route: Submit a new field report
app.post('/api/submissions', (req, res) => {
  const {
    id, headline, shortHeadline, summary, content, type, category, language,
    state, district, city, reporterId, reporterName, reporterTrust, sourceType,
    verifyStatus, priority, status, riskLevel, submittedTime, slaMinutes, photo, videoUrl, sources
  } = req.body;

  // Validation
  if (type === 'news') {
    if (!photo) return res.status(400).json({ error: "NEWS requires a Main Photo!" });
    if (!sources) return res.status(400).json({ error: "NEWS requires Sources!" });
  } else if (type === 'short') {
    if (!videoUrl) return res.status(400).json({ error: "SHORT requires a 9:16 Vertical Video URL!" });
    if (!photo) return res.status(400).json({ error: "SHORT requires a Thumbnail/Photo!" });
  }

  const historyStr = JSON.stringify([
    { status: 'DRAFT', actor: reporterId, time: new Date().toISOString() },
    { status: 'SUBMITTED', actor: reporterId, time: new Date().toISOString() }
  ]);

  db.run(`INSERT OR REPLACE INTO submissions (
    id, headline, shortHeadline, summary, content, type, category, language,
    state, district, city, reporterId, reporterName, reporterTrust, sourceType,
    verifyStatus, priority, status, riskLevel, submittedTime, slaMinutes, photo, videoUrl, sources, history
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
    id, headline, shortHeadline, summary, content, type, category, language,
    state, district, city, reporterId, reporterName, reporterTrust, sourceType,
    verifyStatus, priority, status || 'SUBMITTED', riskLevel, submittedTime || new Date().toISOString(),
    slaMinutes, photo, videoUrl, sources, historyStr
  ], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Submission created successfully", id });
  });
});

// Route: Add administrative feedback comments
app.post('/api/submissions/:id/comments', (req, res) => {
  const { author, text } = req.body;
  const submissionId = req.params.id;
  const commentId = `c-${Date.now()}`;
  const time = 'Just now';

  db.run(`INSERT INTO comments (id, submissionId, author, text, time) VALUES (?, ?, ?, ?, ?)`, [
    commentId, submissionId, author, text, time
  ], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Comment added successfully", commentId });
  });
});

// Route: Update workflow status (e.g. locking, changes requested, or approval)
app.put('/api/submissions/:id/status', (req, res) => {
  const subId = req.params.id;
  const { status, actor, comment } = req.body;

  db.get('SELECT * FROM submissions WHERE id = ?', [subId], (err, sub) => {
    if (err || !sub) {
      return res.status(404).json({ error: "Submission not found" });
    }

    let history = [];
    try {
      history = JSON.parse(sub.history || '[]');
    } catch (e) {
      history = [];
    }
    history.push({ status, actor, time: new Date().toISOString() });
    const historyStr = JSON.stringify(history);

    db.serialize(() => {
      db.run('UPDATE submissions SET status = ?, history = ? WHERE id = ?', [status, historyStr, subId]);

      if (status === 'APPROVED' || status === 'PUBLISHED') {
        const artId = `art-${Date.now()}`;
        db.run(`INSERT OR REPLACE INTO articles (
          id, category, location, author, readTime, image, 
          title_en, title_te, description_en, description_te, body_en, body_te, published_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
          artId, sub.category, sub.city, sub.reporterName, 3, sub.photo || 'assets/hero_business_story.png',
          sub.headline, sub.headline, sub.summary, sub.summary, sub.content, sub.content,
          new Date().toISOString()
        ]);
        console.log(`Automatically published submission ${subId} as Article ${artId}`);
      }

      if (comment) {
        const commentId = `c-${Date.now()}`;
        db.run('INSERT INTO comments (id, submissionId, author, text, time) VALUES (?, ?, ?, ?, ?)', [
          commentId, subId, actor, comment, 'Just now'
        ]);
      }

      res.json({ message: `Status updated to ${status}`, id: subId });
    });
  });
});

// Fallback to serving public static files if running locally in dev mode
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const rootDir = path.join(__dirname, '..');
  app.use(express.static(rootDir));
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

module.exports = app;
