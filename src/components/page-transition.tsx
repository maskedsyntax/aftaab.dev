"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useHydrationSafeReducedMotion } from "@/hooks/use-hydration-safe-reduced-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useHydrationSafeReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

