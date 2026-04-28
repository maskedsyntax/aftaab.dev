"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHydrationSafeReducedMotion } from "@/hooks/use-hydration-safe-reduced-motion";
import { FeaturedWorkCard } from "@/components/portfolio/featured-work-card";
import { BotttleCardPreview } from "@/components/portfolio/previews/botttle-card-preview";
import { TrelayCardPreview } from "@/components/portfolio/previews/trelay-card-preview";
import { RepogrepCardPreview } from "@/components/portfolio/previews/repogrep-card-preview";
import { HashprepCardPreview } from "@/components/portfolio/previews/hashprep-card-preview";
import { EiraFocusCardPreview } from "@/components/portfolio/previews/eirafocus-card-preview";
import { PatternsCardPreview } from "@/components/portfolio/previews/patterns-card-preview";
import { OpenConduitCardPreview } from "@/components/portfolio/previews/openconduit-card-preview";
import type { FeaturedProject } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease },
  },
};

function LeadFeaturedCard({ project }: { project: FeaturedProject }) {
  const href = `/projects/${project.id}`;

  const preview =
    project.coverVariant === "eirafocus-preview" ? (
      <EiraFocusCardPreview
        className="h-full w-full rounded-xl"
        layout="portrait"
      />
    ) : project.coverVariant === "botttle-preview" ? (
      <BotttleCardPreview className="h-full w-full rounded-xl" />
    ) : project.coverVariant === "trelay-preview" ? (
      <TrelayCardPreview className="h-full w-full rounded-xl" />
    ) : project.coverVariant === "repogrep-preview" ? (
      <RepogrepCardPreview className="h-full w-full rounded-xl" />
    ) : project.coverVariant === "hashprep-preview" ? (
      <HashprepCardPreview className="h-full w-full rounded-xl" />
    ) : project.coverVariant === "patterns-preview" ? (
      <PatternsCardPreview className="h-full w-full rounded-xl" />
    ) : project.coverVariant === "openconduit-preview" ? (
      <OpenConduitCardPreview className="h-full w-full rounded-xl" />
    ) : project.coverImage ? (
      <Image
        src={project.coverImage}
        alt={`${project.name} preview`}
        fill
        unoptimized
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    ) : null;

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.24)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-warm/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative grid gap-0 md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-between gap-6 p-6 md:p-8 lg:p-10">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="secondary"
                className="border-border/60 bg-background/70 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground"
              >
                Lead case study
              </Badge>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
                {project.category}
              </span>
            </div>
            <h3 className="font-serif text-[2.3rem] font-normal italic leading-[1.02] tracking-serif-tight text-foreground md:text-[2.9rem]">
              {project.name}
            </h3>
            <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">
              {project.tagline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-foreground">
              Read case study
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="text-muted-foreground/50">·</span>
            <span className="font-mono text-[11px] text-muted-foreground/80">
              {project.role}
            </span>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden border-t border-border/50 bg-muted/30 md:min-h-[360px] md:border-l md:border-t-0">
          <div className="absolute inset-0 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            {preview}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function SelectedWorksGrid({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  const reduceMotion = useHydrationSafeReducedMotion();
  const [lead, ...rest] = projects;

  const leadEl = lead ? <LeadFeaturedCard project={lead} /> : null;

  if (reduceMotion) {
    return (
      <div className="flex flex-col gap-6">
        {leadEl}
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <FeaturedWorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {lead ? (
        <motion.div variants={item}>{leadEl}</motion.div>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <motion.div key={project.id} variants={item}>
            <FeaturedWorkCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
