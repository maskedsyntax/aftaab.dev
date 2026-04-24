import Link from "next/link";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { getAllBlogs } from "@/lib/getBlogs";
import { ArrowRight } from "lucide-react";

export function BlogPreviewSection() {
  const posts = getAllBlogs().slice(0, 4);

  return (
    <SectionReveal
      id="writing"
      className="scroll-mt-8 border-t border-border py-12 md:py-16"
    >
      <SectionHeader
        title="Writing"
        description="Long-form notes on product, design, and engineering decisions."
      />
      <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border">
        {posts.map((post) => (
          <li key={`${post.slug}-${post.id}`}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1.5 bg-card/40 px-5 py-4 transition-colors hover:bg-accent/40 md:flex-row md:items-baseline md:justify-between md:gap-8 md:px-6 md:py-5"
            >
              <span className="text-[15px] font-medium leading-snug text-foreground group-hover:underline group-hover:decoration-muted-foreground/50 group-hover:underline-offset-4">
                {post.title.trim()}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                {post.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        All posts
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </SectionReveal>
  );
}
