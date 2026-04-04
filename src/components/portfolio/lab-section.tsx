import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/portfolio/section-reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { labContent } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";

export function LabSection() {
  return (
    <SectionReveal className="border-t border-border py-12 md:py-16">
      <SectionHeader title={labContent.title} />

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:gap-12 md:p-8">
          <div className="order-2 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground md:order-1 md:text-[15px]">
            {labContent.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="order-1 flex items-start justify-center md:order-2 md:justify-end md:pt-0.5">
            <Link
              href={labContent.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border shadow-sm ring-1 ring-black/5 transition-opacity hover:opacity-95 dark:ring-white/10"
              aria-label="CacheVector (opens in a new tab)"
            >
              <Image
                src="/images/cachevector-logo.png"
                alt=""
                width={128}
                height={128}
                className="h-full w-full object-cover"
                sizes="64px"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-border bg-muted/30 px-6 py-4 dark:bg-muted/20 md:px-8">
          <p className="mb-3 text-center font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-left">
            Open source & tools
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {labContent.contributions.map((name) => (
              <Badge
                key={name}
                variant="secondary"
                className="font-mono text-[11px] font-normal"
              >
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
