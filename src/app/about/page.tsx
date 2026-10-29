import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { AboutSection } from "@/components/portfolio/about-section";
import { LabelsSection } from "@/components/portfolio/labels-section";
import { ProcessSection } from "@/components/portfolio/process-section";
import { StackSection } from "@/components/portfolio/stack-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aftaab Siddiqui: iOS and mobile engineer and product designer. Background, the two app studios, process, and stack.",
  alternates: { canonical: "/about" },
  openGraph: { url: `${siteUrl}/about` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${siteUrl}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <main className="container mx-auto max-w-5xl px-5 pb-6 pt-12 sm:px-6 sm:pt-16">
          <h1 className="sr-only">About Aftaab Siddiqui</h1>
          <AboutSection />
          <LabelsSection />
          <ProcessSection />
          <StackSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  );
}
