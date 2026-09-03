import Link from "next/link";
import Image from "next/image";
import type { ShippedCard } from "@/lib/portfolio-data";
import { StudioDot } from "@/components/portfolio/studio-badge";
import { PlatformChip } from "@/components/portfolio/platform-chip";
import {
  AppStoreIcon,
  PlayStoreIcon,
} from "@/components/portfolio/store-icons";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Icon-led app card. Apps with a write-up link through to the case study;
 * the rest point at their store listing.
 */
function WorkCard({ card, wide = false }: { card: ShippedCard; wide?: boolean }) {
  const accent = card.accentColor ?? "#6366f1";
  const comingSoon = card.status === "coming-soon";
  const hasApple = Boolean(card.appStoreUrl);
  const hasMac = Boolean(card.macAppStoreUrl);
  const hasPlay = Boolean(card.playStoreUrl);

  const shell = cn(
    "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)] md:p-6",
    // Keeps the last row from leaving a gap when the count is odd
    wide && "sm:col-span-2",
  );

  const body = (
    <>
      {/* Accent wash keyed to the app's own artwork */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accent}24 0%, transparent 55%, ${accent}12 100%)`,
        }}
      />

      <div className="relative z-[1] flex flex-1 flex-col">
        {/* Icon + identity */}
        <div className="flex items-start gap-4">
          {card.iconPath ? (
            <div
              className="shrink-0 rounded-[20px] p-[3px] transition-transform duration-300 group-hover:-translate-y-1"
              style={{
                background: `linear-gradient(150deg, ${accent}40, transparent 70%)`,
              }}
            >
              <Image
                src={card.iconPath}
                alt=""
                width={72}
                height={72}
                sizes="72px"
                className="h-[68px] w-[68px] rounded-[18px] object-cover shadow-[0_10px_26px_-8px_rgba(0,0,0,0.45)]"
              />
            </div>
          ) : null}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <StudioDot studio={card.studio} />
              <span className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/75">
                {card.category}
              </span>
            </div>
            <h3 className="mt-1.5 font-display text-[19px] font-semibold leading-snug tracking-tight text-foreground">
              {card.name}
            </h3>
            {card.tech ? (
              <p className="mt-1 truncate font-mono text-[10.5px] text-muted-foreground/60">
                {card.tech}
              </p>
            ) : null}
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
          {card.tagline}
        </p>

        {/* Platforms */}
        {card.platforms.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {card.platforms.map((p) => (
              <PlatformChip key={p} label={p} />
            ))}
          </div>
        ) : null}

        {/* Availability + the way through */}
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/50 pt-3.5">
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground/70">
            {comingSoon ? (
              <span className="inline-flex rounded-full border border-dashed border-muted-foreground/35 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider">
                {card.note ?? "In review"}
              </span>
            ) : (
              <>
                {(hasApple || hasMac) && (
                  <span className="inline-flex items-center gap-1 font-mono text-[9.5px] uppercase tracking-[0.12em]">
                    <AppStoreIcon className="h-3 w-3 text-[#007AFF]" />
                    {hasMac && !hasApple ? "Mac App Store" : "App Store"}
                  </span>
                )}
                {hasPlay && (
                  <span className="inline-flex items-center gap-1 font-mono text-[9.5px] uppercase tracking-[0.12em]">
                    <PlayStoreIcon className="h-3 w-3 text-[#34A853]" />
                    Play
                  </span>
                )}
              </>
            )}
          </div>

          <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-foreground">
            {card.caseStudySlug ? "Case study" : "Visit"}
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </>
  );

  if (card.caseStudySlug) {
    return (
      <Link href={`/projects/${card.caseStudySlug}`} className={shell}>
        {body}
      </Link>
    );
  }

  if (card.externalHref) {
    return (
      <a
        href={card.externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={shell}
      >
        {body}
      </a>
    );
  }

  return <div className={shell}>{body}</div>;
}

export function SelectedWorksGrid({ cards }: { cards: ShippedCard[] }) {
  const lastIndex = cards.length - 1;
  const oddCount = cards.length % 2 === 1;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {cards.map((card, i) => (
        <WorkCard
          key={card.key}
          card={card}
          wide={oddCount && i === lastIndex}
        />
      ))}
    </div>
  );
}
