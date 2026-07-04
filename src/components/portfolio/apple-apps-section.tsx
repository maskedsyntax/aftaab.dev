"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { appleApps, type AppStoreApp } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const PLATFORM_STYLES: Record<string, { bg: string; text: string }> = {
  iOS:           { bg: "bg-[#007AFF]/10",    text: "text-[#007AFF]" },
  iPadOS:        { bg: "bg-[#007AFF]/10",    text: "text-[#007AFF]" },
  "Apple Watch": { bg: "bg-foreground/[0.07]", text: "text-foreground/60" },
  macOS:         { bg: "bg-foreground/[0.07]", text: "text-foreground/60" },
  Android:       { bg: "bg-[#3DDC84]/10",    text: "text-[#34A853] dark:text-[#3DDC84]" },
};

function PlatformChip({ label }: { label: string }) {
  const style = PLATFORM_STYLES[label] ?? { bg: "bg-muted/60", text: "text-muted-foreground" };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-1.5 py-px font-mono text-[8.5px] font-medium",
        style.bg,
        style.text,
      )}
    >
      {label}
    </span>
  );
}

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden fill="currentColor">
      <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm.75 4.5a.75.75 0 0 1 1.5 0v.25h.25a.75.75 0 0 1 0 1.5H12v3.19l1.78 3.08a.75.75 0 1 1-1.3.75L11 11.06l-1.48 2.56a.75.75 0 1 1-1.3-.75L10 9.44V6.25H9.5a.75.75 0 0 1 0-1.5h.25V4.5zM6.28 7.97a.75.75 0 0 1 1.02.28l.97 1.68.97-1.68a.75.75 0 1 1 1.3.75L9.19 10.5l1.35 2.33a.75.75 0 1 1-1.3.75L8 12.02l-1.24 2.06a.75.75 0 1 1-1.3-.75l1.35-2.33-1.35-2.33a.75.75 0 0 1 .82-1.7z" />
    </svg>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden fill="currentColor">
      <path d="M2.15 1.25C1.7 1.5 1.5 2 1.5 2.6v14.8c0 .6.2 1.1.65 1.35l.1.05 8.3-8.3v-.2L2.25 1.2l-.1.05zm11.3 11.35-2.75-2.75-8.3 8.3c.45.25 1.05.2 1.65-.15l9.4-5.4zm1.6-.95-2.5-1.45-2.5 2.5 2.5 2.5 2.5-1.45c.7-.4.7-1.05 0-1.6zm-13.9-10L13.4 9.3l-2.5 2.5-8.3-8.3c-.1.15-.1.5 0 .85z" />
    </svg>
  );
}

function AppIcon({ app }: { app: AppStoreApp }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div
        className="flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-muted text-[22px] font-semibold text-muted-foreground shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)]"
        aria-hidden
      >
        {app.name[0]}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={app.iconPath}
      alt={`${app.name} icon`}
      width={72}
      height={72}
      className="rounded-[18px] object-cover shadow-[0_8px_24px_-8px_rgba(0,0,0,0.22)]"
      onError={() => setErrored(true)}
    />
  );
}

function AppTile({ app }: { app: AppStoreApp }) {
  const primaryHref = app.appStoreUrl ?? app.macAppStoreUrl ?? app.websiteUrl ?? "#";

  return (
    <a
      href={primaryHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2.5 rounded-2xl border border-transparent p-3 text-center transition-all duration-200 hover:border-border/70 hover:bg-background/60"
    >
      {/* App icon */}
      <div className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
        <AppIcon app={app} />
      </div>

      {/* Name */}
      <p className="font-display text-[13.5px] font-semibold leading-snug tracking-tight text-foreground">
        {app.name}
      </p>

      {/* Platform chips */}
      <div className="flex flex-wrap justify-center gap-1">
        {app.platforms.map((p) => (
          <PlatformChip key={p} label={p} />
        ))}
      </div>

      {/* Tagline */}
      <p className="line-clamp-2 text-[11.5px] leading-snug text-muted-foreground">
        {app.tagline}
      </p>

      {/* Store links */}
      <div className="flex items-center gap-2">
        {(app.appStoreUrl || app.macAppStoreUrl) && (
          <span
            className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/80 px-2 py-0.5 text-[10px] font-medium text-foreground/70 transition-colors group-hover:text-foreground"
            title="App Store"
          >
            <AppStoreIcon className="h-3 w-3 text-[#007AFF]" />
            {app.macAppStoreUrl && !app.appStoreUrl ? "Mac App Store" : "App Store"}
          </span>
        )}
        {app.playStoreUrl && (
          <span
            className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/80 px-2 py-0.5 text-[10px] font-medium text-foreground/70 transition-colors group-hover:text-foreground"
            title="Google Play"
          >
            <PlayStoreIcon className="h-3 w-3 text-[#34A853]" />
            Play
          </span>
        )}
      </div>
    </a>
  );
}

export function AppleAppsSection() {
  if (appleApps.length === 0) return null;

  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <div className="mb-7 md:mb-8">
        <h2 className="font-display text-[1.55rem] font-semibold tracking-display-tight text-foreground md:text-[1.85rem]">
          Shipped
        </h2>
        <div className="mt-3 h-px w-14 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Apps in the App Store, Mac App Store, and Google Play.
        </p>
      </div>

      <div className="rounded-2xl bg-muted/30 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 sm:gap-3">
          {appleApps.map((app) => (
            <AppTile key={app.id} app={app} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
