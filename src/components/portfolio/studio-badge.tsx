import { cn } from "@/lib/utils";
import { studios, type StudioId } from "@/lib/portfolio-data";

/**
 * Studio colour association. Literal class strings (never interpolated)
 * so Tailwind's scanner keeps them. Warm = MaskedSyntax, primary/teal =
 * Gentleloop Labs. The Labels section establishes this key before any
 * dot appears further down the page.
 */
const STUDIO_STYLES: Record<
  StudioId,
  { dot: string; text: string; bg: string; wash: string }
> = {
  maskedsyntax: {
    dot: "bg-warm",
    text: "text-warm",
    bg: "bg-warm/10",
    wash: "from-warm/[0.08]",
  },
  gentleloop: {
    dot: "bg-primary",
    text: "text-primary",
    bg: "bg-primary/10",
    wash: "from-primary/[0.07]",
  },
};

export function studioWash(studio: StudioId): string {
  return STUDIO_STYLES[studio].wash;
}

/**
 * Colour key. Carries an sr-only studio name so the colour is never the
 * only signal — set `labelled={false}` where the name is already visible
 * next to the dot, to avoid reading it twice.
 */
export function StudioDot({
  studio,
  className,
  labelled = true,
}: {
  studio: StudioId;
  className?: string;
  labelled?: boolean;
}) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          "inline-block h-1.5 w-1.5 shrink-0 rounded-full",
          STUDIO_STYLES[studio].dot,
          className,
        )}
      />
      {labelled ? (
        <span className="sr-only">{studios[studio].name}</span>
      ) : null}
    </>
  );
}

/** Same geometry as PlatformChip so the two read as one family. */
export function StudioChip({ studio }: { studio: StudioId }) {
  const style = STUDIO_STYLES[studio];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-1.5 py-px font-mono text-[8.5px] font-medium",
        style.bg,
        style.text,
      )}
    >
      <span
        aria-hidden
        className={cn("inline-block h-1 w-1 rounded-full", style.dot)}
      />
      {studios[studio].name}
    </span>
  );
}
