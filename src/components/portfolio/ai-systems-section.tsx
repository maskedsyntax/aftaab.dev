import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { PlatformChip } from "@/components/portfolio/platform-chip";
import { AiThumbnail } from "@/components/portfolio/ai-thumbnails";
import { aiSystemsIntro, aiTools, type AiTool } from "@/lib/portfolio-data";

function AiToolCard({ tool }: { tool: AiTool }) {
  // Utter's canonical URL is its repo — one pill, not two identical ones.
  const siteIsRepo = tool.url === tool.repoUrl;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card">
      {/* Drawn thumbnail — nothing to crop, and it follows the theme */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50 bg-muted/25 p-6 transition-transform duration-500 group-hover:scale-[1.015]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,hsl(var(--primary)/0.10),transparent_70%)]"
        />
        <div className="relative h-full w-full">
          <AiThumbnail id={tool.id} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
            {tool.credit}
          </span>
          {tool.version ? (
            <>
              <span aria-hidden className="text-muted-foreground/30">
                ·
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/50">
                {tool.version}
              </span>
            </>
          ) : null}
        </div>

        <h3 className="mt-2 font-display text-[17px] font-semibold leading-snug tracking-tight text-foreground">
          {tool.name}
        </h3>

        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
          {tool.tagline}
        </p>

        <p className="mt-3 font-mono text-[10.5px] text-muted-foreground/60">
          {tool.tech}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tool.platforms.map((p) => (
            <PlatformChip key={p} label={p} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {!siteIsRepo ? (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium transition-colors hover:bg-accent/60"
            >
              Website
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ) : null}
          {tool.repoUrl ? (
            <a
              href={tool.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium transition-colors hover:bg-accent/60"
            >
              <SiGithub className="h-3 w-3" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function AiSystemsSection() {
  if (aiTools.length === 0) return null;

  return (
    <SectionReveal
      id="ai-systems"
      className="scroll-mt-8 border-t border-border py-12 md:py-16"
    >
      <SectionHeader title="AI & systems" description={aiSystemsIntro} />
      <div className="grid gap-3 sm:grid-cols-2">
        {aiTools.map((tool) => (
          <AiToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </SectionReveal>
  );
}
