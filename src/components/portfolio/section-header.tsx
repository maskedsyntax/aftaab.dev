import type { ReactNode } from "react";

export function SectionHeader({
  title,
  description,
  showRule = true,
  footer,
}: {
  title: string;
  description?: string;
  /** Short decorative line under title — set false for a calmer section head */
  showRule?: boolean;
  /** Extra content below the description (e.g. a link) */
  footer?: ReactNode;
}) {
  return (
    <div className="mb-7 max-w-2xl md:mb-8">
      <h2 className="font-display text-[1.55rem] font-semibold tracking-display-tight text-foreground md:text-[1.85rem]">
        {title}
      </h2>
      {showRule ? (
        <div className="mt-3">
          <span className="block h-px w-14 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
        </div>
      ) : null}
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
      {footer ? <div className="mt-3">{footer}</div> : null}
    </div>
  );
}
