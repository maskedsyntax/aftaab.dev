import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { stackCategories, stackNote } from "@/lib/portfolio-data";

export function StackSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <SectionHeader title="Stack" />
      <div className="grid gap-px overflow-hidden rounded-lg border border-border sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((cat) => (
          <div key={cat.name} className="bg-card/60 p-5 md:p-6">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {cat.name}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/90">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-[13px] italic leading-relaxed text-muted-foreground md:text-sm">
        {stackNote}
      </p>
    </SectionReveal>
  );
}
