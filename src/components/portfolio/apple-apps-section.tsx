"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { PlatformChip } from "@/components/portfolio/platform-chip";
import { StudioDot } from "@/components/portfolio/studio-badge";
import {
  AppStoreIcon,
  PlayStoreIcon,
} from "@/components/portfolio/store-icons";
import { appleApps, shippedIntro, type AppStoreApp } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function AppIcon({ app }: { app: AppStoreApp }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-muted text-[26px] font-semibold text-muted-foreground shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18)]"
        aria-hidden
      >
        {app.name[0]}
      </div>
    );
  }

  return (
    <Image
      src={app.iconPath}
      alt={`${app.name} icon`}
      width={112}
      height={112}
      sizes="(max-width: 640px) 96px, 112px"
      className="h-24 w-24 rounded-[24px] object-cover shadow-[0_12px_32px_-8px_rgba(0,0,0,0.28)]"
      onError={() => setErrored(true)}
    />
  );
}

function StorePill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground/70 transition-colors group-hover:text-foreground">
      {icon}
      {label}
    </span>
  );
}

function TileBody({ app }: { app: AppStoreApp }) {
  const comingSoon = app.status === "coming-soon";

  return (
    <>
      {/* App icon */}
      <div
        className={cn(
          "shrink-0 transition-transform duration-300",
          !comingSoon && "group-hover:-translate-y-1.5",
        )}
      >
        <AppIcon app={app} />
      </div>

      {/* Name + studio key */}
      <div className="flex items-center gap-1.5">
        <StudioDot studio={app.studio} />
        <p className="font-display text-[15px] font-semibold leading-snug tracking-tight text-foreground">
          {app.name}
        </p>
      </div>

      {/* Platform chips */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {app.platforms.map((p) => (
          <PlatformChip key={p} label={p} />
        ))}
      </div>

      {/* Tagline */}
      <p className="line-clamp-2 text-[12.5px] leading-relaxed text-muted-foreground">
        {app.tagline}
      </p>

      {/* Store links, or a pending state */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {comingSoon ? (
          <span className="inline-flex rounded-full border border-dashed border-muted-foreground/35 bg-transparent px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {app.note ?? "In review"}
          </span>
        ) : (
          <>
            {(app.appStoreUrl || app.macAppStoreUrl) && (
              <StorePill
                icon={<AppStoreIcon className="h-3 w-3 text-[#007AFF]" />}
                label={
                  app.macAppStoreUrl && !app.appStoreUrl
                    ? "Mac App Store"
                    : "App Store"
                }
              />
            )}
            {app.playStoreUrl && (
              <StorePill
                icon={<PlayStoreIcon className="h-3 w-3 text-[#34A853]" />}
                label="Play"
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

function AppTile({ app }: { app: AppStoreApp }) {
  const href =
    app.appStoreUrl ?? app.macAppStoreUrl ?? app.playStoreUrl ?? app.websiteUrl;

  const shell =
    "group flex flex-col items-center gap-4 rounded-2xl border border-transparent p-5 text-center md:p-6";

  if (!href) {
    return (
      <div className={shell}>
        <TileBody app={app} />
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        shell,
        "transition-all duration-200 hover:border-border/70 hover:bg-background/60",
      )}
    >
      <TileBody app={app} />
    </a>
  );
}

export function AppleAppsSection() {
  if (appleApps.length === 0) return null;

  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <SectionHeader title="Shipped" description={shippedIntro} />

      <div className="rounded-2xl bg-muted/30 p-5 sm:p-8 md:p-10">
        {/* 10 tiles: divides evenly at 2 and 5 columns, no orphan row */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {appleApps.map((app) => (
            <AppTile key={app.id} app={app} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
