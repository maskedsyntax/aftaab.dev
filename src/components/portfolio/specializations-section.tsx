import { SectionReveal } from "@/components/portfolio/section-reveal";
import { specializations } from "@/lib/portfolio-data";

export function SpecializationsSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <h2 className="sr-only">Services</h2>

      <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14 lg:gap-16">
        {/* Left — editorial statement + why me */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </p>
          <h3 className="mt-4 font-serif italic font-normal leading-[1.06] tracking-serif-tight text-foreground text-[2rem] md:text-[2.4rem] lg:text-[2.7rem]">
            {specializations.whyMe.title}
          </h3>
          <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">
            {specializations.whyMe.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Right — service tiles */}
        <div className="flex flex-col justify-center divide-y divide-border/50">
          {specializations.items.map((item) => (
            <div key={item.title} className="group py-4 first:pt-0 last:pb-0">
              <div className="flex items-start gap-3">
                <span
                  className="mt-[3px] h-3.5 w-0.5 shrink-0 rounded-full transition-colors duration-200 group-hover:bg-primary"
                  style={{ backgroundColor: "hsl(var(--primary) / 0.3)" }}
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="font-display text-[14px] font-semibold leading-snug tracking-tight text-foreground md:text-[15px]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground md:text-[13px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
