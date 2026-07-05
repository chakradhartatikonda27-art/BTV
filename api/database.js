const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Use in-memory SQLite on Vercel to bypass read-only filesystem restrictions
const isVercel = process.env.VERCEL || process.env.NOW_BUILDER;
const dbPath = isVercel ? ':memory:' : path.join(__dirname, '..', 'btv_live.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to the SQLite database.');
    initDatabase();
  }
});

function initDatabase() {
  db.serialize(() => {
    // 1. Articles Table
    db.run(`CREATE TABLE IF NOT EXISTS articles (
      id TEXT PRIMARY KEY,
      category TEXT,
      location TEXT,
      author TEXT,
      readTime INTEGER,
      image TEXT,
      title_en TEXT,
      title_te TEXT,
      description_en TEXT,
      description_te TEXT,
      body_en TEXT,
      body_te TEXT,
      published_at TEXT
    )`);

    // 2. Shorts Table
    db.run(`CREATE TABLE IF NOT EXISTS shorts (
      id TEXT PRIMARY KEY,
      location TEXT,
      topic TEXT,
      image TEXT,
      videoUrl TEXT,
      duration TEXT,
      views TEXT,
      title_en TEXT,
      title_te TEXT,
      body_en TEXT,
      body_te TEXT
    )`);

    // 3. Submissions Table (Reporter Portal Workflow)
    db.run(`CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      headline TEXT,
      shortHeadline TEXT,
      summary TEXT,
      content TEXT,
      type TEXT,
      category TEXT,
      language TEXT,
      state TEXT,
      district TEXT,
      city TEXT,
      reporterId TEXT,
      reporterName TEXT,
      reporterTrust TEXT,
      sourceType TEXT,
      verifyStatus TEXT,
      priority TEXT,
      status TEXT,
      riskLevel TEXT,
      submittedTime TEXT,
      slaMinutes INTEGER,
      photo TEXT,
      videoUrl TEXT,
      sources TEXT
    )`);

    // 4. Comments Table (Admin Portal Workflow Notes)
    db.run(`CREATE TABLE IF NOT EXISTS comments (
      id TEXT PRIMARY KEY,
      submissionId TEXT,
      author TEXT,
      text TEXT,
      time TEXT
    )`);

    // Check if seeding is needed
    db.get("SELECT COUNT(*) as count FROM articles", [], (err, row) => {
      if (err) {
        console.error("Error checking articles count:", err);
        return;
      }
      if (row.count === 0) {
        seedDatabase();
      }
    });
  });
}

function seedDatabase() {
  console.log("Seeding database with original bilingual database...");

  // Seed Articles
  const articles = [
    {
      id: 'hero',
      category: 'Startups',
      location: 'Hyderabad',
      author: 'Mohan Krishna (RPT-HYD-0042)',
      readTime: 4,
      image: 'assets/hyderabad_skyline.png',
      title_en: "Hyderabad Tech Ecosystem Surges: T-Hub Becomes South India's Innovation Nucleus",
      title_te: "హైదరాబాద్ టెక్ ఇకోసిస్టమ్ ఉప్పెన: దక్షిణ భారతదేశ ఆవిష్కరణ కేంద్రంగా మారిన టి-హబ్",
      description_en: "Local startups raised a staggering $150M in Q2 2026. Experts believe the combination of world-class infrastructure and supportive state policies makes Telangana the preferred destination for high-growth tech firms.",
      description_te: "స్థానిక స్టార్టప్‌లు 2026 క్యూ2లో భారీగా $150 మిలియన్ల నిధులను సేకరించాయి. ప్రపంచ స్థాయి మౌలిక సదుపాయాలు మరియు సహాయక రాష్ట్ర విధానాలు తెలంగాణను అత్యధిక వృద్ధి చెందే టెక్ సంస్థలకు అనుకూలమైన గమ్యస్థానంగా మారుస్తున్నాయని నిపుణులు అభిప్రాయపడుతున్నారు.",
      body_en: "Hyderabad is experiencing a phenomenal surge in startup funding, securing over 150 million dollars in the second quarter of 2026 alone. Key growth sectors include fintech, artificial intelligence, and healthcare technology. At the center of this revolution is T-Hub, India's largest innovation campus, which has fostered over 2,000 startups. Venture capitalists are actively targeting the region, citing excellent infrastructure and favorable policies.",
      body_te: "హైదరాబాద్ స్టార్టప్ నిధులలో అద్భుతమైన వృద్ధిని సాధిస్తోంది, 2026 రెండవ త్రైమాసికంలోనే 150 మిలియన్ డాలర్లకు పైగా నిధులను పొందింది. ఫిన్‌టెక్, ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ మరియు హెల్త్‌కేర్ టెక్నాలజీలు ప్రధాన వృద్ధి రంగాలుగా ఉన్నాయి. ఈ విప్లవం మధ్యలో భారతదేశపు అతిపెద్ద ఇన్నోవేషన్ క్యాంపస్ అయిన టి-హబ్ ఉంది, ఇది 2,000 పైగా స్టార్టప్‌లను ప్రోత్సహించింది. అద్భుతమైన మౌలిక సదుపాయాలు మరియు అనుకూలమైన విధానాలను బట్టి ఇన్వెస్టర్లు ఈ ప్రాంతాన్ని లక్ష్యంగా చేసుకుంటున్నారు."
    },
    {
      id: 'article-1',
      category: 'Technology',
      location: 'Visakhapatnam',
      author: 'S. Ramadevi (RPT-VSK-0018)',
      readTime: 3,
      image: 'assets/interview_thumbnail.png',
      title_en: "Visakhapatnam IT Park Expansion Targets 10,000 Local Digital Jobs",
      title_te: "విశాఖపట్నం ఐటీ పార్క్ విస్తరణ: 10,000 స్థానిక డిజిటల్ ఉద్యోగాల సృష్టి",
      description_en: "A new phase of development in Rushikonda IT Hill has broken ground. Major multinational firms are setting up engineering bases, boosting the coastal city's tech status.",
      description_te: "రుషికొండ ఐటీ హిల్‌లో కొత్త దశ అభివృద్ధి పనులు ప్రారంభమయ్యాయి. ప్రధాన బహుళజాతి సంస్థలు ఇంజనీరింగ్ కేంద్రాలను ఏర్పాటు చేస్తున్నాయి, ఇది విశాఖ టెక్ హోదాను పెంచుతుంది.",
      body_en: "Vizag is rapidly transforming into a secondary tech hub in Andhra Pradesh. The new IT park in Rushikonda is designed to host global companies with state-of-the-art office spaces, green architecture, and gigabit fiber connectivity. Local universities are partnering with companies to train graduates in cloud engineering and data analytics.",
      body_te: "ఆంధ్రప్రదేశ్‌లో వైజాగ్ ఐటీ హబ్‌గా వేగంగా మారుతోంది. రుషికొండలోని కొత్త ఐటీ పార్క్ అత్యాధునిక ఆఫీస్ స్పేస్‌లతో గ్లోబల్ కంపెనీలను ఆకర్షించేలా రూపొందించబడింది. క్లౌడ్ ఇంజనీరింగ్ మరియు డేటా అనలిటిక్స్‌లో గ్రాడ్యుయేట్లకు శిక్షణ ఇవ్వడానికి స్థానిక విశ్వవిద్యాలయాలు కంపెనీలతో భాగస్వామ్యం కుదుర్చుకుంటున్నాయి."
    },
    {
      id: 'article-2',
      category: 'Agriculture',
      location: 'Warangal',
      author: 'P. Venkat',
      readTime: 3,
      image: 'assets/hero_business_story.png',
      title_en: "Warangal Agritech Startups Connect 50,000 Farmers to Global Markets",
      title_te: "వరంగల్ అగ్రిటెక్ స్టార్టప్‌లు: 50,000 మంది రైతులను గ్లోబల్ మార్కెట్లతో అనుసంధానం",
      description_en: "Using localized mobile applications and artificial intelligence tools, local cooperatives are cutting middleman fees and boosting cotton and spice profit margins.",
      description_te: "స్థానిక మొబైల్ అప్లికేషన్లు మరియు ఏఐ పరికరాలను ఉపయోగించి, వరంగల్ సహకార సంఘాలు మధ్యవర్తుల ఫీజులను తగ్గించి, పత్తి మరియు మిరప పంటల లాభాలను పెంచుతున్నాయి.",
      body_en: "Agritech startups in Warangal are helping cotton farmers optimize pricing by providing real-time global commodity rates. Mobile apps now suggest direct sales platforms, cutting transaction times by 40% and offering secure digital payments directly to bank accounts.",
      body_te: "వరంగల్‌లోని అగ్రిటెక్ స్టార్టప్‌లు పత్తి రైతులకు రియల్ టైమ్ గ్లోబల్ కమోడిటీ రేట్లను అందించడం ద్వారా ధరలను పెంచుకునేలా చేస్తున్నాయి. మొబైల్ యాప్‌లు ఇప్పుడు నేరుగా విక్రయ వేదికలను సూచిస్తున్నాయి, దీనివల్ల లావాదేవీల సమయం 40% తగ్గింది."
    },
    {
      id: 'article-3',
      category: 'Real Estate',
      location: 'Vijayawada',
      author: 'K. Satish Kumar',
      readTime: 5,
      image: 'assets/opportunity_cover.png',
      title_en: "Vijayawada Commercial Property Demand Rises in Infrastructure Boom",
      title_te: "విజయవాడలో పెరిగిన కమర్షియల్ ప్రాపర్టీల డిమాండ్",
      description_en: "Logistics corridors and warehouse hubs near the city are driving corporate relocations, with commercial lease yields climbing 8% annually.",
      description_te: "నగరానికి సమీపంలో ఉన్న లాజిస్టిక్స్ కారిడార్లు మరియు వేర్‌హౌస్ హబ్‌ల ఏర్పాటు వల్ల కార్యాలయాలు विजयవాడకు మారుతున్నాయి. కమర్షియల్ లీజులు ఏటా 8% పెరుగుతున్నాయి.",
      body_en: "As transport connectivity increases along the national highway network, Vijayawada has become a strategic hub for distribution and corporate retail. Warehousing demand has spiked, attracting investments from national logistics brands.",
      body_te: "జాతీయ రహదారి వెంబడి రవాణా కనెక్టివిటీ పెరగడంతో, विजयవాడ డిస్ట్రిబ్యూషన్ మరియు కార్పొరేట్ రిటైల్ కోసం ఒక వ్యూహాత్మక కేంద్రంగా మారింది. వేర్‌హౌసింగ్ డిమాండ్ పెరిగి, పెట్టుబడులను ఆకర్షిస్తోంది."
    },
    {
      id: 'article-4',
      category: 'Finance & Stock Market',
      location: 'Tirupati',
      author: 'M. Sridevi',
      readTime: 4,
      image: 'assets/opportunity_cover.png',
      title_en: "Tirupati Spiritual Tourism Boosts Local Hospitality Startups",
      title_te: "తిరుపతి ఆధ్యాత్మిక పర్యాటకం: పెరిగిన స్థానిక హాస్పిటాలిటీ స్టార్టప్‌ల జోరు",
      description_en: "Alternative accommodation and eco-friendly tourist guide systems are securing venture capital, highlighting the transition of temple city businesses.",
      description_te: "తిరుపతిలో ప్రత్యామ్నాయ వసతులు మరియు పర్యావరణ అనుకూల టూరిస్ట్ గైడ్ సిస్టమ్స్ వంటి స్టార్టప్‌లు పెట్టుబడులను ఆకర్షిస్తున్నాయి.",
      body_en: "Spiritual tourism in Tirupati is embracing modern hospitality tech. New local aggregators offer customized homestays, digital guides, and electric vehicle transport facilities, drawing younger pilgrims looking for customized experiences.",
      body_te: "తిరుపతిలో ఆధ్యాత్మిక పర్యాటకం ఆధునిక టెక్నాలజీని అందించపుచ్చుకుంటోంది. కొత్త స్థానిక స్టార్టప్‌లు హోమ్‌స్టేలు, డిజిటల్ గైడ్‌లు మరియు ఎలక్ట్రిక్ వాహనాల రవాణాను అందిస్తున్నాయి."
    }
  ];

  articles.forEach(art => {
    db.run(`INSERT OR REPLACE INTO articles (
      id, category, location, author, readTime, image, 
      title_en, title_te, description_en, description_te, body_en, body_te, published_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
      art.id, art.category, art.location, art.author, art.readTime, art.image,
      art.title_en, art.title_te, art.description_en, art.description_te, art.body_en, art.body_te,
      new Date().toISOString()
    ]);
  });

  // Seed Shorts
  const shorts = [
    {
      id: 'short-1',
      location: 'Hyderabad',
      topic: 'Startups',
      image: 'assets/hyderabad_skyline.png',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-around-a-table-41712-large.mp4',
      duration: '0:30',
      views: '18.2K',
      title_en: "Hyderabad Agritech Incubator Launch",
      title_te: "హైదరాబాద్ అగ్రిటెక్ ఇంక్యుబేటర్ ప్రారంభం",
      body_en: "T-Hub Hyderabad launched a dedicated Agritech incubator today, offering $50k seed funding to 15 selected startups focusing on farm automation and IoT water sensors. The initiative is backed by the Telangana government and agricultural universities.",
      body_te: "హైదరాబాద్ టి-హబ్ ఈ రోజు అగ్రిటెక్ ఇంక్యుబేటర్‌ను ప్రారంభించింది. ఇది వ్యవసాయ ఆటోమేషన్ మరియు ఐఓటీ సెన్సార్లపై దృష్టి సారించే 15 ఎంపిక చేసిన స్టార్టప్‌లకు $50k నిధులను అందిస్తుంది. ఈ చొరవకు తెలంగాణ ప్రభుత్వం మద్దతు ఇస్తోంది."
    },
    {
      id: 'short-2',
      location: 'Visakhapatnam',
      topic: 'Technology',
      image: 'assets/interview_thumbnail.png',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-in-a-cafe-41716-large.mp4',
      duration: '0:25',
      views: '15.4K',
      title_en: "Vizag FinTech Valley Expansion",
      title_te: "వైజాగ్ ఫిన్‌టెక్ వ్యాలీ విస్తరణ",
      body_en: "Three global payment software companies signed leases at Vizag FinTech Valley. The expansion is projected to create 1,200 software engineering roles by the end of 2026, boosting local tech talent recruitment and real estate demand.",
      body_te: "మూడు గ్లోబల్ పేమెంట్ సాఫ్ట్‌വേర్ కంపెనీలు వైజాగ్ ఫిన్‌టెక్ వ్యాలీలో ఒప్పందంకుదుర్చుకున్నాయి. ఈ విస్తరణ ద్వారా 2026 నాటికి 1,200 కొత్త సాఫ్ట్‌വേర్ ఇంజనీరింగ్ ఉద్యోగాలు లభించనున్నాయి."
    },
    {
      id: 'short-3',
      location: 'Vijayawada',
      topic: 'Real Estate',
      image: 'assets/opportunity_cover.png',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-smartphone-in-neon-light-40156-large.mp4',
      duration: '0:15',
      views: '22.1K',
      title_en: "Amaravati Capital Region High-Speed Rail",
      title_te: "అమరావతి క్యాపిటల్ రీజియన్ హై-స్పీడ్ రైల్",
      body_en: "Andhra Pradesh cabinet approved feasibility study for high-speed metro connecting Vijayawada, Guntur, and Tenali. This project is expected to drive land values and commercial office space demands in the capital region by 20% in the next fiscal year.",
      body_te: "విజయవాడ, గుంటూరు మరియు తెనాలిని అనుసంధానించే హై-స్పీడ్ మెట్రో ప్రాజెక్టును ఆంధ్రప్రదేశ్ క్యాబినెట్ ఆమోదించింది. ఈ ప్రాజెక్ట్ క్యాపిటల్ రీజియన్ భూమి విలువలను 20% పెంచే అవకాశం ఉంది."
    },
    {
      id: 'short-4',
      location: 'Warangal',
      topic: 'Agriculture',
      image: 'assets/hero_business_story.png',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-holding-a-credit-card-while-using-a-laptop-42171-large.mp4',
      duration: '0:35',
      views: '9.8K',
      title_en: "Warangal Cotton Markets Digitization",
      title_te: "వరంగల్ కాటన్ మార్కెట్ డిజిటలైజేషన్",
      body_en: "Warangal's main cotton yard completed 100% digital weighing scale implementation. The integration prevents commission malpractices and provides transparent direct bank settlements to over 20,000 regional cotton farmers daily.",
      body_te: "వరంగల్ ప్రధాన పత్తి మార్కెట్ 100% డిజిటల్ తూకం స్కేల్స్ అమలును పూర్తి చేసింది. ఈ విధానం వల్ల రైతులకు నేరుగా బ్యాంక్ ఖాతాల్లో పారదర్శకంగా డబ్బులు జమ అవుతాయి."
    },
    {
      id: 'short-5',
      location: 'Tirupati',
      topic: 'Career & Jobs',
      image: 'assets/opportunity_cover.png',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-typing-on-a-laptop-42093-large.mp4',
      duration: '0:20',
      views: '14.2K',
      title_en: "Tirupati Skill Development Hub",
      title_te: "తిరుపతి స్కిల్ డెవలప్‌మెంట్ హబ్",
      body_en: "Tirupati municipal corporation is setting up a skill center focusing on electric vehicle repairs and drone operations. Free training will be offered to 500 unemployed youths in the district, ensuring immediate placements in local EV manufacturing units.",
      body_te: "ఎలక్ట్రిక్ వాహనాల రిపేర్ మరియు డ్రోన్ ఆపరేషన్లపై దృష్టి సారించే నైపుణ్య అభివృద్ధి కేంద్రాన్ని తిరుపతిలో ఏర్పాటు చేస్తున్నారు. నిరుద్యోగ యువతకు ఇక్కడ ఉచిత శిక్షణ ఇవ్వబడుతుంది."
    }
  ];

  shorts.forEach(sh => {
    db.run(`INSERT OR REPLACE INTO shorts (
      id, location, topic, image, videoUrl, duration, views, title_en, title_te, body_en, body_te
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
      sh.id, sh.location, sh.topic, sh.image, sh.videoUrl, sh.duration, sh.views,
      sh.title_en, sh.title_te, sh.body_en, sh.body_te
    ]);
  });

  console.log("Database seeded successfully.");
}

module.exports = db;
