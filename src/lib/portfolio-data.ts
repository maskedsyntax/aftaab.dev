/* ────────────────────────────────────────────────────────────────
   Studios
   Two labels ship the apps on this site. Colour association lives in
   the components (see `studio-badge.tsx`): warm = MaskedSyntax,
   primary/teal = Gentleloop Labs.
   ──────────────────────────────────────────────────────────────── */

export type StudioId = "maskedsyntax" | "gentleloop";

export type Studio = {
  id: StudioId;
  name: string;
  /** Mono eyebrow — what the label is for */
  focus: string;
  blurb: string;
  url?: string;
};

export const studios: Record<StudioId, Studio> = {
  maskedsyntax: {
    id: "maskedsyntax",
    name: "MaskedSyntax",
    focus: "Everyday apps",
    blurb:
      "Cameras, timers, plant care, whiteboards. Small apps with one job each, built native when the platform pays for it and cross-platform when it doesn't.",
    url: "https://maskedsyntax.com",
  },
  gentleloop: {
    id: "gentleloop",
    name: "Gentleloop Labs",
    focus: "Mental health apps",
    blurb:
      "Journals and companions for OCD, ADHD, and daily reflection. Local-first by default, because this is the kind of data people want staying on their own device.",
    url: "https://gentlelooplabs.com",
  },
};

export const studioOrder: StudioId[] = ["maskedsyntax", "gentleloop"];

/* ────────────────────────────────────────────────────────────────
   Shipped apps
   Declared before `heroCopy` / `aboutFull` so those can derive counts
   from it. Moving this below them is a module-load ReferenceError.
   ──────────────────────────────────────────────────────────────── */

export type AppStoreApp = {
  id: string;
  name: string;
  tagline: string;
  studio: StudioId;
  /** Platforms the app is available on */
  platforms: string[];
  /** One-line tech callout e.g. "Swift · SwiftUI · WatchKit" */
  tech: string;
  /** Shown on the card when the app has no case study of its own */
  category?: string;
  /** Card wash colour, for apps without a case study */
  accentColor?: string;
  /** Absent means live. */
  status?: "live" | "coming-soon";
  /** Short qualifier shown in place of a store pill when not yet live */
  note?: string;
  /** Path under public/ e.g. /images/apps/steepr-icon.png */
  iconPath: string;
  appStoreUrl?: string;
  macAppStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
};

/** Steepr stays last. */
export const appleApps: AppStoreApp[] = [
  {
    id: "splashy",
    name: "Splashy Sketchpad",
    tagline:
      "Native macOS infinite whiteboard for ideas, diagrams, and architecture sketches.",
    studio: "maskedsyntax",
    platforms: ["macOS"],
    tech: "Swift · SwiftUI · AppKit · C",
    iconPath: "/images/apps/splashy-icon.png",
    macAppStoreUrl:
      "https://apps.apple.com/us/app/splashy-sketchpad/id6780165807?mt=12",
    websiteUrl: "https://splashy.maskedsyntax.com",
  },
  {
    id: "patterns-app",
    name: "Patterns",
    tagline:
      "Privacy-first OCD journal and ERP companion. Everything stays on-device.",
    studio: "gentleloop",
    platforms: ["iOS", "iPadOS", "macOS", "Android"],
    tech: "Flutter · Dart · Riverpod · Drift",
    iconPath: "/images/apps/patterns-icon.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/patterns-ocd-journaling/id6762611172",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.maskedsyntax.patterns",
    websiteUrl: "https://patternsocd.com",
  },
  {
    id: "lofikofi",
    name: "Lofikofi",
    tagline:
      "Offline-first focus workspace: Pomodoro timers, ambient sounds, Kanban, and notes.",
    studio: "maskedsyntax",
    platforms: ["macOS"],
    tech: "Swift · SwiftUI · AppKit",
    iconPath: "/images/apps/lofikofi-icon.png",
    macAppStoreUrl:
      "https://apps.apple.com/us/app/lofikofi-focus-timer/id6778009453?mt=12",
    websiteUrl: "https://lofikofi.space",
  },
  {
    id: "rise-and-rattle",
    name: "Rise & Rattle",
    tagline:
      "Modern Snakes & Ladders with colorful visuals and local multiplayer.",
    studio: "maskedsyntax",
    platforms: ["iOS", "iPadOS"],
    tech: "Flutter · Dart · Riverpod",
    category: "iOS · Game",
    accentColor: "#C8A22E",
    iconPath: "/images/apps/rise-and-rattle-icon.png",
    appStoreUrl: "https://apps.apple.com/us/app/rise-rattle/id6781202438",
    websiteUrl: "https://riseandrattle.maskedsyntax.com",
  },
  {
    id: "tumble",
    name: "Tumble",
    tagline:
      "Instant camera with a twelve-shot roll and a wait before the frame develops.",
    studio: "maskedsyntax",
    platforms: ["iOS"],
    tech: "Swift · SwiftUI · Core Image · AVFoundation",
    iconPath: "/images/apps/tumble-icon.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/tumble-instant-camera/id6788386458",
    websiteUrl: "https://gettumbleapp.com",
  },
  {
    id: "cambium",
    name: "Cambium",
    tagline:
      "Plant identification and care that reports how confident it actually is.",
    studio: "maskedsyntax",
    platforms: ["iOS", "iPadOS"],
    tech: "Swift · SwiftUI · Cloudflare Workers",
    iconPath: "/images/apps/cambium-icon.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/cambium-plant-care-health/id6790491406",
    websiteUrl: "https://getcambiumapp.com",
  },
  {
    id: "glowe",
    name: "Glowe",
    tagline:
      "Prayer and reflection journal with a daily affirmation home-screen widget.",
    studio: "gentleloop",
    platforms: ["iOS", "iPadOS"],
    tech: "Flutter · Dart · WidgetKit",
    iconPath: "/images/apps/glowe-icon.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/glowe-daily-affirmations/id6794949733",
    websiteUrl: "https://www.getglowe.app",
  },
  {
    id: "rezumate",
    name: "Rezumate",
    tagline:
      "Native resume optimization scored against applicant tracking systems.",
    studio: "maskedsyntax",
    platforms: ["iOS", "iPadOS"],
    tech: "Swift · SwiftUI · FastAPI",
    iconPath: "/images/apps/rezumate-icon.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/rezumate-ats-resume-ai/id6787700238",
    websiteUrl: "https://rezumate.app",
  },
  {
    id: "kindling",
    name: "Kindling",
    tagline:
      "Task-initiation app for ADHD. Name the task, take one tiny step, start a two-minute timer.",
    studio: "gentleloop",
    platforms: ["iOS"],
    tech: "Swift · SwiftUI",
    category: "iOS · ADHD",
    accentColor: "#E8632A",
    status: "coming-soon",
    note: "In review",
    iconPath: "/images/apps/kindling-icon.png",
    websiteUrl: "https://kindling.gentlelooplabs.com",
  },
  {
    id: "steepr",
    name: "Steepr",
    tagline:
      "Tea brewing companion with curated presets, Apple Watch support, and iCloud sync.",
    studio: "maskedsyntax",
    platforms: ["iOS", "iPadOS", "Apple Watch"],
    tech: "Swift · SwiftUI · WatchKit · SwiftData · CloudKit",
    iconPath: "/images/apps/steepr-icon.png",
    appStoreUrl: "https://apps.apple.com/us/app/steepr/id6775478425",
    websiteUrl: "https://steepr.maskedsyntax.com",
  },
];

/** Derived so the hero stat and the about panel can never drift from the list. */
export const shippedCounts = {
  live: appleApps.filter((a) => a.status !== "coming-soon").length,
  pending: appleApps.filter((a) => a.status === "coming-soon").length,
} as const;

/** The shipped-app record behind a case study, when there is one. */
export function appForId(appId?: string): AppStoreApp | undefined {
  return appId ? appleApps.find((a) => a.id === appId) : undefined;
}

/** Apps a given label has shipped — used by the Labels cards. */
export function appCountForStudio(id: StudioId): number {
  return appleApps.filter((a) => a.studio === id).length;
}

/* ────────────────────────────────────────────────────────────────
   Featured case studies
   Array order is render order — `SelectedWorksGrid` does not sort.
   Exactly one entry may carry bentoSize "hero".
   ──────────────────────────────────────────────────────────────── */

export type FeaturedProject = {
  id: string;
  name: string;
  studio: StudioId;
  /** id of the matching `appleApps` entry — platforms, tech, icon, store links */
  appId?: string;
  role: string;
  tagline: string;
  category: string;
  /** Optional cover under `public/` (e.g. `/images/projects/tumble.png`) */
  coverImage?: string;
  /**
   * How the cover fills its card. Marketing art with text baked in must use
   * "contain" — cropping it mangles the headline. Photographs can use "cover".
   */
  coverFit?: "cover" | "contain";
  /** App icon, used as the card visual when there is no cover image */
  iconPath?: string;
  /** Hex accent color extracted from the artwork, used for the card hover glow */
  accentColor?: string;
  /** Hint to the layout about the preview's natural orientation */
  mediaOrientation?: "landscape" | "portrait";
  /** "hero" = full-width tall; "banner" = full-width short; "1x1" = half-width */
  bentoSize?: "hero" | "banner" | "1x1";
  challenge: string;
  solution: string;
  impact: string;
  liveUrl: string;
  repoUrl?: string;
  appStoreUrl?: string;
  macAppStoreUrl?: string;
  playStoreUrl?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "patterns",
    appId: "patterns-app",
    name: "Patterns",
    studio: "gentleloop",
    role: "Designer & Mobile Developer",
    tagline:
      "A privacy-first OCD journal and ERP companion. On-device, no cloud. Available on iPhone, iPad, Mac, and Android.",
    category: "Cross-Platform · iOS · Android · macOS",
    challenge:
      "OCD journaling needs a calm, structured surface. Most note apps are either too unstructured to surface patterns over time, or so clinical they raise the cost of writing.",
    solution:
      "Patterns ships as a Flutter app across iOS, iPadOS, macOS, and Android. A dated entry list, a quiet editor, and a privacy-first local model. All data stays on-device via Drift/SQLite — no account, no sync, no exposure. The interface is designed to make starting an entry effortless, and to make trends visible across days without turning reflection into a dashboard.",
    impact:
      "A private companion for people working through OCD-style thinking, useful on its own and as preparation for clinical conversations. A one-time Pro tier funds the work without renting the user's data.",
    liveUrl: "https://patternsocd.com",
    appStoreUrl:
      "https://apps.apple.com/us/app/patterns-ocd-journaling/id6762611172",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.maskedsyntax.patterns",
    repoUrl: "https://github.com/gentleloop-labs/patterns",
    coverImage: "/images/projects/patterns.png",
    coverFit: "contain",
    accentColor: "#E6A817",
    mediaOrientation: "landscape",
    bentoSize: "hero",
  },
  {
    id: "tumble",
    appId: "tumble",
    name: "Tumble",
    studio: "maskedsyntax",
    role: "Designer & iOS Developer",
    tagline:
      "An instant camera for iPhone. Twelve shots to a roll, and a wait before you see what you got.",
    category: "iOS · Camera",
    challenge:
      "Phone cameras removed every constraint that made a photograph deliberate. Fifty frames of the same moment, reviewed and culled on the spot. The pause that made a single frame worth composing disappeared along with the film.",
    solution:
      "Tumble puts the constraints back on purpose. A roll holds twelve shots. The shutter gives no preview. Frames develop on a delay, and shaking the phone speeds them along. Twenty-one film emulations render on device through Core Image, and finished rolls live in a private drawer rather than the system photo library.",
    impact:
      "A camera people open when they want to think about a photograph rather than collect one. Shipped on the App Store and now on its second major version.",
    liveUrl: "https://gettumbleapp.com",
    appStoreUrl:
      "https://apps.apple.com/us/app/tumble-instant-camera/id6788386458",
    coverImage: "/images/projects/tumble.png",
    coverFit: "cover",
    accentColor: "#E9915A",
    mediaOrientation: "landscape",
  },
  {
    id: "steepr",
    appId: "steepr",
    name: "Steepr",
    studio: "maskedsyntax",
    role: "Designer & iOS Developer",
    tagline:
      "A tea brewing companion for iPhone and Apple Watch. Curated presets, iCloud sync, and native Watch complications.",
    category: "iOS · watchOS",
    challenge:
      "Tea brewing is surprisingly precise — different teas, different temperatures, different times. Most timers are generic. Building for Apple Watch means the interaction has to work in a glance, with one tap, while your hands are busy.",
    solution:
      "Steepr ships native on iPhone (SwiftUI + SwiftData) and Apple Watch (WatchKit). The iPhone app holds your tea library and brewing history; the Watch face is a single steep timer with haptic feedback when done. CloudKit keeps both in sync. WidgetKit puts your most-brewed tea one tap from the Home Screen.",
    impact:
      "A polished App Store app that demonstrates native Swift platform depth — SwiftUI, WatchKit, SwiftData, WidgetKit, and CloudKit working together. Version 1.1 added a daily caffeine total and fixed infusion timing in the widget.",
    liveUrl: "https://steepr.maskedsyntax.com",
    appStoreUrl: "https://apps.apple.com/us/app/steepr/id6775478425",
    coverImage: "/images/projects/steepr.png",
    coverFit: "contain",
    accentColor: "#3B7A57",
    mediaOrientation: "landscape",
  },
  {
    id: "cambium",
    appId: "cambium",
    name: "Cambium",
    studio: "maskedsyntax",
    role: "Designer & iOS Developer",
    tagline:
      "Plant identification and care for iPhone, built to admit when it isn't sure.",
    category: "iOS · AI",
    challenge:
      "Plant identification apps answer with total confidence and are frequently wrong. A confident wrong answer about watering or light is worse than no answer, because the person acts on it and the plant pays.",
    solution:
      "Cambium identifies a plant from a photo and reports how certain the model actually is, so a low-confidence guess reads as one. Care instructions arrive with the identification instead of behind a separate lookup. A saved garden tracks what you own and what each plant needs, held on device. Model calls route through a Cloudflare Workers relay, which keeps credentials out of the shipped binary and makes the provider swappable.",
    impact:
      "Live on the App Store at 1.1, with an Android build in alpha. The confidence reporting is the part people mention.",
    liveUrl: "https://getcambiumapp.com",
    appStoreUrl:
      "https://apps.apple.com/us/app/cambium-plant-care-health/id6790491406",
    coverImage: "/images/projects/cambium.png",
    coverFit: "contain",
    accentColor: "#2E7D5B",
    mediaOrientation: "landscape",
  },
  {
    id: "glowe",
    appId: "glowe",
    name: "Glowe",
    studio: "gentleloop",
    role: "Designer & Mobile Developer",
    tagline:
      "A prayer and reflection journal for Christians, with a daily affirmation on the home screen.",
    category: "iOS · Journaling",
    challenge:
      "Devotional apps tend toward one of two failures: a content firehose that turns reflection into a reading backlog, or a bare notes field that gives the practice no shape at all.",
    solution:
      "Glowe keeps the daily surface to one affirmation and one place to write. A WidgetKit home-screen widget puts the day's affirmation where it gets seen without opening anything, which is the difference between a habit and an app you remember on Sundays. Built in Flutter, with entries stored locally and a mascot that carries the tone the typography can't.",
    impact:
      "Shipped on the App Store and now at 1.1 with the affirmation widget. The first Gentleloop Labs release outside the OCD and ADHD work.",
    liveUrl: "https://www.getglowe.app",
    appStoreUrl:
      "https://apps.apple.com/us/app/glowe-daily-affirmations/id6794949733",
    coverImage: "/images/projects/glowe.png",
    coverFit: "contain",
    accentColor: "#B061E8",
    mediaOrientation: "landscape",
  },
  {
    id: "rezumate",
    appId: "rezumate",
    name: "Rezumate",
    studio: "maskedsyntax",
    role: "Designer & iOS Developer",
    tagline:
      "Native resume optimization for iPhone, scored the way applicant tracking systems actually read a CV.",
    category: "iOS · Careers",
    challenge:
      "Resume advice is written for human readers, but the first reader is usually software. Applicants rewrite for tone and phrasing, then get filtered by a parser that never tells them what it failed to read.",
    solution:
      "Rezumate parses a resume the way an applicant tracking system does, scores it against the role being applied for, and points at the specific lines costing points rather than handing back a grade. The app is native Swift and SwiftUI; parsing and scoring run in a FastAPI service, so the analysis can be corrected without shipping a new build through review.",
    impact:
      "On the App Store at 1.0.3, with purchase verification handled server-side. Splitting a native client from a serviced analysis layer is what lets the scoring keep improving after release.",
    liveUrl: "https://rezumate.app",
    appStoreUrl:
      "https://apps.apple.com/us/app/rezumate-ats-resume-ai/id6787700238",
    repoUrl: "https://github.com/maskedsyntax/rezumate",
    iconPath: "/images/apps/rezumate-icon.png",
    accentColor: "#64748B",
    mediaOrientation: "landscape",
  },
  {
    id: "lofikofi",
    appId: "lofikofi",
    name: "Lofikofi",
    studio: "maskedsyntax",
    role: "Designer & macOS Developer",
    tagline:
      "An offline focus workspace for the Mac. Timers, ambient sound, a board, and notes in one window.",
    category: "macOS · Focus",
    challenge:
      "Focus tools fragment the thing they're meant to protect. A timer in one app, ambient sound in a browser tab, the task list somewhere else. Every context switch to manage focus is a context switch away from work.",
    solution:
      "One window holds the Pomodoro timer, the ambient mixer, a Kanban board, and notes, and none of it needs an account or a network. Version 2.0 is a full rewrite from Flutter to native Swift and SwiftUI with AppKit underneath, which is what made the drag-and-drop on the board and the audio behaviour feel like a Mac app instead of a port.",
    impact:
      "On the Mac App Store at 2.0.1. The rewrite is the interesting part: same product, second implementation, and a clear read on what the native layer actually bought.",
    liveUrl: "https://lofikofi.space",
    macAppStoreUrl:
      "https://apps.apple.com/us/app/lofikofi-focus-timer/id6778009453?mt=12",
    iconPath: "/images/apps/lofikofi-icon.png",
    accentColor: "#D9A277",
    mediaOrientation: "landscape",
  },
  {
    id: "splashy",
    appId: "splashy",
    name: "Splashy Sketchpad",
    studio: "maskedsyntax",
    role: "Designer & macOS Developer",
    tagline:
      "An infinite whiteboard for the Mac, for diagrams, architecture sketches, and thinking out loud.",
    category: "macOS · Drawing",
    challenge:
      "Whiteboard apps drift toward collaboration suites: accounts, documents, sharing models, sync conflicts. What's wanted most of the time is a surface that opens instantly and takes a stroke with no latency.",
    solution:
      "Splashy is a native macOS canvas with an infinite scroll plane and a rendering path tuned so strokes land under the cursor rather than behind it. The drawing core traces back to a C and Cairo implementation built for Linux, now driving a Swift and AppKit shell on the Mac. iPad input support is in beta.",
    impact:
      "On the Mac App Store as a paid app. The oldest codebase in this list, and the one that has crossed the most platforms.",
    liveUrl: "https://splashy.maskedsyntax.com",
    macAppStoreUrl:
      "https://apps.apple.com/us/app/splashy-sketchpad/id6780165807?mt=12",
    iconPath: "/images/apps/splashy-icon.png",
    accentColor: "#4C5C6B",
    mediaOrientation: "landscape",
  },

];

/* ────────────────────────────────────────────────────────────────
   Shipped cards
   One list for the Shipped section: the case studies in their curated
   order, then any remaining app that doesn't have a write-up yet.
   ──────────────────────────────────────────────────────────────── */

export type ShippedCard = {
  key: string;
  name: string;
  studio: StudioId;
  category: string;
  tagline: string;
  tech?: string;
  platforms: string[];
  iconPath: string;
  accentColor?: string;
  /** Present when there is a case study to read */
  caseStudySlug?: string;
  /** Where the card points when there is no case study */
  externalHref?: string;
  status?: "live" | "coming-soon";
  note?: string;
  appStoreUrl?: string;
  macAppStoreUrl?: string;
  playStoreUrl?: string;
};

export const shippedCards: ShippedCard[] = (() => {
  const claimed = new Set(
    featuredProjects.map((p) => p.appId).filter(Boolean) as string[],
  );

  const fromCaseStudies: ShippedCard[] = featuredProjects.map((p) => {
    const app = appForId(p.appId);
    return {
      key: p.id,
      name: p.name,
      studio: p.studio,
      category: p.category,
      tagline: p.tagline,
      tech: app?.tech,
      platforms: app?.platforms ?? [],
      iconPath: p.iconPath ?? app?.iconPath ?? "",
      accentColor: p.accentColor,
      caseStudySlug: p.id,
      status: app?.status,
      note: app?.note,
      appStoreUrl: app?.appStoreUrl ?? p.appStoreUrl,
      macAppStoreUrl: app?.macAppStoreUrl ?? p.macAppStoreUrl,
      playStoreUrl: app?.playStoreUrl ?? p.playStoreUrl,
    };
  });

  const rest: ShippedCard[] = appleApps
    .filter((a) => !claimed.has(a.id))
    .map((a) => ({
      key: a.id,
      name: a.name,
      studio: a.studio,
      category: a.category ?? a.platforms.join(" · "),
      tagline: a.tagline,
      tech: a.tech,
      platforms: a.platforms,
      iconPath: a.iconPath,
      accentColor: a.accentColor,
      externalHref:
        a.appStoreUrl ?? a.macAppStoreUrl ?? a.playStoreUrl ?? a.websiteUrl,
      status: a.status,
      note: a.note,
      appStoreUrl: a.appStoreUrl,
      macAppStoreUrl: a.macAppStoreUrl,
      playStoreUrl: a.playStoreUrl,
    }));

  return [...fromCaseStudies, ...rest];
})();

/* ────────────────────────────────────────────────────────────────
   AI & systems tooling
   Declared after `featuredProjects` so the sitemap's id-scraper
   (next-sitemap.config.js) can never reach these ids.
   ──────────────────────────────────────────────────────────────── */

export type AiTool = {
  id: string;
  name: string;
  tagline: string;
  /** Same grammar as AppStoreApp.tech */
  tech: string;
  platforms: string[];
  version?: string;
  url: string;
  repoUrl?: string;
  credit: string;
};

export const aiTools: AiTool[] = [
  {
    id: "voxflow",
    name: "VoxFlow",
    tagline:
      "System-wide dictation that transcribes on your own machine. Hold a chord, speak, and the text lands at the cursor.",
    tech: "Rust · Tauri · Whisper",
    platforms: ["macOS", "Linux", "Windows"],
    version: "v0.1.0 alpha",
    url: "https://voxflow.cachevector.com",
    repoUrl: "https://github.com/cachevector/voxflow",
    credit: "Cachevector",
  },
  {
    id: "utter",
    name: "Utter",
    tagline:
      "Local text-to-speech on the command line for Apple Silicon. Synthesis text never leaves the machine.",
    tech: "Python · MLX · Qwen3-TTS",
    platforms: ["macOS"],
    url: "https://github.com/cachevector/utter",
    repoUrl: "https://github.com/cachevector/utter",
    credit: "Cachevector",
  },
];

/* ────────────────────────────────────────────────────────────────
   Copy
   ──────────────────────────────────────────────────────────────── */

export const heroCopy = {
  eyebrow: "iOS engineer · Flutter developer · Product designer",
  tagline:
    "I design and build apps for iPhone, iPad, Apple Watch, and Mac, and ship them to the App Store myself.",
  intro:
    "Most of my time sits between Xcode and Figma. Native Swift and SwiftUI where the platform rewards it, Flutter where a second store is worth the trade, and the occasional web product behind them.",
  subline:
    "Currently taking on select client work. Mobile-first, comfortable across the stack.",
  availability: "Available for new projects",
  location: "Based in India · Works worldwide",
  stats: `${shippedCounts.live} apps shipped · iOS · watchOS · macOS · Android`,
};

export const labelsIntro =
  "The apps ship under two names. Which one depends on what the app is for.";

export const shippedIntro = `${appleApps.length} apps on the App Store, Mac App Store, and Google Play${
  shippedCounts.pending > 0 ? ", one of them still in review" : ""
}. The ones I've written up link through to the case study.`;

export const aiSystemsIntro =
  "Local-first speech tooling built under Cachevector. Rust and Python rather than Swift, and the reason the AI work in the apps above isn't guesswork.";

/* ────────────────────────────────────────────────────────────────
   Work list — everything not covered by a case study
   ──────────────────────────────────────────────────────────────── */

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
    id: "cairnly",
    name: "Cairnly",
    url: "https://cairnly.app",
    status: "live",
    note: "A self-hosted CRM for founders and small teams. Contacts, deal pipelines, and activity on your own server.",
  },
  {
    id: "botttle",
    name: "Botttle",
    url: "https://botttle.dev",
    status: "live",
    note: "A self-hosted client portal bringing projects, invoicing, and time tracking into one workspace.",
  },
  {
    id: "apimask",
    name: "ApiMask",
    url: "https://apimask.dev",
    status: "live",
    note: "Practical APIs for developer tools and website intelligence. 34 endpoints behind a single key.",
  },
  {
    id: "queriously",
    name: "Queriously",
    url: "https://queriously.app",
    status: "live",
    note: "Local-first macOS PDF reader and research copilot. Cited answers, marginalia, and session trails.",
  },
  {
    id: "trelay",
    name: "Trelay",
    url: "https://trelay.dev",
    status: "live",
    note: "Developer-first URL management. Dashboard, CLI, and API in a single self-hosted package.",
  },
  {
    id: "openconduit",
    name: "OpenConduit",
    url: "https://openconduit.dev",
    status: "live",
    note: "Open-source WhatsApp CRM for solo operators and small teams.",
  },
  {
    id: "hashprep",
    name: "HashPrep",
    url: "https://hashprep.com",
    status: "live",
    note: "Dataset profiler and debugger for machine learning workflows.",
  },
  {
    id: "repogrep",
    name: "RepoGrep",
    url: "https://repogrep.maskedsyntax.com",
    status: "live",
    note: "Local code search as a desktop app.",
  },
];

export const workPageIntro =
  "The apps live on the home page with full case studies. This page holds the rest: web products, developer tools, and self-hosted services I've built and shipped.";

export const workPageExternalLinks = {
  github: "https://github.com/MaskedSyntax",
} as const;

/* ────────────────────────────────────────────────────────────────
   Services, process, about, stack, contact
   ──────────────────────────────────────────────────────────────── */

export const specializations = {
  /** Title and description live together so they can't drift apart. */
  items: [
    {
      title: "Native iOS development with Swift & SwiftUI",
      description:
        "iPhone, iPad, Apple Watch, and Mac. Native, performant, and following platform conventions.",
    },
    {
      title: "Cross-platform mobile apps with Flutter",
      description:
        "One codebase, two stores. Pixel-perfect UI with native performance on iOS and Android.",
    },
    {
      title: "UI/UX design for mobile",
      description:
        "From Figma flows to shipped screens. Motion, typography, and interaction, considered together.",
    },
    {
      title: "App Store submission and release management",
      description:
        "Review, pricing, subscriptions, and phased releases. The part that sits between a finished build and a live app.",
    },
    {
      title: "AI features in mobile apps",
      description:
        "On-device inference and API-backed models, with the plumbing to keep credentials out of the binary.",
    },
    {
      title: "Web products and self-hosted tools",
      description:
        "React and Next.js front ends, and services that run on your own server and stay in your control.",
    },
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
    title: "Ship & iterate",
    text: "Through review and into the store, then measure and refine. Loading states. Transitions. Empty states. The small details that turn a working product into one that feels finished.",
  },
];

export const processPolish =
  "Close attention to state, loading, and interaction feedback. The small details turn a working product into one that feels right.";

export const aboutShort = [
  "I'm an iOS and mobile engineer, and a product designer.",
  "Most of my time is spent between Xcode and Figma. I build native apps in Swift and SwiftUI, cross-platform apps in Flutter, and design the interfaces they need.",
  "I like working with founders and small teams where design and engineering share one head.",
];

export const aboutFull = {
  paragraphs: [
    "I'm an iOS and mobile engineer based in India. I build native apps with Swift and SwiftUI, cross-platform apps with Flutter, and ship them to the App Store under my own two labels.",
    "I started out in design. Figma, flows, components, the whole pipeline. But the handoff kept losing something: the feel, the detail, the intention. So I learned to code, and somewhere along the way realized I preferred being the person who does both. These days I'm most at home in Xcode, but I still care about how things look and feel down to the animation curve.",
    "Building my own apps end to end means I've done the unglamorous parts too — App Store review, pricing, subscriptions, release management. When I work with founders and small teams, that's the part that tends to be worth the most.",
  ],
  meta: [
    { label: "Based in", value: "India" },
    { label: "Available for", value: "iOS · Flutter · Product design" },
    {
      label: "Shipped",
      value:
        shippedCounts.pending > 0
          ? `${shippedCounts.live} apps live · ${shippedCounts.pending} in review`
          : `${shippedCounts.live} apps on the App Store`,
    },
  ],
};

export const stackCategories = [
  {
    name: "Apple platforms",
    items: [
      "Swift",
      "SwiftUI",
      "AppKit",
      "WatchKit",
      "WidgetKit",
      "SwiftData",
      "CloudKit",
    ],
  },
  {
    name: "Cross-platform mobile",
    items: ["Flutter", "Dart", "Riverpod", "Drift", "Kotlin Multiplatform"],
  },
  {
    name: "Design & interface",
    items: [
      "Figma",
      "Framer Motion",
      "Shadcn UI",
      "Tailwind CSS",
      "Design tokens",
    ],
  },
  {
    name: "Web frontend",
    items: ["React", "Next.js", "Svelte"],
  },
  {
    name: "Backend & APIs",
    items: ["FastAPI", "Flask", "Express", "Cloudflare Workers", "Go"],
  },
  {
    name: "Systems & languages",
    items: ["Rust", "C", "C++", "Python"],
  },
];

export const stackNote =
  "I pick tools by what the product needs and what the team can maintain.";

export const contactIntro =
  "I work with founders and small teams on mobile products, from first design to the App Store listing. If you have a project in mind, or just want to say hello, drop me a line.";

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

export const contactGithubUrl = contactLinks.find((l) => l.key === "github")!
  .href;
