import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Miniature coded preview of hashprep.com—dark ML hero, pink CTAs, macOS-style terminal—
 * so project cards stay sharp without raster screenshots.
 */
export function HashprepCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-[inherit]",
        "bg-[#fdfbff] text-zinc-900 dark:bg-[#07060a] dark:text-zinc-50",
        className
      )}
      aria-hidden
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,rgba(236,72,153,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(139,92,246,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute -right-10 top-1/4 h-24 w-24 rounded-full bg-pink-400/15 blur-3xl dark:bg-fuchsia-500/10" />

      {/* Nav */}
      <div className="relative z-[1] flex items-center justify-between gap-1 px-2 pt-2 text-[6.5px] leading-none sm:px-2.5 sm:pt-2.5 sm:text-[7.5px]">
        <div className="flex min-w-0 items-center gap-1 font-bold tracking-[0.12em]">
          <span className="relative h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" aria-hidden>
            <Image
              src="/images/projects/logos/hashprep.svg"
              alt=""
              fill
              sizes="12px"
              className="object-contain"
            />
          </span>
          <span className="truncate text-[7px] uppercase text-zinc-800 dark:text-white sm:text-[8px]">
            HashPrep
          </span>
        </div>
        <div className="hidden shrink-0 gap-2 text-zinc-500 dark:text-zinc-400 sm:flex">
          <span>Features</span>
          <span>Docs</span>
        </div>
        <span className="rounded-full bg-pink-500 px-1.5 py-px text-[5.5px] font-semibold text-white dark:bg-pink-400 dark:text-zinc-950 sm:px-2 sm:text-[6px]">
          Start
        </span>
      </div>

      {/* Hero */}
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col items-center px-2 pb-2 pt-1.5 text-center sm:px-3 sm:pb-2.5 sm:pt-2">
        <div className="rounded-full border border-pink-200/80 bg-pink-50/90 px-2 py-0.5 text-[5.5px] font-medium text-pink-700 dark:border-pink-500/25 dark:bg-pink-500/10 dark:text-pink-200 sm:text-[6px]">
          Beta · v0.1
        </div>

        <p className="mt-1.5 max-w-[32ch] text-[8px] font-semibold leading-snug tracking-tight text-zinc-900 dark:text-white sm:mt-2 sm:text-[10px] sm:leading-tight">
          Dataset profiler & debugger for ML.
        </p>

        <p className="mt-0.5 line-clamp-2 max-w-[28ch] text-[5.5px] leading-snug text-zinc-500 dark:text-zinc-400 sm:text-[6.5px]">
          Profile, debug, and fix before your pipeline breaks.
        </p>

        <div className="mt-1.5 flex flex-wrap justify-center gap-1 sm:mt-2">
          <span className="rounded-full bg-pink-500 px-2 py-0.5 text-[5.5px] font-semibold text-white shadow-sm dark:bg-pink-400 dark:text-zinc-950 sm:text-[6.5px]">
            Get started
          </span>
          <span className="rounded-full border border-zinc-200 bg-white/90 px-2 py-0.5 text-[5.5px] font-medium text-zinc-800 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 sm:text-[6.5px]">
            GitHub
          </span>
        </div>

        {/* Terminal */}
        <div className="mt-2 w-full max-w-[94%] overflow-hidden rounded-lg border border-zinc-200/90 bg-white text-left shadow-md ring-1 ring-black/[0.04] dark:border-white/10 dark:bg-zinc-900/95 dark:ring-white/5">
          <div className="flex items-center gap-1 border-b border-zinc-100 px-1.5 py-1 dark:border-white/[0.08]">
            <span className="text-[6px] leading-none text-red-400">●</span>
            <span className="text-[6px] leading-none text-amber-400">●</span>
            <span className="text-[6px] leading-none text-emerald-400">●</span>
            <span className="ml-auto font-mono text-[5px] text-zinc-400 sm:text-[6px]">
              Terminal
            </span>
          </div>
          <div className="px-1.5 py-1 font-mono text-[4.5px] leading-relaxed sm:text-[5.5px] sm:leading-relaxed">
            <span className="text-zinc-500">$</span>{" "}
            <span className="text-pink-600 dark:text-pink-400">pip install</span>{" "}
            <span className="text-zinc-800 dark:text-zinc-200">hashprep</span>
            <br />
            <span className="text-zinc-500">$</span>{" "}
            <span className="text-pink-600 dark:text-pink-400">hashprep scan</span>{" "}
            <span className="text-sky-700 dark:text-sky-300">train.csv</span>{" "}
            <span className="text-violet-600 dark:text-violet-300">--target</span>{" "}
            <span className="text-zinc-800 dark:text-zinc-200">Survived</span>
            <br />
            <span className="text-amber-600 dark:text-amber-300">3 critical</span>
            <span className="text-zinc-400"> · </span>
            <span className="text-yellow-600 dark:text-yellow-300">5 warnings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
