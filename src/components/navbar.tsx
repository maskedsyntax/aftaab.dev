"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
];

function getActiveRoute(path: string) {
  if (path.startsWith("/blog")) return "/blog";
  if (path.startsWith("/projects")) return "/projects";
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
  const hasMeasured = React.useRef(false);

  React.useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const listRect = list.getBoundingClientRect();
    const activeIdx = routes.findIndex((r) => r.href === active);
    const el = itemRefs.current[activeIdx];
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPill({ left: r.left - listRect.left, width: r.width });
    hasMeasured.current = true;
  }, [active]);

  return (
    <div
      className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 pb-[env(safe-area-inset-bottom)]"
      style={{ willChange: "transform" }}
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
          {hasMeasured.current && (
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
                    "relative inline-flex select-none items-center justify-center rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <span
          aria-hidden
          className="mx-1 h-5 w-px bg-gradient-to-b from-transparent via-border to-transparent"
        />

        <button
          type="button"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform duration-300 ease-out group-hover:rotate-12 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-300 ease-out dark:rotate-0 dark:scale-100" />
        </button>
      </nav>
    </div>
  );
}
