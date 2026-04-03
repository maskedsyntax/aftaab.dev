import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { FunPick } from "@/lib/fun-picks";
import { funKindLabel } from "@/lib/fun-picks";
import { FunExperienceBody } from "./experiences/fun-experience-body";

/** Page background stays the site default; colored surfaces live inside each experience. */
export function FunExperienceShell({ pick }: { pick: FunPick }) {
  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/fun"
        className="mb-8 inline-flex items-center gap-2 font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Fun
      </Link>
      <header className="border-b border-border pb-6">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {funKindLabel[pick.kind]}
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          {pick.title}
        </h1>
        {pick.note ? (
          <p className="mt-2 text-sm text-muted-foreground">{pick.note}</p>
        ) : null}
      </header>
      <div className="pt-8">
        <FunExperienceBody pick={pick} />
      </div>
    </div>
  );
}
