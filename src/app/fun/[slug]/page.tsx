import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { FunExperienceShell } from "@/components/fun/fun-experience-shell";
import { funPicks, getFunPickBySlug } from "@/lib/fun-picks";
import { siteName, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return funPicks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pick = getFunPickBySlug(slug);
  if (!pick) return { title: "Fun" };
  return {
    title: pick.title,
    description: pick.note ?? `${pick.title} — an on-site experience.`,
    alternates: { canonical: `/fun/${slug}` },
    openGraph: {
      title: pick.title,
      description: pick.note,
      url: `${siteUrl}/fun/${slug}`,
    },
  };
}

export default async function FunExperiencePage({ params }: Props) {
  const { slug } = await params;
  const pick = getFunPickBySlug(slug);
  if (!pick) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pick.title,
    description: pick.note,
    url: `${siteUrl}/fun/${slug}`,
    isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <main className="container mx-auto max-w-5xl px-5 pb-24 pt-12 sm:px-6 sm:pt-16">
          <FunExperienceShell pick={pick} />
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  );
}
