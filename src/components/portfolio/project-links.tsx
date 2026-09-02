import { ExternalLink, Github } from "lucide-react";
import {
  AppStoreIcon,
  PlayStoreIcon,
} from "@/components/portfolio/store-icons";
import type { FeaturedProject } from "@/lib/portfolio-data";

const FILLED =
  "inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background shadow-sm transition-transform hover:-translate-y-0.5";
const OUTLINE =
  "inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] font-medium transition-colors hover:bg-accent/60";

export function ProjectLinks({ p }: { p: FeaturedProject }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-3">
      {p.liveUrl ? (
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={FILLED}
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Live
        </a>
      ) : null}

      {p.appStoreUrl ? (
        <a
          href={p.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={OUTLINE}
        >
          <AppStoreIcon className="h-3.5 w-3.5 text-[#007AFF]" />
          App Store
        </a>
      ) : null}

      {p.macAppStoreUrl ? (
        <a
          href={p.macAppStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={OUTLINE}
        >
          <AppStoreIcon className="h-3.5 w-3.5 text-[#007AFF]" />
          Mac App Store
        </a>
      ) : null}

      {p.playStoreUrl ? (
        <a
          href={p.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={OUTLINE}
        >
          <PlayStoreIcon className="h-3.5 w-3.5 text-[#34A853]" />
          Google Play
        </a>
      ) : null}

      {p.repoUrl ? (
        <a
          href={p.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={OUTLINE}
        >
          <Github className="h-3.5 w-3.5" />
          Source
        </a>
      ) : null}
    </div>
  );
}
