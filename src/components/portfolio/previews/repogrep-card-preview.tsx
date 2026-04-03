import { cn } from "@/lib/utils";

/**
 * Miniature coded preview of repogrep marketing—teal hero, split layout, tilted “app window”—
 * so project cards stay sharp without raster screenshots.
 */
export function RepogrepCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-[inherit]",
        "bg-white text-zinc-900 dark:bg-[#0b1120] dark:text-zinc-50",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-teal-500/12 blur-2xl dark:bg-teal-400/15" />
      <div className="pointer-events-none absolute -bottom-4 -left-4 h-14 w-14 rounded-full bg-cyan-500/10 blur-2xl" />

      {/* Nav */}
      <div className="relative z-[1] flex items-center justify-between gap-1 px-2 pt-2 text-[7px] leading-none sm:px-2.5 sm:pt-2.5 sm:text-[8px]">
        <div className="flex min-w-0 items-center gap-1 font-semibold tracking-tight">
          <span
            className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-md bg-teal-600/12 text-teal-700 dark:bg-teal-400/15 dark:text-teal-300 sm:h-4 sm:w-4"
            aria-hidden
          >
            <svg
              className="h-2 w-2 sm:h-2.5 sm:w-2.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16.5 16.5 21 21" />
            </svg>
          </span>
          <span className="truncate text-teal-800 dark:text-teal-200">repogrep</span>
        </div>
        <div className="hidden shrink-0 gap-2 text-zinc-500 dark:text-zinc-400 sm:flex">
          <span>Features</span>
          <span>GitHub</span>
        </div>
        <div className="h-3 w-3 shrink-0 rounded border border-zinc-200 dark:border-white/15" />
      </div>

      {/* Hero: copy + window */}
      <div className="relative z-[1] flex min-h-0 flex-1 items-stretch gap-1.5 px-2 pb-2 pt-1.5 sm:gap-2 sm:px-2.5 sm:pb-2.5 sm:pt-2">
        <div className="flex min-w-0 flex-1 flex-col justify-center text-left">
          <p className="text-[8px] font-bold leading-[1.2] tracking-tight sm:text-[10px]">
            <span className="text-zinc-900 dark:text-white">Search all </span>
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400">
              your
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400">
              codebases
            </span>{" "}
            <span className="font-semibold italic text-teal-700 dark:text-teal-300">
              at once.
            </span>
          </p>

          <p className="mt-1 line-clamp-2 text-[5.5px] leading-snug text-zinc-500 dark:text-zinc-400 sm:text-[6.5px]">
            Local-first code search. No cloud—just speed.
          </p>

          <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2">
            <span className="rounded-md bg-teal-700 px-1.5 py-px text-[5.5px] font-medium text-white shadow-sm dark:bg-teal-500 dark:text-zinc-950 sm:px-2 sm:py-0.5 sm:text-[6.5px]">
              Download
            </span>
            <span className="rounded-md border border-zinc-200 bg-white/90 px-1.5 py-px text-[5.5px] font-medium text-zinc-800 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 sm:px-2 sm:py-0.5 sm:text-[6.5px]">
              Star
            </span>
          </div>
        </div>

        {/* Tilted window mock */}
        <div className="relative flex w-[42%] max-w-[9rem] shrink-0 items-center justify-center pr-0.5">
          <div
            className="w-full origin-center rounded-lg border border-zinc-200/90 bg-white/95 p-1 shadow-lg ring-1 ring-black/[0.04] dark:border-white/10 dark:bg-zinc-900/95 dark:ring-white/5"
            style={{ transform: "rotate(7deg) perspective(120px) rotateY(-4deg)" }}
          >
            <div className="flex gap-1">
              <div className="w-[22%] shrink-0 rounded bg-zinc-100 dark:bg-zinc-800/80" />
              <div className="min-h-[3.25rem] flex-1 space-y-0.5 rounded bg-zinc-50/90 p-1 dark:bg-zinc-950/60">
                <div className="h-0.5 w-[92%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-0.5 w-[72%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-0.5 w-[84%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-0.5 w-[55%] rounded-full bg-teal-600/35 dark:bg-teal-400/40" />
                <div className="h-0.5 w-[68%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="relative z-[1] mt-auto px-2 pb-2 text-center text-[5px] font-semibold text-zinc-600 dark:text-zinc-400 sm:px-2.5 sm:pb-2.5 sm:text-[6px]">
        Built for performance & privacy
      </p>
    </div>
  );
}
