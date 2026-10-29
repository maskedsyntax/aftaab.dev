import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SelectedWorksGrid } from "@/components/portfolio/selected-works-grid";
import { StudioLegend } from "@/components/portfolio/studio-legend";
import { appleApps, homeAppsIntro, homeCards } from "@/lib/portfolio-data";

export function SelectedWorks() {
  return (
    <SectionReveal id="apps" className="scroll-mt-8 py-12 md:py-16">
      <SectionHeader
        title="Apps"
        description={homeAppsIntro}
        footer={<StudioLegend />}
      />
      <SelectedWorksGrid cards={homeCards} />
      <Link
        href="/apps"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        See all {appleApps.length} apps
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </SectionReveal>
  );
}
