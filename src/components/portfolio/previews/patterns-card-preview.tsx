import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Miniature coded preview of patterns.maskedsyntax.com.
 * Shows a phone frame (left) + desktop window (right) to signal cross-platform.
 */

const AMBER = "#D97706";
const AMBER_DARK = "#FBBF24";
const INK = "rgba(26,16,10,0.88)";
const INK_MUTED = "rgba(26,16,10,0.45)";
const SCREEN_BG = "#FBF7EE";

export function PatternsCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-row items-center overflow-hidden rounded-[inherit]",
        "bg-[#fbf8ee] text-zinc-900 dark:bg-[#0a0908] dark:text-zinc-50",
        className,
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(180,140,40,0.10),transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(234,179,8,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-6 top-1/3 h-20 w-20 rounded-full bg-amber-300/15 blur-3xl dark:bg-amber-500/10" />

      {/* Phone frame — left ~28% width */}
      <div className="relative z-[1] flex shrink-0 items-center justify-center pl-3 sm:pl-4" style={{ width: "30%" }}>
        <MiniPhone />
      </div>

      {/* Desktop window mock — right ~65% width */}
      <div className="relative z-[1] flex min-w-0 flex-1 flex-col px-1 pb-2 pt-1.5 sm:px-2 sm:pb-2.5 sm:pt-2">
        {/* Nav */}
        <div className="flex items-center justify-between gap-1 text-[7px] leading-none sm:text-[8px]">
          <div className="flex min-w-0 items-center gap-1 font-semibold tracking-tight">
            <span className="relative h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" aria-hidden>
              <Image
                src="/images/projects/logos/patterns.png"
                alt=""
                fill
                sizes="12px"
                className="object-contain"
              />
            </span>
            <span className="truncate text-zinc-900 dark:text-white">Patterns</span>
          </div>
          <span className="rounded-full bg-amber-600 px-1.5 py-px text-[5.5px] font-semibold text-white shadow-sm dark:bg-amber-400 dark:text-zinc-900 sm:px-2 sm:text-[6px]">
            ★ Star
          </span>
        </div>

        {/* Badge */}
        <div className="mt-1 flex justify-center">
          <div className="rounded-full border border-amber-600/25 bg-amber-100/70 px-2 py-0.5 text-[5px] font-semibold text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300 sm:text-[5.5px]">
            <span className="mr-1 inline-block h-1 w-1 rounded-full bg-amber-600 dark:bg-amber-300" />
            iOS · Android · macOS · Privacy-first
          </div>
        </div>

        {/* Headline */}
        <p className="mt-1 text-center text-[9px] font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-white sm:text-[11px]">
          Clarity for
          <br />
          the mind.
        </p>

        {/* App window mock */}
        <div className="mt-1.5 w-full overflow-hidden rounded-md border border-zinc-200/80 bg-white shadow-md ring-1 ring-black/[0.04] dark:border-white/10 dark:bg-[#111110] dark:ring-white/5">
          <div className="flex items-center gap-1 border-b border-zinc-200/80 px-1.5 py-1 dark:border-white/[0.06]">
            <span className="text-[5.5px] leading-none text-red-400">●</span>
            <span className="text-[5.5px] leading-none text-amber-400">●</span>
            <span className="text-[5.5px] leading-none text-emerald-400">●</span>
            <span className="ml-auto font-mono text-[5px] text-zinc-500 sm:text-[5.5px]">
              Patterns
            </span>
          </div>
          <div className="flex gap-1 p-1.5">
            {/* Sidebar */}
            <div className="flex w-[36%] flex-col gap-0.5">
              <span className="rounded bg-amber-100/80 px-1 py-0.5 text-[4px] font-semibold text-amber-800 dark:bg-amber-400/20 dark:text-amber-300 sm:text-[5px]">
                + New Entry
              </span>
              <div className="rounded bg-amber-100/60 px-1 py-0.5 dark:bg-amber-400/10">
                <p className="text-[4px] font-semibold text-amber-800 dark:text-amber-200 sm:text-[4.5px]">
                  Jul 4
                </p>
                <p className="truncate text-[3.5px] text-amber-700/70 dark:text-amber-200/60 sm:text-[4px]">
                  A moment of clarity
                </p>
              </div>
              <div className="px-1 py-0.5">
                <p className="text-[4px] font-semibold text-zinc-700 dark:text-zinc-300 sm:text-[4.5px]">
                  Jul 3
                </p>
                <p className="truncate text-[3.5px] text-zinc-500 sm:text-[4px]">
                  Practiced mindful…
                </p>
              </div>
            </div>
            {/* Editor */}
            <div className="flex-1 space-y-0.5 px-1">
              <p className="text-[3.5px] text-zinc-500 sm:text-[4px]">July 4, 2026</p>
              <p className="text-[4.5px] font-bold text-zinc-900 dark:text-white sm:text-[5.5px]">
                A moment of clarity
              </p>
              <div className="space-y-px pt-0.5">
                <div className="h-px w-[94%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-px w-[78%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-px w-[88%] rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-px w-[64%] rounded-full bg-amber-500/50 dark:bg-amber-400/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniPhone() {
  const W = 40;
  const H = 78;
  const r = (n: number) => (n * W) / 48;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: W,
        height: H,
        borderRadius: r(11),
        backgroundColor: "#111",
        boxShadow: "0 8px 20px -8px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07) inset",
      }}
    >
      {/* Dynamic island */}
      <div
        className="absolute left-1/2 top-[4px] -translate-x-1/2"
        style={{ width: r(18), height: r(4.5), borderRadius: 999, backgroundColor: "#000" }}
      />
      {/* Screen */}
      <div
        className="absolute overflow-hidden"
        style={{ inset: r(1.5), borderRadius: r(9.5), backgroundColor: SCREEN_BG }}
      >
        {/* Status */}
        <div
          className="flex items-center justify-between"
          style={{ paddingLeft: r(5), paddingRight: r(5), paddingTop: r(5), fontSize: r(3.5), fontWeight: 600, color: INK }}
        >
          <span>9:41</span>
        </div>

        {/* App header */}
        <div style={{ paddingLeft: r(5), paddingTop: r(3) }}>
          <p style={{ fontSize: r(4.5), fontWeight: 700, color: INK, lineHeight: 1 }}>Patterns</p>
          <p style={{ fontSize: r(3), color: INK_MUTED, marginTop: r(0.5) }}>Today's log</p>
        </div>

        {/* Entry list */}
        <div style={{ paddingLeft: r(4), paddingRight: r(4), marginTop: r(4) }}>
          <div
            className="rounded"
            style={{ backgroundColor: "rgba(217,119,6,0.12)", padding: `${r(3)}px ${r(4)}px` }}
          >
            <p style={{ fontSize: r(3.5), fontWeight: 600, color: AMBER, lineHeight: 1 }}>Jul 4</p>
            <p style={{ fontSize: r(3), color: INK_MUTED, marginTop: r(1) }}>Clarity...</p>
          </div>
          <div style={{ padding: `${r(3)}px ${r(4)}px` }}>
            <p style={{ fontSize: r(3.5), fontWeight: 500, color: INK, lineHeight: 1 }}>Jul 3</p>
            <p style={{ fontSize: r(3), color: INK_MUTED, marginTop: r(1) }}>Mindful...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
