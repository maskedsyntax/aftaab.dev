export type FeaturedProject = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  category: string;
  /** Optional cover under `public/` (e.g. `/images/projects/botttle.svg`) */
  coverImage?: string;
  /** Coded UI preview instead of a static image (marketing-style mini UI) */
  coverVariant?:
    | "botttle-preview"
    | "trelay-preview"
    | "repogrep-preview"
    | "hashprep-preview"
    | "eirafocus-preview";
  /** Hint to the layout about the preview's natural orientation */
  mediaOrientation?: "landscape" | "portrait";
  challenge: string;
  solution: string;
  impact: string;
  liveUrl: string;
  repoUrl?: string;
};

export const heroCopy = {
  /** Short display-headline phrase that sits above the name */
  eyebrow: "Product designer · Full-stack engineer",
  /** Sub-name tagline */
  tagline:
    "I design and build products for the web and mobile, from the first interface sketch to shipped code.",
  /** Paired with the tagline */
  intro:
    "Most of my time sits between Figma and the editor. I work across design, frontend, and the full stack.",
  /** Secondary line under the hero */
  subline:
    "Currently taking on select client work and a couple of personal products.",
  /** Status chip shown in the contact surface */
  availability: "Available for new projects",
  /** Short caption beneath the contact card */
  location: "Based in India · Works worldwide",
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "eirafocus",
    name: "EiraFocus",
    role: "Designer & Mobile Developer",
    tagline:
      "A calm mobile companion for deep work. Focus sessions, rituals, and gentle accountability.",
    category: "Mobile · Design",
    challenge:
      "Most focus apps feel like productivity equipment. Aggressive timers, streak pressure, cluttered dashboards. People who actually struggle with focus need something calmer: an interface that makes it easy to start, and a rhythm that's easy to come back to.",
    solution:
      "EiraFocus is built around a single breathing ring, the visual anchor for each session, with a thin routine layer for the rituals before and after. The palette is warm and low-contrast so it reads as calm. Type and motion are tuned to feel unhurried. The app is mobile-first in Flutter, with native haptics and transitions. Every interaction is designed to lower the cost of starting a session.",
    impact:
      "Shipping as an MVP with the core focus loop, session history, and rituals. The design language and motion system will guide everything that follows.",
    liveUrl: "https://eirafocus.com",
    coverVariant: "eirafocus-preview",
    mediaOrientation: "landscape",
  },
  {
    id: "botttle",
    name: "Botttle",
    role: "Product Designer & Full-Stack Developer",
    tagline:
      "A self-hosted client portal that brings projects, invoicing, and time tracking into one workspace.",
    category: "Product · SaaS",
    challenge:
      "Running a client business usually takes four or five tools stitched together. Every handoff between them loses information. The interfaces are dense, loud, and built for teams rather than a single person.",
    solution:
      "I designed one workspace that fits the rhythm of client work. A quiet dashboard. A simple client-facing portal. A backend that keeps projects, payments, and time connected. The visual language stays restrained, with lots of whitespace and a single accent. Self-hosted so the data stays yours.",
    impact:
      "A complete MVP that replaces several SaaS tools with one owned system, and a design language I now reuse across my product work.",
    liveUrl: "https://botttle.dev",
    repoUrl: "https://github.com/growvth/botttle",
    coverVariant: "botttle-preview",
    mediaOrientation: "landscape",
  },
  {
    id: "trelay",
    name: "Trelay",
    role: "Full-Stack Developer & Systems Engineer",
    tagline:
      "Developer-first URL management. Dashboard, CLI, and API in a single self-hosted package.",
    category: "Infrastructure · Tooling",
    challenge:
      "Most URL shorteners are either consumer-simple or tied to centralised services. Developers who want self-hosted control end up compromising on usability, automation, or integration.",
    solution:
      "Trelay has a dashboard, a CLI, and an API. All three share the same surface, so you carry one mental model across every entry point. Expiring links, one-time access, analytics, and custom routing ship in a single container. The UI feels like a developer tool: dense information, clear affordances.",
    impact:
      "Teams can manage links as part of their own infrastructure, with the polish of a hosted service.",
    liveUrl: "https://trelay.dev",
    repoUrl: "https://github.com/trelay-dev/trelay",
    coverVariant: "trelay-preview",
    mediaOrientation: "landscape",
  },
  {
    id: "repogrep",
    name: "RepoGrep",
    role: "Full-Stack Developer",
    tagline: "Structured, fast code search across repositories.",
    category: "Developer Tooling",
    challenge:
      "Cross-repository search is usually slow, fragmented, or stuck at basic keyword match. Developers need something that respects how codebases actually get explored.",
    solution:
      "RepoGrep pairs a clean query UI with a performance-focused backend. The interface is deliberately small, built for developers who live in a terminal. Search is tuned for real exploration, with structured queries and fast lookups.",
    impact:
      "A practical utility that makes large or unfamiliar codebases faster to understand.",
    liveUrl: "https://repogrep.maskedsyntax.com",
    repoUrl: "https://github.com/maskedsyntax/repogrep",
    coverVariant: "repogrep-preview",
    mediaOrientation: "landscape",
  },
  {
    id: "hashprep",
    name: "HashPrep",
    role: "Full-Stack Developer & System Designer",
    tagline: "Structured interview prep with ML-ready foundations.",
    category: "ML Systems",
    challenge:
      "Most interview-prep tools either lack structure or don't adapt to how people actually study. Layering in intelligent features means bridging product design with machine learning from day one.",
    solution:
      "A structured prep platform that tracks progress, organises problems, and guides study. Alongside the app, it ships ML components, CLI tools, and libraries so it can grow into a data-driven learning platform.",
    impact:
      "A foundation for a scalable, ML-integrated learning product that stays structured and extensible as it grows.",
    liveUrl: "https://hashprep.com",
    repoUrl: "https://github.com/cachevector/hashprep",
    coverVariant: "hashprep-preview",
    mediaOrientation: "landscape",
  },
];

export const selectedWorksIntro =
  "Products I've designed and built end to end. Mobile companions, client tools, and developer infrastructure. Each one starts with the interface people touch.";

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

export const workPageIntro =
  "Flagship case studies live on the home page. This page lists the rest. Products in progress and builds I'm shipping in the open.";

export const workPageExternalLinks = {
  github: "https://github.com/MaskedSyntax",
  portfolio: "https://maskedsyntax.com",
} as const;

export const specializations = {
  items: [
    "UI/UX design for web and mobile",
    "Frontend engineering with React, Next.js, Svelte, and Tailwind",
    "Mobile apps in Flutter",
    "Full-stack product development from idea to release",
    "Developer tools and ML-integrated systems",
  ],
  whyMe: {
    title: "Why me over an agency?",
    body: [
      "You get one person across the whole product. Research, interface, and the system underneath all live in the same head. Nothing gets lost in a handoff. No account managers sit between the decision and the pixel.",
      "I care about typography, motion, and restraint on the design side. I care about code that holds up as the product grows on the build side. It's the same pair of hands across both.",
    ],
  },
};

export const processSteps = [
  {
    title: "Listen & frame",
    text: "I start with the people the product is for. What they actually do, where the friction lives. Frame the problem before framing the solution.",
  },
  {
    title: "Sketch & design",
    text: "Low-fi flows first, then Figma. Shape the interface, the type, the motion. Put decisions in front of you so they can be pressure-tested.",
  },
  {
    title: "Build with intent",
    text: "Design and code keep informing each other as I go. React or Flutter on the surface, clean services behind them. Motion and state are built in from the start.",
  },
  {
    title: "Iterate in the open",
    text: "Ship, measure, refine. Loading states. Transitions. Empty states. The small details that turn a working product into one that feels finished.",
  },
];

export const processPolish =
  "Close attention to state, loading, and interaction feedback. The small details turn a working product into one that feels right.";

export const aboutShort = [
  "I'm a product designer and full-stack engineer.",
  "Most of my time is spent between Figma and the editor. I design interfaces and motion, then build them across web and mobile.",
  "I like working with founders and small teams where design and engineering share one head.",
];

export const stackCategories = [
  {
    name: "Design & interface",
    items: ["Figma", "Framer Motion", "Shadcn UI", "Tailwind CSS", "Design tokens"],
  },
  {
    name: "Web frontend",
    items: ["React", "Next.js", "Svelte"],
  },
  {
    name: "Mobile",
    items: [
      "Flutter",
      "React Native",
      "SwiftUI",
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "Expo",
    ],
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
  "I pick tools by what the product needs and what the team can maintain.";

/** Short intro under the Contact heading—invite work and conversation. */
export const contactIntro =
  "I work with founders and small teams on web and mobile products, from first design to shipped code. If you have a project in mind, or just want to say hello, drop me a line.";

export const contactLinks = [
  {
    key: "email",
    href: "mailto:aftaab@aftaab.dev",
    label: "aftaab@aftaab.dev",
    external: false,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/aftaabsiddiqui/",
    label: "LinkedIn",
    external: true,
  },
  {
    key: "x",
    href: "https://x.com/aftaab___",
    label: "X",
    external: true,
  },
  {
    key: "github",
    href: "https://github.com/MaskedSyntax",
    label: "GitHub",
    external: true,
  },
] as const;

export const contactGithubUrl = contactLinks.find((l) => l.key === "github")!.href;
