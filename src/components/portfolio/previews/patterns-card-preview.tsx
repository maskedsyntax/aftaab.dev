import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Miniature coded preview of patterns.maskedsyntax.com — light-cream surface with
 * an amber accent (and a dark-mode variant), journal-style desktop window mock and
 * CTAs that mirror the live site.
 */
export function PatternsCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-[inherit]",
        "bg-[#fbf8ee] text-zinc-900 dark:bg-[#0a0908] dark:text-zinc-50",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(180,140,40,0.10),transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(234,179,8,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-6 top-1/3 h-20 w-20 rounded-full bg-amber-300/15 blur-3xl dark:bg-amber-500/10" />

      {/* Nav */}
      <div className="relative z-[1] flex items-center justify-between gap-1 px-2 pt-2 text-[7px] leading-none sm:px-2.5 sm:pt-2.5 sm:text-[8px]">
        <div className="flex min-w-0 items-center gap-1 font-semibold tracking-tight">
          <span className="relative h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" aria-hidden>
            <Image
              src="/images/projects/logos/patterns.png"
              alt=""
              fill
              sizes="12px"
              className="object-contain"
            />
          </span>
          <span className="truncate text-zinc-900 dark:text-white">Patterns</span>
        </div>
        <div className="hidden shrink-0 gap-2 text-zinc-500 dark:text-zinc-500 sm:flex">
          <span>Features</span>
          <span>Privacy</span>
        </div>
        <span className="rounded-full bg-amber-600 px-1.5 py-px text-[5.5px] font-semibold text-white shadow-sm dark:bg-amber-400 dark:text-zinc-900 sm:px-2 sm:text-[6px]">
          ★ Star
        </span>
      </div>

      {/* Hero */}
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col items-center px-2 pb-2 pt-1.5 text-center sm:px-3 sm:pb-2.5 sm:pt-2">
        <div className="rounded-full border border-amber-600/25 bg-amber-100/70 px-2 py-0.5 text-[5.5px] font-semibold text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300 sm:text-[6px]">
          <span className="mr-1 inline-block h-1 w-1 rounded-full bg-amber-600 dark:bg-amber-300" />
          Open Source · Privacy-First
        </div>

        <p className="mt-1.5 max-w-[14ch] text-[10px] font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-white sm:mt-2 sm:max-w-none sm:text-[12px]">
          Clarity for
          <br />
          the mind.
        </p>

        <p className="mt-1 line-clamp-2 max-w-[32ch] text-[5.5px] leading-snug text-zinc-600 dark:text-zinc-400 sm:text-[6.5px]">
          A focused desktop app for daily journaling and tracking obsessive-compulsive patterns.
        </p>

        <div className="mt-1.5 flex flex-wrap justify-center gap-1 sm:mt-2">
          <span className="inline-flex items-center gap-0.5 rounded-md bg-amber-600 px-2 py-0.5 text-[5.5px] font-semibold text-white shadow-sm dark:bg-amber-400 dark:text-zinc-900 sm:text-[6.5px]">
            ↓ Download
          </span>
          <span className="rounded-md border border-zinc-300/70 bg-white/80 px-2 py-0.5 text-[5.5px] font-medium text-zinc-800 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-100 sm:text-[6.5px]">
            View on GitHub
          </span>
        </div>

        {/* App window mock */}
        <div className="mt-2 w-full max-w-[94%] overflow-hidden rounded-md border border-zinc-200/80 bg-white shadow-md ring-1 ring-black/[0.04] dark:border-white/10 dark:bg-[#111110] dark:ring-white/5">
          <div className="flex items-center gap-1 border-b border-zinc-200/80 px-1.5 py-1 dark:border-white/[0.06]">
            <span className="text-[6px] leading-none text-red-400">●</span>
            <span className="text-[6px] leading-none text-amber-400">●</span>
            <span className="text-[6px] leading-none text-emerald-400">●</span>
            <span className="ml-auto font-mono text-[5px] text-zinc-500 sm:text-[6px]">
              Patterns
            </span>
          </div>
          <div className="flex gap-1 p-1.5">
            {/* Sidebar */}
            <div className="flex w-[34%] flex-col gap-0.5">
              <span className="rounded bg-amber-100/80 px-1 py-0.5 text-[4.5px] font-semibold text-amber-800 dark:bg-amber-400/20 dark:text-amber-300 sm:text-[5.5px]">
                + New Entry
              </span>
              <div className="rounded bg-amber-100/60 px-1 py-0.5 dark:bg-amber-400/10">
                <p className="text-[4.5px] font-semibold text-amber-800 dark:text-amber-200 sm:text-[5px]">
                  Mar 19
                </p>
                <p className="truncate text-[4px] text-amber-700/70 dark:text-amber-200/60 sm:text-[4.5px]">
                  A moment of clarity
                </p>
              </div>
              <div className="px-1 py-0.5">
                <p className="text-[4.5px] font-semibold text-zinc-700 dark:text-zinc-300 sm:text-[5px]">
                  Mar 18
                </p>
                <p className="truncate text-[4px] text-zinc-500 sm:text-[4.5px]">
                  Practiced mindful…
                </p>
              </div>
            </div>
            {/* Editor */}
            <div className="flex-1 space-y-0.5 px-1">
              <p className="text-[4px] text-zinc-500 sm:text-[4.5px]">March 19, 2026</p>
              <p className="text-[5px] font-bold text-zinc-900 dark:text-white sm:text-[6px]">
                A moment of clarity
              </p>
              <div className="space-y-px pt-0.5">
                <div className="h-px w-[94%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-px w-[78%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-px w-[88%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-px w-[64%] rounded-full bg-amber-500/50 dark:bg-amber-400/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
