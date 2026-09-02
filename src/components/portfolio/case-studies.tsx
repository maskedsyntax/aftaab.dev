import type { FeaturedProject } from "@/lib/portfolio-data";
import { Target, Wrench, TrendingUp } from "lucide-react";
import Image from "next/image";

export function ProjectMedia({ p }: { p: FeaturedProject }) {
  const isPortrait = p.mediaOrientation === "portrait";
  // Portrait: stretch to match the left column's full height (header + editorial rows)
  // so the two columns finish together. Landscape: fixed 16:10 aspect, sticky so the
  // visual stays with the reader while they scroll past the editorial rows below.
  const shapeClass = isPortrait
    ? "h-full min-h-[540px] lg:min-h-[620px]"
    : "aspect-[16/10] lg:sticky lg:top-24";

  // Marketing art carries its headline in the pixels — never crop it.
  const contain = p.coverFit === "contain";

  return (
    <div
      className={`relative ${shapeClass} w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.3)]`}
      style={
        contain
          ? {
              background: `linear-gradient(160deg, ${
                p.accentColor ?? "#6366f1"
              }14 0%, transparent 70%)`,
            }
          : undefined
      }
    >
      {p.coverImage ? (
        <div className={contain ? "absolute inset-4 sm:inset-5" : "absolute inset-0"}>
          <Image
            src={p.coverImage}
            alt={`${p.name} preview`}
            fill
            className={
              contain
                ? "object-contain object-center"
                : "object-cover object-center"
            }
            sizes="(max-width: 1024px) 100vw, 440px"
          />
        </div>
      ) : p.iconPath ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{
            background: `linear-gradient(160deg, ${
              p.accentColor ?? "#6366f1"
            }1f 0%, transparent 65%)`,
          }}
        >
          <Image
            src={p.iconPath}
            alt={`${p.name} icon`}
            width={128}
            height={128}
            className="rounded-[30px] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)]"
            sizes="128px"
          />
        </div>
      ) : null}
    </div>
  );
}

export function EditorialRows({ p }: { p: FeaturedProject }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-sm backdrop-blur-sm">
      <div className="divide-y divide-border/50">
        <div className="grid gap-3 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7rem_minmax(0,1fr)] md:items-start md:gap-x-6 md:gap-y-0 lg:grid-cols-[6.5rem_minmax(0,1fr)]">
          <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
            <Target
              className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Challenge
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground md:text-[14.5px]">
            {p.challenge}
          </p>
        </div>
        <div className="grid gap-3 bg-primary/[0.05] px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7rem_minmax(0,1fr)] md:items-start md:gap-x-6 lg:grid-cols-[6.5rem_minmax(0,1fr)]">
          <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
            <Wrench className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
              Solution
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground md:text-[14.5px]">
            {p.solution}
          </p>
        </div>
        <div className="grid gap-3 px-4 py-4 sm:px-5 sm:py-5 md:grid-cols-[7rem_minmax(0,1fr)] md:items-start md:gap-x-6 lg:grid-cols-[6.5rem_minmax(0,1fr)]">
          <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
            <TrendingUp
              className="h-3.5 w-3.5 shrink-0 text-warm"
              aria-hidden
            />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-warm">
              Impact
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground md:text-[14.5px]">
            {p.impact}
          </p>
        </div>
      </div>
    </div>
  );
}
