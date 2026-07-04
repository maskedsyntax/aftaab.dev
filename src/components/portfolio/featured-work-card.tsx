"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { FeaturedProject } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export function FeaturedWorkCard({
  project,
  caseStudyHref,
}: {
  project: FeaturedProject;
  caseStudyHref?: string;
}) {
  const href = caseStudyHref ?? `/projects/${project.id}`;
  const accent = project.accentColor ?? "#6366f1";

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)] md:p-6"
    >
      {/* Per-project accent glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accent}28 0%, transparent 50%, ${accent}14 100%)`,
        }}
      />

      {/* Thumbnail */}
      <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-muted/30 shadow-sm">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`${project.name} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
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
        className="w-fit border-border/60 bg-background/70 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm"
      >
        {project.category}
      </Badge>
      <h3 className="mt-3 font-display text-[19px] font-semibold leading-snug tracking-tight text-foreground">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.tagline}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        <span className="font-mono uppercase tracking-[0.16em]">Case study</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
