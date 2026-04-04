import type { SimpleIcon } from "simple-icons";

/** Renders a Simple Icons glyph with `currentColor` (matches lucide sizing in contact links). */
export function SimpleIconGlyph({
  icon,
  className,
}: {
  icon: SimpleIcon;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}
