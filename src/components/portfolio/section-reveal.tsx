"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useHydrationSafeReducedMotion } from "@/hooks/use-hydration-safe-reduced-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** A section that fades up the first time it scrolls into view. */
export function SectionReveal({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const rm = useHydrationSafeReducedMotion();

  if (rm) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.section>
  );
}
