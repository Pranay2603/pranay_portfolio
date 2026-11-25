export const person = {
  name: "Pranay Gupta",
  role: "Software Engineer",
  phone: "+91 9056129686",
  email: "pranaygupta585@gmail.com",
  linkedin: "http://www.linkedin.com/in/pranay-gupta-11aab4293",
  github: "https://github.com/Pranay2603",
};

export const education = [
  { school: "IIT Madras Online", degree: "B.S. in Data Science, Minor in Programming", period: "May 2023 – May 2027" },
  { school: "Guru Nanak Dev University", degree: "B.Tech in Electronics and Computer Engineering", period: "July 2023 – July 2027" },
];

export const experience = [
  {
    role: "React Native Developer",
    company: "Zurfte Empowercare Foundation · Vaibez Mobile App",
    where: "Remote",
    period: "April 2026 – Aug. 2026",
    points: [
      "Delivered 15 user journeys from a backlog of 30+ tracked tasks in a React Native (Expo) and TypeScript app, covering onboarding, search and discovery, video upload and password recovery.",
      "Designed the video upload flow as a state machine with unit tests, adding progress tracking and retry on failure; kept client state in Zustand and server data in React Query.",
      "Reviewed 40+ PRs and blocked merges containing fixtures, QA bypass code and mock data; CI checks surfaced 15 outdated Expo packages and a jest-expo mismatch.",
    ],
  },
  {
    role: "Backend Web Dev Intern",
    company: "Nobel Navigators",
    where: "Remote",
    period: "June 2025 – Aug. 2025",
    points: [
      "Developed and debugged backend logic in Python and Flask across 3+ team projects.",
      "Coached 10+ peers over 5+ sessions in the final two weeks on Flask, backend logic, conversational AI and prompts.",
    ],
  },
];

export const stack = {
  Languages: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS"],
  "Frameworks & Libraries": ["NestJS", "FastAPI", "Flask", "React", "React Native", "Expo", "Zustand", "React Query", "LangChain", "LangGraph", "SQLAlchemy", "Tailwind CSS", "Vite", "BullMQ"],
  "Databases & AI Tools": ["PostgreSQL", "Redis", "SQLite", "ChromaDB", "FAISS", "FastEmbed", "Hugging Face", "Groq API", "Google Gemini API", "Neo4j/Cypher", "CognoDB"],
  "Tools & Concepts": ["Git", "GitHub", "Docker", "Kubernetes", "REST APIs", "WebSockets", "RAG Systems", "Lua scripting", "Load testing", "JWT", "OAuth", "CI/CD"],
};

export type Node = { id: string; x: number; y: number; w: number; h: number; label: string; sub?: string; hot?: boolean };
export type Edge = { id: string; d: string; dash?: boolean; hot?: boolean; packet?: boolean };
export type Note = { id: string; x: number; y: number; t: string; anchor?: "start" | "middle" | "end"; hot?: boolean };
export type Step = { title: string; text: string; nodes: string[]; edges: string[]; notes?: string[] };

export type Featured = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  stack: string[];
  metrics: { v: string; l: string }[];
  links: { label: string; href: string }[];
  viewBox: [number, number];
  nodes: Node[];
  edges: Edge[];
  notes: Note[];
  steps: Step[];
  caption?: string;
};

export const tilt: Featured = {
  slug: "tilt",
  index: "01",
  name: "Tilt",
  tagline: "An A/B testing engine that stops feeding traffic to the losing variant.",
  stack: ["NestJS", "PostgreSQL", "Redis (Lua)", "BullMQ", "TypeScript", "React", "Docker"],
  metrics: [
    { v: "3,300+", l: "requests / sec, one machine" },
    { v: "27 ms", l: "p99 latency" },
    { v: "~90%", l: "of 20,000 visitors sent to the best variant" },
    { v: "0 / 44,000+", l: "requests lost or double-counted" },
  ],
  links: [
    { label: "Live demo", href: "https://tilt-jade.vercel.app" },
    { label: "GitHub", href: "https://github.com/Pranay2603/tilt" },
  ],
  viewBox: [1000, 520],
  nodes: [
    { id: "visitor", x: 10, y: 232, w: 150, h: 58, label: "Visitor", sub: "wants a variant" },
    { id: "api", x: 215, y: 232, w: 160, h: 58, label: "NestJS API", sub: "Zod-validated" },
    { id: "redis", x: 440, y: 80, w: 170, h: 66, label: "Redis · Lua", sub: "Thompson sampling", hot: true },
    { id: "queue", x: 440, y: 380, w: 170, h: 58, label: "BullMQ queue", sub: "write-behind" },
    { id: "worker", x: 665, y: 380, w: 150, h: 58, label: "Worker", sub: "retries + backoff" },
    { id: "pg", x: 835, y: 232, w: 155, h: 66, label: "PostgreSQL", sub: "source of truth" },
  ],
  edges: [
    { id: "e1", d: "M160,261 L215,261", packet: true },
    { id: "e2", d: "M375,250 C415,250 405,113 440,113", hot: true, packet: true },
    { id: "e3", d: "M525,146 L525,380", packet: true },
    { id: "e4", d: "M610,409 L665,409", packet: true },
    { id: "e5", d: "M815,409 C875,409 912,350 912,298", packet: true },
    { id: "e6", d: "M912,232 C912,113 800,113 610,113", dash: true, hot: true },
  ],
  notes: [
    { id: "n1", x: 395, y: 66, t: "assign + count in one atomic script", anchor: "start", hot: true },
    { id: "n2", x: 540, y: 270, t: "events leave the hot path", anchor: "start" },
    { id: "n3", x: 770, y: 98, t: "audit: Redis vs PostgreSQL", anchor: "middle", hot: true },
  ],
  steps: [
    { title: "Request", text: "A visitor asks which variant to show. The NestJS API validates the call with a Zod pipe and passes it straight to Redis.", nodes: ["visitor", "api"], edges: ["e1"] },
    { title: "Decide in Redis", text: "One atomic Lua script samples each variant's Beta posterior, picks a winner and records the assignment. No read-then-write gap, so concurrent requests cannot race.", nodes: ["redis"], edges: ["e2"], notes: ["n1"] },
    { title: "Write behind", text: "The event is queued and the response returns without waiting for PostgreSQL. Job ids are deterministic, so a retried job never double-counts.", nodes: ["queue"], edges: ["e3"], notes: ["n2"] },
    { title: "Persist", text: "A BullMQ worker saves to PostgreSQL with retries and backoff. Conversions use an idempotent UPDATE ... WHERE converted_at IS NULL, and a reward that lands early is retried until its assignment exists.", nodes: ["worker", "pg"], edges: ["e4", "e5"] },
    { title: "Audit", text: "An audit endpoint compares Redis counters with PostgreSQL rows. After 44,000+ requests: zero lost, zero double-counted. 18 tests caught 2 real race conditions along the way.", nodes: [], edges: ["e6"], notes: ["n3"] },
  ],
};

export const strata: Featured = {
  slug: "strata",
  index: "02",
  name: "Strata",
  tagline: "Finds who really controls a company through layers of shell entities.",
  stack: ["Python", "FastAPI", "React", "TypeScript", "CognoDB", "openCypher", "Groq API", "Docker"],
  metrics: [
    { v: "1,115", l: "companies, 489 individuals" },
    { v: "~5,300", l: "relationships in the graph" },
    { v: "9,000 → 2 ms", l: "database outage, fast failure" },
    { v: "250 → 75 ms", l: "round trip, app moved to the DB region" },
  ],
  links: [{ label: "GitHub", href: "https://github.com/Pranay2603/Strata" }],
  viewBox: [1000, 590],
  caption: "Ownership chain below is illustrative. The real graph is synthetic.",
  nodes: [
    { id: "ask", x: 0, y: 30, w: 124, h: 60, label: "Question", sub: "plain English" },
    { id: "llm", x: 175, y: 30, w: 124, h: 60, label: "Groq", sub: "picks 1 of 5" },
    { id: "cache", x: 350, y: 30, w: 124, h: 60, label: "TTL cache", sub: "repeat = free" },
    { id: "breaker", x: 525, y: 30, w: 124, h: 60, label: "Breaker", sub: "fails in 2 ms" },
    { id: "graph", x: 700, y: 30, w: 124, h: 60, label: "CognoDB", sub: "openCypher", hot: true },
    { id: "answer", x: 875, y: 30, w: 124, h: 60, label: "Answer", sub: "owners + OFAC" },
    { id: "target", x: 600, y: 210, w: 130, h: 46, label: "Target Co" },
    { id: "ha", x: 420, y: 320, w: 130, h: 46, label: "Holdco A" },
    { id: "hb", x: 780, y: 320, w: 130, h: 46, label: "Holdco B" },
    { id: "shell", x: 420, y: 430, w: 130, h: 46, label: "Shell Ltd" },
    { id: "p1", x: 420, y: 530, w: 130, h: 46, label: "Owner", sub: "beneficial" },
    { id: "p2", x: 780, y: 430, w: 130, h: 46, label: "Owner", sub: "beneficial · OFAC", hot: true },
  ],
  edges: [
    { id: "a1", d: "M124,60 L175,60" },
    { id: "a2", d: "M299,60 L350,60" },
    { id: "a3", d: "M474,60 L525,60" },
    { id: "a4", d: "M649,60 L700,60" },
    { id: "g0", d: "M740,90 C740,150 665,150 665,210", hot: true },
    { id: "g1", d: "M630,256 C630,290 485,285 485,320" },
    { id: "g2", d: "M700,256 C700,290 845,285 845,320" },
    { id: "g3", d: "M485,366 L485,430" },
    { id: "g4", d: "M485,476 L485,530" },
    { id: "g5", d: "M845,366 L845,430", hot: true },
    { id: "a5", d: "M824,60 L875,60", hot: true },
  ],
  notes: [
    { id: "m1", x: 587, y: 118, t: "9,000 ms → 2 ms", anchor: "middle", hot: true },
    { id: "m2", x: 775, y: 130, t: "250 → 75 ms", anchor: "start", hot: true },
    { id: "m3", x: 925, y: 410, t: "≥ 50% → flagged", anchor: "end", hot: true },
  ],
  steps: [
    { title: "Ask", text: "A plain-English question comes in from the React and TypeScript frontend to the FastAPI backend.", nodes: ["ask"], edges: [] },
    { title: "Constrain the model", text: "Groq only chooses one of 5 pre-tested queries and fills in parameters. The model never writes Cypher, so it can only pick what is known to work.", nodes: ["llm"], edges: ["a1"] },
    { title: "Cache, then guard", text: "Repeat questions come from a TTL cache. If the database stops responding, the circuit breaker opens and requests fail in about 2 ms instead of waiting out a 9,000 ms timeout.", nodes: ["cache", "breaker"], edges: ["a2", "a3"], notes: ["m1"] },
    { title: "Traverse", text: "Multi-hop openCypher over the ownership graph. Moving the app into the database's region cut round trips from about 250 ms to 75 ms.", nodes: ["graph", "target", "ha", "hb", "shell"], edges: ["a4", "g0", "g1", "g2", "g3"], notes: ["m2"] },
    { title: "Resolve owners", text: "The walk ends at the real beneficial owners and flags any holding that crosses the OFAC 50% rule.", nodes: ["p1", "p2", "answer"], edges: ["g4", "g5", "a5"], notes: ["m3"] },
  ],
};

export const small = [
  {
    name: "AI Scam Detection System",
    tagline: "Rule-based scam detection with 85% accuracy across text and URLs.",
    stack: ["Python", "Flask", "SQLite", "Google OAuth"],
    points: [
      "25+ heuristic checks (credential harvesting, urgency, impersonation) plus URL and domain forensics.",
      "Explainable risk scoring, with logins secured through Google OAuth.",
    ],
    href: "https://github.com/Pranay2603/scam-detector.git",
  },
];
