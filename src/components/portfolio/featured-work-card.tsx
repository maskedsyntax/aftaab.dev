"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { FeaturedProject } from "@/lib/portfolio-data";
import { BotttleCardPreview } from "@/components/portfolio/previews/botttle-card-preview";
import { ArrowUpRight } from "lucide-react";

export function FeaturedWorkCard({
  project,
  caseStudyHref,
}: {
  project: FeaturedProject;
  caseStudyHref?: string;
}) {
  const href = caseStudyHref ?? `#case-study-${project.id}`;
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-200 hover:border-border hover:shadow-md md:p-6"
    >
      <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-border/60 bg-muted/30">
        {project.coverVariant === "botttle-preview" ? (
          <div className="absolute inset-0 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <BotttleCardPreview className="h-full w-full rounded-lg" />
          </div>
        ) : project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`${project.name} preview`}
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6">
            <span className="text-center font-mono text-sm font-medium tracking-tight text-muted-foreground/70 transition-colors group-hover:text-foreground/80">
              {project.name}
            </span>
          </div>
        )}
      </div>
      <Badge
        variant="secondary"
        className="w-fit font-mono text-[10px] font-medium uppercase tracking-wider"
      >
        {project.category}
      </Badge>
      <h3 className="mt-3 text-[17px] font-semibold leading-snug tracking-tight text-foreground">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.tagline}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        Case study
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
