import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { processPolish, processSteps } from "@/lib/portfolio-data";

export function ProcessSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <SectionHeader
        title="Process"
        description="How I work with founders and teams. Research through release, with design and engineering interleaved at every step."
      />
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-2">
        {processSteps.map((step, i) => (
          <li
            key={step.title}
            className="relative flex gap-5 bg-card p-6 transition-colors hover:bg-card/80 md:p-7"
          >
            <span className="shrink-0 font-display text-3xl font-semibold tabular-nums text-foreground/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-[16px] font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        {processPolish}
      </p>
    </SectionReveal>
  );
}
