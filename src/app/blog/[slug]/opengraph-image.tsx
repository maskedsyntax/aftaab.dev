import { ImageResponse } from "next/og";
import { OgBrandImage } from "@/lib/og-brand";
import { getAllBlogs, getBlogBySlug } from "@/lib/getBlogs";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Aftaab Siddiqui — Blog post";

export function generateStaticParams() {
  return getAllBlogs().map((p) => ({ slug: p.slug }));
}

export default function BlogOpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogBySlug(params.slug);
  return new ImageResponse(
    (
      <OgBrandImage
        eyebrow={post?.date ? `Blog · ${post.date}` : "Blog"}
        title={post?.title?.trim() ?? "Post"}
        subtitle={post?.description?.trim() ?? "A note from Aftaab Siddiqui."}
        footerNote="aftaab.dev/blog"
      />
    ),
    { ...size }
  );
}
