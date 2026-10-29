"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  House,
  LayoutGrid,
  Mail,
  Moon,
  PenLine,
  Sun,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Phones show the icon; the label takes over from sm up. */
const routes = [
  { href: "/", label: "Home", Icon: House },
  { href: "/about", label: "About", Icon: UserRound },
  { href: "/apps", label: "Apps", Icon: LayoutGrid },
  { href: "/blog", label: "Writing", Icon: PenLine },
];

function getActiveRoute(path: string) {
  if (path.startsWith("/blog")) return "/blog";
  if (path.startsWith("/about")) return "/about";
  if (path.startsWith("/apps")) return "/apps";
  // Case studies under /projects are the apps; the /projects index (web
  // products) and /fun have no entry of their own, so keep Home lit.
  if (path.startsWith("/projects/")) return "/apps";
  if (path.startsWith("/projects")) return "/";
  if (path.startsWith("/fun")) return "/";
  return path;
}

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const active = getActiveRoute(pathname);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  const listRef = React.useRef<HTMLUListElement>(null);
  const itemRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  const [pill, setPill] = React.useState({ left: 0, width: 0 });

  // Item widths move when the web font swaps in and when the viewport
  // crosses a breakpoint, so measuring once on mount leaves the pill
  // hanging off its label. Re-measure whenever the list resizes.
  React.useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const el = itemRefs.current[routes.findIndex((r) => r.href === active)];
      if (!el) return;
      const listRect = list.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setPill({ left: r.left - listRect.left, width: r.width });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div
      // A floating centred pill at every size; on phones it holds icons, so
      // it stays compact instead of spanning the screen.
      className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 pb-[env(safe-area-inset-bottom)] sm:bottom-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(60%_80%_at_50%_50%,hsl(var(--warm)/0.18),transparent_70%)] blur-2xl"
      />

      <nav
        aria-label="Primary navigation"
        className="relative flex items-center gap-1 rounded-full border border-border/60 bg-background/70 p-1 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.25)] ring-1 ring-foreground/[0.03] backdrop-blur-xl supports-[backdrop-filter]:bg-background/55 dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-2 top-px h-px rounded-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent dark:via-white/15"
        />

        <ul ref={listRef} className="relative flex items-center gap-1">
          {/* Active pill */}
          {pill.width > 0 && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -z-[1] my-auto rounded-full bg-foreground/[0.09] ring-1 ring-inset ring-foreground/10 dark:bg-foreground/[0.11]"
              animate={{ left: pill.left, width: pill.width }}
              transition={{ type: "spring", stiffness: 400, damping: 34, mass: 0.8 }}
            />
          )}

          {routes.map((route, idx) => {
            const isActive = active === route.href;
            return (
              <li
                key={route.href}
                ref={(el) => { itemRefs.current[idx] = el; }}
                className="relative"
              >
                <Link
                  href={route.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex select-none items-center justify-center rounded-full font-medium transition-colors duration-200",
                    // Phones: a square icon target. sm up: a text label.
                    "h-10 w-11 sm:h-auto sm:w-auto sm:px-3.5 sm:py-1.5 sm:text-[13px]",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <route.Icon className="h-[18px] w-[18px] sm:hidden" aria-hidden />
                  {/* Stays readable to screen readers while the icon shows */}
                  <span className="sr-only sm:not-sr-only">{route.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Phones get a round mail button; the word shows from sm up */}
        <Link
          href="/#contact"
          aria-label="Contact"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center gap-1 rounded-full bg-foreground text-[13px] font-medium text-background shadow-sm transition-transform duration-200 hover:-translate-y-px sm:ml-0.5 sm:h-auto sm:w-auto sm:px-3.5 sm:py-1.5"
        >
          <Mail className="h-4 w-4 sm:hidden" aria-hidden />
          <span className="hidden sm:inline">Contact</span>
          <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" aria-hidden />
        </Link>

        <span
          aria-hidden
          className="mx-0.5 hidden h-5 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:block"
        />

        <button
          type="button"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="group relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted-foreground sm:h-8 sm:w-8 transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform duration-300 ease-out group-hover:rotate-12 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-300 ease-out dark:rotate-0 dark:scale-100" />
        </button>
      </nav>
    </div>
  );
}
