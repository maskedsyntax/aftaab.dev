"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
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
    if (w === "open.") {
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
      <h2 className={headingClass}>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="mr-[0.12em] inline-block">
            {renderWord(w)}
          </span>
        ))}
      </h2>
    );
  }

  return (
    <h2 className={headingClass}>
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
    </h2>
  );
}

export function HeroSection() {
  const rm = useHydrationSafeReducedMotion();

  return (
    <section className="relative overflow-visible pb-14 pt-4 md:pb-20 md:pt-6">
      <div className="hero-aurora" aria-hidden />

      <div className="relative z-[1] grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,340px)] md:items-start md:gap-14">
        <div className="min-w-0 space-y-7 md:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-sm backdrop-blur-sm">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warm/70 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-warm" />
            </span>
            <span>{heroCopy.eyebrow}</span>
          </div>

          <DisplayHeadline
            words={["Apps", "people", "actually", "open."]}
            skip={rm}
          />

          <p className="max-w-xl text-[15px] font-medium leading-relaxed tracking-tight text-foreground md:text-[17px]">
            {heroCopy.tagline}
          </p>

          <p className="max-w-xl text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">
            {heroCopy.intro}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#selected-works"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-warm to-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
              <span className="relative">View selected work</span>
              <ArrowDown className="relative h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <p className="max-w-2xl pt-3 text-[13px] leading-relaxed text-muted-foreground/80 md:pt-5 md:text-[14px]">
            {heroCopy.subline}
          </p>

          <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground/55">
            5 apps shipped · iOS · Android · macOS · Web
          </p>
        </div>

        {/* Contact card — sits alongside body copy */}
        <aside className="relative md:col-start-2 md:row-start-1 md:self-center">
          <div className="group relative flex flex-col items-center rounded-2xl border border-border/60 bg-card/70 px-6 py-6 text-center shadow-[0_12px_48px_-16px_rgba(0,0,0,0.18)] backdrop-blur-md">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px -z-[1] rounded-2xl bg-gradient-to-br from-primary/8 via-transparent to-warm/12 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {heroCopy.availability}
            </div>

            {/* Memoji */}
            <div className="relative mt-5 h-20 w-20 overflow-hidden rounded-full">
              <Image
                src="/assets/profile.png"
                alt="Aftaab Siddiqui"
                fill
                className="object-contain"
                sizes="80px"
                priority
              />
            </div>

            {/* Identity */}
            <h1 className="mt-3 font-display text-[1.4rem] font-semibold tracking-display-tight text-foreground">
              Aftaab Siddiqui
            </h1>
            <p className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground/60">
              iOS · Flutter · Product design
            </p>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-border/50" />

            {/* Primary CTA */}
            <a
              href={emailLink.href}
              className="group/cta flex w-full items-center justify-between gap-2 rounded-full border border-border/70 bg-background/80 py-2 pl-5 pr-2 text-[13px] font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md"
            >
              <span>Send me a message</span>
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover/cta:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-2">
              {[
                { href: linkedinLink.href, label: "LinkedIn", Icon: SiLinkedin },
                { href: xLink.href, label: "X", Icon: SiX },
                { href: githubLink.href, label: "GitHub", Icon: SiGithub },
              ].map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground/70 transition-all hover:border-border hover:bg-background hover:text-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>

            {/* Location */}
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40">
              {heroCopy.location}
            </p>
          </div>
        </aside>
      </div>

      <div className="relative z-[1] mt-10 h-px w-full max-w-md bg-gradient-to-r from-primary/40 via-border to-transparent md:mt-12" />
    </section>
  );
}
