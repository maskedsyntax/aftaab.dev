import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllBlogs, getBlogBySlug } from "@/lib/getBlogs";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl, siteName } from "@/lib/site";
import { renderBlogMarkdown } from "@/lib/render-markdown";

function toISODate(ddmmyyyy: string): string {
  const d = new Date(ddmmyyyy.split("-").reverse().join("-"));
  if (Number.isNaN(d.getTime())) {
    return new Date(0).toISOString();
  }
  return d.toISOString();
}

/** Safe inside `<script type="application/ld+json">` (avoids `</script>` breaking the tag). */
function jsonLdStringify(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) {
    return { title: "Post" };
  }
  const title = blog.title.trim();
  const desc = blog.description?.trim() || title;
  const publishedTime = toISODate(blog.date);
  const modifiedTime = blog.dateModified
    ? toISODate(blog.dateModified)
    : publishedTime;
  return {
    title,
    description: desc,
    authors: [{ name: siteName, url: siteUrl }],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description: desc,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [siteUrl],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;

  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  let htmlContent = "";
  try {
    htmlContent = renderBlogMarkdown(blog.content);
  } catch (err) {
    console.error(
      "[blog] Markdown render failed:",
      resolvedParams.slug,
      err
    );
    htmlContent =
      "<p>Could not render this post. Check the Markdown source for issues.</p>";
  }

  const safeDesc = blog.description?.trim() || blog.title.trim();

  const canonicalUrl = `${siteUrl}/blog/${resolvedParams.slug}`;
  const datePublished = toISODate(blog.date);
  const dateModified = blog.dateModified
    ? toISODate(blog.dateModified)
    : datePublished;
  const wordCount = blog.content
    .replace(/[`*_>#~\[\]\(\)\-\!]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title.trim(),
    description: safeDesc,
    datePublished,
    dateModified,
    author: { "@type": "Person", name: siteName, url: siteUrl },
    publisher: { "@type": "Person", name: siteName, url: siteUrl },
    image: `${canonicalUrl}/opengraph-image`,
    url: canonicalUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    wordCount,
    inLanguage: "en",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title.trim(),
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(breadcrumbJsonLd) }}
      />
      <main className="container mx-auto max-w-3xl px-5 pb-6 pt-12 sm:px-6 sm:pt-16">
        <article className="prose prose-neutral dark:prose-invert mx-auto max-w-none lg:prose-lg">
          <div className="not-prose mb-8">
            <Link
              href="/blog"
              className="font-mono text-sm font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
            >
              ← Blog
            </Link>
          </div>
          <h1 className="font-semibold tracking-tight">{blog.title.trim()}</h1>
          <p className="text-sm text-muted-foreground">{blog.date}</p>
          <p className="lead !font-normal text-muted-foreground">
            {safeDesc}
          </p>
          <hr className="my-8" />
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
