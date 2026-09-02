import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { PlatformChip } from "@/components/portfolio/platform-chip";
import { aiSystemsIntro, aiTools, type AiTool } from "@/lib/portfolio-data";

/**
 * Stand-in visual for tools that ship no artwork. Utter is a CLI with no
 * logo anywhere in its repo, so it gets its own output rather than a
 * borrowed glyph.
 */
function TerminalPanel({ tool }: { tool: AiTool }) {
  return (
    <div
      className="absolute inset-0 flex items-center bg-muted/30 px-5 sm:px-7"
      role="img"
      aria-label={`${tool.name} command line output`}
    >
      <pre className="font-mono text-[10.5px] leading-[2] text-muted-foreground sm:text-[11.5px]">
        <span className="text-primary/70">$</span> utter speak &quot;the kettle
        is on&quot;{"\n"}
        <span className="text-muted-foreground/50">→</span> qwen3-tts · mlx ·
        apple silicon{"\n"}
        <span className="text-muted-foreground/50">→</span> kettle.wav · 48kHz ·
        local{"\n"}
        <span className="text-primary/70">$</span>{" "}
        <span className="inline-block h-3 w-[7px] translate-y-[2px] bg-foreground/40" />
      </pre>
    </div>
  );
}

function AiToolCard({ tool }: { tool: AiTool }) {
  // Utter's canonical URL is its repo — one pill, not two identical ones.
  const siteIsRepo = tool.url === tool.repoUrl;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card">
      {/* Symmetric visual region — cover art or terminal, both 16:10 */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50">
        {tool.coverImage ? (
          <Image
            src={tool.coverImage}
            alt={`${tool.name} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <TerminalPanel tool={tool} />
        )}
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
