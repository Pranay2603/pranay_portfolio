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
  "Full stack AI developer working across Python, FastAPI, React, and LangChain — building RAG systems, backend architecture, and shipping them to production under real constraints, not just prototypes.";

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
    role: "Backend Web Dev Intern",
    company: "Nobel Navigators",
    location: "Washington Blvd — Remote",
    period: "June 2025 – Aug. 2025",
    points: [
      "Conducted web development sessions for 10+ peers, teaching Python and Flask backend workflows.",
      "Collaborated on 3+ team projects, contributing to backend development and debugging.",
      "Delivered 5+ sessions on backend logic, UI structuring, conversational AI, and prompt engineering.",
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
      "Built and deployed a multi-user AI support platform on Render using FastAPI, Groq Llama 3.3, and SQLite — with secure authentication, persistent chat history, and an analytics dashboard.",
      "Developed a PDF-based RAG pipeline using FastEmbed and FAISS, enabling source-aware document question answering with low-latency retrieval.",
      "Optimized memory usage by replacing PyTorch with FastEmbed, reducing the deployment footprint to fit Render's 512 MB limit while maintaining sub-3s response time.",
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
      "Compliance analysts had no way to trace who ultimately controls a company through layered shell structures, or catch violations of OFAC's 50%-aggregation rule across indirect holdings.",
      "Built a graph data model on CognoDB with parameterized multi-hop Cypher traversals to resolve beneficial ownership and flag circular shareholding and shared registered addresses.",
      "Added a Groq-powered natural-language layer mapping free-text questions to five pre-tested queries; validated by 39 passing tests and live deployment on Render.",
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
      "Developed a rule-based scam detection engine with 25+ heuristic checks, achieving 85% detection accuracy across text and URL-based scams.",
      "Implemented secure authentication with Google OAuth, OTP-based recovery, password hashing, and session management for protected user access.",
      "Designed a SQLite-backed history module to maintain personalized scam analysis records and user activity tracking.",
      "Built a risk-scoring dashboard with AI-generated explanations and deployed on Render with secure environment-based configuration.",
    ],
    link: {
      label: "View on GitHub",
      href: "https://github.com/Pranay2603/scam-detector.git",
    },
  },
];

export const stack = {
  Languages: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  "Frameworks & Libraries": [
    "FastAPI",
    "Flask",
    "React",
    "LangChain",
    "LangGraph",
    "Jinja2",
    "SQLAlchemy",
  ],
  "Databases & AI Tools": [
    "PostgreSQL",
    "SQLite",
    "Redis",
    "ChromaDB",
    "CognoDB (Graph DB)",
    "FAISS",
    "FastEmbed",
    "Hugging Face",
    "Groq API",
    "Google Gemini API",
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
