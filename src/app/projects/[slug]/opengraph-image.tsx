import { ImageResponse } from "next/og";
import { OgBrandImage } from "@/lib/og-brand";
import { featuredProjects } from "@/lib/portfolio-data";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Aftaab Siddiqui — Project case study";

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = featuredProjects.find((p) => p.id === params.slug);
  return [
    {
      contentType,
      size,
      id: params.slug,
      alt: project ? `${project.name} — ${project.tagline}` : alt,
    },
  ];
}

export default function ProjectOpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const project = featuredProjects.find((p) => p.id === params.slug);
  return new ImageResponse(
    (
      <OgBrandImage
        eyebrow={project ? `Case study · ${project.category}` : "Case study"}
        title={project?.name ?? "Project"}
        subtitle={project?.tagline ?? "A project by Aftaab Siddiqui."}
        footerNote={project?.role ?? "aftaab.dev"}
      />
    ),
    { ...size }
  );
}
