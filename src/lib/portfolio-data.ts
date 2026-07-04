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
    | "eirafocus-preview"
    | "patterns-preview"
    | "openconduit-preview"
    | "steepr-preview"
    | "queriously-preview"
    | "cairnly-preview";
  /** Hex accent color extracted from the thumbnail, used for the card hover glow */
  accentColor?: string;
  /** Hint to the layout about the preview's natural orientation */
  mediaOrientation?: "landscape" | "portrait";
  /** "full" cards span the whole grid row; "half" (default) pair up in two columns */
  gridSpan?: "full" | "half";
  challenge: string;
  solution: string;
  impact: string;
  liveUrl: string;
  repoUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export const heroCopy = {
  eyebrow: "iOS engineer · Flutter developer · Product designer",
  tagline:
    "I design and build mobile apps for iOS and Android, and ship web products from first sketch to production code.",
  intro:
    "Most of my time sits between Xcode, Figma, and the editor. I build native Swift/SwiftUI apps, cross-platform Flutter apps, and the occasional full-stack web product.",
  subline:
    "Currently taking on select client work. Mobile-first, but comfortable across the stack.",
  availability: "Available for new projects",
  location: "Based in India · Works worldwide",
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "steepr",
    name: "Steepr",
    role: "Designer & iOS Developer",
    tagline:
      "A beautifully crafted tea brewing companion for iPhone and Apple Watch. Curated presets, iCloud sync, and native Watch complications.",
    category: "iOS · watchOS",
    challenge:
      "Tea brewing is surprisingly precise — different teas, different temperatures, different times. Most timers are generic. Building for Apple Watch means the interaction has to work in a glance, with one tap, while your hands are busy.",
    solution:
      "Steepr ships native on iPhone (SwiftUI + SwiftData) and Apple Watch (WatchKit). The iPhone app holds your tea library and brewing history; the Watch face is a single steep timer with haptic feedback when done. CloudKit keeps both in sync. WidgetKit puts your most-brewed tea one tap from the Home Screen.",
    impact:
      "A polished App Store app that demonstrates native Swift platform depth — SwiftUI, WatchKit, SwiftData, WidgetKit, and CloudKit all working together in a single cohesive product.",
    liveUrl: "https://steepr.maskedsyntax.com",
    appStoreUrl: "https://apps.apple.com/us/app/steepr/id6775478425",
    coverImage: "/images/projects/steepr.png",
    accentColor: "#3B7A57",
    mediaOrientation: "landscape",
  },
  {
    id: "cairnly",
    name: "Cairnly",
    role: "Designer & Full-Stack Developer",
    tagline:
      "A self-hosted CRM for founders and small teams. Contacts, deal pipelines, and activity, all on your own server.",
    category: "Product · SaaS · Self-hosted",
    challenge:
      "Hosted CRMs are expensive, opinionated, and hand your data to a third party. Founders running lean sales processes don't need fifty integrations — they need a clean contacts view, a simple pipeline, and full ownership of their data.",
    solution:
      "Cairnly is a self-hosted CRM built with Next.js, tRPC, Drizzle ORM, and PostgreSQL. Docker-friendly deployment means it runs on any VPS in minutes. The interface is intentionally minimal — contacts, pipeline stages, and activity logs without the bloat.",
    impact:
      "A production CRM that a solo founder can spin up, own completely, and trust with their pipeline data.",
    liveUrl: "https://cairnly.app",
    coverImage: "/images/projects/cairnly.png",
    accentColor: "#C2714F",
    gridSpan: "full",
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
    coverImage: "/images/projects/botttle.png",
    accentColor: "#2563EB",
    mediaOrientation: "landscape",
  },
  {
    id: "queriously",
    name: "Queriously",
    role: "Designer & Engineer",
    tagline:
      "Local-first macOS PDF reader and research copilot. Cited Q&A, marginalia, and session trails. No cloud required.",
    category: "macOS · AI Tooling",
    challenge:
      "Academic and technical research is scattered: PDFs in one place, notes in another, AI answers with no provenance. You can't trust a summary you can't trace back to the source.",
    solution:
      "Queriously indexes papers locally and lets you ask questions with citations. Every answer traces to a page and sentence. Marginalia, sessions, and evidence trails stay on disk. Built with Tauri 2 and Rust for the shell, React for the UI, and a Python sidecar (FastAPI + sentence-transformers + ChromaDB) for the AI layer.",
    impact:
      "A research environment where answers are traceable and everything stays private — no API keys required for the core experience.",
    liveUrl: "https://queriously.app",
    coverImage: "/images/projects/queriously.png",
    accentColor: "#CC3333",
    mediaOrientation: "landscape",
  },
  {
    id: "patterns",
    name: "Patterns",
    role: "Designer & Mobile Developer",
    tagline:
      "A privacy-first OCD journal and ERP companion. On-device, no cloud. Available on iPhone, iPad, Mac, and Android.",
    category: "Cross-Platform · iOS · Android · macOS",
    challenge:
      "OCD journaling needs a calm, structured surface. Most note apps are either too unstructured to surface patterns over time, or so clinical they raise the cost of writing.",
    solution:
      "Patterns ships as a Flutter app across iOS, iPadOS, macOS, and Android. A dated entry list, a quiet editor, and a privacy-first local model. All data stays on-device via Drift/SQLite — no account, no sync, no exposure. The interface is designed to make starting an entry effortless, and to make trends visible across days without turning reflection into a dashboard.",
    impact:
      "A private companion for people working through OCD-style thinking, useful on its own and as preparation for clinical conversations.",
    liveUrl: "https://patterns.maskedsyntax.com",
    appStoreUrl: "https://apps.apple.com/us/app/patterns-ocd-journaling/id6762611172",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.maskedsyntax.patterns",
    coverImage: "/images/projects/patterns.png",
    accentColor: "#E6A817",
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
    coverImage: "/images/projects/trelay.png",
    accentColor: "#E91E8C",
    mediaOrientation: "landscape",
  },
  {
    id: "openconduit",
    name: "OpenConduit",
    role: "Product Designer & Full-Stack Developer",
    tagline:
      "Open-source WhatsApp CRM for solo operators and small teams. Self-hosted contacts, conversations, and pipelines.",
    category: "Product · SaaS",
    challenge:
      "Hosted WhatsApp CRMs are pricey, lock data behind seats, and force a specific workflow. Operators who run their business through chat want the same polish without giving up ownership of their pipeline.",
    solution:
      "OpenConduit is a self-hosted CRM built around the way solo operators actually work in WhatsApp. A clear conversation surface, lightweight pipelines, and an admin layer that stays out of the way. Docker-friendly deployment so it runs on the operator's own server.",
    impact:
      "A privacy-respecting CRM that scales from a single operator to a small team, without monthly per-seat costs.",
    liveUrl: "https://openconduit.dev",
    repoUrl: "https://github.com/growvth/openconduit",
    coverImage: "/images/projects/openconduit.png",
    accentColor: "#16A34A",
    gridSpan: "full",
    mediaOrientation: "landscape",
  },
];

export const selectedWorksIntro =
  "Products I've designed and built end to end. Native iOS apps, cross-platform mobile, and web products. Each one starts with the interface people touch.";

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
    id: "hashprep",
    name: "HashPrep",
    url: "https://hashprep.com",
    status: "live",
  },
  {
    id: "repogrep",
    name: "RepoGrep",
    url: "https://repogrep.maskedsyntax.com",
    status: "live",
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
    "Native iOS development with Swift & SwiftUI",
    "Cross-platform mobile apps with Flutter (iOS & Android)",
    "UI/UX design for mobile and web",
    "Full-stack web development (React, Next.js, Node)",
    "Self-hosted tools and developer infrastructure",
  ],
  whyMe: {
    title: "One person. Design and code.",
    body: [
      "You get one person across the whole product. Research, interface, and the system underneath all live in the same head. Nothing gets lost in a handoff. No account managers sit between the decision and the pixel.",
      "I care about native platform conventions on mobile and about code that holds up as the product grows. Design and engineering aren't two phases. They happen together.",
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
    text: "Design and code keep informing each other as I go. SwiftUI or Flutter on the surface, clean services behind them. Motion and state are built in from the start.",
  },
  {
    title: "Iterate in the open",
    text: "Ship, measure, refine. Loading states. Transitions. Empty states. The small details that turn a working product into one that feels finished.",
  },
];

export const processPolish =
  "Close attention to state, loading, and interaction feedback. The small details turn a working product into one that feels right.";

export const aboutShort = [
  "I'm a mobile engineer and product designer.",
  "Most of my time is spent between Xcode, Figma, and the editor. I build native iOS apps in Swift and cross-platform apps in Flutter, then design the interfaces they need.",
  "I like working with founders and small teams where design and engineering share one head.",
];

export const aboutFull = {
  paragraphs: [
    "I'm a mobile engineer and product designer based in India. I build native iOS apps with Swift and SwiftUI, cross-platform apps with Flutter, and the occasional full-stack web product, usually for founders who need one person to hold the whole thing together.",
    "I started out in design. Figma, flows, components, the whole pipeline. But the handoff kept losing something: the feel, the detail, the intention. So I learned to code, and somewhere along the way realized I preferred being the person who does both. These days I'm most at home in Xcode, but I still care about how things look and feel down to the animation curve.",
    "I like working with small teams where design and engineering aren't separate departments. If you need someone who can take an app from first sketch to the App Store without a translation layer in the middle, that's the work I'm built for.",
  ],
  meta: [
    { label: "Based in", value: "India" },
    { label: "Available for", value: "iOS · Flutter · Product design" },
    { label: "Shipped", value: "5 apps on the App Store" },
  ],
};

export const stackCategories = [
  {
    name: "Mobile",
    items: ["Flutter", "SwiftUI", "Swift", "Kotlin Multiplatform", "Jetpack Compose", "React Native", "Expo"],
  },
  {
    name: "Design & interface",
    items: ["Figma", "Framer Motion", "Shadcn UI", "Tailwind CSS", "Design tokens"],
  },
  {
    name: "Web frontend",
    items: ["React", "Next.js", "Svelte"],
  },
  {
    name: "Backend & APIs",
    items: ["Flask", "FastAPI", "Django", "Express", "Fastify", "Go"],
  },
  {
    name: "Systems & languages",
    items: ["Rust", "C++", "Python"],
  },
  {
    name: "Runtime & tooling",
    items: ["Bun", "Node.js", "Docker"],
  },
];

export const stackNote =
  "I pick tools by what the product needs and what the team can maintain.";

export const contactIntro =
  "I work with founders and small teams on mobile and web products, from first design to shipped code. If you have a project in mind, or just want to say hello, drop me a line.";

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

/** Apps published on the App Store, Mac App Store, and Google Play */
export type AppStoreApp = {
  id: string;
  name: string;
  tagline: string;
  /** Platforms the app is available on */
  platforms: string[];
  /** One-line tech callout e.g. "Swift · SwiftUI · WatchKit" */
  tech: string;
  /** Path under public/ e.g. /images/apps/steepr-icon.png */
  iconPath: string;
  appStoreUrl?: string;
  macAppStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
};

export const appleApps: AppStoreApp[] = [
  {
    id: "steepr",
    name: "Steepr",
    tagline: "Tea brewing companion with curated presets, Apple Watch support, and iCloud sync.",
    platforms: ["iOS", "iPadOS", "Apple Watch"],
    tech: "Swift · SwiftUI · WatchKit · SwiftData · CloudKit",
    iconPath: "/images/apps/steepr-icon.png",
    appStoreUrl: "https://apps.apple.com/us/app/steepr/id6775478425",
    websiteUrl: "https://steepr.maskedsyntax.com",
  },
  {
    id: "splashy",
    name: "Splashy Sketchpad",
    tagline: "Native macOS infinite whiteboard for ideas, diagrams, and architecture sketches.",
    platforms: ["macOS"],
    tech: "Swift · SwiftUI · AppKit · C",
    iconPath: "/images/apps/splashy-icon.png",
    macAppStoreUrl: "https://apps.apple.com/us/app/splashy-sketchpad/id6780165807?mt=12",
    websiteUrl: "https://splashy.maskedsyntax.com",
  },
  {
    id: "patterns-app",
    name: "Patterns",
    tagline: "Privacy-first OCD journal and ERP companion. Everything stays on-device.",
    platforms: ["iOS", "iPadOS", "macOS", "Android"],
    tech: "Flutter · Dart · Riverpod · Drift",
    iconPath: "/images/apps/patterns-icon.png",
    appStoreUrl: "https://apps.apple.com/us/app/patterns-ocd-journaling/id6762611172",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.maskedsyntax.patterns",
    websiteUrl: "https://patterns.maskedsyntax.com",
  },
  {
    id: "lofikofi",
    name: "Lofikofi",
    tagline: "Offline-first focus workspace: Pomodoro timers, ambient sounds, Kanban, and notes.",
    platforms: ["macOS"],
    tech: "Flutter · Dart · Riverpod · Drift",
    iconPath: "/images/apps/lofikofi-icon.png",
    macAppStoreUrl: "https://apps.apple.com/us/app/lofikofi-focus-timer/id6778009453?mt=12",
    websiteUrl: "https://lofikofi.space",
  },
  {
    id: "rise-and-rattle",
    name: "Rise & Rattle",
    tagline: "Modern Snakes & Ladders with colorful visuals and local multiplayer.",
    platforms: ["iOS", "iPadOS"],
    tech: "Flutter · Dart · Riverpod",
    iconPath: "/images/apps/rise-and-rattle-icon.png",
    appStoreUrl: "https://apps.apple.com/us/app/rise-rattle/id6781202438",
    websiteUrl: "https://riseandrattle.maskedsyntax.com",
  },
];
