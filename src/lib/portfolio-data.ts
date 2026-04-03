export type FeaturedProject = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  category: string;
  /** Optional cover under `public/` (e.g. `/images/projects/botttle.svg`) */
  coverImage?: string;
  /** Coded UI preview instead of a static image (e.g. botttle marketing shell) */
  coverVariant?: "botttle-preview";
  challenge: string;
  solution: string;
  impact: string;
  liveUrl: string;
  repoUrl: string;
};

export const heroCopy = {
  /** One line under the name — not a wall of headline text */
  tagline:
    "I build full-stack products and dev tooling—infra through ML—with systems thinking and open source from CacheVector.",
  /** Former “headline” — body copy below the tagline */
  intro:
    "I design and build software systems that stay approachable for users while staying engineered for reliability and growth.",
  subline:
    "Systems, tools, and products across web, infrastructure, and machine learning.",
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "botttle",
    name: "Botttle",
    role: "Full Stack Developer & Product Designer",
    tagline:
      "Unified client portal for projects, invoicing, and time tracking—self-hosted.",
    category: "Product / SaaS",
    challenge:
      "Freelancers often rely on multiple disconnected tools for managing clients, projects, invoices, and time tracking. This creates fragmented workflows and poor client experience. I wanted a single, self-hosted system that provides full control without sacrificing usability.",
    solution:
      "I built a unified client portal combining project management, invoicing, and time tracking into one cohesive system. Key decisions: a minimal, distraction-free dashboard; a client-facing portal for transparency; structured backend models connecting projects, payments, and logs into a single system. The system is fully self-hosted, giving users ownership over their data and workflows.",
    impact:
      "A complete MVP that replaces multiple SaaS tools with a single system, improving workflow efficiency while maintaining simplicity.",
    liveUrl: "https://botttle.dev",
    repoUrl: "https://github.com/growvth/botttle",
    coverVariant: "botttle-preview",
  },
  {
    id: "trelay",
    name: "Trelay",
    role: "Full Stack Developer & Systems Engineer",
    tagline:
      "Developer-first, self-hosted URL management—dashboard, CLI, and API.",
    category: "Infrastructure / Tooling",
    challenge:
      "Most URL shorteners are either overly simplistic or tied to centralized services, limiting control, extensibility, and privacy. Developers who want self-hosted solutions often have to compromise on usability, automation, or ecosystem integration.",
    solution:
      "I built a developer-first, self-hosted URL management system that combines a modern dashboard, CLI, and API into a single cohesive platform. Key decisions: unified dashboard + CLI + API parity; automation-friendly workflows for scripting and integrations; privacy and control with self-hosted deployment; structured features like expiring links, one-time access, analytics, and custom routing. The system is packaged as a single-container deployment.",
    impact:
      "Trelay enables developers to manage links as part of their infrastructure rather than relying on third-party tools—demonstrating how developer tooling can be powerful and accessible without sacrificing control or simplicity.",
    liveUrl: "https://trelay.dev",
    repoUrl: "https://github.com/trelay-dev/trelay",
    coverImage: "/images/projects/trelay.svg",
  },
  {
    id: "repogrep",
    name: "RepoGrep",
    role: "Full Stack Developer",
    tagline:
      "Structured, fast code search across repositories for real workflows.",
    category: "Developer Tooling",
    challenge:
      "Searching across repositories is often slow, fragmented, or limited to basic keyword matching. Developers lack fast and flexible tools for exploring codebases efficiently.",
    solution:
      "I built a tool for structured and fast code search across repositories, focusing on usability and speed: a clean interface for query-based searching; efficient backend handling for fast lookups; design aimed at real developer workflows rather than generic search.",
    impact:
      "A practical developer utility that improves how codebases are explored and understood, especially for large or unfamiliar projects.",
    liveUrl: "https://repogrep.maskedsyntax.com",
    repoUrl: "https://github.com/maskedsyntax/repogrep",
    coverImage: "/images/projects/repogrep.svg",
  },
  {
    id: "hashprep",
    name: "HashPrep",
    role: "Full Stack Developer & System Designer",
    tagline:
      "Structured interview prep with ML-ready foundations and extensibility.",
    category: "ML Systems",
    challenge:
      "Most interview preparation tools either lack structure or fail to adapt to how users actually study and track progress. Integrating intelligent features requires bridging product design with machine learning.",
    solution:
      "I built a structured preparation platform with features for tracking progress, organizing problems, and guiding study workflows. Beyond the core product: supporting ML components; CLI tools and libraries for extensibility; a system designed to evolve into a data-driven platform.",
    impact:
      "A foundation for a scalable, ML-integrated learning platform that combines structured workflows with extensibility.",
    liveUrl: "https://hashprep.com",
    repoUrl: "https://github.com/cachevector/hashprep",
    coverImage: "/images/projects/hashprep.svg",
  },
];

export const selectedWorksIntro =
  "A selection of systems and tools I’ve designed and built, ranging from developer infrastructure to full-scale products. Each project focuses on solving a specific problem with clarity, structure, and long-term usability in mind.";

/** Full catalog on `/projects` — everything not covered by `featuredProjects` case studies */
export type WorkListStatus = "live" | "in-progress" | "future";

export type WorkListItem = {
  id: string;
  name: string;
  url: string;
  status: WorkListStatus;
  note?: string;
};

export const additionalWorkProjects: WorkListItem[] = [
  {
    id: "lofikofi",
    name: "LofiKofi",
    url: "https://lofikofi.space",
    status: "live",
  },
  {
    id: "patterns",
    name: "Patterns",
    url: "https://patterns.maskedsyntax.com",
    status: "live",
  },
  {
    id: "cachevector",
    name: "CacheVector",
    url: "https://cachevector.com",
    status: "live",
    note: "Lab & open source hub",
  },
  {
    id: "eirafocus",
    name: "EiraFocus",
    url: "https://eirafocus.com",
    status: "in-progress",
  },
  {
    id: "foliomint",
    name: "FolioMint",
    url: "https://foliomint.site",
    status: "in-progress",
  },
  {
    id: "queriously",
    name: "Queriously",
    url: "https://queriously.app",
    status: "future",
  },
];

export const cacheVectorOpenSourceLibraries = [
  { name: "hashprep", href: "https://github.com/cachevector/hashprep" },
  { name: "fuzzybunny", href: "https://github.com/cachevector/fuzzybunny" },
  { name: "doqtor", href: "https://github.com/cachevector/doqtor" },
  { name: "image-diff", href: "https://github.com/cachevector/image-diff" },
] as const;

export const workPageIntro =
  "Flagship work with full case studies lives on the home page. This page lists the rest—lab tools, additional products, and builds in progress—plus open-source libraries from CacheVector.";

export const workPageExternalLinks = {
  github: "https://github.com/MaskedSyntax",
  portfolio: "https://maskedsyntax.com",
} as const;

export const labContent = {
  title: "CacheVector — Lab & open source",
  body: [
    "Alongside product development, I run a small lab focused on open-source tools and machine learning systems. If I build something useful, parts of it should be reusable by others.",
    "Through this work I’ve developed tools for data processing, fuzzy matching, and image-based analysis—contributing back while exploring practical ML applications.",
  ],
  contributions: cacheVectorOpenSourceLibraries.map((p) => p.name),
};

export const specializations = {
  items: [
    "Full-stack product development (from idea to production)",
    "Developer tools and internal systems",
    "ML-integrated applications and data-driven features",
    "Performance-focused and scalable architectures",
  ],
  whyMe: {
    title: "Why me over an agency?",
    body: [
      "I approach projects as systems, not just interfaces. My background in backend engineering and machine learning allows me to design products that are clean on the surface and structurally sound underneath.",
      "I focus on long-term reliability and clarity, not just speed of delivery.",
    ],
  },
};

export const processSteps = [
  {
    title: "Understand the problem",
    text: "I start by understanding the problem beyond surface-level requirements.",
  },
  {
    title: "Design minimal interfaces",
    text: "Then I design minimal, structured interfaces aligned with the underlying workflows.",
  },
  {
    title: "Build on strong foundations",
    text: "I build with a strong backend foundation to ensure scalability and predictability.",
  },
  {
    title: "Iterate and refine",
    text: "I refine through iteration, focusing on performance, edge cases, and interaction details.",
  },
];

export const processPolish =
  "I pay close attention to state handling, loading behavior, and interaction feedback—the details that make a product feel complete.";

export const aboutShort = [
  "I build software with a focus on clarity, structure, and long-term usability.",
  "With a background in backend engineering and machine learning, I think in terms of systems rather than isolated features.",
  "I create products that are easy to use and technically reliable underneath—and I enjoy working with founders and teams who care about building meaningful, well-engineered products.",
];

export const stackCategories = [
  {
    name: "Web & mobile",
    items: ["React", "Next.js", "Svelte", "Tailwind CSS", "Shadcn UI", "Flutter"],
  },
  {
    name: "Backend & APIs",
    items: ["Flask", "FastAPI", "Django", "Express", "Fastify", "Go"],
  },
  {
    name: "Systems & languages",
    items: ["C++", "Python", "Rust"],
  },
  {
    name: "Runtime & tooling",
    items: ["Bun", "Node.js", "Docker"],
  },
];

export const stackNote =
  "I choose tools based on the problem, constraints, and long-term maintainability over trends.";

export const contactCopy = {
  email: "mailto:aftaab@aftaab.xyz",
  github: "https://github.com/MaskedSyntax",
  line: "Let’s build something meaningful.",
};
