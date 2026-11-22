// All content below is sourced directly from Pranay Gupta's resume.
// Nothing here is invented — copy is tightened for the web, facts are untouched.

export const person = {
  name: "Pranay Gupta",
  role: "Full Stack AI Developer",
  location: "India",
  phone: "+91 9056129686",
  email: "pranaygupta585@gmail.com",
  linkedin: "http://www.linkedin.com/in/pranay-gupta-11aab4293",
  linkedinLabel: "linkedin.com/in/pranay-gupta",
  github: "https://github.com/Pranay2603",
  githubLabel: "github.com/Pranay2603",
};

export const summary =
  "Full Stack Developer experienced in building web applications and REST APIs using Python, FastAPI, Flask and React. Skilled in RAG systems, graph databases, backend development and cloud deployment.";

export const education = [
  {
    school: "IIT Madras Online",
    location: "",
    degree: "B.S. in Data Science, Minor in Programming",
    period: "May 2023 – May 2027",
  },
  {
    school: "Guru Nanak Dev University",
    location: "Amritsar, Punjab",
    degree: "B.Tech in Electronics and Computer Engineering",
    period: "July 2023 – July 2027",
  },
];

export const experience = [
  {
    role: "React Native Developer",
    company: "Zurfte Empowercare Foundation – Vaibez Mobile App",
    location: "Remote",
    period: "April 2026 – Aug. 2026",
    points: [
      "Delivered 15 user journeys in a React Native (Expo) and TypeScript app, including onboarding and search and discovery, from a backlog of 30+ tracked tasks.",
      "Built video upload with progress and retry on failure, modeled as a state machine with unit tests; Zustand holds client state and React Query handles server data and caching.",
      "Reviewed 40+ pull requests and blocked merges containing fixtures, QA bypass code and mock data; Expo Doctor caught 15 outdated Expo packages in CI.",
    ],
  },
  {
    role: "Backend Web Dev Intern",
    company: "Nobel Navigators",
    location: "Washington Blvd — Remote",
    period: "June 2025 – Aug. 2025",
    points: [
      "Developed and debugged Python and Flask backend logic across 3+ team projects.",
      "In the final two weeks, mentored 10+ peers over 5+ sessions on Flask, backend logic, conversational AI and prompt engineering.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  points: string[];
  link: { label: string; href: string };
  live?: { label: string; href: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "strata",
    name: "Strata: Ownership Graph Platform",
    tagline: "Finds who really controls a company through layers of shell entities",
    stack: ["Python", "FastAPI", "React", "TypeScript", "CognoDB (Graph DB)", "openCypher", "Groq API", "Docker"],
    points: [
      "Multi-hop openCypher queries over a synthetic graph of 1,115 companies, 489 individuals and about 5,300 relationships surface beneficial owners and flag OFAC 50% rule breaches.",
      "Groq only picks one of 5 pre-tested queries, so the model never writes Cypher. A circuit breaker turns a 9,000 ms database timeout into a 2 ms fast failure.",
      "Moving the app into the database's region cut round trips from about 250 ms to 75 ms. Also a TTL cache, health endpoints, Docker and 40+ tests.",
    ],
    link: {
      label: "View on GitHub",
      href: "https://github.com/Pranay2603/Strata",
    },
    live: { label: "Live demo", href: "https://strata-tsg6.onrender.com" },
    featured: true,
  },
  {
    slug: "resolveai",
    name: "ResolveAI Platform",
    tagline: "Multi-user AI support platform with document-grounded answers",
    stack: ["Python", "FastAPI", "LangChain", "Groq API", "FAISS", "SQLite"],
    points: [
      "Answers sit buried in long PDFs. Built a RAG platform (FastAPI, LangChain, FastEmbed, FAISS) with auth and chat history; swapped PyTorch for FastEmbed to fit Render's 512 MB limit.",
      "Source-aware PDF answers in under 3 seconds, designed to run as an AI chatbot on company websites.",
    ],
    link: {
      label: "View on GitHub",
      href: "https://github.com/Pranay2603/AI-Support-Copilot.git",
    },
    featured: true,
  },
  {
    slug: "scam-detection",
    name: "AI Scam Detection System",
    tagline: "Rule-based scam detection with 85% accuracy across text and URLs",
    stack: ["Python", "Flask", "SQLite", "Google OAuth"],
    points: [
      "Scams are hard to spot on sight. Built a rule-based detector with 25+ heuristic checks (credential harvesting, urgency, impersonation) and URL/domain forensics; secured logins with Google OAuth.",
      "85% accuracy with explainable risk scoring.",
    ],
    link: {
      label: "View on GitHub",
      href: "https://github.com/Pranay2603/scam-detector.git",
    },
  },
];

export const stack = {
  Languages: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS"],
  "Frameworks & Libraries": [
    "React Native",
    "Expo",
    "React",
    "FastAPI",
    "Flask",
    "Zustand",
    "React Query",
    "LangChain",
    "LangGraph",
    "Jinja2",
    "SQLAlchemy",
    "Tailwind CSS",
    "Vite",
  ],
  "Databases & AI Tools": [
    "PostgreSQL",
    "SQLite",
    "Redis",
    "ChromaDB",
    "FAISS",
    "FastEmbed",
    "Hugging Face",
    "Groq API",
    "Google Gemini API",
    "Neo4j/Cypher",
    "CognoDB",
  ],
  "Tools & Concepts": [
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "Render",
    "REST APIs",
    "WebSockets",
    "RAG Systems",
    "Authentication",
    "Vector Embeddings",
    "JWT",
    "OAuth",
    "CI/CD",
  ],
};

// The RAG pipeline as actually implemented in ResolveAI — used for the
// interactive diagram. Every stage below is drawn from the resume bullets,
// nothing added.
export const ragPipeline = [
  {
    id: "upload",
    label: "PDF Upload",
    detail: "User uploads a source document to the platform.",
  },
  {
    id: "chunk",
    label: "Chunking",
    detail: "Document is split into passages for retrieval.",
  },
  {
    id: "embed",
    label: "FastEmbed",
    detail:
      "Passages are embedded with FastEmbed — swapped in for PyTorch to cut the deployment footprint under Render's 512 MB limit.",
  },
  {
    id: "index",
    label: "FAISS Index",
    detail: "Embeddings are indexed in FAISS for low-latency similarity search.",
  },
  {
    id: "retrieve",
    label: "Retrieval",
    detail: "A query pulls the most relevant passages from the index.",
  },
  {
    id: "generate",
    label: "Groq Llama 3.3",
    detail:
      "Retrieved passages are passed to Llama 3.3 on Groq to generate a source-aware answer, sub-3s response time.",
  },
];

// The request path through Strata. Stage order follows the request; each detail
// describes what the stage does in the app.
export const strataFlow = [
  {
    id: "ask",
    label: "Question",
    detail: "A plain-English question is typed into the React and TypeScript frontend and sent to the FastAPI backend.",
  },
  {
    id: "classify",
    label: "Groq classifier",
    detail:
      "Groq maps the question to one of 5 pre-tested queries and fills in its parameters. It never writes Cypher itself, so the model can only choose from queries that are already known to work.",
  },
  {
    id: "cache",
    label: "TTL cache",
    detail: "Repeat questions are answered from a time-limited cache instead of hitting the database again.",
  },
  {
    id: "breaker",
    label: "Circuit breaker",
    detail:
      "If the database stops responding, the breaker opens and requests fail in about 2 ms instead of waiting out a 9,000 ms timeout. Health endpoints report the state.",
  },
  {
    id: "graph",
    label: "CognoDB graph",
    detail:
      "The query runs as multi-hop openCypher over Bolt against the ownership graph. The app sits in the database's region, which cut round trips from about 250 ms to 75 ms.",
  },
  {
    id: "answer",
    label: "Owners + OFAC",
    detail:
      "The result shows the ownership chain to the real beneficial owners and flags holdings that cross the OFAC 50% rule.",
  },
];
