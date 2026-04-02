import Link from "next/link";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { contactCopy } from "@/lib/portfolio-data";
import { Github, Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <SectionReveal
      id="contact"
      className="scroll-mt-8 border-t border-border py-12 md:py-14 md:pb-20"
    >
      <div className="max-w-md">
        <h2 className="text-[1.4rem] font-semibold tracking-tight text-foreground md:text-[1.7rem]">
          Contact
        </h2>
        <div className="mt-3 h-px w-10 bg-primary/40" />
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          {contactCopy.line}
        </p>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Link
          href={contactCopy.email}
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors"
        >
          <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          Email
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </Link>
        <span className="h-4 w-px bg-border" aria-hidden />
        <Link
          href={contactCopy.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors"
        >
          <Github className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </Link>
      </div>
    </SectionReveal>
  );
}
