import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import Link from 'next/link'
import {PageTransition} from "@/components/page-transition";
import type {Metadata} from "next";
import {getAllBlogs} from "@/lib/getBlogs";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering notes, product building, and systems thinking.",
  alternates: { canonical: "/blog" },
  openGraph: { url: `${siteUrl}/blog` },
}

export default function BlogPage() {
  const blogPosts = getAllBlogs();
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto max-w-3xl px-5 pb-6 pt-12 sm:px-6 sm:pt-16">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-[15px]">
            Long-form writing on building products and systems.
          </p>
          <div className="mt-10 grid gap-6">
            {blogPosts.map((post) => (
              <Card key={`${post.slug}-${post.id}`}
                    className="border-border transition-colors hover:bg-accent/30">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold leading-snug">{post.title.trim()}</CardTitle>
                  <CardDescription className="font-mono text-xs">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-mono text-sm font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
                  >
                    Read more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  )
}

