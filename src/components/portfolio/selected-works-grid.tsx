import Link from "next/link";
import Image from "next/image";
import type { FeaturedProject } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

function BentoCard({ project, hero = false }: { project: FeaturedProject; hero?: boolean }) {
  const isBanner = project.bentoSize === "banner";
  const accent = project.accentColor ?? "#6366f1";
  const href = `/projects/${project.id}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card"
    >
      {/* Image — fills all remaining height */}
      <div className="relative min-h-0 flex-1">
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={`${project.name} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            sizes={hero || isBanner ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
            priority={hero}
          />
        )}
        {/* Per-project accent glow on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${accent}38, transparent)`,
          }}
        />
      </div>

      {/* Footer — same card, visually connected to the image */}
      <div
        className="flex shrink-0 items-center justify-between border-t border-white/[0.06] px-4 py-3.5"
        style={{ background: `linear-gradient(135deg, ${accent}0d 0%, transparent 60%)` }}
      >
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground/70">
            {project.category}
          </p>
          <p className="mt-0.5 truncate font-display text-[14px] font-semibold leading-snug text-foreground">
            {project.name}
          </p>
          {hero && (
            <p className="mt-1 line-clamp-2 max-w-lg text-[12px] leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
          )}
        </div>
        <ArrowUpRight
          aria-hidden
          className="ml-3 h-4 w-4 shrink-0 text-muted-foreground/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
        />
      </div>
    </Link>
  );
}

function wrapperClass(project: FeaturedProject): string {
  switch (project.bentoSize) {
    case "banner":
      return "col-span-1 h-[250px] sm:col-span-2 sm:h-[440px]";
    default:
      return "h-[290px] sm:h-[390px]";
  }
}

export function SelectedWorksGrid({ projects }: { projects: FeaturedProject[] }) {
  const hero = projects.find((p) => p.bentoSize === "hero");
  const rest = projects.filter((p) => p.bentoSize !== "hero");

  return (
    <div className="flex flex-col gap-3">
      {/* Hero — full width, taller to avoid bottom crop */}
      {hero && (
        <div className="h-[340px] sm:h-[540px] lg:h-[740px]">
          <BentoCard project={hero} hero />
        </div>
      )}

      {/* Remaining — 2-col auto-flow */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {rest.map((project) => (
          <div key={project.id} className={wrapperClass(project)}>
            <BentoCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
