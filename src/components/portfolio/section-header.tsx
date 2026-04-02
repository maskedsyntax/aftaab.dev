export function SectionHeader({
  title,
  description,
  showRule = true,
}: {
  title: string;
  description?: string;
  /** Short decorative line under title — set false for a calmer section head */
  showRule?: boolean;
}) {
  return (
    <div className="mb-6 max-w-2xl md:mb-7">
      <h2 className="text-[1.3rem] font-semibold tracking-tight text-foreground md:text-[1.5rem]">
        {title}
      </h2>
      {showRule ? (
        <div className="mt-2 h-px w-8 bg-primary/45" />
      ) : null}
      {description ? (
        <p className="mt-3 text-[15px] leading-snug text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
