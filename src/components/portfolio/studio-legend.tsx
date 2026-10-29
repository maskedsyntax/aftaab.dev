import { StudioDot } from "@/components/portfolio/studio-badge";
import { studioOrder, studios } from "@/lib/portfolio-data";

/**
 * Colour key for the studio dots on app cards. Render it above any grid of
 * cards, since it's what makes those dots readable.
 */
export function StudioLegend() {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {studioOrder.map((id) => (
        <li key={id}>
          <a
            href={studios[id].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <StudioDot studio={id} labelled={false} className="h-2 w-2" />
            {studios[id].name}
            <span className="text-muted-foreground/50">
              · {studios[id].focus}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
