import { PageTransition } from "@/components/page-transition";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";
import { funPicks } from "@/lib/fun-picks";
import { FunTile } from "@/components/fun/fun-tile";

export const metadata: Metadata = {
  title: "Fun",
  description:
    "Small games, visuals, and notes built on this site—pick a tile to open one.",
  alternates: { canonical: "/fun" },
  openGraph: { url: `${siteUrl}/fun` },
};

export default function FunPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto max-w-5xl px-5 pb-24 pt-12 sm:px-6 sm:pt-16">
          <header className="mx-auto max-w-2xl text-center">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Fun
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              Each tile can look totally different—no single “Fun theme.” The
              page stays calm; the toys bring their own color.
            </p>
          </header>

          <ul className="mt-12 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {funPicks.map((pick) => (
              <li key={pick.id}>
                <FunTile pick={pick} />
              </li>
            ))}
          </ul>
        </main>
        <SiteFooter />
      </div>
    </PageTransition>
  );
}
