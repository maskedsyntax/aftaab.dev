import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ShippedCard } from "@/lib/portfolio-data";
import { StudioDot } from "@/components/portfolio/studio-badge";
import { Reveal } from "@/components/portfolio/reveal";
import { TiltCard } from "@/components/portfolio/tilt-card";
import { cn } from "@/lib/utils";

/**
 * Column spans on the three-column desktop grid, by position. Wide, narrow /
 * narrow, wide keeps the rows interlocking for the four home-page apps.
 */
const LG_SPANS = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2"];

function Media({ card }: { card: ShippedCard }) {
  const accent = card.accentColor ?? "#6366f1";

  if (card.coverImage && card.coverFit === "cover") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={card.coverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  if (card.coverImage) {
    // Art with baked-in text is never cropped. It sits whole, framed like a
    // screenshot, so light artwork doesn't read as a pasted box on dark cards.
    return (
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden p-5 md:p-7"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 45%, ${accent}33, transparent 75%)`,
        }}
      >
        <Image
          src={card.coverImage}
          alt=""
          width={1200}
          height={800}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="h-auto max-h-full w-auto max-w-full rounded-xl object-contain shadow-[0_24px_50px_-18px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition-transform duration-700 ease-out group-hover:scale-[1.03] dark:ring-white/10"
        />
      </div>
    );
  }

  // No artwork: the icon is the picture, over a wash of the app's accent
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 65% 60% at 50% 45%, ${accent}55, ${accent}12 60%, transparent 85%)`,
      }}
    >
      <Image
        src={card.iconPath}
        alt=""
        width={128}
        height={128}
        sizes="128px"
        className="relative h-28 w-28 rounded-[28px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:rotate-[-3deg] md:h-32 md:w-32 md:rounded-[30px]"
      />
    </div>
  );
}

function BentoCard({ card }: { card: ShippedCard }) {
  const comingSoon = card.status === "coming-soon";

  const body = (
    <>
      <div className="relative h-56 border-b border-border/50 bg-muted/30 md:h-72">
        <Media card={card} />
        {comingSoon ? (
          <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
            {card.note ?? "In review"}
          </span>
        ) : null}
      </div>

      <div className="flex items-center gap-3.5 p-4 md:p-5">
        <Image
          src={card.iconPath}
          alt=""
          width={44}
          height={44}
          sizes="44px"
          className="h-11 w-11 shrink-0 rounded-[12px] shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)]"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-display text-[17px] font-semibold tracking-tight text-foreground">
              {card.name}
            </h3>
            <StudioDot studio={card.studio} />
          </div>
          <p className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-muted-foreground">
            {card.tagline}
          </p>
        </div>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>
    </>
  );

  const shell =
    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-foreground/20 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]";

  if (card.caseStudySlug) {
    return (
      <Link href={`/projects/${card.caseStudySlug}`} className={shell}>
        {body}
      </Link>
    );
  }
  if (card.externalHref) {
    return (
      <a href={card.externalHref} target="_blank" rel="noopener noreferrer" className={shell}>
        {body}
      </a>
    );
  }
  return <div className={shell}>{body}</div>;
}

export function AppBento({ cards }: { cards: ShippedCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => (
        <Reveal
          key={card.key}
          index={i}
          className={cn(
            LG_SPANS[i % LG_SPANS.length],
            // Two-column tablets: a lone last card spans the row
            cards.length % 2 === 1 && i === cards.length - 1 && "sm:col-span-2",
          )}
        >
          <TiltCard>
            <BentoCard card={card} />
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}
