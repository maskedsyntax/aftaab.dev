import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { siteUrl } from "@/lib/site";
import { HeroSection } from "@/components/portfolio/hero-section";
import { SelectedWorks } from "@/components/portfolio/selected-works";
import { CaseStudies } from "@/components/portfolio/case-studies";
import { SpecializationsSection } from "@/components/portfolio/specializations-section";
import { ProcessSection } from "@/components/portfolio/process-section";
import { StackSection } from "@/components/portfolio/stack-section";
import { BlogPreviewSection } from "@/components/portfolio/blog-preview-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: siteUrl },
};

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto max-w-5xl px-5 pb-6 pt-5 sm:px-6 md:pt-6">
          <HeroSection />
          <SelectedWorks />
          <CaseStudies />
          <SpecializationsSection />
          <ProcessSection />
          <StackSection />
          <BlogPreviewSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  );
}
