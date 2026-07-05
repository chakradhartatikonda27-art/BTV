/**
 * BTV LIVE — Audience Growth Engine & Newsroom OS
 * Core Application Logic, Bilingual Rendering, Progressive Onboarding,
 * TTS Audio Narrator, and Newsroom Editorial Workflow Engine.
 */

// --- BILINGUAL CONTENT DATABASE ---
const CONTENT_DATABASE = {
  articles: {
    hero: {
      id: 'hero',
      category: 'Startups',
      location: 'Hyderabad',
      author: 'Mohan Krishna (RPT-HYD-0042)',
      readTime: 4,
      title: {
        en: "Hyderabad Tech Ecosystem Surges: T-Hub Becomes South India's Innovation Nucleus",
        te: "హైదరాబాద్ టెక్ ఇకోసిస్టమ్ ఉప్పెన: దక్షిణ భారతదేశ ఆవిష్కరణ కేంద్రంగా మారిన టి-హబ్"
      },
      description: {
        en: "Local startups raised a staggering $150M in Q2 2026. Experts believe the combination of world-class infrastructure and supportive state policies makes Telangana the preferred destination for high-growth tech firms.",
        te: "స్థానిక స్టార్టప్‌లు 2026 క్యూ2లో భారీగా $150 మిలియన్ల నిధులను సేకరించాయి. ప్రపంచ స్థాయి మౌలిక సదుపాయాలు మరియు సహాయక రాష్ట్ర విధానాలు తెలంగాణను అత్యధిక వృద్ధి చెందే టెక్ సంస్థలకు అనుకూలమైన గమ్యస్థానంగా మారుస్తున్నాయని నిపుణులు అభిప్రాయపడుతున్నారు."
      },
      text: {
        en: "Hyderabad is experiencing a phenomenal surge in startup funding, securing over 150 million dollars in the second quarter of 2026 alone. Key growth sectors include fintech, artificial intelligence, and healthcare technology. At the center of this revolution is T-Hub, India's largest innovation campus, which has fostered over 2,000 startups. Venture capitalists are actively targeting the region, citing excellent infrastructure and favorable policies.",
        te: "హైదరాబాద్ స్టార్టప్ నిధులలో అద్భుతమైన వృద్ధిని సాధిస్తోంది, 2026 రెండవ త్రైమాసికంలోనే 150 మిలియన్ డాలర్లకు పైగా నిధులను పొందింది. ఫిన్‌టెక్, ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ మరియు హెల్త్‌కేర్ టెక్నాలజీలు ప్రధాన వృద్ధి రంగాలుగా ఉన్నాయి. ఈ విప్లవం మధ్యలో భారతదేశపు అతిపెద్ద ఇన్నోవేషన్ క్యాంపస్ అయిన టి-హబ్ ఉంది, ఇది 2,000 పైగా స్టార్టప్‌లను ప్రోత్సహించింది. అద్భుతమైన మౌలిక సదుపాయాలు మరియు అనుకూలమైన విధానాలను బట్టి ఇన్వెస్టర్లు ఈ ప్రాంతాన్ని లక్ష్యంగా చేసుకుంటున్నారు."
      }
    },
    'article-1': {
      id: 'article-1',
      category: 'Technology',
      location: 'Visakhapatnam',
      author: 'S. Ramadevi (RPT-VSK-0018)',
      readTime: 3,
      title: {
        en: "Visakhapatnam IT Park Expansion Targets 10,000 Local Digital Jobs",
        te: "విశాఖపట్నం ఐటీ పార్క్ విస్తరణ: 10,000 స్థానిక డిజిటల్ ఉద్యోగాల సృష్టి"
      },
      description: {
        en: "A new phase of development in Rushikonda IT Hill has broken ground. Major multinational firms are setting up engineering bases, boosting the coastal city's tech status.",
        te: "రుషికొండ ఐటీ హిల్‌లో కొత్త దశ అభివృద్ధి పనులు ప్రారంభమయ్యాయి. ప్రధాన బహుళజాతి సంస్థలు ఇంజనీరింగ్ కేంద్రాలను ఏర్పాటు చేస్తున్నాయి, ఇది విశాఖ టెక్ హోదాను పెంచుతుంది."
      },
      text: {
        en: "Vizag is rapidly transforming into a secondary tech hub in Andhra Pradesh. The new IT park in Rushikonda is designed to host global companies with state-of-the-art office spaces, green architecture, and gigabit fiber connectivity. Local universities are partnering with companies to train graduates in cloud engineering and data analytics.",
        te: "ఆంధ్రప్రదేశ్‌లో వైజాగ్ ఐటీ హబ్‌గా వేగంగా మారుతోంది. రుషికొండలోని కొత్త ఐటీ పార్క్ అత్యాధునిక ఆఫీస్ స్పేస్‌లతో గ్లోబల్ కంపెనీలను ఆకర్షించేలా రూపొందించబడింది. క్లౌడ్ ఇంజనీరింగ్ మరియు డేటా అనలిటిక్స్‌లో గ్రాడ్యుయేట్లకు శిక్షణ ఇవ్వడానికి స్థానిక విశ్వవిద్యాలయాలు కంపెనీలతో భాగస్వామ్యం కుదుర్చుకుంటున్నాయి."
      }
    },
    'article-2': {
      id: 'article-2',
      category: 'Agriculture',
      location: 'Warangal',
      author: 'P. Venkat',
      readTime: 3,
      title: {
        en: "Warangal Agritech Startups Connect 50,000 Farmers to Global Markets",
        te: "వరంగల్ అగ్రిటెక్ స్టార్టప్‌లు: 50,000 మంది రైతులను గ్లోబల్ మార్కెట్లతో అనుసంధానం"
      },
      description: {
        en: "Using localized mobile applications and artificial intelligence tools, local cooperatives are cutting middleman fees and boosting cotton and spice profit margins.",
        te: "స్థానిక మొబైల్ అప్లికేషన్లు మరియు ఏఐ పరికరాలను ఉపయోగించి, వరంగల్ సహకార సంఘాలు మధ్యవర్తుల ఫీజులను తగ్గించి, పత్తి మరియు మిరప పంటల లాభాలను పెంచుతున్నాయి."
      },
      text: {
        en: "Agritech startups in Warangal are helping cotton farmers optimize pricing by providing real-time global commodity rates. Mobile apps now suggest direct sales platforms, cutting transaction times by 40% and offering secure digital payments directly to bank accounts.",
        te: "వరంగల్‌లోని అగ్రిటెక్ స్టార్టప్‌లు పత్తి రైతులకు రియల్ టైమ్ గ్లోబల్ కమోడిటీ రేట్లను అందించడం ద్వారా ధరలను పెంచుకునేలా చేస్తున్నాయి. మొబైల్ యాప్‌లు ఇప్పుడు నేరుగా విక్రయ వేదికలను సూచిస్తున్నాయి, దీనివల్ల లావాదేవీల సమయం 40% తగ్గింది."
      }
    },
    'article-3': {
      id: 'article-3',
      category: 'Real Estate',
      location: 'Vijayawada',
      author: 'K. Satish Kumar',
      readTime: 5,
      title: {
        en: "Vijayawada Commercial Property Demand Rises in Infrastructure Boom",
        te: "విజయవాడలో పెరిగిన కమర్షియల్ ప్రాపర్టీల డిమాండ్"
      },
      description: {
        en: "Logistics corridors and warehouse hubs near the city are driving corporate relocations, with commercial lease yields climbing 8% annually.",
        te: "నగరానికి సమీపంలో ఉన్న లాజిస్టిక్స్ కారిడార్లు మరియు వేర్‌హౌస్ హబ్‌ల ఏర్పాటు వల్ల కార్యాలయాలు विजयవాడకు మారుతున్నాయి. కమర్షియల్ లీజులు ఏటా 8% పెరుగుతున్నాయి."
      },
      text: {
        en: "As transport connectivity increases along the national highway network, Vijayawada has become a strategic hub for distribution and corporate retail. Warehousing demand has spiked, attracting investments from national logistics brands.",
        te: "జాతీయ రహదారి వెంబడి రవాణా కనెక్టివిటీ పెరగడంతో, विजयవాడ డిస్ట్రిబ్యూషన్ మరియు కార్పొరేట్ రిటైల్ కోసం ఒక వ్యూహాత్మక కేంద్రంగా మారింది. వేర్‌హౌసింగ్ డిమాండ్ పెరిగి, పెట్టుబడులను ఆకర్షిస్తోంది."
      }
    },
    'article-4': {
      id: 'article-4',
      category: 'Finance & Stock Market',
      location: 'Tirupati',
      author: 'M. Sridevi',
      readTime: 4,
      title: {
        en: "Tirupati Spiritual Tourism Boosts Local Hospitality Startups",
        te: "తిరుపతి ఆధ్యాత్మిక పర్యాటకం: పెరిగిన స్థానిక హాస్పిటాలిటీ స్టార్టప్‌ల జోరు"
      },
      description: {
        en: "Alternative accommodation and eco-friendly tourist guide systems are securing venture capital, highlighting the transition of temple city businesses.",
        te: "తిరుపతిలో ప్రత్యామ్నాయ వసతులు మరియు పర్యావరణ అనుకూల టూరిస్ట్ గైడ్ సిస్టమ్స్ వంటి స్టార్టప్‌లు పెట్టుబడులను ఆకర్షిస్తున్నాయి."
      },
      text: {
        en: "Spiritual tourism in Tirupati is embracing modern hospitality tech. New local aggregators offer customized homestays, digital guides, and electric vehicle transport facilities, drawing younger pilgrims looking for customized experiences.",
        te: "తిరుపతిలో ఆధ్యాత్మిక పర్యాటకం ఆధునిక టెక్నాలజీని అందిపుచ్చుకుంటోంది. కొత్త స్థానిక స్టార్టప్‌లు హోమ్‌స్టేలు, డిజిటల్ గైడ్‌లు మరియు ఎలక్ట్రిక్ వాహనాల రవాణాను అందిస్తున్నాయి."
      }
    }
  },
  
  shorts: [
    {
      id: 'short-1',
      location: 'Hyderabad',
      topic: 'Startups',
      title: {
        en: "Hyderabad Agritech Incubator Launch",
        te: "హైదరాబాద్ అగ్రిటెక్ ఇంక్యుబేటర్ ప్రారంభం"
      },
      body: {
        en: "T-Hub Hyderabad launched a dedicated Agritech incubator today, offering $50k seed funding to 15 selected startups focusing on farm automation and IoT water sensors. The initiative is backed by the Telangana government and agricultural universities.",
        te: "హైదరాబాద్ టి-హబ్ ఈ రోజు అగ్రిటెక్ ఇంక్యుబేటర్‌ను ప్రారంభించింది. ఇది వ్యవసాయ ఆటోమేషన్ మరియు ఐఓటీ సెన్సార్లపై దృష్టి సారించే 15 ఎంపిక చేసిన స్టార్టప్‌లకు $50k నిధులను అందిస్తుంది. ఈ చొరవకు తెలంగాణ ప్రభుత్వం మద్దతు ఇస్తోంది."
      }
    },
    {
      id: 'short-2',
      location: 'Visakhapatnam',
      topic: 'Technology',
      title: {
        en: "Vizag FinTech Valley Expansion",
        te: "వైజాగ్ ఫిన్‌టెక్ వ్యాలీ విస్తరణ"
      },
      body: {
        en: "Three global payment software companies signed leases at Vizag FinTech Valley. The expansion is projected to create 1,200 software engineering roles by the end of 2026, boosting local tech talent recruitment and real estate demand.",
        te: "మూడు గ్లోబల్ పేమెంట్ సాఫ్ట్‌వేర్ కంపెనీలు వైజాగ్ ఫిన్‌టెక్ వ్యాలీలో ఒప్పందం కుదుర్చుకున్నాయి. ఈ విస్తరణ ద్వారా 2026 నాటికి 1,200 కొత్త సాఫ్ట్‌వేర్ ఇంజనీరింగ్ ఉద్యోగాలు లభించనున్నాయి."
      }
    },
    {
      id: 'short-3',
      location: 'Vijayawada',
      topic: 'Real Estate',
      title: {
        en: "Amaravati Capital Region High-Speed Rail",
        te: "అమరావతి క్యాపిటల్ రీజియన్ హై-స్పీడ్ రైల్"
      },
      body: {
        en: "Andhra Pradesh cabinet approved feasibility study for high-speed metro connecting Vijayawada, Guntur, and Tenali. This project is expected to drive land values and commercial office space demands in the capital region by 20% in the next fiscal year.",
        te: "విజయవాడ, గుంటూరు మరియు తెనాలిని అనుసంధానించే హై-స్పీడ్ మెట్రో ప్రాజెక్టును ఆంధ్రప్రదేశ్ క్యాబినెట్ ఆమోదించింది. ఈ ప్రాజెక్ట్ క్యాపిటల్ రీజియన్ భూమి విలువలను 20% పెంచే అవకాశం ఉంది."
      }
    },
    {
      id: 'short-4',
      location: 'Warangal',
      topic: 'Agriculture',
      title: {
        en: "Warangal Cotton Markets Digitization",
        te: "వరంగల్ కాటన్ మార్కెట్ డిజిటలైజేషన్"
      },
      body: {
        en: "Warangal's main cotton yard completed 100% digital weighing scale implementation. The integration prevents commission malpractices and provides transparent direct bank settlements to over 20,000 regional cotton farmers daily.",
        te: "వరంగల్ ప్రధాన పత్తి మార్కెట్ 100% డిజిటల్ తూకం స్కేల్స్ అమలును పూర్తి చేసింది. ఈ విధానం వల్ల రైతులకు నేరుగా బ్యాంక్ ఖాతాల్లో పారదర్శకంగా డబ్బులు జమ అవుతాయి."
      }
    },
    {
      id: 'short-5',
      location: 'Tirupati',
      topic: 'Career & Jobs',
      title: {
        en: "Tirupati Skill Development Hub",
        te: "తిరుపతి స్కిల్ డెవలప్‌మెంట్ హబ్"
      },
      body: {
        en: "Tirupati municipal corporation is setting up a skill center focusing on electric vehicle repairs and drone operations. Free training will be offered to 500 unemployed youths in the district, ensuring immediate placements in local EV manufacturing units.",
        te: "ఎలక్ట్రిక్ వాహనాల రిపేర్ మరియు డ్రోన్ ఆపరేషన్లపై దృష్టి సారించే నైపుణ్య అభివృద్ధి కేంద్రాన్ని తిరుపతిలో ఏర్పాటు చేస్తున్నారు. నిరుద్యోగ యువతకు ఇక్కడ ఉచిత శిక్షణ ఇవ్వబడుతుంది."
      }
    }
  ],

  opportunities: {
    jobs: [
      {
        id: 'job-1',
        title: {
          en: "Senior React Developer",
          te: "సీనియర్ రియాక్ట్ డెవలపర్"
        },
        company: "GlobeTech Solutions",
        city: "Hyderabad",
        details: {
          en: "Pay: ₹18-24 LPA. Requirements: 5+ years experience, React, Next.js. Remote options available.",
          te: "జీతం: ₹18-24 LPA. అర్హతలు: 5+ సం. అనుభవం, రియాక్ట్, నెక్స్ట్ జెఎస్. రిమోట్ ఆప్షన్ ఉంది."
        }
      },
      {
        id: 'job-2',
        title: {
          en: "Agritech Field Operations Manager",
          te: "అగ్రిటెక్ ఫీల్డ్ ఆపరేషన్స్ మేనేజర్"
        },
        company: "FarmLink Technologies",
        city: "Warangal",
        details: {
          en: "Pay: ₹8-12 LPA. Requirements: Degree in Agriculture, local language fluency, willing to travel.",
          te: "జీతం: ₹8-12 LPA. అర్హతలు: అగ్రికల్చర్ డిగ్రీ, తెలుగు మాట్లాడటం మరియు ప్రయాణించాలనే ఆసక్తి."
        }
      },
      {
        id: 'job-3',
        title: {
          en: "IT Support Analyst",
          te: "ఐటీ సపోర్ట్ అనలిస్ట్"
        },
        company: "Vizag Tech Hills",
        city: "Visakhapatnam",
        details: {
          en: "Pay: ₹5-7 LPA. Requirements: Graduate in CS/IT, network support basics, shift adaptability.",
          te: "జీతం: ₹5-7 LPA. అర్హతలు: సిఎస్/ఐటీ గ్రాడ్యుయేట్, నెట్‌వర్క్ సపోర్ట్ బేసిక్స్."
        }
      }
    ],
    events: [
      {
        id: 'event-1',
        title: {
          en: "Amaravati Business Conclave 2026",
          te: "అమరావతి బిజినెస్ కాన్‌క్లేవ్ 2026"
        },
        city: "Vijayawada",
        date: "July 15, 2026",
        details: {
          en: "Networking with 300+ local retail, real estate, and tech promoters. Keynote by AP Industry Minister.",
          te: "300+ స్థానిక రిటైల్, రియల్ ఎస్టేట్ మరియు టెక్ పరిశ్రమ ప్రమోటర్లతో నెట్‌వర్కింగ్ అవకాశాలు."
        }
      },
      {
        id: 'event-2',
        title: {
          en: "Hyderabad SaaS Founders Meetup",
          te: "హైదరాబాద్ సాస్ ఫౌండర్స్ మీటప్"
        },
        city: "Hyderabad",
        date: "July 12, 2026",
        details: {
          en: "Interactive roundtable on scaling to global markets. Free registration, sponsored by T-Hub.",
          te: "గ్లోబల్ మార్కెట్లకు సాస్ బిజినెస్ విస్తరించడంపై చర్చ. టి-హబ్ ఆధ్వర్యంలో ఉచిత రిజిస్ట్రేషన్."
        }
      }
    ],
    directory: [
      {
        id: 'dir-1',
        title: {
          en: "Srinivasa Bio-Seeds Private Limited",
          te: "శ్రీనివాస బయో-సీడ్స్ ప్రైవేట్ లిమిటెడ్"
        },
        city: "Tirupati",
        category: "Agriculture / Seed Supply",
        details: {
          en: "Contact: +91 877 2234567. Specialized in high-yield hybrid cotton seeds and organic fertilizers.",
          te: "ఫోన్: +91 877 2234567. ఆధికు దిగుబడినిచ్చే హైబ్రిడ్ పత్తి విత్తనాలు మరియు సేంద్రీయ ఎరువుల సరఫరాదారు."
        }
      },
      {
        id: 'dir-2',
        title: {
          en: "Grand Heritage Resorts",
          te: "గ్రాండ్ హెరిటేజ్ రిసార్ట్స్"
        },
        city: "Visakhapatnam",
        category: "Hospitality & Tourism",
        details: {
          en: "Contact: info@grandheritage.com. Beachfront luxury accommodation and local corporate events venue.",
          te: "ఇమెయిల్: info@grandheritage.com. బీచ్ ఫ్రంట్ లగ్జరీ వసతి మరియు ఈవెంట్స్ వేదిక."
        }
      }
    ]
  }
};

// --- INITIAL STATE ---
let state = {
  appMode: 'reader', // 'reader' or 'newsroom'
  language: 'en', // 'en' or 'te'
  location: 'Hyderabad',
  followedTopics: ['Startups'],
  followedPeople: [],
  savedStories: [],
  history: [],
  
  // Audio Narrator states
  ttsUtterance: null,
  ttsActiveStoryId: null,
  ttsRate: 1.0,
  
  // Onboarding & user authentication (Public site)
  onboardingStep: 1, // 1: Lang, 2: Location, 3: Interests, 4: Complete
  engagementCount: 0,
  userEmail: null,
  userPhone: null
};

// ==========================================
// --- BTV NEWSROOM OS DATABASES & CONFIGS ---
// ==========================================

// Simulated Accounts Config
const NEWSROOM_USERS = {
  superadmin: {
    id: 'BTV-IND-S-0001',
    name: 'Rajesh Sekhar (Super Admin)',
    email: 'admin@btv.com',
    role: 'Super Admin',
    stateScope: 'all',
    cityScope: 'all',
    status: 'Active',
    metrics: { submissions: 142, approved: 140 }
  },
  editor: {
    id: 'BTV-IND-E-0005',
    name: 'Sanjay Kumar (Chief Editor)',
    email: 'editor@btv.com',
    role: 'Central Editor',
    stateScope: 'all',
    cityScope: 'all',
    status: 'Active',
    metrics: { submissions: 88, approved: 80 }
  },
  admin_hyd: {
    id: 'BTV-TG-A-0003',
    name: 'K. Ranga Rao (Hyd Admin)',
    email: 'admin.hyd@btv.com',
    role: 'City Admin',
    stateScope: 'Telangana',
    cityScope: 'Hyderabad',
    status: 'Active',
    metrics: { submissions: 42, approved: 40 }
  },
  admin_vsk: {
    id: 'BTV-AP-A-0002',
    name: 'P. Mohan Das (Vizag Admin)',
    email: 'admin.vsk@btv.com',
    role: 'City Admin',
    stateScope: 'Andhra Pradesh',
    cityScope: 'Visakhapatnam',
    status: 'Active',
    metrics: { submissions: 28, approved: 26 }
  },
  reporter_hyd: {
    id: 'BTV-HYD-R-0042',
    name: 'Krishna Murthy',
    email: 'rep.hyd42@btv.com',
    role: 'Reporter',
    stateScope: 'Telangana',
    cityScope: 'Hyderabad',
    trustRating: '98% High Accuracy',
    status: 'Active',
    metrics: { total: 14, published: 11, pending: 2, correction: '0%' }
  },
  reporter_vsk: {
    id: 'BTV-VSK-R-0018',
    name: 'Rama Devi',
    email: 'rep.vsk18@btv.com',
    role: 'Reporter',
    stateScope: 'Andhra Pradesh',
    cityScope: 'Visakhapatnam',
    trustRating: '94% High Accuracy',
    status: 'Active',
    metrics: { total: 8, published: 6, pending: 1, correction: '12%' }
  },
  contributor: {
    id: 'BTV-CON-0089',
    name: 'Anonymous Contributor',
    email: 'contributor@btv.com',
    role: 'Contributor',
    stateScope: 'Telangana',
    cityScope: 'Hyderabad',
    trustRating: 'Unverified - Fact Check Required',
    status: 'Active',
    metrics: { total: 2, published: 1, pending: 1, correction: '50%' }
  }
};

let activeNrUser = NEWSROOM_USERS.superadmin; // Default active newsroom session

// Simulated Story Submissions Queue in the Approval State Machine
let NR_SUBMISSIONS = [
  {
    id: 'sub-1',
    headline: "Hyderabad Biotech Firm Secures ₹50 Crore Grant for Agritech R&D",
    shortHeadline: "Hyd Biotech Secures ₹50Cr Grant",
    summary: "Government funds local biotech startup to research climate-resilient organic seeds.",
    content: "Hyderabad-based GreenGrow BioLabs secured a ₹50 Crore research grant from the National Agricultural Board. The startup focuses on developing bio-fertilizers and organic cotton seed variants that require 30% less water, providing a major shield against recurring dry spells in Guntur and Warangal districts. T-Hub will incubate their manufacturing pilot.",
    type: 'story',
    category: 'Agriculture',
    language: 'en',
    state: 'Telangana',
    district: 'Hyderabad District',
    city: 'Hyderabad',
    reporterId: 'BTV-HYD-R-0042',
    reporterName: 'Krishna Murthy',
    reporterTrust: '98% High Accuracy',
    sourceType: 'Official press release',
    verifyStatus: 'Verified',
    priority: 'P2', // Standard Review
    status: 'SUBMITTED', // State machine state
    riskLevel: 'Normal Local',
    submittedTime: '2026-07-05T08:30:00',
    slaMinutes: 120, // P2 = 2 hours
    history: [
      { status: 'DRAFT', actor: 'BTV-HYD-R-0042', time: '2026-07-05T08:00:00' },
      { status: 'SUBMITTED', actor: 'BTV-HYD-R-0042', time: '2026-07-05T08:30:00' }
    ],
    comments: [
      { author: 'Krishna Murthy (Reporter)', text: 'GreenGrow CEO confirmed details via email. High local relevance.', time: '08:31' }
    ],
    attachments: ['greengrow_press_kit.pdf', 'cover_t_hub.png'],
    lockReviewer: null
  },
  {
    id: 'sub-2',
    headline: "Visakhapatnam Harbor Seafood Shipments Reach Historic High in Q1 2026",
    shortHeadline: "Vizag Seafood Exports Hit High",
    summary: "Seafood exports rose 18% due to new smart cold storage units near the harbor Hills.",
    content: "Visakhapatnam harbor seafood shipments increased by 18% in the first quarter of the fiscal year 2026, totaling over ₹1,400 Crores in direct exports. Exporters credit the opening of three new public-private smart cold storage blocks in the Rushikonda tech-valley perimeter, allowing fishermen to store catch at optimal temperatures and reduce transit wastage.",
    type: 'story',
    category: 'Technology',
    language: 'en',
    state: 'Andhra Pradesh',
    district: 'Visakhapatnam District',
    city: 'Visakhapatnam',
    reporterId: 'BTV-VSK-R-0018',
    reporterName: 'Rama Devi',
    reporterTrust: '94% High Accuracy',
    sourceType: 'Eyewitness statement',
    verifyStatus: 'Partially Verified',
    priority: 'P1', // Urgent Review
    status: 'UNDER REVIEW',
    riskLevel: 'High-Importance',
    submittedTime: '2026-07-05T08:45:00',
    slaMinutes: 15, // P1 = 15 minutes
    history: [
      { status: 'DRAFT', actor: 'BTV-VSK-R-0018', time: '2026-07-05T08:20:00' },
      { status: 'SUBMITTED', actor: 'BTV-VSK-R-0018', time: '2026-07-05T08:45:00' },
      { status: 'UNDER REVIEW', actor: 'BTV-AP-A-0002', time: '2026-07-05T08:50:00' }
    ],
    comments: [
      { author: 'P. Mohan Das (Vizag Admin)', text: 'Need double confirmation on direct export values before publication.', time: '08:52' }
    ],
    attachments: ['harbor_q1_aggregates.xlsx'],
    lockReviewer: 'P. Mohan Das'
  },
  {
    id: 'sub-3',
    headline: "Warangal Cotton Cooperatives Hire Digital Consultants to Bypass Docks",
    shortHeadline: "Warangal Cooperatives Hire Consultants",
    summary: "Local weaving groups seeking ecommerce digital marketing solutions.",
    content: "Warangal textile and cotton weaving cooperatives are hiring three digital marketing firms to deploy direct online portals. The initiative aims to bypass urban middleman commission fees, allowing handloom weavers to retain up to 85% of margins. Applications are open until July 20.",
    type: 'job',
    category: 'Career & Jobs',
    language: 'en',
    state: 'Telangana',
    district: 'Warangal District',
    city: 'Warangal',
    reporterId: 'BTV-HYD-R-0042',
    reporterName: 'Krishna Murthy',
    reporterTrust: '98% High Accuracy',
    sourceType: 'Company spokesperson',
    verifyStatus: 'Verified',
    priority: 'P2',
    status: 'CHANGES REQUESTED',
    riskLevel: 'Normal Local',
    submittedTime: '2026-07-05T07:30:00',
    slaMinutes: 120,
    history: [
      { status: 'DRAFT', actor: 'BTV-HYD-R-0042', time: '2026-07-05T07:00:00' },
      { status: 'SUBMITTED', actor: 'BTV-HYD-R-0042', time: '2026-07-05T07:30:00' },
      { status: 'CHANGES REQUESTED', actor: 'BTV-TG-A-0003', time: '2026-07-05T07:55:00' }
    ],
    comments: [
      { author: 'K. Ranga Rao (Hyd Admin)', text: 'Please add contact email or portal link for applications to make it useful.', time: '07:54' }
    ],
    attachments: [],
    lockReviewer: null
  }
];

// Story Assignments Board
let NR_ASSIGNMENTS = [
  {
    id: 'asg-1',
    title: "Investigate Guntur Chilli Export Price Hikes",
    description: "Meet Chilli board members at Vijayawada Conclave. Report price margins.",
    reporterId: 'BTV-HYD-R-0042',
    reporterName: 'Krishna Murthy',
    city: 'Vijayawada',
    priority: 'Urgent',
    status: 'Accepted',
    deadline: 'July 8, 2026',
    notes: 'Escalate to State Editor immediately if price manipulation is detected.'
  },
  {
    id: 'asg-2',
    title: "Drone mapping deployment in Anantapur farms",
    description: "Cover the state-sponsored drone distribution program.",
    reporterId: 'BTV-VSK-R-0018',
    reporterName: 'Rama Devi',
    city: 'Tirupati',
    priority: 'Standard',
    status: 'In Progress',
    deadline: 'July 10, 2026',
    notes: 'Take high-res pictures of local farmers operating the remote controls.'
  }
];

// Secure Audit Log database
let NR_AUDIT_LOGS = [
  {
    timestamp: '2026-07-05T06:00:00',
    actorId: 'SYSTEM',
    actorRole: 'Automated Service',
    action: 'Database initialization',
    entity: 'Geographic boundaries validation',
    prevState: 'none',
    postState: 'Operational',
    ipAddress: '127.0.0.1'
  },
  {
    timestamp: '2026-07-05T07:30:00',
    actorId: 'BTV-HYD-R-0042',
    actorRole: 'Reporter',
    action: 'Story submission',
    entity: 'sub-3: Warangal Cooperatives',
    prevState: 'DRAFT',
    postState: 'SUBMITTED',
    ipAddress: '192.168.1.45'
  },
  {
    timestamp: '2026-07-05T07:55:00',
    actorId: 'BTV-TG-A-0003',
    actorRole: 'City Admin',
    action: 'Review Request changes',
    entity: 'sub-3: Warangal Cooperatives',
    prevState: 'SUBMITTED',
    postState: 'CHANGES REQUESTED',
    ipAddress: '192.168.1.103'
  }
];

// Active selection in Admin preview pane
let activeAdminSelectionId = 'sub-1';
let activePreviewTab = 'preview';
let activeNewsroomTab = 'reporter'; // 'reporter', 'admin', 'command', 'audit'

// Weak-network simulated parameters
let uploadTimer = null;
let uploadProgress = 0;
let isUploadStuck = false;

// Version comparison edits tracker (simulated version diff)
let adminEdits = {
  headline: "",
  summary: "",
  content: ""
};

// --- CORE LOCAL STORAGE CONFIGS ---
function loadSavedPreferences() {
  const saved = localStorage.getItem('btv_user_profile');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.language = parsed.language || 'en';
      state.location = parsed.location || 'Hyderabad';
      state.followedTopics = parsed.followedTopics || ['Startups'];
      state.followedPeople = parsed.followedPeople || [];
      state.savedStories = parsed.savedStories || [];
      state.userEmail = parsed.userEmail || null;
      state.userPhone = parsed.userPhone || null;
      state.onboardingStep = parsed.onboardingStep || 4;
    } catch (e) {
      console.error("Error parsing saved profile", e);
    }
  }

  // Load submissions database if saved in storage
  const savedSubmissions = localStorage.getItem('btv_nr_submissions');
  if (savedSubmissions) {
    try {
      NR_SUBMISSIONS = JSON.parse(savedSubmissions);
    } catch (e) {
      console.error("Error parsing submissions", e);
    }
  }
  
  // Load audit logs if saved
  const savedAuditLogs = localStorage.getItem('btv_nr_audit_logs');
  if (savedAuditLogs) {
    try {
      NR_AUDIT_LOGS = JSON.parse(savedAuditLogs);
    } catch (e) {
      console.error("Error parsing audit logs", e);
    }
  }
}

function savePreferences() {
  const data = {
    language: state.language,
    location: state.location,
    followedTopics: state.followedTopics,
    followedPeople: state.followedPeople,
    savedStories: state.savedStories,
    userEmail: state.userEmail,
    userPhone: state.userPhone,
    onboardingStep: state.onboardingStep
  };
  localStorage.setItem('btv_user_profile', JSON.stringify(data));
}

function saveNrDatabase() {
  localStorage.setItem('btv_nr_submissions', JSON.stringify(NR_SUBMISSIONS));
  localStorage.setItem('btv_nr_audit_logs', JSON.stringify(NR_AUDIT_LOGS));
}

// Log audit action securely
function logAuditAction(actorId, actorRole, action, entity, prevState, postState) {
  const log = {
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
    actorId: actorId,
    actorRole: actorRole,
    action: action,
    entity: entity,
    prevState: prevState || 'none',
    postState: postState || 'none',
    ipAddress: `192.168.1.${Math.floor(Math.random() * 254) + 1}`
  };
  NR_AUDIT_LOGS.unshift(log);
  saveNrDatabase();
}

// --- INITIAL ON-LOAD BOOTSTRAP & FULL-STACK INTEGRATION ---
async function initFullStackApp() {
  try {
    const articlesRes = await fetch('/api/articles');
    if (articlesRes.ok) {
      const dbArticles = await articlesRes.json();
      if (Object.keys(dbArticles).length > 0) {
        CONTENT_DATABASE.articles = dbArticles;
      }
    }
  } catch (e) {
    console.warn("Fullstack API fetch failed for articles, falling back to static database.", e);
  }

  try {
    const shortsRes = await fetch('/api/shorts');
    if (shortsRes.ok) {
      const dbShorts = await shortsRes.json();
      if (dbShorts.length > 0) {
        CONTENT_DATABASE.shorts = dbShorts;
      }
    }
  } catch (e) {
    console.warn("Fullstack API fetch failed for shorts, falling back to static database.", e);
  }

  try {
    const submissionsRes = await fetch('/api/submissions');
    if (submissionsRes.ok) {
      const dbSubmissions = await submissionsRes.json();
      NR_SUBMISSIONS = dbSubmissions;
    }
  } catch (e) {
    console.warn("Fullstack API fetch failed for submissions, falling back to localStorage.", e);
  }

  renderAll();
}

window.addEventListener('DOMContentLoaded', () => {
  loadSavedPreferences();
  
  // Set initial public settings values
  document.getElementById('mobile-city-selector').value = state.location;
  
  updateSimulatorClock();
  setInterval(updateSimulatorClock, 60000);
  
  // Start simulated ticking clock for active review SLA
  setInterval(updateSLATimers, 1000);
  
  // Initialize and load from Full-Stack backend
  initFullStackApp();
  
  // Onboarding modal check
  checkOnboardingDialogs();
});

// Update simulator clock
function updateSimulatorClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('simulator-time').innerText = `${hours}:${minutes}`;
}

// --- APP MODE SWITCHER (Reader vs Newsroom OS) ---
function switchAppMode(mode) {
  state.appMode = mode;
  
  const readerWorkspace = document.getElementById('workspace');
  const newsroomWorkspace = document.getElementById('newsroom-workspace');
  const readerSelectors = document.getElementById('reader-view-selectors');
  
  const readerBtn = document.getElementById('mode-reader-btn');
  const newsroomBtn = document.getElementById('mode-newsroom-btn');
  
  if (mode === 'reader') {
    readerWorkspace.classList.remove('hidden');
    newsroomWorkspace.classList.add('hidden');
    readerSelectors.classList.remove('hidden');
    
    readerBtn.classList.add('active');
    newsroomBtn.classList.remove('active');
    
    // Stop any newsroom upload loops
    if (uploadTimer) clearInterval(uploadTimer);
  } else {
    readerWorkspace.classList.add('hidden');
    newsroomWorkspace.classList.remove('hidden');
    readerSelectors.classList.add('hidden');
    
    readerBtn.classList.remove('active');
    newsroomBtn.classList.add('active');
    
    // Authenticate newsroom user role layout
    switchNrAccount(document.getElementById('role-switcher').value);
  }
}

// --- VIEW MODE FOR READER (Split / Editorial / Mobile Only) ---
function setViewMode(mode) {
  const ws = document.getElementById('workspace');
  const btns = ['view-split-btn', 'view-desktop-btn', 'view-mobile-btn'];
  
  btns.forEach(btnId => {
    document.getElementById(btnId).classList.remove('active');
  });
  
  ws.className = 'workspace-container';
  
  if (mode === 'split') {
    ws.classList.add('split-view');
    document.getElementById('view-split-btn').classList.add('active');
  } else if (mode === 'desktop') {
    ws.classList.add('desktop-only');
    document.getElementById('view-desktop-btn').classList.add('active');
  } else if (mode === 'mobile') {
    ws.classList.add('mobile-only');
    document.getElementById('view-mobile-btn').classList.add('active');
  }
}

// --- LANGUAGE SWITCH CONTROLLER ---
function toggleLanguage() {
  state.language = state.language === 'en' ? 'te' : 'en';
  document.getElementById('mobile-lang-pill').innerText = state.language === 'en' ? 'EN' : 'తె';
  
  savePreferences();
  renderAll();
  
  if (state.ttsActiveStoryId) {
    playAudioStory(state.ttsActiveStoryId);
  }
}

// --- ONBOARDING FLOW CONTROLLER ---
function checkOnboardingDialogs() {
  if (state.onboardingStep === 1) {
    showDialog('dialog-language');
  } else if (state.onboardingStep === 2) {
    showDialog('dialog-location');
  } else if (state.onboardingStep === 3) {
    showDialog('dialog-interests');
  }
}

function showDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
}

function closeDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && dialog.open) {
    dialog.close();
  }
}

function setOnboardingLanguage(lang) {
  state.language = lang;
  document.getElementById('mobile-lang-pill').innerText = lang === 'en' ? 'EN' : 'తె';
  closeDialog('dialog-language');
  
  state.onboardingStep = 2;
  savePreferences();
  renderAll();
  
  setTimeout(() => showDialog('dialog-location'), 500);
}

function setOnboardingLocation(loc) {
  state.location = loc;
  document.getElementById('mobile-city-selector').value = loc;
  closeDialog('dialog-location');
  
  state.onboardingStep = 3;
  savePreferences();
  renderAll();
  
  setTimeout(() => showDialog('dialog-interests'), 500);
}

let selectedTempInterests = ['Startups'];
function toggleInterestSelection(interest, btn) {
  btn.classList.toggle('active');
  const index = selectedTempInterests.indexOf(interest);
  if (index > -1) {
    selectedTempInterests.splice(index, 1);
  } else {
    selectedTempInterests.push(interest);
  }
}

function confirmOnboardingInterests() {
  state.followedTopics = [...selectedTempInterests];
  closeDialog('dialog-interests');
  state.onboardingStep = 4;
  savePreferences();
  renderAll();
  
  switchMobileTab('home', document.querySelector('.app-bottom-nav .nav-item:first-child'));
}

function resetOnboarding() {
  localStorage.removeItem('btv_user_profile');
  state.onboardingStep = 1;
  state.engagementCount = 0;
  state.language = 'en';
  state.location = 'Hyderabad';
  state.followedTopics = ['Startups'];
  state.followedPeople = [];
  state.savedStories = [];
  state.userEmail = null;
  state.userPhone = null;
  
  document.getElementById('mobile-city-selector').value = 'Hyderabad';
  document.getElementById('mobile-lang-pill').innerText = 'EN';
  
  stopTTS();
  renderAll();
  showDialog('dialog-language');
}

function triggerEngagement() {
  if (state.onboardingStep >= 4) return;
  
  state.engagementCount++;
  if (state.engagementCount === 1 && !state.location) {
    state.onboardingStep = 2;
    showDialog('dialog-location');
  } else if (state.engagementCount === 2 && state.followedTopics.length === 1) {
    state.onboardingStep = 3;
    showDialog('dialog-interests');
  }
}

// --- MOCK SIGNUP PROMPTS ---
function checkAuth(callback) {
  if (state.userEmail) {
    callback();
  } else {
    window.authSuccessCallback = callback;
    showDialog('dialog-auth');
  }
}

function closeAuthModal() {
  closeDialog('dialog-auth');
  window.authSuccessCallback = null;
}

function handleDemoSignup(event) {
  event.preventDefault();
  const email = document.getElementById('auth-email').value;
  const phone = document.getElementById('auth-phone').value;
  
  state.userEmail = email;
  state.userPhone = phone;
  
  closeDialog('dialog-auth');
  savePreferences();
  
  showToastNotification('whatsapp-toast');
  
  if (window.authSuccessCallback) {
    window.authSuccessCallback();
    window.authSuccessCallback = null;
  }
  
  renderAll();
}

function toggleSaveStory(storyId, btn) {
  checkAuth(() => {
    const idx = state.savedStories.indexOf(storyId);
    if (idx > -1) {
      state.savedStories.splice(idx, 1);
      btn.classList.remove('active');
    } else {
      state.savedStories.push(storyId);
      btn.classList.add('active');
    }
    savePreferences();
    renderAll();
  });
}

function toggleFollow(type, name, btn) {
  checkAuth(() => {
    let list = type === 'topic' ? state.followedTopics : state.followedPeople;
    const idx = list.indexOf(name);
    
    if (idx > -1) {
      list.splice(idx, 1);
      btn.classList.remove('active');
    } else {
      list.push(name);
      btn.classList.add('active');
    }
    savePreferences();
    renderAll();
  });
}

function removeFollowChip(topic) {
  const idx = state.followedTopics.indexOf(topic);
  if (idx > -1) {
    state.followedTopics.splice(idx, 1);
    savePreferences();
    renderAll();
  }
}

// --- SHARE SIMULATOR ---
function shareWhatsApp(id) {
  let text = "";
  if (id === 'hero') {
    text = `BTV LIVE: ${CONTENT_DATABASE.articles.hero.title[state.language]}. Read opportunity: ${window.location.href}`;
  } else {
    const short = CONTENT_DATABASE.shorts.find(s => s.id === id);
    if (short) {
      text = `BTV Shorts: ${short.title[state.language]} - ${short.body[state.language]}`;
    } else {
      text = "Read critical business updates on BTV LIVE!";
    }
  }
  
  const encodedText = encodeURIComponent(text);
  window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
}

function showToastNotification(id) {
  const toast = document.getElementById(id);
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}

// --- TEXT-TO-SPEECH VOICE SPEAKER ---
function playAudioStory(storyId) {
  triggerEngagement();
  
  let text = "";
  let titleText = "";
  
  if (storyId === 'hero') {
    text = CONTENT_DATABASE.articles.hero.text[state.language];
    titleText = CONTENT_DATABASE.articles.hero.title[state.language];
  } else if (storyId === 'glossary-1') {
    if (state.language === 'en') {
      text = "Venture Capital. Funding provided by investors to startups and small businesses that are believed to have long-term growth potential.";
      titleText = "Glossary: Venture Capital";
    } else {
      text = "వెంచర్ క్యాపిటల్. దీర్ఘకాలిక వృద్ధి సామర్థ్యం ఉన్న స్టార్టప్‌లు మరియు చిన్న వ్యాపారాలకు ఇన్వెస్టర్లు అందించే పెట్టుబడి సాయం.";
      titleText = "నిఘంటువు: వెంచర్ క్యాపిటల్";
    }
  } else if (storyId.startsWith('short-')) {
    const s = CONTENT_DATABASE.shorts.find(sh => sh.id === storyId);
    if (s) {
      text = s.body[state.language];
      titleText = s.title[state.language];
    }
  } else {
    const art = CONTENT_DATABASE.articles[storyId];
    if (art) {
      text = art.text[state.language];
      titleText = art.title[state.language];
    }
  }
  
  if (!text) return;
  
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  
  state.ttsActiveStoryId = storyId;
  
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = state.language === 'en' ? 'en-IN' : 'te-IN';
  utter.rate = state.ttsRate;
  
  utter.onend = () => {
    stopTTS();
  };
  
  utter.onerror = () => {
    stopTTS();
  };
  
  state.ttsUtterance = utter;
  window.speechSynthesis.speak(utter);
  
  document.getElementById('player-story-title').innerText = titleText;
  document.getElementById('audio-player-dock').classList.remove('hidden');
  document.getElementById('tts-play-pause-btn').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
  `;
  
  renderAll();
}

function togglePauseTTS() {
  if (!window.speechSynthesis) return;
  
  const icon = document.getElementById('tts-play-pause-btn');
  if (window.speechSynthesis.speaking) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
      `;
    } else {
      window.speechSynthesis.pause();
      icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      `;
    }
  }
}

function adjustTTSPlaybackSpeed() {
  if (state.ttsRate === 1.0) state.ttsRate = 1.25;
  else if (state.ttsRate === 1.25) state.ttsRate = 1.5;
  else if (state.ttsRate === 1.5) state.ttsRate = 2.0;
  else state.ttsRate = 1.0;
  
  document.getElementById('tts-speed-btn').innerText = `${state.ttsRate}x`;
  
  if (state.ttsActiveStoryId) {
    playAudioStory(state.ttsActiveStoryId);
  }
}

function stopTTS() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  state.ttsUtterance = null;
  state.ttsActiveStoryId = null;
  document.getElementById('audio-player-dock').classList.add('hidden');
  renderAll();
}

// --- MOCK LIVE STREAM CONTROLS ---
let isLivePlaying = false;
let chatInterval = null;

function togglePlayLiveStream(element) {
  isLivePlaying = !isLivePlaying;
  
  const videoOverlays = document.querySelectorAll('.video-overlay');
  const playHints = document.querySelectorAll('.video-play-hint');
  
  if (isLivePlaying) {
    videoOverlays.forEach(vo => vo.style.opacity = '0');
    playHints.forEach(ph => ph.style.opacity = '0');
    
    document.getElementById('live-canvas-visual').style.background = 'radial-gradient(circle, #253346, #0e121a)';
    document.getElementById('mobile-live-visuals').style.background = 'radial-gradient(circle, #1a2a2f, #0a0b0e)';
    
    startLiveChatSimulation();
  } else {
    videoOverlays.forEach(vo => vo.style.opacity = '1');
    playHints.forEach(ph => ph.style.opacity = '1');
    
    document.getElementById('live-canvas-visual').style.background = 'linear-gradient(145deg, #161c28, #0e121a)';
    document.getElementById('mobile-live-visuals').style.background = 'linear-gradient(135deg, #11141c, #0a0b0e)';
    
    stopLiveChatSimulation();
  }
}

const mockChatDb = [
  { name: "Naresh", text: { en: "T-Hub expansion is huge news!", te: "టి-హబ్ విస్తరణ చాలా పెద్ద వార్త!" } },
  { name: "Pranitha", text: { en: "How can I apply for the GlobeTech developer role?", te: "గ్లోబ్‌టెక్ డెవలపర్ ఉద్యోగానికి ఎలా అప్లై చేయాలి?" } },
  { name: "Raghunath", text: { en: "Warangal agritech apps really helping cotton rates.", te: "వరంగల్ అగ్రిటెక్ యాప్స్ పత్తి ధరలకు బాగా సహాయపడుతున్నాయి." } },
  { name: "Kalyan", text: { en: "Vizag IT corridor looks beautiful.", te: "వైజాగ్ ఐటీ కారిడార్ చాలా బాగుంది." } },
  { name: "Sita", text: { en: "Great opportunities list today.", te: "ఈ రోజు చాలా మంచి అవకాశాల జాబితా ఉంది." } }
];

function startLiveChatSimulation() {
  if (chatInterval) clearInterval(chatInterval);
  
  chatInterval = setInterval(() => {
    const randomChat = mockChatDb[Math.floor(Math.random() * mockChatDb.length)];
    const textMsg = randomChat.text[state.language];
    
    const desktopChat = document.getElementById('live-chat-messages');
    const dMsg = document.createElement('div');
    dMsg.className = 'chat-msg';
    dMsg.innerHTML = `<strong>${randomChat.name}:</strong> ${textMsg}`;
    desktopChat.appendChild(dMsg);
    if (desktopChat.childNodes.length > 10) desktopChat.removeChild(desktopChat.firstChild);
    desktopChat.parentNode.scrollTop = desktopChat.parentNode.scrollHeight;
    
    const mobileChat = document.getElementById('mobile-live-chat');
    const mMsg = document.createElement('div');
    mMsg.className = 'chat-msg';
    mMsg.innerHTML = `<strong>${randomChat.name}:</strong> ${textMsg}`;
    mobileChat.appendChild(mMsg);
    if (mobileChat.childNodes.length > 8) mobileChat.removeChild(mobileChat.firstChild);
    mobileChat.scrollTop = mobileChat.scrollHeight;
  }, 3000);
}

function stopLiveChatSimulation() {
  if (chatInterval) {
    clearInterval(chatInterval);
    chatInterval = null;
  }
}

function handleChatSubmit(event) {
  if (event.key === 'Enter') {
    sendChatFromMobile();
  }
}

function sendChatFromMobile() {
  const input = document.getElementById('mobile-chat-input');
  const text = input.value.trim();
  if (!text) return;
  
  checkAuth(() => {
    const name = state.userEmail.split('@')[0];
    const mobileChat = document.getElementById('mobile-live-chat');
    
    const mMsg = document.createElement('div');
    mMsg.className = 'chat-msg';
    mMsg.innerHTML = `<strong>${name} (You):</strong> ${text}`;
    mobileChat.appendChild(mMsg);
    mobileChat.scrollTop = mobileChat.scrollHeight;
    
    input.value = "";
  });
}

// --- PUBLIC SITE COMMUNITY REPORTER FORM SUBMISSIONS ---
function handleReporterSubmit(event, platform) {
  event.preventDefault();
  
  checkAuth(() => {
    const titleVal = document.getElementById('rep-title').value;
    const cityVal = document.getElementById('rep-city').value;
    const typeVal = document.getElementById('rep-type').value;
    const descVal = document.getElementById('rep-content').value;
    
    const newSubmissionId = `submitted-${Date.now()}`;
    const newSubmission = {
      id: newSubmissionId,
      headline: titleVal,
      shortHeadline: titleVal.substring(0, 30),
      summary: descVal.substring(0, 80),
      content: descVal,
      type: typeVal,
      category: 'Startups',
      language: state.language,
      state: cityVal === 'Hyderabad' || cityVal === 'Warangal' ? 'Telangana' : 'Andhra Pradesh',
      district: `${cityVal} District`,
      city: cityVal,
      reporterId: 'BTV-CON-0089',
      reporterName: 'Anonymous Contributor',
      reporterTrust: 'Verification Required',
      sourceType: 'Eyewitness statement',
      verifyStatus: 'Verification Pending',
      priority: 'P2',
      status: 'SUBMITTED',
      riskLevel: 'Normal Local',
      submittedTime: new Date().toISOString(),
      slaMinutes: 120,
      photo: 'assets/hero_business_story.png',
      videoUrl: '',
      sources: 'Public Contributor Submission'
    };

    fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSubmission)
    })
    .then(res => res.json())
    .then(() => fetch('/api/submissions'))
    .then(res => res.json())
    .then(data => {
      NR_SUBMISSIONS = data;
      logAuditAction('BTV-CON-0089', 'Contributor', 'Story submission', newSubmissionId, 'none', 'SUBMITTED');
      document.getElementById('desktop-reporter-form').reset();
      alert("Reporter Alert: Brief submitted to the BTV Newsroom OS approval pipeline. A local editor will review it before public release!");
      renderAll();
    })
    .catch(err => {
      console.error(err);
      // Fallback
      NR_SUBMISSIONS.push(newSubmission);
      saveNrDatabase();
      logAuditAction('BTV-CON-0089', 'Contributor', 'Story submission', newSubmissionId, 'none', 'SUBMITTED');
      document.getElementById('desktop-reporter-form').reset();
      alert("Reporter Alert [Offline]: Brief submitted locally. A local editor will review it.");
      renderAll();
    });
  });
}

// --- MOBILE SIMULATOR TAB SWITCHER ---
let currentMobileTab = 'home';

function switchMobileTab(tab, btn) {
  triggerEngagement();
  currentMobileTab = tab;
  
  const items = document.querySelectorAll('.app-bottom-nav .nav-item');
  items.forEach(it => it.classList.remove('active'));
  btn.classList.add('active');
  
  const panes = document.querySelectorAll('.app-viewport-content .app-tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));
  
  const targetPane = document.getElementById(`tab-${tab}`);
  targetPane.classList.add('active');
  
  if (tab === 'shorts') {
    document.getElementById('shorts-container').scrollTop = 0;
  }
}

// --- MOBILE SHORTS VERTICAL SCROLL ---
function handleShortsScroll() {
  const hint = document.getElementById('shorts-swipe-hint');
  const container = document.getElementById('shorts-container');
  if (container.scrollTop > 50) {
    hint.style.opacity = '0';
  } else {
    hint.style.opacity = '0.7';
  }
}

// --- LOCATION TRIGGER ---
function changeUserLocation(newLoc) {
  state.location = newLoc;
  savePreferences();
  renderAll();
}

let activeNearYouFilter = 'all';
function filterNearYou(type, btn) {
  activeNearYouFilter = type;
  const chips = document.querySelectorAll('.near-you-chips .chip');
  chips.forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderNearYouFeed();
}

function renderNearYouFeed() {
  const container = document.getElementById('near-you-content-feed');
  document.getElementById('near-you-city-name').innerText = state.location;
  container.innerHTML = "";
  
  let matchCount = 0;
  
  const localArticles = Object.values(CONTENT_DATABASE.articles).filter(a => a.location === state.location);
  const localJobs = CONTENT_DATABASE.opportunities.jobs.filter(j => j.city === state.location);
  const localEvents = CONTENT_DATABASE.opportunities.events.filter(e => e.city === state.location);
  const localDir = CONTENT_DATABASE.opportunities.directory.filter(d => d.city === state.location);
  
  if (activeNearYouFilter === 'all' || activeNearYouFilter === 'news') {
    localArticles.forEach(art => {
      matchCount++;
      const isTTSPlaying = state.ttsActiveStoryId === art.id;
      
      const card = document.createElement('div');
      card.className = 'mobile-feed-card';
      card.innerHTML = `
        <div class="card-top-row">
          <span class="card-category">${art.category}</span>
          <span>${art.readTime} min read</span>
        </div>
        <h4 class="mobile-card-title">${art.title[state.language]}</h4>
        <p class="mobile-card-desc">${art.description[state.language]}</p>
        <div class="mobile-card-actions">
          <button class="m-action-btn listen ${isTTSPlaying ? 'active' : ''}" onclick="playAudioStory('${art.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span>${isTTSPlaying ? 'Playing' : 'Listen'}</span>
          </button>
          <button class="m-action-btn" onclick="toggleSaveStory('${art.id}', this)">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          </button>
          <button class="m-action-btn whatsapp" onclick="shareWhatsApp('${art.id}')">
            <span>Share</span>
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  if (activeNearYouFilter === 'all' || activeNearYouFilter === 'jobs') {
    localJobs.forEach(job => {
      matchCount++;
      const card = document.createElement('div');
      card.className = 'mobile-feed-card';
      card.innerHTML = `
        <div class="card-top-row">
          <span class="card-category text-primary">💼 JOB OPENING</span>
          <span>${state.location}</span>
        </div>
        <h4 class="mobile-card-title">${job.title[state.language]}</h4>
        <p class="mobile-card-desc"><strong>${job.company}</strong> — ${job.details[state.language]}</p>
        <div class="mobile-card-actions">
          <button class="m-action-btn" onclick="checkAuth(() => alert('Applying for role...'))">Apply Now</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  if (activeNearYouFilter === 'all' || activeNearYouFilter === 'business') {
    localDir.forEach(dir => {
      matchCount++;
      const card = document.createElement('div');
      card.className = 'mobile-feed-card';
      card.innerHTML = `
        <div class="card-top-row">
          <span class="card-category text-secondary">🗂 DIRECTORY</span>
          <span>${dir.category}</span>
        </div>
        <h4 class="mobile-card-title">${dir.title[state.language]}</h4>
        <p class="mobile-card-desc">${dir.details[state.language]}</p>
        <div class="mobile-card-actions">
          <button class="m-action-btn" onclick="window.open('tel:${dir.details[state.language].match(/\\+?\\d[\d\s]+/) || '#'}')">Contact</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  if (matchCount === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.8rem;">
        No local opportunities found for ${state.location} yet. Try submitting a story brief below to be the first!
      </div>
    `;
  }
}

// --- CORE RENDER SYSTEM ---
function renderAll() {
  const opt = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('editorial-date').innerText = new Date().toLocaleDateString('en-US', opt);
  
  renderDesktopOpportunities();
  
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = el.getAttribute(`data-${state.language}`);
  });
  
  renderMobileHomeRecs();
  renderMobileShorts();
  renderNearYouFeed();
  renderMyBtvFeed();
  
  document.querySelectorAll('.save-btn').forEach(btn => {
    btn.classList.toggle('active', state.savedStories.includes('hero'));
  });

  // Render Newsroom layouts if active
  if (state.appMode === 'newsroom') {
    renderNewsroomWorkspace();
  }
}

function renderDesktopOpportunities() {
  const jobsGrid = document.getElementById('desktop-jobs-grid');
  const eventsGrid = document.getElementById('desktop-events-grid');
  const dirGrid = document.getElementById('desktop-directory-grid');
  
  jobsGrid.innerHTML = CONTENT_DATABASE.opportunities.jobs.map(job => `
    <div class="opp-item-card">
      <div class="opp-badge-row">
        <span class="opp-type-badge lead">JOB</span>
        <span class="opp-city">${job.city}</span>
      </div>
      <h5 class="opp-title">${job.title[state.language]}</h5>
      <p class="opp-meta"><strong>${job.company}</strong> — ${job.details[state.language]}</p>
      <button class="opp-apply-btn" onclick="checkAuth(() => alert('Applying...'))">Apply Directly →</button>
    </div>
  `).join('');

  eventsGrid.innerHTML = CONTENT_DATABASE.opportunities.events.map(ev => `
    <div class="opp-item-card">
      <div class="opp-badge-row">
        <span class="opp-type-badge event">EVENT</span>
        <span class="opp-city">${ev.city}</span>
      </div>
      <h5 class="opp-title">${ev.title[state.language]}</h5>
      <p class="opp-meta"><strong>Date: ${ev.date}</strong> — ${ev.details[state.language]}</p>
      <button class="opp-apply-btn" onclick="checkAuth(() => alert('Registering...'))">Register Free →</button>
    </div>
  `).join('');

  dirGrid.innerHTML = CONTENT_DATABASE.opportunities.directory.map(dir => `
    <div class="opp-item-card">
      <div class="opp-badge-row">
        <span class="opp-type-badge">DIRECTORY</span>
        <span class="opp-city">${dir.city}</span>
      </div>
      <h5 class="opp-title">${dir.title[state.language]}</h5>
      <p class="opp-meta"><strong>Category: ${dir.category}</strong> — ${dir.details[state.language]}</p>
      <button class="opp-apply-btn" onclick="checkAuth(() => alert('Calling contact...'))">Connect →</button>
    </div>
  `).join('');
}

function switchOppTab(tabName, btn) {
  const tabHeaders = document.querySelectorAll('.opp-tab-btn');
  const tabContents = document.querySelectorAll('.opp-tab-content');
  
  tabHeaders.forEach(th => th.classList.remove('active'));
  tabContents.forEach(tc => tc.classList.remove('active'));
  
  btn.classList.add('active');
  document.getElementById(`opp-content-${tabName}`).classList.add('active');
}

function renderMobileHomeRecs() {
  const container = document.getElementById('home-rec-feed');
  container.innerHTML = "";
  
  const allArticles = Object.values(CONTENT_DATABASE.articles);
  const sortedArticles = [...allArticles].sort((a, b) => {
    const aMatch = state.followedTopics.includes(a.category);
    const bMatch = state.followedTopics.includes(b.category);
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return 0;
  });
  
  sortedArticles.forEach(art => {
    const isPlaying = state.ttsActiveStoryId === art.id;
    const card = document.createElement('div');
    card.className = 'mobile-feed-card';
    card.innerHTML = `
      <div class="card-top-row">
        <span class="card-category">${art.category}</span>
        <span>${art.readTime} min read</span>
      </div>
      <h4 class="mobile-card-title">${art.title[state.language]}</h4>
      <p class="mobile-card-desc">${art.description[state.language]}</p>
      <div class="mobile-card-actions">
        <button class="m-action-btn listen ${isPlaying ? 'active' : ''}" onclick="playAudioStory('${art.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          <span>${isPlaying ? 'Playing' : 'Listen'}</span>
        </button>
        <button class="m-action-btn" onclick="toggleSaveStory('${art.id}', this)">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </button>
        <button class="m-action-btn whatsapp" onclick="shareWhatsApp('${art.id}')">
          <span>Share</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderMobileShorts() {
  const container = document.getElementById('shorts-container');
  container.innerHTML = "";
  
  CONTENT_DATABASE.shorts.forEach(short => {
    const isPlaying = state.ttsActiveStoryId === short.id;
    const card = document.createElement('div');
    card.className = 'shorts-card';
    card.innerHTML = `
      <div class="short-bg-gradient"></div>
      
      <div class="short-content-box">
        <div class="short-meta-row">
          <span class="short-tag-city">📍 ${short.location}</span>
          <span class="short-tag-topic">🏷 ${short.topic}</span>
        </div>
        <h4 class="short-title">${short.title[state.language]}</h4>
        <p class="short-body-summary">${short.body[state.language]}</p>
      </div>

      <div class="short-actions-sidebar">
        <button class="side-action-btn listen-short ${isPlaying ? 'active' : ''}" onclick="playAudioStory('${short.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
        <span class="side-action-label">Listen</span>
        
        <button class="side-action-btn" onclick="toggleSaveStory('${short.id}', this)">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </button>
        <span class="side-action-label">Save</span>
        
        <button class="side-action-btn whatsapp-short" onclick="shareWhatsApp('${short.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.586L13.601 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-4.98c-.2-.1-.1.185-.3.268-.168.08-.28.1-.383.048-.096-.048-.2-.08-.344-.145-.583-.26-1.004-.63-1.19-.95-.12-.2-.03-.306.072-.408.09-.09.186-.2.276-.3.08-.1.1-.168.162-.3a.37.37 0 0 0-.018-.34c-.05-.1-.45-1.08-.616-1.482-.162-.395-.326-.34-.447-.346-.112-.004-.24-.006-.37-.006-.13 0-.343.05-.522.247-.18.197-.684.667-.684 1.629s.7 1.888.798 2.022c.1.13 1.378 2.1 3.342 2.951.468.203.832.324 1.117.414.47.15.898.13 1.237.08.378-.057 1.16-.474 1.322-.93.16-.456.16-.846.11-.93-.046-.085-.18-.13-.378-.225"/>
          </svg>
        </button>
        <span class="side-action-label">Share</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderMyBtvFeed() {
  const chipsContainer = document.getElementById('my-btv-followed-chips');
  chipsContainer.innerHTML = state.followedTopics.map(topic => `
    <span class="followed-chip">
      #${topic}
      <button class="remove-chip-btn" onclick="removeFollowChip('${topic}')">×</button>
    </span>
  `).join('');
  
  const container = document.getElementById('my-btv-content-feed');
  container.innerHTML = "";
  
  const matches = Object.values(CONTENT_DATABASE.articles).filter(art => {
    return state.followedTopics.includes(art.category);
  });
  
  if (matches.length > 0) {
    matches.forEach(art => {
      const isPlaying = state.ttsActiveStoryId === art.id;
      const card = document.createElement('div');
      card.className = 'mobile-feed-card';
      card.innerHTML = `
        <div class="card-top-row">
          <span class="card-category">${art.category}</span>
          <span>${art.readTime} min read</span>
        </div>
        <h4 class="mobile-card-title">${art.title[state.language]}</h4>
        <p class="mobile-card-desc">${art.description[state.language]}</p>
        <div class="mobile-card-actions">
          <button class="m-action-btn listen ${isPlaying ? 'active' : ''}" onclick="playAudioStory('${art.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span>${isPlaying ? 'Playing' : 'Listen'}</span>
          </button>
          <button class="m-action-btn active" onclick="toggleSaveStory('${art.id}', this)">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  } else {
    container.innerHTML = `
      <div style="text-align: center; padding: 1.5rem 0; color: var(--text-muted); font-size: 0.75rem;">
        No followed interests matching. Pick topics like Startups, Real Estate, Technology to start personalizing.
      </div>
    `;
  }
  
  const savedContainer = document.getElementById('my-btv-saved-list');
  savedContainer.innerHTML = "";
  
  if (state.savedStories.length > 0) {
    state.savedStories.forEach(sId => {
      let title = "";
      if (sId === 'hero') {
        title = CONTENT_DATABASE.articles.hero.title[state.language];
      } else if (sId.startsWith('short-')) {
        title = CONTENT_DATABASE.shorts.find(sh => sh.id === sId)?.title[state.language] || "Saved Short";
      } else {
        title = CONTENT_DATABASE.articles[sId]?.title[state.language] || "Saved Article";
      }
      
      const row = document.createElement('div');
      row.className = 'saved-item-row';
      row.innerHTML = `
        <span onclick="playAudioStory('${sId}')">📖 ${title}</span>
        <button class="delete-saved-btn" onclick="toggleSaveStory('${sId}', this)">×</button>
      `;
      savedContainer.appendChild(row);
    });
  } else {
    savedContainer.innerHTML = `
      <div style="text-align: center; padding: 1rem 0; color: var(--text-muted); font-size: 0.75rem;">
        No saved stories. Click the Bookmark icon on articles/shorts to save for later.
      </div>
    `;
  }
}

// --- DIGEST MODALS ---
const digestBulletins = {
  morning: [
    { en: "Sensex climbs 400 points on IT & Banking stock rallies.", te: "ఐటీ, బ్యాంకింగ్ షేర్ల జోరుతో సెన్సెక్స్ 400 పాయింట్లు పెరిగింది." },
    { en: "AP Government allocates ₹500 crores for Amaravati capital projects.", te: "అమరావతి క్యాపిటల్ ప్రాజెక్టుల కోసం ఏపీ ప్రభుత్వం ₹500 కోట్లు కేటాయించింది." },
    { en: "Hyderabad commercial leasing surges 12% in quarterly yields.", te: "హైదరాబాద్ కమర్షియల్ లీజింగ్ 12% పెరిగింది." },
    { en: "Cotton prices stable in Warangal markets following digital weight scales auditing.", te: "డిజిటల్ స్కేల్స్ ఆడిట్ తర్వాత వరంగల్ మార్కెట్లలో పత్తి ధరలు స్థిరంగా ఉన్నాయి." },
    { en: "US Federal Reserve hints at interest rate cuts in upcoming assembly.", te: "రాబోయే అసెంబ్లీలో వడ్డీ రేట్ల తగ్గింపును యూఎస్ ఫెడరల్ రిజర్వ్ సూచించింది." },
    { en: "Vizag pharma units secure EU export clearances for new drugs.", te: "వైజాగ్ ఫార్మా యూనిట్లు కొత్త ఔషధాల కోసం ఈయూ ఎగుమతి అనుమతులు సాధించాయి." },
    { en: "Indian Startup funding grows to 3-year high in June aggregates.", te: "జూన్ నెలలో భారతీయ స్టార్టప్ నిధులు 3 సంవత్సరాల గరిష్ట స్థాయికి చేరాయి." }
  ],
  evening: [
    { en: "Sensex ends at record high, IT leads Nifty index gainers.", te: "సెన్సెక్స్ రికార్డ్ గరిష్ట స్థాయిలో ముగిసింది, ఐటీ షేర్లు లీడ్ చేశాయి." },
    { en: "Telangana state holds entrepreneurship summit in Nizamabad.", te: "తెలంగాణ ప్రభుత్వం నిజామాబాద్‌లో ఎంటర్‌ప్రెన్యూర్‌షిప్ సదస్సును నిర్వహించింది." },
    { en: "Vijayawada Logistics Hub signs partnership with Amazon India.", te: "విజయవాడ లాజిస్టిక్స్ హబ్ అమెజాన్ ఇండియాతో ఒప్పందం కుదుర్చుకుంది." },
    { en: "Gold rates experience subtle decline of ₹200 per 10 grams.", te: "పది గ్రాముల బంగారం ధరలలో ₹200 స్వల్ప తగ్గుదల నమోదైంది." },
    { en: "Hyderabad airport opens new cargo block to expedite tech shipping.", te: "టెక్ రవాణాను వేగవంతం చేయడానికి హైదరాబాద్ విమానాశ్రయంలో కొత్త కార్గో బ్లాక్ ప్రారంభమైంది." },
    { en: "AP cabinet clears new industrial zone setup in Chittoor district.", te: "చిత్తూరు జిల్లాలో కొత్త పారిశ్రామిక జోన్ ఏర్పాటుకు ఏపీ క్యాబినెట్ ఆమోదం తెలిపింది." },
    { en: "Rupee closes flat against US Dollar at 83.42.", te: "యూెస్ డాలర్‌తో రూపాయి విలువ 83.42 వద్ద స్థిరంగా ముగిసింది." }
  ]
};

function openDigest(type) {
  triggerEngagement();
  
  const title = type === 'morning' ? "Morning 7 Digest (7:00 AM)" : "Evening 7 Recap (7:00 PM)";
  const list = digestBulletins[type];
  
  let bulletHTML = list.map((b, i) => `
    <li style="margin-bottom: 0.75rem; text-align: left; font-size: 0.85rem; line-height: 1.5; color: var(--text-main);">
      <strong style="color: var(--color-primary);">${i+1}.</strong> ${b[state.language]}
    </li>
  `).join('');
  
  const container = document.createElement('div');
  container.id = 'digest-on-the-fly-modal';
  container.style.cssText = `
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,0.85);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;
  `;
  
  container.innerHTML = `
    <div style="background-color: var(--bg-surface); border: 1px solid var(--border-color); padding: 2rem; border-radius: 16px; max-width: 500px; width: 90%; text-align: center; box-shadow: var(--shadow-glow);">
      <h3 style="margin-bottom: 1rem; color: ${type === 'morning' ? 'var(--color-primary)' : 'var(--color-secondary)'}; font-size: 1.2rem;">⚡ ${title}</h3>
      <ul style="list-style: none; padding: 0; max-height: 350px; overflow-y: auto; margin-bottom: 1.5rem;">
        ${bulletHTML}
      </ul>
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button onclick="readAloudDigest('${type}')" style="background-color: var(--color-secondary); color: #0c0e14; font-weight:700; padding: 0.6rem 1.2rem; border-radius: 8px; font-size: 0.8rem; display: flex; align-items: center; gap: 0.4rem;">
          🔊 Listen All
        </button>
        <button onclick="document.getElementById('digest-on-the-fly-modal').remove()" style="background-color: rgba(255,255,255,0.06); color: var(--text-main); padding: 0.6rem 1.2rem; border-radius: 8px; font-size: 0.8rem;">
          Close
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(container);
}

function readAloudDigest(type) {
  const list = digestBulletins[type];
  const fullText = list.map((b, i) => `Number ${i+1}. ${b[state.language]}`).join('. ');
  
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  
  const utter = new SpeechSynthesisUtterance(fullText);
  utter.lang = state.language === 'en' ? 'en-IN' : 'te-IN';
  utter.rate = state.ttsRate;
  
  window.speechSynthesis.speak(utter);
  
  document.getElementById('player-story-title').innerText = `${type === 'morning' ? 'Morning 7' : 'Evening 7'} Audio Briefing`;
  document.getElementById('audio-player-dock').classList.remove('hidden');
  
  document.getElementById('digest-on-the-fly-modal').remove();
}


// =========================================================================
// ==================== BTV NEWSROOM OPERATING SYSTEM LOGIC ====================
// =========================================================================

// --- SWITCH ACTIVE NEWSROOM LOGIN IDENTITY ---
function switchNrAccount(userIdKey) {
  const user = NEWSROOM_USERS[userIdKey];
  if (!user) return;
  
  activeNrUser = user;
  
  // Update header card
  document.getElementById('nr-user-name').innerText = user.name;
  document.getElementById('nr-user-role').innerText = `${user.role} (${user.stateScope === 'all' ? 'National' : user.cityScope})`;
  document.getElementById('nr-user-avatar').innerText = user.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
  
  // Set default fields inside Reporter creation form based on reporter's geographic scope
  if (user.role === 'Reporter' || user.role === 'Senior Reporter') {
    document.getElementById('field-state').value = user.stateScope;
    document.getElementById('field-city').value = user.cityScope;
    document.getElementById('field-district').value = `${user.cityScope} District`;
    document.getElementById('rep-profile-id').innerText = user.id;
    document.getElementById('rep-profile-scope').innerText = `${user.cityScope} City, ${user.stateScope === 'Telangana' ? 'TG' : 'AP'}, India`;
  }
  
  // Auto-switch tabs to fit role permissions
  const tabsNav = document.getElementById('newsroom-tabs-nav');
  if (user.role === 'Reporter' || user.role === 'Senior Reporter' || user.role === 'Contributor') {
    switchNewsroomTab('reporter');
  } else if (user.role === 'Super Admin') {
    switchNewsroomTab('command');
  } else {
    switchNewsroomTab('admin');
  }
  
  // Log login audit
  logAuditAction(user.id, user.role, 'Identity Switch / Login', 'Newsroom OS Session', 'none', 'Active');
  
  renderNewsroomWorkspace();
}

// --- NEWSROOM OS INTERACTION NAVIGATION TABS ---
function switchNewsroomTab(tabName) {
  activeNewsroomTab = tabName;
  
  // Check boundary authorizations
  if (tabName === 'command' && activeNrUser.role !== 'Super Admin') {
    alert("Unauthorized: Only Super Admins can access the National Command Center.");
    return;
  }
  if (tabName === 'admin' && activeNrUser.role === 'Contributor') {
    alert("Unauthorized: Contributors cannot access the Editorial Approval Console.");
    return;
  }

  // Set active tab buttons
  const items = document.querySelectorAll('.newsroom-bottom-nav .nr-nav-item');
  items.forEach(it => it.classList.remove('active'));
  document.getElementById(`nr-nav-${tabName}`).classList.add('active');
  
  // Hide all workspaces
  document.getElementById('view-reporter-portal').classList.add('hidden');
  document.getElementById('view-admin-console').classList.add('hidden');
  document.getElementById('view-command-center').classList.add('hidden');
  document.getElementById('view-audit-logs').classList.add('hidden');
  document.getElementById('view-forbidden-access').classList.add('hidden');
  
  // Show target workspace
  document.getElementById(`view-${tabName === 'reporter' ? 'reporter-portal' : tabName === 'admin' ? 'admin-console' : tabName === 'command' ? 'command-center' : 'audit-logs'}`).classList.remove('hidden');
  
  renderNewsroomWorkspace();
}

// --- GENERAL NEWSROOM WORKSPACE RENDERING ---
function renderNewsroomWorkspace() {
  if (activeNewsroomTab === 'reporter') {
    renderReporterPortal();
  } else if (activeNewsroomTab === 'admin') {
    renderAdminConsole();
  } else if (activeNewsroomTab === 'command') {
    renderCommandCenter();
  } else if (activeNewsroomTab === 'audit') {
    renderAuditLedger();
  }
}

// Render Reporter Portal
function renderReporterPortal() {
  const user = activeNrUser;
  
  // Sync KPIs
  document.getElementById('rep-kpi-total').innerText = user.metrics.total || 0;
  document.getElementById('rep-kpi-published').innerText = user.metrics.published || 0;
  
  const pendingCount = NR_SUBMISSIONS.filter(s => s.reporterId === user.id && s.status !== 'PUBLISHED' && s.status !== 'REJECTED').length;
  document.getElementById('rep-kpi-changes').innerText = pendingCount;
  document.getElementById('rep-kpi-correction').innerText = user.metrics.correction || '0%';
  
  // Render Assignments
  const assignmentsList = document.getElementById('reporter-assignments-list');
  const myAssignments = NR_ASSIGNMENTS.filter(a => a.reporterId === user.id);
  
  if (myAssignments.length > 0) {
    assignmentsList.innerHTML = myAssignments.map(a => `
      <div class="assignment-item ${a.status.toLowerCase().replace(' ', '_')}" onclick="loadAssignmentIntoForm('${a.id}')">
        <div class="assign-meta">
          <span class="priority">${a.priority} Priority</span>
          <span class="deadline">Deadline: ${a.deadline}</span>
        </div>
        <h5>${a.title}</h5>
        <p style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">Status: ${a.status}</p>
      </div>
    `).join('');
  } else {
    assignmentsList.innerHTML = `<p style="font-size:0.7rem; color:var(--text-muted); text-align:center;">No pending assignments.</p>`;
  }
  
  // Render Submissions History
  const historyTable = document.getElementById('reporter-submissions-table');
  const mySubmissions = NR_SUBMISSIONS.filter(s => s.reporterId === user.id || (user.role === 'Contributor' && s.reporterId === 'BTV-CON-0089'));
  
  if (mySubmissions.length > 0) {
    historyTable.innerHTML = mySubmissions.map(s => {
      const editTime = s.history[s.history.length-1].time.replace('T', ' ').substring(11, 16);
      return `
        <tr>
          <td>${s.id}</td>
          <td style="font-weight:700;">${s.headline}</td>
          <td>${s.category}</td>
          <td style="text-transform:capitalize;">${s.type}</td>
          <td><span class="priority-badge ${s.priority.toLowerCase()}">${s.priority}</span></td>
          <td><span class="status-pill ${s.status.toLowerCase().replace(' ', '')}">${s.status}</span></td>
          <td>${editTime}</td>
          <td>
            ${s.status === 'CHANGES REQUESTED' ? `<button class="view-diff-btn" onclick="reviewCorrections('${s.id}')">Fix & Resubmit</button>` : `<span style="color:var(--text-muted);">Locked</span>`}
          </td>
        </tr>
      `;
    }).join('');
  } else {
    historyTable.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted);">No submissions found.</td></tr>`;
  }
}

// Load Assignment details into form
function loadAssignmentIntoForm(id) {
  const asg = NR_ASSIGNMENTS.find(a => a.id === id);
  if (!asg) return;
  
  document.getElementById('field-headline').value = `RE: ${asg.title}`;
  document.getElementById('field-summary').value = asg.description;
  document.getElementById('field-content').value = `Assigned instructions: ${asg.description}\n\nNotes: ${asg.notes}\n\n`;
  document.getElementById('field-city').value = asg.city;
  document.getElementById('field-urgency').value = asg.priority === 'Urgent' ? 'P1' : 'P2';
  
  // Update local assignment state to Accepted
  if (asg.status === 'Assigned') {
    asg.status = 'Accepted';
    logAuditAction(activeNrUser.id, activeNrUser.role, 'Assignment Accepted', asg.id, 'Assigned', 'Accepted');
    renderNewsroomWorkspace();
  }
  
  alert(`Assignment loaded! Form pre-filled for ${asg.city}.`);
}

// Auto-save form draft simulation
let autosaveTimeout = null;
function triggerAutosave() {
  const indicator = document.getElementById('draft-autosave-indicator');
  indicator.innerText = "Drafting (Saving changes...)";
  indicator.style.color = "var(--color-warning)";
  
  if (autosaveTimeout) clearTimeout(autosaveTimeout);
  autosaveTimeout = setTimeout(() => {
    indicator.innerText = "Draft auto-saved to local memory";
    indicator.style.color = "var(--color-success)";
  }, 1500);
}

// Media upload simulation
function simulateMediaUpload(type) {
  const progressContainer = document.getElementById('media-upload-bar');
  const fill = document.getElementById('upload-progress-fill');
  const percent = document.getElementById('upload-percentage');
  const txt = document.getElementById('upload-status-txt');
  const netAlert = document.getElementById('upload-network-alert');
  const isWeakNetwork = document.getElementById('field-weak-network').checked;
  const isCompressed = document.getElementById('field-compress-media').checked;

  progressContainer.classList.remove('hidden');
  netAlert.classList.add('hidden');
  
  uploadProgress = 0;
  isUploadStuck = false;
  
  txt.innerText = `Compressing and uploading ${type} attachment...`;
  if (isCompressed) txt.innerText += " (Image optimized)";
  
  if (uploadTimer) clearInterval(uploadTimer);
  
  uploadTimer = setInterval(() => {
    if (isWeakNetwork && uploadProgress >= 60 && !isUploadStuck) {
      // Stuck at 60% due to simulated weak network
      isUploadStuck = true;
      txt.innerText = "⚠️ Upload failed: Network unstable (503 Gateway Temporary Timeout)";
      netAlert.classList.remove('hidden');
      fill.style.backgroundColor = "var(--color-danger)";
      clearInterval(uploadTimer);
      return;
    }
    
    uploadProgress += Math.floor(Math.random() * 15) + 5;
    if (uploadProgress >= 100) {
      uploadProgress = 100;
      clearInterval(uploadTimer);
      
      // Success attachment add
      const list = document.getElementById('media-attachment-list');
      const randomName = `${type}_clip_${Math.floor(Math.random()*9000)+1000}.${type === 'image' ? 'jpg' : type === 'video' ? 'mp4' : 'wav'}`;
      
      const fileChip = document.createElement('span');
      fileChip.className = 'uploaded-file-chip';
      fileChip.innerHTML = `
        📎 ${randomName}
        <button type="button" class="remove-file-btn" onclick="this.parentNode.remove()">×</button>
      `;
      list.appendChild(fileChip);
      
      progressContainer.classList.add('hidden');
      alert(`${type.toUpperCase()} file attached successfully.`);
    }
    
    fill.style.width = `${uploadProgress}%`;
    percent.innerText = `${uploadProgress}%`;
  }, 300);
}

function recoverMediaUpload() {
  // Recover stuck upload
  isUploadStuck = false;
  document.getElementById('upload-network-alert').classList.add('hidden');
  document.getElementById('upload-progress-fill').style.backgroundColor = "var(--color-secondary)";
  simulateMediaUpload('recovered_media');
}

// Run Duplicate Check algorithm
function handleDuplicateCheck() {
  const headline = document.getElementById('field-headline').value.trim();
  const warningBox = document.getElementById('duplicate-warning-box');
  const matchesList = document.getElementById('dup-matches-items');
  
  if (!headline) {
    alert("Please enter a headline first to test duplicate matching.");
    return;
  }
  
  // Find matches (similar keywords or same cities/categories)
  const keywords = headline.toLowerCase().split(/\s+/).filter(w => w.length > 4);
  let matches = [];
  
  // Search content database
  Object.values(CONTENT_DATABASE.articles).forEach(art => {
    let matchScore = 0;
    keywords.forEach(kw => {
      if (art.title.en.toLowerCase().includes(kw)) matchScore++;
    });
    
    if (matchScore >= 1) {
      matches.push({
        title: art.title.en,
        location: art.location,
        type: 'Published Article'
      });
    }
  });

  // Search pending submissions
  NR_SUBMISSIONS.forEach(sub => {
    let matchScore = 0;
    keywords.forEach(kw => {
      if (sub.headline.toLowerCase().includes(kw)) matchScore++;
    });
    
    if (matchScore >= 1) {
      matches.push({
        title: sub.headline,
        location: sub.city,
        type: `Unreleased Submission (${sub.status})`
      });
    }
  });

  if (matches.length > 0) {
    warningBox.classList.remove('hidden');
    matchesList.innerHTML = matches.map(m => `
      <div class="dup-match-item">
        <h5>${m.title}</h5>
        <div class="dup-match-meta">City: ${m.location} | Type: ${m.type}</div>
      </div>
    `).join('');
  } else {
    alert("Duplicate check complete: No similar stories found in active queues.");
    warningBox.classList.add('hidden');
  }
}

function dismissDuplicateWarning() {
  document.getElementById('duplicate-warning-box').classList.add('hidden');
}

// Save Reporter Content Draft
function saveReportingDraft() {
  const headline = document.getElementById('field-headline').value;
  if (!headline) {
    alert("Please enter a headline to save draft.");
    return;
  }
  
  const draftId = `draft-${Date.now()}`;
  const newDraft = {
    id: draftId,
    headline: headline,
    shortHeadline: document.getElementById('field-short-headline').value || headline,
    summary: document.getElementById('field-summary').value || '',
    content: document.getElementById('field-content').value || '',
    type: document.getElementById('field-type').value,
    category: document.getElementById('field-category').value,
    language: state.language,
    state: document.getElementById('field-state').value,
    district: document.getElementById('field-district').value,
    city: document.getElementById('field-city').value,
    reporterId: activeNrUser.id,
    reporterName: activeNrUser.name,
    reporterTrust: activeNrUser.trustRating || 'Verified',
    sourceType: document.getElementById('field-source-type').value,
    verifyStatus: document.getElementById('field-source-verify').value,
    priority: document.getElementById('field-urgency').value,
    status: 'DRAFT',
    riskLevel: 'Normal Local',
    submittedTime: new Date().toISOString(),
    slaMinutes: 120,
    history: [{ status: 'DRAFT', actor: activeNrUser.id, time: new Date().toISOString() }],
    comments: [],
    attachments: []
  };

  NR_SUBMISSIONS.push(newDraft);
  saveNrDatabase();
  logAuditAction(activeNrUser.id, activeNrUser.role, 'Draft saved', draftId, 'none', 'DRAFT');
  
  alert("Draft saved locally.");
  document.getElementById('reporting-form').reset();
  renderAll();
}

// Submit Reporter Form for Editorial review
function handleFieldReportSubmit(event) {
  event.preventDefault();
  
  const headline = document.getElementById('field-headline').value;
  const content = document.getElementById('field-content').value;
  const summary = document.getElementById('field-summary').value;
  const pType = document.getElementById('field-type').value;
  const city = document.getElementById('field-city').value;
  const urgency = document.getElementById('field-urgency').value;
  
  const subId = `sub-${Date.now()}`;
  
  // Set risk assessment level
  let risk = "Normal Local";
  const sensitiveWords = ["crime", "scam", "arrest", "court", "murder", "protest", "strike", "ministry", "minister"];
  sensitiveWords.forEach(w => {
    if (headline.toLowerCase().includes(w) || content.toLowerCase().includes(w)) {
      risk = "Sensitive Content";
    }
  });
  if (urgency === 'P0') risk = "National Breaking News";

  const newSub = {
    id: subId,
    headline: headline,
    shortHeadline: document.getElementById('field-short-headline').value || headline.substring(0,30),
    summary: summary,
    content: content,
    type: pType,
    category: document.getElementById('field-category').value,
    language: state.language,
    state: document.getElementById('field-state').value,
    district: document.getElementById('field-district').value,
    city: city,
    reporterId: activeNrUser.id,
    reporterName: activeNrUser.name,
    reporterTrust: activeNrUser.trustRating || '98% High Accuracy',
    sourceType: document.getElementById('field-source-type').value,
    verifyStatus: document.getElementById('field-source-verify').value,
    priority: urgency,
    status: 'SUBMITTED',
    riskLevel: risk,
    submittedTime: new Date().toISOString(),
    slaMinutes: urgency === 'P0' ? 5 : urgency === 'P1' ? 15 : urgency === 'P2' ? 120 : 1440,
    history: [
      { status: 'DRAFT', actor: activeNrUser.id, time: new Date().toISOString() },
      { status: 'SUBMITTED', actor: activeNrUser.id, time: new Date().toISOString() }
    ],
    comments: [
      { author: activeNrUser.name, text: document.getElementById('field-editor-notes').value || 'Fresh field submission.', time: 'Just now' }
    ],
    attachments: [],
    lockReviewer: null
  };

  // Find if this was resubmitted from an existing changes requested item
  const existingIndex = NR_SUBMISSIONS.findIndex(s => s.status === 'CHANGES REQUESTED' && s.reporterId === activeNrUser.id);
  if (existingIndex > -1) {
    const oldId = NR_SUBMISSIONS[existingIndex].id;
    newSub.id = oldId;
    newSub.history = [...NR_SUBMISSIONS[existingIndex].history, { status: 'RESUBMITTED', actor: activeNrUser.id, time: new Date().toISOString() }];
    newSub.status = 'SUBMITTED';
    NR_SUBMISSIONS[existingIndex] = newSub;
    logAuditAction(activeNrUser.id, activeNrUser.role, 'Story Resubmitted', oldId, 'CHANGES REQUESTED', 'SUBMITTED');
  } else {
    NR_SUBMISSIONS.push(newSub);
    logAuditAction(activeNrUser.id, activeNrUser.role, 'Story Submitted', subId, 'DRAFT', 'SUBMITTED');
  }
  
  saveNrDatabase();
  
  // Trigger assignment update to Submitted if matched
  const matchedAsg = NR_ASSIGNMENTS.find(a => a.reporterId === activeNrUser.id && a.status === 'Accepted');
  if (matchedAsg) {
    matchedAsg.status = 'Submitted';
    logAuditAction(activeNrUser.id, activeNrUser.role, 'Assignment Completed', matchedAsg.id, 'Accepted', 'Submitted');
  }
  
  document.getElementById('reporting-form').reset();
  document.getElementById('media-attachment-list').innerHTML = "";
  
  alert(`Content submitted for review. Assigned Priority SLA: ${urgency}`);
  renderAll();
}

// Reporter review corrections requested
function reviewCorrections(subId) {
  const sub = NR_SUBMISSIONS.find(s => s.id === subId);
  if (!sub) return;
  
  document.getElementById('field-headline').value = sub.headline;
  document.getElementById('field-short-headline').value = sub.shortHeadline;
  document.getElementById('field-summary').value = sub.summary;
  document.getElementById('field-content').value = sub.content;
  document.getElementById('field-category').value = sub.category;
  document.getElementById('field-type').value = sub.type;
  
  // Show diff feedback alert
  const feedback = sub.comments.filter(c => c.author.includes('Admin') || c.author.includes('Editor')).map(c => `${c.author}: ${c.text}`).join('\n');
  alert(`Correction Request Received:\n\n${feedback}\n\nAdjust the details in the form and click Submit to resubmit for review.`);
}

// --- ADMIN REVIEW CONSOLE & ACTION PANEL ---

// Render Admin queue and detailed panels
function renderAdminConsole() {
  const queueContainer = document.getElementById('admin-queue-list');
  const cityFilter = document.getElementById('queue-city-filter');
  
  // Populated City filter options dynamically if empty
  if (cityFilter.options.length <= 1) {
    const cities = [...new Set(NR_SUBMISSIONS.map(s => s.city))];
    cities.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.innerText = c;
      cityFilter.appendChild(opt);
    });
  }

  // Enforce server-side authorization check simulation
  // Hyd Admin cannot see Vizag stories
  const filteredSubmissions = NR_SUBMISSIONS.filter(s => {
    // If not super admin / central editor, scope is limited
    if (activeNrUser.cityScope !== 'all' && activeNrUser.cityScope !== s.city) {
      return false; // hide other cities
    }
    return s.status === 'SUBMITTED' || s.status === 'UNDER REVIEW' || s.status === 'CHANGES REQUESTED' || s.status === 'ESCALATED';
  });

  document.getElementById('queue-pending-count').innerText = `${filteredSubmissions.length} Pending`;

  if (filteredSubmissions.length > 0) {
    queueContainer.innerHTML = filteredSubmissions.map(sub => {
      // SLA Status
      const isOverdue = checkIsSLAOverdue(sub);
      const isTTS = state.ttsActiveStoryId === sub.id;
      
      return `
        <div class="queue-card ${activeAdminSelectionId === sub.id ? 'active' : ''}" onclick="selectAdminQueueItem('${sub.id}')">
          <div class="queue-card-meta">
            <span class="priority-badge ${sub.priority.toLowerCase()}">${sub.priority}</span>
            <span>${sub.city}</span>
          </div>
          <h4>${sub.headline}</h4>
          <div class="queue-card-footer">
            <span>By: ${sub.reporterId}</span>
            <span class="sla-status-tag ${isOverdue ? 'overdue' : 'ontime'}">SLA: ${isOverdue ? 'Overdue' : 'Active'}</span>
          </div>
        </div>
      `;
    }).join('');
    
    // Auto-load details of active selection
    renderAdminPreviewDetails();
  } else {
    queueContainer.innerHTML = `<p style="font-size:0.75rem; color:var(--text-muted); text-align:center; padding:2rem 0;">No pending submissions in queue.</p>`;
    // Hide controls
    document.getElementById('admin-controls-panel').style.opacity = '0.3';
    document.getElementById('admin-controls-panel').style.pointerEvents = 'none';
  }
}

function selectAdminQueueItem(id) {
  const sub = NR_SUBMISSIONS.find(s => s.id === id);
  if (!sub) return;

  // Geographic boundary check
  if (activeNrUser.cityScope !== 'all' && activeNrUser.cityScope !== sub.city) {
    // Access Denied! Show 403 screen!
    triggerGeographicScopeViolation(sub.city);
    return;
  }

  activeAdminSelectionId = id;
  
  // Set lock
  if (sub.status === 'SUBMITTED') {
    sub.status = 'UNDER REVIEW';
    sub.lockReviewer = activeNrUser.name;
    logAuditAction(activeNrUser.id, activeNrUser.role, 'Start Review (Locked)', sub.id, 'SUBMITTED', 'UNDER REVIEW');
  }
  
  // Initialize admin correction form
  adminEdits = {
    headline: sub.headline,
    summary: sub.summary,
    content: sub.content
  };
  
  renderAll();
}

function triggerGeographicScopeViolation(violationCity) {
  // Hide Admin dashboard, show 403 Forbidden Screen
  document.getElementById('view-admin-console').classList.add('hidden');
  document.getElementById('view-forbidden-access').classList.remove('hidden');
  
  document.getElementById('forbidden-logged-text').innerText = `Unauthorized ${activeNrUser.name} (${activeNrUser.role}) attempt to access restricted ${violationCity} news queue blocked. (403 Access Violation)`;
  
  logAuditAction(activeNrUser.id, activeNrUser.role, 'Geographic scope violation blocked', `Access restricted queue: ${violationCity}`, 'Active', 'Blocked');
}

function recoverFrom403() {
  switchNewsroomTab('admin');
}

function renderAdminPreviewDetails() {
  const sub = NR_SUBMISSIONS.find(s => s.id === activeAdminSelectionId);
  if (!sub) return;

  document.getElementById('admin-controls-panel').style.opacity = '1';
  document.getElementById('admin-controls-panel').style.pointerEvents = 'auto';

  // Meta Info
  document.getElementById('ctrl-rep-id').innerText = sub.reporterId;
  document.getElementById('ctrl-rep-trust').innerText = sub.reporterTrust || '98% High Accuracy';
  document.getElementById('ctrl-submit-time').innerText = sub.submittedTime.replace('T', ' ').substring(0, 16);
  document.getElementById('ctrl-risk-lvl').innerText = `${sub.riskLevel}`;
  document.getElementById('ctrl-source-verify').innerText = `${sub.sourceType} (${sub.verifyStatus})`;
  
  // Locked reviewer name
  const lockBanner = document.getElementById('editor-lock-banner');
  if (sub.lockReviewer && sub.lockReviewer !== activeNrUser.name) {
    lockBanner.classList.remove('hidden');
    lockBanner.querySelector('strong').innerText = `LOCKED: Story review locked by ${sub.lockReviewer}`;
  } else {
    lockBanner.classList.add('hidden');
  }

  // Render active tab contents
  renderPreviewTabContent(sub);
  
  // Render comments
  const commentsBox = document.getElementById('ctrl-comments-thread');
  commentsBox.innerHTML = sub.comments.map(c => `
    <div class="comment-bubble ${c.author.includes('Admin') || c.author.includes('Editor') ? 'admin-comment' : ''}">
      <span class="comment-author">[${c.time}] ${c.author}:</span>
      <span>${c.text}</span>
    </div>
  `).join('');
  commentsBox.scrollTop = commentsBox.scrollHeight;
}

// Version preview tabs switch
function switchPreviewTab(tabName) {
  activePreviewTab = tabName;
  
  const btns = ['btn-tab-preview', 'btn-tab-compare', 'btn-tab-edit'];
  btns.forEach(b => document.getElementById(b).classList.remove('active'));
  document.getElementById(`btn-tab-${tabName}`).classList.add('active');
  
  const panes = ['pane-preview', 'pane-compare', 'pane-edit'];
  panes.forEach(p => document.getElementById(p).classList.remove('active'));
  document.getElementById(`pane-${tabName}`).classList.add('active');
  
  renderAdminPreviewDetails();
}

function renderPreviewTabContent(sub) {
  // Public Preview Tab
  document.getElementById('prev-display-category').innerText = sub.category.toUpperCase();
  document.getElementById('prev-display-title').innerText = adminEdits.headline || sub.headline;
  document.getElementById('prev-display-author').innerText = `Reported by: ${sub.reporterName}`;
  document.getElementById('prev-display-location').innerText = `Location: ${sub.city}`;
  document.getElementById('prev-display-summary').innerText = adminEdits.summary || sub.summary;
  document.getElementById('prev-display-content').innerText = adminEdits.content || sub.content;

  // Visual Diff Tab
  const origPane = document.getElementById('diff-pane-original');
  const editPane = document.getElementById('diff-pane-edited');
  
  origPane.innerText = sub.content;
  
  // Highlight differences
  editPane.innerHTML = generateSimpleVisualDiff(sub.content, adminEdits.content);

  // Correction Form Tab
  document.getElementById('admin-edit-title').value = adminEdits.headline || sub.headline;
  document.getElementById('admin-edit-summary').value = adminEdits.summary || sub.summary;
  document.getElementById('admin-edit-content').value = adminEdits.content || sub.content;
}

// Inline changes tracker
function updateAdminChanges() {
  adminEdits.headline = document.getElementById('admin-edit-title').value;
  adminEdits.summary = document.getElementById('admin-edit-summary').value;
  adminEdits.content = document.getElementById('admin-edit-content').value;
}

// Override locks
function overrideEditorialLock() {
  const sub = NR_SUBMISSIONS.find(s => s.id === activeAdminSelectionId);
  if (!sub) return;
  
  sub.lockReviewer = activeNrUser.name;
  logAuditAction(activeNrUser.id, activeNrUser.role, 'Lock Overridden', sub.id, 'Locked by other', `Locked by ${activeNrUser.name}`);
  renderAll();
}

// Simple Visual Diff engine (Word-by-word comparison)
function generateSimpleVisualDiff(origText, newText) {
  if (origText === newText) return origText;
  
  const origWords = origText.split(/\s+/);
  const newWords = newText.split(/\s+/);
  
  let diffHTML = [];
  
  // A simple word match scanner to build deletions & insertions highlights
  let i = 0, j = 0;
  while (i < origWords.length || j < newWords.length) {
    if (i < origWords.length && j < newWords.length && origWords[i] === newWords[j]) {
      diffHTML.push(origWords[i]);
      i++;
      j++;
    } else {
      // Find matches down the line
      let matchIdx = -1;
      for (let k = j; k < newWords.length; k++) {
        if (newWords[k] === origWords[i]) {
          matchIdx = k;
          break;
        }
      }
      
      if (matchIdx > -1) {
        // Words up to matchIdx are insertions
        while (j < matchIdx) {
          diffHTML.push(`<span class="diff-ins">${newWords[j]}</span>`);
          j++;
        }
      } else {
        // Deleted word
        if (i < origWords.length) {
          diffHTML.push(`<span class="diff-del">${origWords[i]}</span>`);
          i++;
        }
      }
    }
  }
  
  return diffHTML.join(' ');
}

// Handle Admin Actions (Approve, Request Changes, Escalate, Reject)
function handleAdminAction(action) {
  const sub = NR_SUBMISSIONS.find(s => s.id === activeAdminSelectionId);
  if (!sub) return;

  let body = {};
  
  if (action === 'approve') {
    body = {
      status: 'PUBLISHED',
      actor: activeNrUser.name,
      comment: null
    };
  }
  else if (action === 'request_changes') {
    const feedback = prompt("Enter correction comments to send back to the reporter:");
    if (!feedback) return;
    body = {
      status: 'CHANGES REQUESTED',
      actor: activeNrUser.name,
      comment: `Corrections Required: ${feedback}`
    };
  }
  else if (action === 'escalate') {
    body = {
      status: 'ESCALATED',
      actor: activeNrUser.name,
      comment: 'Escalated story to State/Central editors for policy auditing.'
    };
  }
  else if (action === 'reject') {
    if (!confirm("Are you sure you want to permanently reject this submission?")) return;
    body = {
      status: 'REJECTED',
      actor: activeNrUser.name,
      comment: 'Rejected permanently'
    };
  }

  fetch(`/api/submissions/${sub.id}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
  .then(() => fetch('/api/submissions'))
  .then(res => res.json())
  .then(data => {
    NR_SUBMISSIONS = data;
    // Refresh articles database if it was approved/published
    if (action === 'approve') {
      fetch('/api/articles')
        .then(res => res.json())
        .then(arts => {
          CONTENT_DATABASE.articles = arts;
          alert("Success: Story approved and published live to BTV platforms!");
          renderAll();
        });
    } else {
      renderAll();
    }
  })
  .catch(err => {
    console.error("Workflow update failed, using local simulation fallback", err);
    // Offline fallback logic
    if (action === 'approve') {
      sub.status = 'PUBLISHED';
      sub.lockReviewer = null;
      sub.headline = adminEdits.headline || sub.headline;
      sub.summary = adminEdits.summary || sub.summary;
      sub.content = adminEdits.content || sub.content;

      const newArticleId = `pub-${Date.now()}`;
      CONTENT_DATABASE.articles[newArticleId] = {
        id: newArticleId,
        category: sub.category,
        location: sub.city,
        author: sub.reporterName,
        readTime: 3,
        title: { en: sub.headline, te: sub.headline },
        description: { en: sub.summary, te: sub.summary },
        text: { en: sub.content, te: sub.content }
      };
    } else if (action === 'request_changes') {
      sub.status = 'CHANGES REQUESTED';
      sub.lockReviewer = null;
    } else if (action === 'escalate') {
      sub.status = 'ESCALATED';
      sub.lockReviewer = null;
    } else if (action === 'reject') {
      sub.status = 'REJECTED';
      sub.lockReviewer = null;
    }
    saveNrDatabase();
    renderAll();
  });
}

function sendEditorialComment() {
  const input = document.getElementById('ctrl-comment-input');
  const text = input.value.trim();
  if (!text) return;
  
  const sub = NR_SUBMISSIONS.find(s => s.id === activeAdminSelectionId);
  if (!sub) return;
  
  sub.comments.push({
    author: `${activeNrUser.name} (${activeNrUser.role})`,
    text: text,
    time: new Date().toLocaleTimeString().substring(0, 5)
  });
  
  saveNrDatabase();
  input.value = "";
  renderAdminPreviewDetails();
}

// --- SLA TIMERS WORKFLOWS ---
function checkIsSLAOverdue(sub) {
  const submitTime = new Date(sub.submittedTime);
  const now = new Date();
  const diffMs = now - submitTime;
  const diffMins = Math.floor(diffMs / 60000);
  return diffMins > sub.slaMinutes;
}

function updateSLATimers() {
  if (state.appMode !== 'newsroom' || activeNewsroomTab !== 'admin') return;
  
  const sub = NR_SUBMISSIONS.find(s => s.id === activeAdminSelectionId);
  if (!sub || sub.status === 'PUBLISHED' || sub.status === 'REJECTED') return;
  
  const submitTime = new Date(sub.submittedTime);
  const slaTargetTime = new Date(submitTime.getTime() + sub.slaMinutes * 60000);
  const now = new Date();
  
  const diffMs = slaTargetTime - now;
  const clockEl = document.getElementById('ctrl-sla-time');
  
  if (diffMs <= 0) {
    clockEl.innerText = "OVERDUE (Escalating...)";
    clockEl.className = "sla-timer-clock text-danger";
    
    // Auto-escalation trigger if overdue longer than 5 mins
    const overdueMins = Math.floor(Math.abs(diffMs) / 60000);
    if (overdueMins > 5 && sub.status !== 'ESCALATED') {
      sub.status = 'ESCALATED';
      sub.comments.push({
        author: 'SLA Engine',
        text: 'Review time exceeded. Auto-escalated to Chief Editors.',
        time: 'Auto'
      });
      logAuditAction('SLA Engine', 'Automated Service', 'Auto-escalation SLA Breach', sub.id, 'SUBMITTED', 'ESCALATED');
      
      fetch(`/api/submissions/${sub.id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'ESCALATED',
          actor: 'SLA Engine',
          comment: 'Review time exceeded. Auto-escalated to Chief Editors.'
        })
      }).catch(e => console.warn("SLA backend update failed", e));

      saveNrDatabase();
      renderAll();
    }
  } else {
    const hours = Math.floor(diffMs / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((diffMs % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((diffMs % 60000) / 1000).toString().padStart(2, '0');
    clockEl.innerText = `${hours}:${minutes}:${seconds}`;
    clockEl.className = "sla-timer-clock text-warning";
  }
}

// --- COMMAND CENTER AND USER MANAGEMENT ---
function renderCommandCenter() {
  // Stats
  document.getElementById('cmd-stat-pending').innerText = NR_SUBMISSIONS.filter(s=>s.status !== 'PUBLISHED' && s.status !== 'REJECTED').length;
  
  // Count SLA violations
  const violations = NR_SUBMISSIONS.filter(s => s.status !== 'PUBLISHED' && s.status !== 'REJECTED' && checkIsSLAOverdue(s)).length;
  document.getElementById('cmd-stat-sla').innerText = violations;
  
  // Render user accounts table
  const tbody = document.getElementById('superadmin-user-table-body');
  tbody.innerHTML = Object.entries(NEWSROOM_USERS).map(([key, u]) => `
    <tr>
      <td>${u.id}</td>
      <td style="font-weight:700;">${u.name.split(' (')[0]}</td>
      <td>${u.cityScope === 'all' ? 'National (India)' : u.cityScope}</td>
      <td>${u.role}</td>
      <td><span class="status-pill ${u.status === 'Active' ? 'approved' : 'rejected'}">${u.status}</span></td>
      <td>
        <button class="user-suspend-btn ${u.status === 'Suspended' ? 'active-state' : ''}" onclick="toggleUserStatus('${key}')">
          ${u.status === 'Active' ? 'Suspend' : 'Activate'}
        </button>
      </td>
    </tr>
  `).join('');
}

function toggleUserStatus(userKey) {
  const u = NEWSROOM_USERS[userKey];
  if (!u) return;
  
  if (u.id === activeNrUser.id) {
    alert("Super Admin Protection: You cannot suspend your active session profile.");
    return;
  }
  
  const prev = u.status;
  u.status = u.status === 'Active' ? 'Suspended' : 'Active';
  
  logAuditAction(activeNrUser.id, activeNrUser.role, 'User Status Modification', u.id, prev, u.status);
  renderNewsroomWorkspace();
}

function openCreateUserDialog() {
  showDialog('dialog-create-user');
}

function adjustScopeSelectorsInUserCreation(role) {
  const cityWrapper = document.getElementById('new-user-city-wrapper');
  if (role === 'State Admin') {
    cityWrapper.style.display = 'none';
  } else {
    cityWrapper.style.display = 'block';
  }
}

function adjustCitiesInUserCreation(state) {
  const select = document.getElementById('new-user-city');
  select.innerHTML = "";
  if (state === 'Telangana') {
    select.innerHTML = `
      <option value="Hyderabad">Hyderabad</option>
      <option value="Warangal">Warangal</option>
    `;
  } else {
    select.innerHTML = `
      <option value="Visakhapatnam">Visakhapatnam</option>
      <option value="Vijayawada">Vijayawada</option>
      <option value="Tirupati">Tirupati</option>
    `;
  }
}

function handleSuperadminCreateUser(event) {
  event.preventDefault();
  
  const name = document.getElementById('new-user-name').value;
  const role = document.getElementById('new-user-role').value;
  const uState = document.getElementById('new-user-state').value;
  const city = document.getElementById('new-user-city').value;
  const email = document.getElementById('new-user-email').value;
  
  const key = `user_${Date.now()}`;
  const randomId = `BTV-${uState === 'Telangana' ? 'TG' : 'AP'}-${role === 'City Admin' ? 'A' : 'R'}-00${Math.floor(Math.random()*90)+10}`;
  
  const newAccount = {
    id: randomId,
    name: name,
    email: email,
    role: role,
    stateScope: uState,
    cityScope: role === 'State Admin' ? 'all' : city,
    status: 'Active',
    metrics: { total: 0, published: 0 }
  };
  
  NEWSROOM_USERS[key] = newAccount;
  closeDialog('dialog-create-user');
  
  // Log superadmin action
  logAuditAction(activeNrUser.id, activeNrUser.role, 'Personnel Account Created', randomId, 'none', 'Active');
  
  alert(`Corporate Account ${randomId} created successfully.`);
  renderNewsroomWorkspace();
}

function showReporterDetailsModal(key) {
  const u = NEWSROOM_USERS[key];
  if (!u) return;
  alert(`Corporate ID card:\n\nName: ${u.name}\nRole: ${u.role}\nUnique ID: ${u.id}\nGeographic Scope: ${u.cityScope}, ${u.stateScope}\nPublished Stories: ${u.metrics.published}\nAccount Status: ${u.status}`);
}

// --- IMMUTABLE AUDIT LOG LEDGER VIEW ---
function renderAuditLedger() {
  const tbody = document.getElementById('audit-logs-table-body');
  tbody.innerHTML = NR_AUDIT_LOGS.map(log => `
    <tr>
      <td>${log.timestamp}</td>
      <td style="font-weight:700;">${log.actorId}</td>
      <td>${log.actorRole}</td>
      <td>${log.action}</td>
      <td style="color:var(--color-secondary);">${log.entity}</td>
      <td>${log.prevState}</td>
      <td>${log.postState}</td>
      <td>${log.ipAddress}</td>
    </tr>
  `).join('');
}

function filterAuditLogsTable() {
  const query = document.getElementById('audit-filter-input').value.toLowerCase();
  const role = document.getElementById('audit-role-filter').value;
  
  const rows = document.querySelectorAll('#audit-logs-table-body tr');
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    const actorRole = row.cells[2].innerText;
    
    const matchesQuery = text.includes(query);
    const matchesRole = role === 'all' || actorRole === role;
    
    if (matchesQuery && matchesRole) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function filterQueueList() {
  const query = document.getElementById('queue-search').value.toLowerCase();
  const priority = document.getElementById('queue-priority-filter').value;
  const city = document.getElementById('queue-city-filter').value;
  
  const cards = document.querySelectorAll('#admin-queue-list .queue-card');
  cards.forEach(card => {
    const title = card.querySelector('h4').innerText.toLowerCase();
    const priorityTag = card.querySelector('.priority-badge').innerText;
    const cityTag = card.querySelector('.queue-card-meta span:last-child').innerText;
    
    const matchesQuery = title.includes(query);
    const matchesPriority = priority === 'all' || priorityTag === priority;
    const matchesCity = city === 'all' || cityTag === city;
    
    if (matchesQuery && matchesPriority && matchesCity) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
