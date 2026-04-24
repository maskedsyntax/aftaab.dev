import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { specializations } from "@/lib/portfolio-data";

export function SpecializationsSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <SectionHeader
        title="Services"
        description="What I take on end to end, with design and engineering held in one hand."
      />

      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8 lg:gap-10">
        <ul className="grid auto-rows-fr gap-2">
          {specializations.items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border/70 bg-card px-4 py-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]"
            >
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-[9px] font-semibold tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
          <div className="h-full bg-gradient-to-br from-primary/[0.05] via-transparent to-warm/[0.05] p-5 md:p-7">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Perspective
            </p>
            <h3 className="mt-3 font-serif text-[1.45rem] italic font-normal tracking-serif-tight text-foreground md:text-[1.7rem]">
              {specializations.whyMe.title}
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {specializations.whyMe.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
