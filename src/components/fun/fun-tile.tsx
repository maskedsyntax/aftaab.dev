import Link from "next/link";
import { cn } from "@/lib/utils";
import type { FunPick } from "@/lib/fun-picks";
import { funKindLabel, funPath } from "@/lib/fun-picks";
import { ChevronRight } from "lucide-react";

export function FunTile({ pick }: { pick: FunPick }) {
  const href = funPath(pick.slug);

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl border p-4 shadow-sm transition-all duration-200",
        "hover:z-[1] hover:scale-[1.02] hover:shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        pick.tileClass
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] opacity-80">
          {funKindLabel[pick.kind]}
        </span>
        <ChevronRight
          className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div className="mt-auto space-y-1.5">
        <h2
          className={cn(
            "text-lg font-semibold leading-snug tracking-tight sm:text-xl",
            pick.titleClass
          )}
        >
          {pick.title}
        </h2>
        {pick.note ? (
          <p className="text-[13px] leading-relaxed opacity-90 line-clamp-3 sm:text-sm">
            {pick.note}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
