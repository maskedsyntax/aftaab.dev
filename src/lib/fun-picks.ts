/**
 * Fun shelf — each item is a route under `/fun/[slug]` with an on-site experience.
 * Tile `tileClass` is only for the grid card; each experience sets its own colors inside.
 * Add entries here, then implement the matching component in `experiences/*`.
 */
export type FunKind = "play" | "explore" | "watch" | "read";

export type FunPick = {
  id: string;
  /** URL segment: `/fun/{slug}` */
  slug: string;
  title: string;
  kind: FunKind;
  note?: string;
  tileClass: string;
  titleClass?: string;
};

export const funKindLabel: Record<FunKind, string> = {
  play: "Play",
  explore: "Explore",
  watch: "Watch",
  read: "Read",
};

export const funPicks: FunPick[] = [
  {
    id: "reaction",
    slug: "reaction",
    title: "Reaction tap",
    kind: "play",
    note: "Wait for green—then click as fast as you can.",
    tileClass:
      "bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-700 text-zinc-950 border-lime-300/60 shadow-[0_12px_40px_-12px_rgba(34,197,94,0.45)]",
  },
  {
    id: "star-scale",
    slug: "star-scale",
    title: "Star sizes",
    kind: "explore",
    note: "Compare how big a few familiar stars are next to the Sun.",
    tileClass:
      "bg-gradient-to-br from-[#0a0f2e] via-indigo-950 to-fuchsia-950 text-sky-100 border-indigo-400/25 shadow-[0_12px_40px_-12px_rgba(99,102,241,0.35)]",
  },
  {
    id: "orbit-lines",
    slug: "orbit-lines",
    title: "Orbit lines",
    kind: "watch",
    note: "A looping canvas sketch—nothing to win, just motion.",
    tileClass:
      "bg-gradient-to-br from-fuchsia-600 via-violet-700 to-cyan-800 text-white border-fuchsia-300/40 shadow-[0_12px_40px_-12px_rgba(217,70,239,0.4)]",
  },
  {
    id: "doors-note",
    slug: "doors-note",
    title: "Doors & affordances",
    kind: "read",
    note: "A short note on Norman doors and why handles lie.",
    tileClass:
      "bg-gradient-to-br from-amber-200 via-orange-100 to-rose-200 text-amber-950 border-amber-400/50 shadow-[0_12px_36px_-14px_rgba(251,191,36,0.45)]",
  },
];

export function getFunPickBySlug(slug: string): FunPick | undefined {
  return funPicks.find((p) => p.slug === slug);
}

export function funPath(slug: string): string {
  return `/fun/${slug}`;
}
