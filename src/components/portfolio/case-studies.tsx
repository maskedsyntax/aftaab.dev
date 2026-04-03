import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { BotttleCardPreview } from "@/components/portfolio/previews/botttle-card-preview";
import { TrelayCardPreview } from "@/components/portfolio/previews/trelay-card-preview";
import { RepogrepCardPreview } from "@/components/portfolio/previews/repogrep-card-preview";
import { HashprepCardPreview } from "@/components/portfolio/previews/hashprep-card-preview";
import { featuredProjects } from "@/lib/portfolio-data";
import { ExternalLink, Github, Target, Wrench, TrendingUp } from "lucide-react";
import Image from "next/image";

export function CaseStudies() {
  return (
    <SectionReveal
      id="case-studies"
      className="scroll-mt-8 border-t border-border py-12 md:py-16"
    >
      <SectionHeader
        title="Case studies"
        description="Structured write-ups: challenge, solution, and impact. No filler."
      />
      <div className="space-y-14 md:space-y-20">
        {featuredProjects.map((p, idx) => (
          <article
            key={p.id}
            id={`case-study-${p.id}`}
            className="scroll-mt-8 border-b border-border/60 pb-14 last:border-0 last:pb-0 md:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_minmax(260px,360px)] lg:items-start">
              <header className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-mono text-[11px] font-medium tabular-nums text-muted-foreground/60">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-[1.85rem]">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.role}</p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-[13px] font-medium transition-colors hover:bg-accent/60"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </a>
                </div>
              </header>

              <div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-muted/30 shadow-sm lg:sticky lg:top-24"
                role={
                  p.coverVariant === "botttle-preview" ||
                  p.coverVariant === "trelay-preview" ||
                  p.coverVariant === "repogrep-preview" ||
                  p.coverVariant === "hashprep-preview"
                    ? "img"
                    : undefined
                }
                aria-label={
                  p.coverVariant === "botttle-preview" ||
                  p.coverVariant === "trelay-preview" ||
                  p.coverVariant === "repogrep-preview" ||
                  p.coverVariant === "hashprep-preview"
                    ? `${p.name} landing page preview`
                    : undefined
                }
              >
                {p.coverVariant === "botttle-preview" ? (
                  <BotttleCardPreview className="absolute inset-0 h-full w-full rounded-xl" />
                ) : p.coverVariant === "trelay-preview" ? (
                  <TrelayCardPreview className="absolute inset-0 h-full w-full rounded-xl" />
                ) : p.coverVariant === "repogrep-preview" ? (
                  <RepogrepCardPreview className="absolute inset-0 h-full w-full rounded-xl" />
                ) : p.coverVariant === "hashprep-preview" ? (
                  <HashprepCardPreview className="absolute inset-0 h-full w-full rounded-xl" />
                ) : p.coverImage ? (
                  <Image
                    src={p.coverImage}
                    alt={`${p.name} preview`}
                    fill
                    unoptimized
                    className="object-cover object-center"
                    sizes="360px"
                  />
                ) : null}
              </div>
            </div>

            {/* Tight editorial rows: height follows copy only (no stretched tiles) */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border/60 bg-card/20 shadow-sm">
              <div className="divide-y divide-border/50">
                <div className="grid gap-3 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7.5rem_minmax(0,1fr)] md:items-start md:gap-x-8 md:gap-y-0">
                  <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
                    <Target
                      className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Challenge
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground md:text-[14px]">
                    {p.challenge}
                  </p>
                </div>
                <div className="grid gap-3 bg-primary/[0.04] px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7.5rem_minmax(0,1fr)] md:items-start md:gap-x-8">
                  <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
                    <Wrench className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                      Solution
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground md:text-[14px]">
                    {p.solution}
                  </p>
                </div>
                <div className="grid gap-3 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7.5rem_minmax(0,1fr)] md:items-start md:gap-x-8">
                  <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
                    <TrendingUp
                      className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Impact
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground md:text-[14px]">
                    {p.impact}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
