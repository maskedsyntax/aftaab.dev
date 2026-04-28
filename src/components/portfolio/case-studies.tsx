import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { BotttleCardPreview } from "@/components/portfolio/previews/botttle-card-preview";
import { TrelayCardPreview } from "@/components/portfolio/previews/trelay-card-preview";
import { RepogrepCardPreview } from "@/components/portfolio/previews/repogrep-card-preview";
import { HashprepCardPreview } from "@/components/portfolio/previews/hashprep-card-preview";
import { EiraFocusCardPreview } from "@/components/portfolio/previews/eirafocus-card-preview";
import { PatternsCardPreview } from "@/components/portfolio/previews/patterns-card-preview";
import { OpenConduitCardPreview } from "@/components/portfolio/previews/openconduit-card-preview";
import { featuredProjects, type FeaturedProject } from "@/lib/portfolio-data";
import { ExternalLink, Github, Target, Wrench, TrendingUp } from "lucide-react";
import Image from "next/image";

export function ProjectMedia({ p }: { p: FeaturedProject }) {
  const isPortrait = p.mediaOrientation === "portrait";
  // Portrait: stretch to match the left column's full height (header + editorial rows)
  // so the two columns finish together. Scene stays centered; ambient wash fills extra
  // vertical space and reads as a tall panel rather than a boxed card with empty bottom.
  // Landscape: fixed 16:10 aspect, sticky so the visual stays with the reader while
  // they scroll past the editorial rows below.
  const shapeClass = isPortrait
    ? "h-full min-h-[540px] lg:min-h-[620px]"
    : "aspect-[16/10] lg:sticky lg:top-24";
  const labelNeeded =
    p.coverVariant === "botttle-preview" ||
    p.coverVariant === "trelay-preview" ||
    p.coverVariant === "repogrep-preview" ||
    p.coverVariant === "hashprep-preview" ||
    p.coverVariant === "eirafocus-preview" ||
    p.coverVariant === "patterns-preview" ||
    p.coverVariant === "openconduit-preview";

  return (
    <div
      className={`relative ${shapeClass} w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.3)]`}
      role={labelNeeded ? "img" : undefined}
      aria-label={labelNeeded ? `${p.name} preview` : undefined}
    >
      {p.coverVariant === "botttle-preview" ? (
        <BotttleCardPreview className="absolute inset-0 h-full w-full rounded-2xl" />
      ) : p.coverVariant === "trelay-preview" ? (
        <TrelayCardPreview className="absolute inset-0 h-full w-full rounded-2xl" />
      ) : p.coverVariant === "repogrep-preview" ? (
        <RepogrepCardPreview className="absolute inset-0 h-full w-full rounded-2xl" />
      ) : p.coverVariant === "hashprep-preview" ? (
        <HashprepCardPreview className="absolute inset-0 h-full w-full rounded-2xl" />
      ) : p.coverVariant === "eirafocus-preview" ? (
        <EiraFocusCardPreview
          className="absolute inset-0 h-full w-full rounded-2xl"
          layout={isPortrait ? "portrait" : "landscape"}
        />
      ) : p.coverVariant === "patterns-preview" ? (
        <PatternsCardPreview className="absolute inset-0 h-full w-full rounded-2xl" />
      ) : p.coverVariant === "openconduit-preview" ? (
        <OpenConduitCardPreview className="absolute inset-0 h-full w-full rounded-2xl" />
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
  );
}

function ProjectHeader({ p, idx }: { p: FeaturedProject; idx: number }) {
  return (
    <header className="max-w-2xl">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="font-mono text-[11px] font-medium tabular-nums text-muted-foreground/60">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {p.category}
        </span>
      </div>
      <h3 className="mt-3 font-display text-[1.85rem] font-semibold tracking-display-tight md:text-[2.25rem]">
        {p.name}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{p.role}</p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Live
        </a>
        {p.repoUrl ? (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] font-medium transition-colors hover:bg-accent/60"
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
        ) : null}
      </div>
    </header>
  );
}

export function EditorialRows({ p }: { p: FeaturedProject }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-sm backdrop-blur-sm">
      <div className="divide-y divide-border/50">
        <div className="grid gap-3 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7rem_minmax(0,1fr)] md:items-start md:gap-x-6 md:gap-y-0 lg:grid-cols-[6.5rem_minmax(0,1fr)]">
          <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
            <Target
              className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Challenge
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground md:text-[14.5px]">
            {p.challenge}
          </p>
        </div>
        <div className="grid gap-3 bg-primary/[0.05] px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7rem_minmax(0,1fr)] md:items-start md:gap-x-6 lg:grid-cols-[6.5rem_minmax(0,1fr)]">
          <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
            <Wrench className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
              Solution
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground md:text-[14.5px]">
            {p.solution}
          </p>
        </div>
        <div className="grid gap-3 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7rem_minmax(0,1fr)] md:items-start md:gap-x-6 lg:grid-cols-[6.5rem_minmax(0,1fr)]">
          <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
            <TrendingUp
              className="h-3.5 w-3.5 shrink-0 text-warm"
              aria-hidden
            />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-warm">
              Impact
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground md:text-[14.5px]">
            {p.impact}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <SectionReveal
      id="case-studies"
      className="scroll-mt-8 border-t border-border py-12 md:py-16"
    >
      <SectionHeader
        title="Case studies"
        description="Challenge, solution, and impact. Design decisions on the surface, engineering decisions underneath."
      />
      <div className="space-y-14 pt-8 md:space-y-20 md:pt-10">
        {featuredProjects.map((p, idx) => {
          const isPortrait = p.mediaOrientation === "portrait";

          if (isPortrait) {
            // Portrait: header + editorial rows stack in the left column; the media
            // on the right stretches (items-stretch) to match the left column height,
            // so there's no empty space at the bottom of either side.
            return (
              <article
                key={p.id}
                id={`case-study-${p.id}`}
                className="scroll-mt-8 border-b border-border/60 pb-14 last:border-0 last:pb-0 md:pb-20"
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_minmax(300px,420px)] lg:items-stretch lg:gap-12">
                  <div className="space-y-8 md:space-y-10">
                    <ProjectHeader p={p} idx={idx} />
                    <EditorialRows p={p} />
                  </div>
                  <ProjectMedia p={p} />
                </div>
              </article>
            );
          }

          // Landscape: header + media side-by-side, editorial rows below at full width
          return (
            <article
              key={p.id}
              id={`case-study-${p.id}`}
              className="scroll-mt-8 border-b border-border/60 pb-14 last:border-0 last:pb-0 md:pb-20"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_minmax(300px,420px)] lg:items-start lg:gap-12">
                <ProjectHeader p={p} idx={idx} />
                <ProjectMedia p={p} />
              </div>

              <div className="mt-10">
                <EditorialRows p={p} />
              </div>
            </article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
