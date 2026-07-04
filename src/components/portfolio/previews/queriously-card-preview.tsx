"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const GOLD = "#C4A253";
const GOLD_DIM = "rgba(196,162,83,0.55)";
const GOLD_SOFT = "rgba(196,162,83,0.10)";
const BG = "#0a0a0b";
const SIDEBAR_BG = "#0f0f10";
const BORDER = "rgba(255,255,255,0.07)";
const TEXT = "rgba(255,255,255,0.88)";
const TEXT_DIM = "rgba(255,255,255,0.38)";
const TEXT_MID = "rgba(255,255,255,0.60)";
const USER_BG = "rgba(196,162,83,0.12)";
const AI_BG = "rgba(255,255,255,0.04)";

export function QueriouslyCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full overflow-hidden rounded-[inherit]",
        className,
      )}
      aria-hidden
      style={{ backgroundColor: BG }}
    >
      {/* Subtle gold ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 60% 30%, rgba(196,162,83,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Window chrome */}
      <div className="relative z-[1] flex w-full flex-col">
        {/* Title bar */}
        <div
          className="flex shrink-0 items-center gap-2 px-3 py-2"
          style={{ borderBottom: `1px solid ${BORDER}` }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          </div>
          <span
            className="ml-auto font-mono text-[9px]"
            style={{ color: TEXT_DIM }}
          >
            Queriously
          </span>
        </div>

        {/* Content area */}
        <div className="flex min-h-0 flex-1">
          {/* Sidebar */}
          <div
            className="flex w-[38%] shrink-0 flex-col gap-1 p-2"
            style={{ backgroundColor: SIDEBAR_BG, borderRight: `1px solid ${BORDER}` }}
          >
            <p className="mb-1 px-1 font-mono text-[8px] uppercase tracking-[0.18em]" style={{ color: TEXT_DIM }}>
              Library
            </p>
            {[
              { title: "Attention Is All You Need", active: true },
              { title: "Neural Scaling Laws", active: false },
              { title: "Emergent Abilities of LLMs", active: false },
            ].map((paper) => (
              <div
                key={paper.title}
                className="rounded px-1.5 py-1"
                style={{
                  backgroundColor: paper.active ? GOLD_SOFT : "transparent",
                  borderLeft: paper.active ? `2px solid ${GOLD}` : "2px solid transparent",
                }}
              >
                <p
                  className="truncate text-[8.5px] font-medium leading-snug"
                  style={{ color: paper.active ? GOLD : TEXT_MID }}
                >
                  {paper.title}
                </p>
              </div>
            ))}

            {/* Divider */}
            <div className="my-1 h-px" style={{ backgroundColor: BORDER }} />
            <p className="px-1 font-mono text-[8px] uppercase tracking-[0.18em]" style={{ color: TEXT_DIM }}>
              Sessions
            </p>
            <div className="rounded px-1.5 py-1">
              <p className="text-[8px]" style={{ color: TEXT_DIM }}>Research · Jul 4</p>
            </div>
          </div>

          {/* Main panel */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Q&A area */}
            <div className="flex flex-1 flex-col gap-2 overflow-hidden p-2.5">
              {/* User question */}
              <div
                className="self-end rounded-lg px-2.5 py-1.5 text-[9px] leading-snug"
                style={{ backgroundColor: USER_BG, color: GOLD, maxWidth: "86%" }}
              >
                What is the key insight behind multi-head attention?
              </div>

              {/* AI answer */}
              <div
                className="rounded-lg p-2 text-[8.5px] leading-relaxed"
                style={{ backgroundColor: AI_BG, color: TEXT_MID, maxWidth: "95%" }}
              >
                Multi-head attention allows the model to jointly attend to information from different representation subspaces
                {" "}
                <span
                  className="inline-flex items-center rounded px-1 py-px font-mono text-[7px]"
                  style={{
                    backgroundColor: GOLD_SOFT,
                    color: GOLD,
                    border: `1px solid rgba(196,162,83,0.25)`,
                  }}
                >
                  p.4
                </span>
                {" "}at different positions. Each head learns distinct patterns — some attend to syntax, others to semantics
                {" "}
                <span
                  className="inline-flex items-center rounded px-1 py-px font-mono text-[7px]"
                  style={{
                    backgroundColor: GOLD_SOFT,
                    color: GOLD,
                    border: `1px solid rgba(196,162,83,0.25)`,
                  }}
                >
                  p.5
                </span>
                .
              </div>
            </div>

            {/* Input bar */}
            <div
              className="shrink-0 p-2"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div
                className="flex items-center gap-2 rounded-lg px-2.5 py-1.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: `1px solid rgba(196,162,83,0.20)`,
                }}
              >
                <span className="flex-1 text-[8.5px]" style={{ color: TEXT_DIM }}>
                  Ask a question...
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                  className="h-2.5 w-px rounded-full"
                  style={{ backgroundColor: GOLD }}
                />
                <div
                  className="grid h-4 w-4 shrink-0 place-items-center rounded"
                  style={{ backgroundColor: GOLD_SOFT }}
                >
                  <svg viewBox="0 0 10 10" className="h-2.5 w-2.5">
                    <path
                      d="M2 5 L8 5 M5.5 2.5 L8 5 L5.5 7.5"
                      fill="none"
                      stroke={GOLD}
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
