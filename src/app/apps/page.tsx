import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { SelectedWorksGrid } from "@/components/portfolio/selected-works-grid";
import { StudioLegend } from "@/components/portfolio/studio-legend";
import { SiteFooter } from "@/components/site-footer";
import { shippedCards, shippedIntro } from "@/lib/portfolio-data";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Every app by Aftaab Siddiqui on the App Store, Mac App Store, and Google Play, from MaskedSyntax and Gentleloop Labs.",
  alternates: { canonical: "/apps" },
  openGraph: { url: `${siteUrl}/apps` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Apps",
      item: `${siteUrl}/apps`,
    },
  ],
};

export default function AppsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <main className="container mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-6 sm:pt-16">
          <header className="mb-8 max-w-2xl">
            <h1 className="font-display text-[2rem] font-semibold tracking-display-tight text-foreground md:text-[2.5rem]">
              Apps
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {shippedIntro}
            </p>
            <div className="mt-4">
              <StudioLegend />
            </div>
          </header>

          <SelectedWorksGrid cards={shippedCards} />

          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Web products and tools
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  );
}
