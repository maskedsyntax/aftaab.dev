import { SectionReveal } from "@/components/portfolio/section-reveal";
import { Reveal } from "@/components/portfolio/reveal";
import { StackBadge } from "@/components/portfolio/stack-section";
import { specializations } from "@/lib/portfolio-data";

export function SpecializationsSection() {
  return (
    <SectionReveal
      id="services"
      className="scroll-mt-8 border-t border-border py-12 md:py-16"
    >
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        What I do
      </p>
      <h2 className="mt-4 font-serif italic font-normal leading-[1.06] tracking-serif-tight text-foreground text-[2rem] md:text-[2.6rem]">
        {specializations.whyMe.title}
      </h2>
      <p className="mt-3 text-[15px] text-muted-foreground md:text-base">
        {specializations.whyMe.body}
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {specializations.items.map((item, i) => (
          <li key={item.title}>
            <Reveal
              index={i}
              className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-5 transition-[border-color,box-shadow] duration-300 hover:border-foreground/20 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)]"
            >
              <span className="font-display text-2xl font-semibold tabular-nums text-foreground/10 transition-colors group-hover:text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[17px] font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {specializations.stack.map((name) => (
          <StackBadge key={name} name={name} />
        ))}
      </div>
    </SectionReveal>
  );
}
