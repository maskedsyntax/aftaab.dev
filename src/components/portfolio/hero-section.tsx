"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useHydrationSafeReducedMotion } from "@/hooks/use-hydration-safe-reduced-motion";
import { heroCopy, contactGithubUrl } from "@/lib/portfolio-data";
import { ArrowDown, Github } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function fade(i: number, skip: boolean | null) {
  if (skip) return {};
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease, delay: 0.05 * i },
  } as const;
}

export function HeroSection() {
  const rm = useHydrationSafeReducedMotion();

  return (
    <section className="relative pb-10 pt-1 md:pb-12 md:pt-3">
      <div className="hero-texture" aria-hidden />

      <div className="relative z-[1] grid grid-cols-1 gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:gap-x-8 sm:gap-y-6">
        <motion.div
          {...fade(0, rm)}
          className="mx-auto shrink-0 justify-self-center sm:mx-0 sm:justify-self-start sm:row-start-1 sm:col-start-1"
        >
          <div className="relative h-[5.5rem] w-[5.5rem] overflow-hidden rounded-lg border border-border bg-muted shadow-sm sm:h-24 sm:w-24 md:h-[6.75rem] md:w-[6.75rem]">
            <Image
              src="/images/Avatar/beard.jpg"
              alt="Aftaab Siddiqui"
              width={216}
              height={216}
              priority
              sizes="(max-width: 640px) 88px, 108px"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="min-w-0 space-y-4 text-center sm:row-start-1 sm:col-start-2 sm:text-left">
          <motion.div {...fade(1, rm)}>
            <h1 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[1.85rem] md:text-[2.15rem]">
              Aftaab Siddiqui
            </h1>
            <p className="mt-1.5 text-[13px] font-medium text-muted-foreground md:text-sm">
              Software engineer
            </p>
          </motion.div>

          <motion.p
            {...fade(2, rm)}
            className="mx-auto max-w-xl text-[14px] font-medium leading-snug tracking-tight text-foreground sm:mx-0 md:text-[15px]"
          >
            {heroCopy.tagline}
          </motion.p>
        </div>

        <div className="space-y-4 text-center sm:col-span-2 sm:row-start-2 sm:text-left">
          <motion.p
            {...fade(3, rm)}
            className="mx-auto max-w-2xl text-[13px] leading-relaxed text-muted-foreground sm:mx-0 md:text-[14px]"
          >
            {heroCopy.intro}
          </motion.p>

          <motion.p
            {...fade(4, rm)}
            className="mx-auto max-w-2xl text-[13px] leading-relaxed text-muted-foreground/90 sm:mx-0 md:text-[14px]"
          >
            {heroCopy.subline}
          </motion.p>

          <motion.div
            {...fade(5, rm)}
            className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-center gap-2.5 pt-0.5 sm:mx-0 sm:justify-start"
          >
            <a
              href="#selected-works"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              View work
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
            <Link
              href={contactGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/35 hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-primary/35 via-border to-transparent md:mt-11" />
    </section>
  );
}
