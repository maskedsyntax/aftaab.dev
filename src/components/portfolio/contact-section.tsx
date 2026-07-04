import Image from "next/image";
import Link from "next/link";
import { siX } from "simple-icons";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SimpleIconGlyph } from "@/components/simple-icon";
import { contactIntro, contactLinks } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CONTACT_ICONS_LUCIDE: Partial<
  Record<(typeof contactLinks)[number]["key"], LucideIcon>
> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
};

const emailLink = contactLinks.find((l) => l.key === "email")!;
const socialLinks = contactLinks.filter((l) => l.key !== "email");

export function ContactSection() {
  return (
    <SectionReveal
      id="contact"
      className="scroll-mt-8 border-t border-border py-12 md:py-14 md:pb-20"
    >
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-16">
        {/* Left — CTA statement */}
        <div className="min-w-0 flex-1">
          {/* Profile image */}
          <div className="relative mb-5 h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/assets/profile.png"
              alt="Aftaab Siddiqui"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>

          <h2 className="font-serif italic font-normal text-[2rem] leading-[1.06] tracking-serif-tight text-foreground md:text-[2.5rem]">
            Let&apos;s build
            <br />
            something.
          </h2>
          <div className="mt-4 h-px w-14 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {contactIntro}
          </p>
        </div>

        {/* Right — contact links */}
        <div className="flex w-full flex-col gap-4 md:max-w-[280px]">
          {/* Email — primary CTA */}
          <a
            href={emailLink.href}
            className="group flex w-full items-center justify-between gap-2 rounded-full border border-border/70 bg-card/80 py-2.5 pl-5 pr-2 text-[13px] font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-md"
          >
            <span className="truncate">{emailLink.label}</span>
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            {socialLinks.map((item) => {
              const Icon = CONTACT_ICONS_LUCIDE[item.key];
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-border hover:bg-card"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground transition-colors group-hover:text-foreground">
                    {item.key === "x" ? (
                      <SimpleIconGlyph icon={siX} className="h-4 w-4" />
                    ) : Icon ? (
                      <Icon className="h-4 w-4" />
                    ) : null}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-muted-foreground" />
                </Link>
              );
            })}
          </div>

          {/* Location chip */}
          <p className="pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            Based in India · Works worldwide
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
