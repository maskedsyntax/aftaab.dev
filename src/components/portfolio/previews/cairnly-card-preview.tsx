import { cn } from "@/lib/utils";

const ACCENT = "#7C6EF6"; // indigo-violet

const contacts = [
  { initials: "SR", name: "Sara Reeves",   company: "Bloom Studio",   stage: "Proposal",  active: true  },
  { initials: "JM", name: "James Mercer",  company: "Forma Labs",     stage: "Discovery", active: false },
  { initials: "AK", name: "Aiko Kimura",   company: "Orek Systems",   stage: "Closed",    active: false },
];

const pipeline = [
  { label: "Lead",      count: 8,  color: "bg-zinc-300 dark:bg-zinc-600"    },
  { label: "Discovery", count: 5,  color: "bg-violet-300 dark:bg-violet-600" },
  { label: "Proposal",  count: 3,  color: "bg-amber-300 dark:bg-amber-600"  },
  { label: "Closed",    count: 11, color: "bg-emerald-400 dark:bg-emerald-600" },
];

export function CairnlyCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-[inherit]",
        "bg-[#F8F7FF] text-zinc-800 dark:bg-[#0E0C1A] dark:text-zinc-200",
        className
      )}
      aria-hidden
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_10%,rgba(124,110,246,0.10),transparent_60%)]" />

      {/* Top nav */}
      <div className="relative z-[1] flex items-center gap-2 border-b border-zinc-200/70 px-2.5 py-1.5 dark:border-white/[0.07]">
        {/* Logo mark */}
        <div
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded"
          style={{ background: ACCENT }}
        >
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="6" cy="4" r="2" />
            <path d="M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4" />
          </svg>
        </div>
        <span className="text-[8px] font-bold tracking-tight" style={{ color: ACCENT }}>
          cairnly
        </span>
        <div className="ml-auto flex items-center gap-2 text-[6.5px] text-zinc-400 dark:text-zinc-500">
          <span>Contacts</span>
          <span className="font-medium" style={{ color: ACCENT }}>Pipeline</span>
          <span>Activity</span>
        </div>
      </div>

      {/* Body — two columns */}
      <div className="relative z-[1] flex min-h-0 flex-1 gap-0">

        {/* Left — contacts list */}
        <div className="flex w-[42%] shrink-0 flex-col border-r border-zinc-200/70 dark:border-white/[0.07]">
          {/* Search bar */}
          <div className="mx-2 my-1.5 flex items-center gap-1 rounded-md border border-zinc-200 bg-white/70 px-1.5 py-0.5 dark:border-white/10 dark:bg-white/5">
            <svg viewBox="0 0 12 12" className="h-2 w-2 shrink-0 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="5" cy="5" r="3" />
              <path d="M9 9l-2-2" />
            </svg>
            <span className="text-[5.5px] text-zinc-400">Search contacts…</span>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {contacts.map((c) => (
              <div
                key={c.initials}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-1.5 text-left",
                  c.active
                    ? "bg-violet-50 dark:bg-violet-950/40"
                    : "hover:bg-zinc-50 dark:hover:bg-white/[0.03]"
                )}
              >
                {/* Avatar */}
                <div
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[5px] font-bold text-white"
                  style={{ background: c.active ? ACCENT : "#94A3B8" }}
                >
                  {c.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[6.5px] font-semibold leading-none text-zinc-800 dark:text-zinc-100">
                    {c.name}
                  </p>
                  <p className="mt-0.5 truncate text-[5.5px] leading-none text-zinc-400 dark:text-zinc-500">
                    {c.company}
                  </p>
                </div>
                <span
                  className={cn(
                    "ml-auto shrink-0 rounded-full px-1 py-px text-[4.5px] font-semibold",
                    c.stage === "Closed"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                      : c.stage === "Proposal"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                      : "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400"
                  )}
                >
                  {c.stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — pipeline overview */}
        <div className="flex flex-1 flex-col gap-1.5 p-2.5">
          <p className="text-[6.5px] font-semibold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">
            Pipeline
          </p>

          {/* Kanban columns */}
          <div className="grid grid-cols-4 gap-1">
            {pipeline.map((col) => (
              <div key={col.label} className="flex flex-col items-center gap-1">
                <div className={cn("h-1 w-full rounded-full", col.color)} />
                <span className="text-[5px] font-medium text-zinc-500 dark:text-zinc-400">{col.label}</span>
                <span className="text-[10px] font-bold leading-none text-zinc-800 dark:text-zinc-100">{col.count}</span>
              </div>
            ))}
          </div>

          {/* Active contact detail */}
          <div className="mt-auto rounded-lg border border-violet-200/60 bg-white/70 p-1.5 shadow-sm dark:border-violet-500/20 dark:bg-white/[0.04]">
            <div className="flex items-center gap-1">
              <div
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[5px] font-bold text-white"
                style={{ background: ACCENT }}
              >
                SR
              </div>
              <div>
                <p className="text-[6px] font-bold leading-none text-zinc-800 dark:text-zinc-100">Sara Reeves</p>
                <p className="text-[5px] leading-none text-zinc-400 dark:text-zinc-500">Bloom Studio</p>
              </div>
              <span className="ml-auto rounded-full bg-amber-100 px-1 py-px text-[4.5px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
                Proposal
              </span>
            </div>
            <div className="mt-1.5 flex gap-1">
              <div className="flex-1 rounded bg-zinc-100 px-1 py-0.5 dark:bg-white/[0.06]">
                <p className="text-[4.5px] text-zinc-400">Email</p>
                <p className="text-[5px] font-medium text-zinc-700 dark:text-zinc-300">sara@bloom.io</p>
              </div>
              <div className="flex-1 rounded bg-zinc-100 px-1 py-0.5 dark:bg-white/[0.06]">
                <p className="text-[4.5px] text-zinc-400">Value</p>
                <p className="text-[5px] font-medium text-zinc-700 dark:text-zinc-300">$4,200</p>
              </div>
            </div>
          </div>

          {/* Self-host badge */}
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            <span className="text-[5px] text-zinc-400 dark:text-zinc-500">Self-hosted · cairnly.app</span>
          </div>
        </div>
      </div>
    </div>
  );
}
