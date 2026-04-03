import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllBlogs, getBlogBySlug } from "@/lib/getBlogs";
import MarkdownIt from "markdown-it";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl, siteName } from "@/lib/site";

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

const md = new MarkdownIt({
  html: false,
  xhtmlOut: true,
  breaks: false,
  linkify: true,
  typographer: true,
  quotes: "\u201C\u201D\u2018\u2019",
}).enable(["heading", "blockquote", "inline", "image", "fence", "code"]);

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
  const publishedTime = toISODate(blog.date);
  return {
    title,
    description: blog.description,
    authors: [{ name: siteName }],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description: blog.description,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: blog.description,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;

  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const htmlContent = md.render(blog.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title.trim(),
    description: blog.description,
    datePublished: toISODate(blog.date),
    author: { "@type": "Person", name: siteName, url: siteUrl },
    url: `${siteUrl}/blog/${resolvedParams.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(articleJsonLd) }}
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
            {blog.description}
          </p>
          <hr className="my-8" />
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
