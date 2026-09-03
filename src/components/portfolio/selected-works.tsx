import Link from "next/link";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SelectedWorksGrid } from "@/components/portfolio/selected-works-grid";
import { shippedCards, shippedIntro } from "@/lib/portfolio-data";

export function SelectedWorks() {
  return (
    <SectionReveal id="selected-works" className="scroll-mt-8 py-12 md:py-16">
      <SectionHeader
        title="Shipped"
        description={shippedIntro}
        footer={
          <Link
            href="/projects"
            className="text-sm font-medium text-foreground underline decoration-muted-foreground/45 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            View all work
          </Link>
        }
      />
      <SelectedWorksGrid cards={shippedCards} />
    </SectionReveal>
  );
}
