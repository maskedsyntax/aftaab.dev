"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useHydrationSafeReducedMotion } from "@/hooks/use-hydration-safe-reduced-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Fades its children up the first time they scroll into view. `index`
 * staggers siblings in a grid. Reduced motion renders them in place.
 */
export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const rm = useHydrationSafeReducedMotion();

  if (rm) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, ease, delay: Math.min(index, 6) * 0.07 }}
    >
      {children}
    </motion.div>
  );
}
