"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionReveal({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={
        reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
      }
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
