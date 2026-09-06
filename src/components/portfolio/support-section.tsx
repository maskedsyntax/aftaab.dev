import { SiKofi } from "react-icons/si";
import { Coffee } from "lucide-react";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { support } from "@/lib/portfolio-data";

export function SupportSection() {
  return (
    <SectionReveal
      id="support"
      className="scroll-mt-8 border-t border-border py-12 md:py-16"
    >
      <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_1px_2px_rgba(0,0,0,0.04)] md:p-8">
        {/* Warm wash — same idiom as the label cards, on the site's own token */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px -z-0 rounded-2xl bg-gradient-to-br from-warm/[0.10] via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 -z-0 h-52 w-52 rounded-full bg-warm/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-150"
        />

        <div className="relative z-[1] flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* Mark */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-warm/25 bg-warm/10 text-warm sm:h-16 sm:w-16">
            <Coffee className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
          </div>

          {/* Copy */}
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {support.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-[1.35rem] font-semibold tracking-display-tight text-foreground md:text-[1.6rem]">
              {support.title}
            </h2>
            <p className="mt-2.5 max-w-xl text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">
              {support.body}
            </p>
            <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground/55">
              {support.note}
            </p>
          </div>

          {/* Action */}
          <div className="shrink-0">
            <a
              href={support.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-warm px-5 py-2.5 text-sm font-medium text-warm-foreground shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5"
            >
              <SiKofi className="h-4 w-4" aria-hidden />
              {support.cta}
            </a>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
