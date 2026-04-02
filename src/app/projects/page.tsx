import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import type { Metadata } from "next";
import { FeaturedWorkCard } from "@/components/portfolio/featured-work-card";
import {
  CacheVectorOssSection,
  MoreWorkList,
  WorkPageExternalLinks,
} from "@/components/portfolio/work-page-extras";
import {
  additionalWorkProjects,
  featuredProjects,
  workPageIntro,
} from "@/lib/portfolio-data";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Featured case studies, full project catalog, CacheVector open source, and links to GitHub and MaskedSyntax.",
  alternates: { canonical: "/projects" },
  openGraph: { url: `${siteUrl}/projects` },
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto max-w-3xl px-5 pb-6 pt-12 sm:px-6 sm:pt-16">
          <header className="mb-12 max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Work
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {workPageIntro}
            </p>
          </header>

          <section className="mb-14">
            <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Featured
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Deep-dive case studies live on the{" "}
              <Link
                href="/#case-studies"
                className="font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
              >
                home page
              </Link>
              . Jump to a study from a card below.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <FeaturedWorkCard
                  key={project.id}
                  project={project}
                  caseStudyHref={`/#case-study-${project.id}`}
                />
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              More projects
            </h2>
            <p className="mt-2 mb-6 max-w-2xl text-sm text-muted-foreground">
              Additional products, lab tools, and builds not covered by the
              featured case studies.
            </p>
            <MoreWorkList items={additionalWorkProjects} />
          </section>

          <section className="mb-12 space-y-8">
            <CacheVectorOssSection />
            <WorkPageExternalLinks />
          </section>
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  );
}
