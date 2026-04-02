import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-3xl px-5 pb-6 pt-12 sm:px-6 sm:pt-16">
        <div className="rounded-2xl border border-border/70 bg-card/40 p-8 md:p-10">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                404
              </p>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Page not found
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                This route doesn’t exist. The work is real — the URL isn’t.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Back home
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/35 hover:bg-accent"
                >
                  View work
                </Link>
              </div>
            </div>
            <div className="hidden text-muted-foreground/25 md:block" aria-hidden>
              <FileQuestion className="h-20 w-20 stroke-[1]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
