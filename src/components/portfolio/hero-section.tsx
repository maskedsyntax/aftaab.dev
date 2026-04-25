"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useHydrationSafeReducedMotion } from "@/hooks/use-hydration-safe-reduced-motion";
import { heroCopy, contactLinks } from "@/lib/portfolio-data";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const emailLink = contactLinks.find((l) => l.key === "email")!;
const linkedinLink = contactLinks.find((l) => l.key === "linkedin")!;
const xLink = contactLinks.find((l) => l.key === "x")!;
const githubLink = contactLinks.find((l) => l.key === "github")!;

/** Mask-reveal one word at a time; Instrument Serif italic with a gradient accent word. */
function DisplayHeadline({
  words,
  skip,
}: {
  words: string[];
  skip: boolean | null;
}) {
  const renderWord = (w: string) => {
    if (w === "product.") {
      return (
        <span className="inline-block bg-gradient-to-br from-primary via-primary to-warm bg-clip-text text-transparent">
          {w}
        </span>
      );
    }
    if (w === "&") {
      return (
        <span className="font-display not-italic font-normal text-muted-foreground/70">
          {w}
        </span>
      );
    }
    return w;
  };

  const headingClass =
    "font-serif italic font-normal text-[3rem] leading-[1.12] tracking-serif-tight text-foreground sm:text-[3.9rem] md:text-[4.75rem]";
  const revealClass =
    "inline-block pb-[0.08em] -mb-[0.08em] will-change-[clip-path]";

  const wordReveal = {
    initial: {
      clipPath: "inset(0% 0% 100% 0%)",
    },
    animate: {
      clipPath: "inset(0% 0% 0% 0%)",
    },
  } as const;

  if (skip) {
    return (
      <h1 className={headingClass}>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="mr-[0.12em] inline-block">
            {renderWord(w)}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <h1 className={headingClass}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="mr-[0.12em] inline-block">
          <motion.span
            initial={wordReveal.initial}
            animate={wordReveal.animate}
            transition={{ duration: 0.9, ease, delay: 0.12 + i * 0.08 }}
            className={revealClass}
          >
            {renderWord(w)}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

export function HeroSection() {
  const rm = useHydrationSafeReducedMotion();

  return (
    <section className="relative overflow-visible pb-14 pt-4 md:pb-20 md:pt-6">
      <div className="hero-aurora" aria-hidden />

      <div className="relative z-[1] grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,340px)] md:items-start md:gap-14">
        <div className="min-w-0 space-y-7 md:space-y-8">
          <motion.div
            initial={rm ? false : { opacity: 0, y: 10 }}
            animate={rm ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-sm backdrop-blur-sm"
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warm/70 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-warm" />
            </span>
            <span>{heroCopy.eyebrow}</span>
          </motion.div>

          <div>
            <DisplayHeadline
              words={["From", "idea", "to", "product."]}
              skip={rm}
            />
          </div>

          <motion.p
            initial={rm ? false : { opacity: 0, y: 12 }}
            animate={rm ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.55 }}
            className="max-w-xl text-[15px] font-medium leading-relaxed tracking-tight text-foreground md:text-[17px]"
          >
            {heroCopy.tagline}
          </motion.p>

          <motion.p
            initial={rm ? false : { opacity: 0, y: 12 }}
            animate={rm ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.7 }}
            className="max-w-xl text-[14px] leading-relaxed text-muted-foreground md:text-[15px]"
          >
            {heroCopy.intro}
          </motion.p>

          <motion.div
            initial={rm ? false : { opacity: 0, y: 12 }}
            animate={rm ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.85 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <a
              href="#selected-works"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-warm to-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
              <span className="relative">View selected work</span>
              <ArrowDown className="relative h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Contact surface — replaces the avatar column, vertically dropped so it sits alongside the hero's body copy rather than the headline */}
        <motion.aside
          initial={rm ? false : { opacity: 0, y: 16 }}
          animate={rm ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="relative md:row-start-1 md:col-start-2 md:self-end md:pb-1"
        >
          <div className="group relative flex flex-col items-center rounded-2xl border border-border/70 bg-card/60 p-5 text-center shadow-[0_10px_40px_-18px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-6">
            {/* Soft warm glow that activates on hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px -z-[1] rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-warm/15 opacity-40 transition-opacity duration-500 group-hover:opacity-80"
            />

            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>{heroCopy.availability}</span>
            </div>

            <div className="mt-5 flex flex-col items-center">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                Get in touch
              </p>
              <a
                href={emailLink.href}
                className="group/mail mt-2 inline-flex items-center gap-1.5 font-mono text-[15px] font-medium tracking-tight text-foreground transition-colors hover:text-primary md:text-[16px]"
              >
                {emailLink.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/60 transition-all group-hover/mail:-translate-y-0.5 group-hover/mail:translate-x-0.5 group-hover/mail:text-primary" />
              </a>
            </div>

            <a
              href={emailLink.href}
              className="mt-5 flex w-full items-center justify-between gap-2 rounded-full border border-border/70 bg-background/80 py-1.5 pl-5 pr-1.5 text-[13px] font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/25"
            >
              <span>Send me a message</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>

            <div className="mt-5 flex items-center justify-center gap-3 text-[12.5px] font-medium">
              <Link
                href={linkedinLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
              <Link
                href={xLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                X
              </Link>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
              <Link
                href={githubLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
            </div>

            <div className="mt-5 w-full border-t border-border/50 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {heroCopy.location}
              </p>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.p
        initial={rm ? false : { opacity: 0, y: 6 }}
        animate={rm ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 1 }}
        className="relative z-[1] mt-10 max-w-2xl text-[13px] leading-relaxed text-muted-foreground/80 md:mt-14 md:text-[14px]"
      >
        {heroCopy.subline}
      </motion.p>

      <div className="relative z-[1] mt-10 h-px w-full max-w-md bg-gradient-to-r from-primary/40 via-border to-transparent md:mt-12" />
    </section>
  );
}
