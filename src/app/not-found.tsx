import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="container mx-auto flex max-w-5xl flex-1 flex-col justify-center px-5 py-20 sm:px-6">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Eyebrow */}
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
            Error · 404
          </p>

          {/* Large serif number */}
          <h1
            aria-label="404 — Page not found"
            className="mt-4 font-serif italic font-normal leading-none tracking-tight text-foreground"
            style={{ fontSize: "clamp(5rem, 18vw, 13rem)" }}
          >
            {"404".split("").map((char, i) =>
              i === 1 ? (
                <span
                  key={i}
                  className="bg-gradient-to-br from-primary via-primary to-warm bg-clip-text text-transparent"
                >
                  {char}
                </span>
              ) : (
                <span key={i}>{char}</span>
              )
            )}
          </h1>

          {/* Divider */}
          <div className="mt-6 h-px w-14 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />

          {/* Sub-headline + description */}
          <p className="mt-5 font-display text-[1.4rem] font-semibold tracking-tight text-foreground sm:text-[1.7rem]">
            Page not found
          </p>
          <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
            This route doesn&apos;t exist. The work is real — the URL isn&apos;t.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-warm to-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
              <ArrowLeft className="relative h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span className="relative">Back home</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-accent"
            >
              View work
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
