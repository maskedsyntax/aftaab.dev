import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import type { Metadata } from "next";
import { FeaturedWorkCard } from "@/components/portfolio/featured-work-card";
import { featuredProjects, selectedWorksIntro } from "@/lib/portfolio-data";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected systems and products: developer tooling, infrastructure, and ML-integrated applications.",
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
              {selectedWorksIntro}{" "}
              <Link
                href="https://github.com/MaskedSyntax"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
              >
                GitHub
              </Link>{" "}
              has additional experiments and smaller tools.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <FeaturedWorkCard
                key={project.id}
                project={project}
                caseStudyHref={`/#case-study-${project.id}`}
              />
            ))}
          </div>
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  );
}
