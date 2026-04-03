import { cn } from "@/lib/utils";

/**
 * Miniature coded preview of trelay.dev—grid hero, gradient headline, CLI strip—
 * so the card stays crisp without raster screenshots.
 */
export function TrelayCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-[inherit]",
        "bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-50",
        className
      )}
      aria-hidden
    >
      {/* Grid — light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55] dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "14px 14px",
        }}
        aria-hidden
      />
      {/* Grid — dark */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-40 dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "14px 14px",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-pink-500/15 blur-2xl dark:bg-pink-500/20" />
      <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-purple-500/10 blur-2xl" />

      {/* Nav */}
      <div className="relative z-[1] flex items-center justify-between gap-1 px-2 pt-2 text-[7px] leading-none sm:px-2.5 sm:pt-2.5 sm:text-[8px]">
        <div className="flex min-w-0 items-center gap-1 font-semibold tracking-tight">
          <span
            className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-md bg-gradient-to-br from-pink-500 to-purple-600 text-[8px] font-bold text-white shadow-sm sm:h-4 sm:w-4 sm:text-[9px]"
            aria-hidden
          >
            T
          </span>
          <span className="truncate">Trelay</span>
        </div>
        <div className="hidden shrink-0 gap-2 text-zinc-500 dark:text-zinc-400 sm:flex">
          <span>Features</span>
          <span>CLI</span>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full border border-zinc-300 dark:border-zinc-600 sm:h-2 sm:w-2" />
          <span className="rounded-full bg-zinc-900 px-1.5 py-px text-[5.5px] font-medium text-white dark:bg-white dark:text-zinc-900 sm:text-[6px]">
            GitHub
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col items-center px-2 pb-2 pt-1.5 text-center sm:px-3 sm:pb-2.5 sm:pt-2">
        <div className="rounded-full border border-zinc-200/90 bg-white/90 px-2 py-0.5 text-[5.5px] font-medium text-zinc-500 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-400 sm:text-[6px]">
          <span className="mr-1 inline-block h-1 w-1 rounded-full bg-pink-500" />
          v2.0 · Open source
        </div>

        <p className="mt-1.5 max-w-[20ch] text-[9px] font-bold leading-[1.12] tracking-tight sm:mt-2 sm:max-w-none sm:text-[11px] sm:leading-tight">
          Your Links,
          <br />
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Your Server.
          </span>
        </p>

        <p className="mt-1 line-clamp-2 max-w-[30ch] text-[6px] leading-snug text-zinc-500 dark:text-zinc-400 sm:text-[7px]">
          Self-hosted URL manager—dashboard, CLI, and API.
        </p>

        <div className="mt-1.5 flex flex-wrap justify-center gap-1 sm:mt-2">
          <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[6px] font-medium text-white shadow-sm dark:bg-white dark:text-zinc-900 sm:text-[7px]">
            Get started
          </span>
          <span className="rounded-full border border-zinc-200 bg-white/90 px-2 py-0.5 text-[6px] font-medium text-zinc-800 dark:border-white/15 dark:bg-zinc-950/80 dark:text-zinc-100 sm:text-[7px]">
            Learn more
          </span>
        </div>

        {/* Terminal */}
        <div className="mt-2 w-full max-w-[94%] overflow-hidden rounded-lg border border-zinc-200/90 bg-white text-left shadow-md ring-1 ring-black/[0.04] dark:border-white/10 dark:bg-zinc-950 dark:ring-white/5">
          <div className="flex items-center gap-1 border-b border-zinc-100 px-1.5 py-1 dark:border-white/[0.08]">
            <span className="text-[6px] leading-none text-red-400">●</span>
            <span className="text-[6px] leading-none text-amber-400">●</span>
            <span className="text-[6px] leading-none text-emerald-400">●</span>
            <span className="ml-auto font-mono text-[5px] text-zinc-400 sm:text-[6px]">
              Terminal
            </span>
          </div>
          <div className="px-1.5 py-1 font-mono text-[4.5px] leading-relaxed sm:text-[5.5px] sm:leading-relaxed">
            <span className="text-pink-500">$</span>{" "}
            <span className="text-zinc-800 dark:text-zinc-200">trelay</span>{" "}
            <span className="text-sky-600 dark:text-sky-400">create</span>{" "}
            <span className="text-amber-800/90 dark:text-amber-200/90">https://…</span>{" "}
            <span className="text-sky-500">--slug</span>{" "}
            <span className="text-zinc-800 dark:text-zinc-200">docs</span>
            <br />
            <span className="text-emerald-600 dark:text-emerald-400">✓</span>{" "}
            <span className="text-zinc-500 dark:text-zinc-500">Created</span>{" "}
            <span className="text-pink-500">trelay.dev/r/docs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
