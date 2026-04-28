import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import {
  ProjectMedia,
  EditorialRows,
} from "@/components/portfolio/case-studies";
import { featuredProjects } from "@/lib/portfolio-data";
import { siteName, siteUrl } from "@/lib/site";

function jsonLdStringify(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.id === slug);
  if (!project) return { title: "Project" };

  const title = `${project.name} — ${project.category}`;
  const description = project.tagline;
  const url = `${siteUrl}/projects/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.id === slug);
  if (!project) notFound();

  const url = `${siteUrl}/projects/${slug}`;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.name,
    description: project.tagline,
    about: project.category,
    url,
    image: `${siteUrl}/projects/${slug}/opengraph-image`,
    creator: { "@type": "Person", name: siteName, url: siteUrl },
    author: { "@type": "Person", name: siteName, url: siteUrl },
    sameAs: [project.liveUrl, project.repoUrl].filter(Boolean),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${siteUrl}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: url,
      },
    ],
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdStringify(creativeWorkJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdStringify(breadcrumbJsonLd),
          }}
        />
        <main className="container mx-auto max-w-5xl px-5 pb-6 pt-12 sm:px-6 sm:pt-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All work
            </Link>
          </nav>

          <header className="max-w-2xl">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {project.category}
            </span>
            <h1 className="mt-3 font-display text-[2.1rem] font-semibold tracking-display-tight text-foreground md:text-[2.6rem]">
              {project.name}
            </h1>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
              {project.tagline}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">
              {project.role}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] font-medium transition-colors hover:bg-accent/60"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source
                </a>
              ) : null}
            </div>
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_minmax(320px,440px)] lg:items-start lg:gap-12">
            <EditorialRows p={project} />
            <ProjectMedia p={project} />
          </div>
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  );
}
