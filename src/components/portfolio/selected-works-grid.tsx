"use client";

import { motion } from "framer-motion";
import { useHydrationSafeReducedMotion } from "@/hooks/use-hydration-safe-reduced-motion";
import { FeaturedWorkCard } from "@/components/portfolio/featured-work-card";
import type { FeaturedProject } from "@/lib/portfolio-data";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SelectedWorksGrid({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  const reduceMotion = useHydrationSafeReducedMotion();

  if (reduceMotion) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <FeaturedWorkCard key={project.id} project={project} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={item}>
          <FeaturedWorkCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
