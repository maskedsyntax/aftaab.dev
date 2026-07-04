import Image from "next/image";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { aboutFull } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      {/* Name + memoji row */}
      <div className="mb-8 flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full md:h-16 md:w-16">
          <Image
            src="/assets/profile.png"
            alt="Aftaab Siddiqui"
            fill
            className="object-contain"
            sizes="64px"
          />
        </div>
        <div>
          <h2 className="font-display text-[1.55rem] font-semibold tracking-display-tight text-foreground md:text-[1.85rem]">
            Hi, I&apos;m Aftaab.
          </h2>
          <div className="mt-2 h-px w-14 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
        </div>
      </div>

      {/* Body */}
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-14">
        {/* Paragraphs */}
        <div className="space-y-5">
          {aboutFull.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[15px] leading-[1.75] text-foreground/80 md:text-[15.5px]"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Meta facts */}
        <div className="flex flex-col justify-start gap-5 md:gap-6">
          {aboutFull.meta.map(({ label, value }) => (
            <div key={label} className="border-l-2 border-border pl-4">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                {label}
              </p>
              <p className="mt-1 text-[13.5px] font-medium text-foreground">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
