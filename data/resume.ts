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
    role: "Frontend Team Lead (Interim)",
    company: "Zurfte Empowercare Foundation – Vaibez Mobile App",
    location: "Remote",
    period: "April 2026 – Aug. 2026",
    points: [
      "Led 6 frontend developers on a React Native (Expo) and TypeScript app, tracking 30+ tasks and driving delivery across the onboarding, search, video and notification features.",
      "Delivered 15 user journeys covering onboarding, search, video uploads and password recovery using React Navigation, Zustand for state management and React Query for data fetching and caching.",
      "Reviewed pull requests, enforced CI checks (TypeScript, ESLint, Jest) and coordinated backend API integration.",
    ],
  },
  {
    role: "Backend Web Dev Intern",
    company: "Nobel Navigators",
    location: "Washington Blvd — Remote",
    period: "June 2025 – Aug. 2025",
    points: [
      "Mentored 10+ peers in Python and Flask over 5+ sessions, covering backend logic, UI structuring, conversational AI and prompt engineering.",
      "Contributed to backend development and debugging across 3+ team projects.",
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
  featured?: boolean;
};

export const projects: Project[] = [
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
    slug: "strata",
    name: "Strata — Ownership Graph Platform",
    tagline: "Tracing beneficial ownership through layered shell structures",
    stack: ["Python", "FastAPI", "CognoDB (Graph DB)", "Groq API", "Docker"],
    points: [
      "Layered holdings hide who controls a company and OFAC 50% rule breaches. Built multi-hop Cypher traversals over a graph model, plus a Groq natural language interface over 5 pre-tested queries.",
      "Surfaces beneficial owners and potential OFAC violations, validated by 39 passing tests.",
    ],
    link: {
      label: "View on GitHub",
      href: "https://github.com/Pranay2603/Strata",
    },
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
