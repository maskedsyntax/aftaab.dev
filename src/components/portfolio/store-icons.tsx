/**
 * Store glyphs. Deliberately not a client module so server components
 * (e.g. the case-study detail page) can render them without pulling a
 * client boundary in for two inline SVGs.
 */

export function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden fill="currentColor">
      <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm.75 4.5a.75.75 0 0 1 1.5 0v.25h.25a.75.75 0 0 1 0 1.5H12v3.19l1.78 3.08a.75.75 0 1 1-1.3.75L11 11.06l-1.48 2.56a.75.75 0 1 1-1.3-.75L10 9.44V6.25H9.5a.75.75 0 0 1 0-1.5h.25V4.5zM6.28 7.97a.75.75 0 0 1 1.02.28l.97 1.68.97-1.68a.75.75 0 1 1 1.3.75L9.19 10.5l1.35 2.33a.75.75 0 1 1-1.3.75L8 12.02l-1.24 2.06a.75.75 0 1 1-1.3-.75l1.35-2.33-1.35-2.33a.75.75 0 0 1 .82-1.7z" />
    </svg>
  );
}

export function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden fill="currentColor">
      <path d="M2.15 1.25C1.7 1.5 1.5 2 1.5 2.6v14.8c0 .6.2 1.1.65 1.35l.1.05 8.3-8.3v-.2L2.25 1.2l-.1.05zm11.3 11.35-2.75-2.75-8.3 8.3c.45.25 1.05.2 1.65-.15l9.4-5.4zm1.6-.95-2.5-1.45-2.5 2.5 2.5 2.5 2.5-1.45c.7-.4.7-1.05 0-1.6zm-13.9-10L13.4 9.3l-2.5 2.5-8.3-8.3c-.1.15-.1.5 0 .85z" />
    </svg>
  );
}
