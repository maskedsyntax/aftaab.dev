import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { labContent } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { FlaskConical } from "lucide-react";

export function LabSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <SectionHeader title={labContent.title} />

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:gap-12 md:p-8">
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            {labContent.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="flex items-start justify-center md:justify-end md:pt-0.5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-muted/50 dark:bg-muted/30">
              <FlaskConical
                className="h-7 w-7 text-primary"
                strokeWidth={1.75}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-muted/30 px-6 py-4 dark:bg-muted/20 md:px-8">
          <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Open source & tools
          </p>
          <div className="flex flex-wrap gap-2">
            {labContent.contributions.map((name) => (
              <Badge
                key={name}
                variant="secondary"
                className="font-mono text-[11px] font-normal"
              >
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
