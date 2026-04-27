import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Miniature coded preview of openconduit.dev — light hero, gradient "on your server"
 * headline, terminal install snippet that mirrors the live marketing site.
 */
export function OpenConduitCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-[inherit]",
        "bg-[#f7faf7] text-zinc-900 dark:bg-[#0b1410] dark:text-zinc-50",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(34,197,94,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-8 top-1/4 h-20 w-20 rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Nav */}
      <div className="relative z-[1] flex items-center justify-between gap-1 px-2 pt-2 text-[7px] leading-none sm:px-2.5 sm:pt-2.5 sm:text-[8px]">
        <div className="flex min-w-0 items-center gap-1 font-semibold tracking-tight">
          <span className="relative h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" aria-hidden>
            <Image
              src="/images/projects/logos/openconduit.svg"
              alt=""
              fill
              sizes="12px"
              className="object-contain"
            />
          </span>
          <span className="truncate">OpenConduit</span>
        </div>
        <div className="hidden shrink-0 gap-2 text-zinc-500 dark:text-zinc-400 sm:flex">
          <span>Features</span>
          <span>Self-Hosting</span>
          <span>Docs</span>
        </div>
        <span className="rounded-md bg-zinc-900 px-1.5 py-px text-[5.5px] font-medium text-white dark:bg-white dark:text-zinc-900 sm:text-[6px]">
          GitHub
        </span>
      </div>

      {/* Hero */}
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col items-center px-2 pb-2 pt-1.5 text-center sm:px-3 sm:pb-2.5 sm:pt-2">
        <span className="grid h-4 w-4 place-items-center rounded bg-emerald-500/15 sm:h-5 sm:w-5">
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-emerald-600 dark:text-emerald-400 sm:h-3 sm:w-3" fill="currentColor" aria-hidden>
            <path d="M4 4h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7l-4 3v-3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
          </svg>
        </span>
        <div className="mt-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[5px] font-semibold text-emerald-700 dark:text-emerald-300 sm:text-[5.5px]">
          <span className="mr-1 inline-block h-1 w-1 rounded-full bg-emerald-500" />
          Open Source · Self-Hostable
        </div>

        <p className="mt-1 max-w-[18ch] text-[9px] font-bold leading-[1.1] tracking-tight sm:mt-1.5 sm:max-w-none sm:text-[11px]">
          Your WhatsApp CRM,
          <br />
          <span className="text-emerald-600 dark:text-emerald-400">on your server.</span>
        </p>

        <p className="mt-1 line-clamp-2 max-w-[32ch] text-[5.5px] leading-snug text-zinc-500 dark:text-zinc-400 sm:text-[6.5px]">
          Contacts, conversations, and lead pipelines, all self-hosted.
        </p>

        <div className="mt-1.5 flex flex-wrap justify-center gap-1 sm:mt-2">
          <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-[5.5px] font-semibold text-white shadow-sm sm:text-[6.5px]">
            Get Started →
          </span>
          <span className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[5.5px] font-medium text-zinc-800 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 sm:text-[6.5px]">
            View on GitHub
          </span>
        </div>

        {/* Terminal */}
        <div className="mt-2 w-full max-w-[94%] overflow-hidden rounded-md border border-zinc-200/90 bg-zinc-950 text-left shadow-md ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5">
          <div className="flex items-center gap-1 border-b border-white/[0.08] px-1.5 py-1">
            <span className="text-[6px] leading-none text-red-400">●</span>
            <span className="text-[6px] leading-none text-amber-400">●</span>
            <span className="text-[6px] leading-none text-emerald-400">●</span>
            <span className="ml-auto font-mono text-[5px] text-zinc-500 sm:text-[6px]">
              terminal
            </span>
          </div>
          <div className="px-1.5 py-1 font-mono text-[4.5px] leading-relaxed text-zinc-300 sm:text-[5.5px]">
            <span className="text-emerald-400">$</span>{" "}
            <span className="text-sky-400">git</span>{" "}
            <span className="text-zinc-100">clone</span>{" "}
            <span className="text-amber-200/90">github.com/growvth/openconduit</span>
            <br />
            <span className="text-emerald-400">$</span>{" "}
            <span className="text-sky-400">cd</span>{" "}
            <span className="text-zinc-100">openconduit</span>
            <br />
            <span className="text-emerald-400">$</span>{" "}
            <span className="text-amber-300">docker</span>{" "}
            <span className="text-zinc-100">compose up</span>
          </div>
        </div>
      </div>
    </div>
  );
}
