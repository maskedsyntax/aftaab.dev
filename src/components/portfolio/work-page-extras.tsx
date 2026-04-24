import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkListItem, WorkListStatus } from "@/lib/portfolio-data";
import { workPageExternalLinks } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<WorkListStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  future: "Future",
};

function StatusBadge({ status }: { status: WorkListStatus }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider",
        status === "live" &&
          "border-primary/30 bg-primary/5 text-foreground/90",
        status === "in-progress" &&
          "border-amber-500/30 bg-amber-500/5 text-amber-950 dark:text-amber-200/90",
        status === "future" &&
          "border-dashed border-muted-foreground/35 bg-transparent text-muted-foreground"
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

export function MoreWorkList({ items }: { items: WorkListItem[] }) {
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-card/40">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex flex-col gap-2 px-4 py-4 md:px-5"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.name}
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <StatusBadge status={item.status} />
          </div>
          {item.note ? (
            <p className="text-sm text-muted-foreground">{item.note}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function WorkPageExternalLinks() {
  return (
    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
      For more experiments, repositories, and release history, see{" "}
      <Link
        href={workPageExternalLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
      >
        GitHub
      </Link>
      . A broader project portfolio lives at{" "}
      <Link
        href={workPageExternalLinks.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
      >
        maskedsyntax.com
      </Link>
      .
    </p>
  );
}
