import {PageTransition} from "@/components/page-transition";
import type {Metadata} from "next";
import {ExperienceSection} from "@/components/experience-section";
import {AboutSection} from "@/components/about-section";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, experience, and how I approach building software.",
  alternates: { canonical: "/about" },
  openGraph: { url: `${siteUrl}/about` },
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto max-w-3xl px-5 pb-6 pt-12 sm:px-6 sm:pt-16">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">About</h1>
          <AboutSection/>
          <ExperienceSection/>
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  )
}

