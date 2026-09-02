import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { StudioDot, studioWash } from "@/components/portfolio/studio-badge";
import {
  appCountForStudio,
  labelsIntro,
  studioOrder,
  studios,
  type StudioId,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function LabelCard({ id }: { id: StudioId }) {
  const studio = studios[id];
  const count = appCountForStudio(id);

  const card = (
    <>
      {/* Ambient wash — same idiom as the featured cards, tokens instead of hex */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-px -z-0 rounded-2xl bg-gradient-to-br to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100",
          studioWash(id),
        )}
      />

      <div className="relative z-[1] flex h-full flex-col">
        {/* Legend row — this is what makes every dot further down the page readable */}
        <div className="flex items-center gap-2">
          {/* Name is visible in the heading right below — don't read it twice */}
          <StudioDot studio={id} labelled={false} />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {studio.focus}
          </span>
        </div>

        <h3 className="mt-3 font-display text-[19px] font-semibold leading-snug tracking-tight text-foreground">
          {studio.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {studio.blurb}
        </p>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60">
          {count} {count === 1 ? "app" : "apps"}
        </p>
      </div>
    </>
  );

  const shell =
    "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 md:p-6";

  if (!studio.url) {
    return <div className={shell}>{card}</div>;
  }

  return (
    <a
      href={studio.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        shell,
        "hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)]",
      )}
    >
      {card}
    </a>
  );
}

export function LabelsSection() {
  return (
    <SectionReveal
      id="labels"
      className="scroll-mt-8 border-t border-border py-12 md:py-16"
    >
      <SectionHeader title="Two labels" description={labelsIntro} />
      <div className="grid gap-3 sm:grid-cols-2">
        {studioOrder.map((id) => (
          <LabelCard key={id} id={id} />
        ))}
      </div>
    </SectionReveal>
  );
}
