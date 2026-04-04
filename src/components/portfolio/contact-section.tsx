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

export function ContactSection() {
  return (
    <SectionReveal
      id="contact"
      className="scroll-mt-8 border-t border-border py-12 md:py-14 md:pb-20"
    >
      <div className="max-w-xl">
        <h2 className="text-[1.4rem] font-semibold tracking-tight text-foreground md:text-[1.7rem]">
          Contact
        </h2>
        <div className="mt-3 h-px w-10 bg-primary/40" />
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          {contactIntro}
        </p>
      </div>
      <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
        {contactLinks.map((item) => {
          const Icon = CONTACT_ICONS_LUCIDE[item.key];
          const isExternal = item.external;
          const iconClass =
            "h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary";
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors"
              >
                {item.key === "x" ? (
                  <SimpleIconGlyph icon={siX} className={iconClass} />
                ) : Icon ? (
                  <Icon className={iconClass} aria-hidden />
                ) : null}
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </Link>
            </li>
          );
        })}
      </ul>
    </SectionReveal>
  );
}
