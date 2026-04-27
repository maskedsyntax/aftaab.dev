"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Miniature coded preview of the botttle.dev marketing surface—nav, hero, terminal,
 * and stack chips—so project cards stay sharp at any size without raster screenshots.
 */
export function BotttleCardPreview({ className }: { className?: string }) {
  const clipId = useId();
  return (
    <div
      className={cn(
        "relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[inherit] bg-gradient-to-b from-primary/[0.09] via-background to-muted/30",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25" />
      <div className="pointer-events-none absolute -bottom-6 -left-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />

      {/* Nav */}
      <div className="relative z-[1] shrink-0 flex items-center justify-between gap-1 px-2 pt-2 text-[7px] leading-none sm:px-2.5 sm:pt-2.5 sm:text-[8px]">
        <div className="flex min-w-0 items-center gap-1 font-semibold tracking-tight text-foreground">
          <span
            className="grid h-2.5 w-2.5 shrink-0 place-items-center sm:h-3 sm:w-3"
            aria-hidden
          >
            <svg viewBox="0 0 64 64" className="h-full w-full" fill="none">
              <defs>
                <clipPath id={clipId}>
                  <path d="M26 8 h12 v8 l4 8 v28 c0 3-2 5-5 5 H27 c-3 0-5-2-5-5 V24 l4-8 V8z" />
                </clipPath>
              </defs>
              <path
                d="M26 8 h12 v8 l4 8 v28 c0 3-2 5-5 5 H27 c-3 0-5-2-5-5 V24 l4-8 V8z"
                stroke="#2563eb"
                strokeWidth={3}
                strokeLinejoin="round"
                fill="none"
              />
              <g clipPath={`url(#${clipId})`}>
                <path d="M16 42 Q 24 36, 32 42 T 48 42 L 48 60 L 16 60 Z" fill="#2563eb" />
              </g>
            </svg>
          </span>
          <span className="truncate lowercase">botttle</span>
        </div>
        <div className="hidden shrink-0 gap-2 text-muted-foreground sm:flex">
          <span>Features</span>
          <span>Docs</span>
        </div>
        <span className="rounded-md bg-primary/90 px-1.5 py-px text-[5.5px] font-medium text-primary-foreground shadow-sm sm:text-[6px]">
          Sign in
        </span>
      </div>

      {/* Hero copy (can shrink); terminal + stack stay visible at bottom */}
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-2 pt-1.5 text-center sm:px-3 sm:pt-2">
          <div className="rounded-full border border-border/70 bg-background/85 px-2 py-0.5 text-[5.5px] font-medium text-muted-foreground shadow-sm backdrop-blur-sm sm:text-[6px]">
            Self-hosted · Open architecture
          </div>

          <p className="mt-1 max-w-[18ch] text-[9px] font-bold leading-[1.15] tracking-tight text-foreground sm:mt-1.5 sm:max-w-none sm:text-[11px] sm:leading-tight">
            The client portal you
            <br />
            <span className="text-primary">actually own.</span>
          </p>

          <p className="mt-0.5 line-clamp-2 max-w-[28ch] text-[6px] leading-snug text-muted-foreground sm:mt-1 sm:text-[7px]">
            Projects, invoices, and time tracking in one workspace.
          </p>

          <div className="mt-1 flex flex-wrap justify-center gap-1 sm:mt-1.5">
            <span className="rounded-md bg-primary px-2 py-0.5 text-[6px] font-medium text-primary-foreground shadow-sm sm:text-[7px]">
              Get started →
            </span>
            <span className="rounded-md border border-border bg-background/90 px-2 py-0.5 text-[6px] font-medium text-foreground sm:text-[7px]">
              See features
            </span>
          </div>
        </div>

        {/* Terminal — shrink-0 so the command line is never clipped in short tiles */}
        <div className="shrink-0 px-2 pb-2 pt-1 sm:px-3 sm:pb-2.5">
          <div className="mx-auto w-full max-w-[94%] overflow-hidden rounded-md border border-border/70 bg-zinc-950 text-left shadow-md ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5">
            <div className="flex items-center gap-1 border-b border-white/[0.08] px-1.5 py-1">
              <span className="text-[6px] leading-none text-red-400">●</span>
              <span className="text-[6px] leading-none text-amber-400">●</span>
              <span className="text-[6px] leading-none text-emerald-400">●</span>
              <span className="ml-auto font-mono text-[5px] text-zinc-500 sm:text-[6px]">
                terminal
              </span>
            </div>
            <div className="px-1.5 py-1 font-mono text-[5px] leading-relaxed text-zinc-300 sm:text-[6px] sm:leading-relaxed">
              <span className="text-emerald-400/90">$</span>{" "}
              <span className="text-zinc-100">docker compose up</span>
              <br />
              <span className="text-zinc-500">✓</span> postgres · redis · api · web
            </div>
          </div>

          {/* Stack */}
          <div className="mt-1.5 flex flex-wrap justify-center gap-0.5 sm:mt-2 sm:gap-1">
            {["Fastify", "React", "PostgreSQL", "Docker"].map((t) => (
              <span
                key={t}
                className="rounded border border-border/60 bg-muted/50 px-1 py-px text-[5px] font-medium text-muted-foreground sm:px-1.5 sm:text-[6px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
