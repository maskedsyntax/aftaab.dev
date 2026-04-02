import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { specializations } from "@/lib/portfolio-data";

export function SpecializationsSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <SectionHeader
        title="Specializations"
        description="What I can take on end-to-end—grounded in systems thinking, not surface-level UI."
      />

      <ul className="grid max-w-2xl gap-2">
        {specializations.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 max-w-2xl rounded-xl border border-border bg-card p-5 shadow-sm md:p-6">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Perspective
        </p>
        <h3 className="mt-2 border-l-2 border-primary pl-3 text-[1.05rem] font-semibold tracking-tight text-foreground md:text-[1.1rem]">
          {specializations.whyMe.title}
        </h3>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {specializations.whyMe.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
