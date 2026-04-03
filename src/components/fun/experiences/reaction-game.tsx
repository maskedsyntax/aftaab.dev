"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "intro" | "wait" | "ready" | "tooSoon" | "result";

const phaseStyles: Record<Phase, string> = {
  intro:
    "bg-gradient-to-br from-indigo-600 via-violet-700 to-purple-900 border-indigo-400/40 shadow-[0_0_40px_-8px_rgba(139,92,246,0.5)]",
  wait: "bg-gradient-to-br from-slate-700 via-slate-800 to-zinc-900 border-slate-500/30",
  ready:
    "bg-gradient-to-br from-lime-400 via-emerald-400 to-green-500 border-lime-200 shadow-[0_0_48px_-4px_rgba(163,230,53,0.7)]",
  tooSoon:
    "bg-gradient-to-br from-rose-500 via-orange-500 to-amber-600 border-rose-300/50",
  result:
    "bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 border-cyan-300/40 shadow-[0_0_40px_-8px_rgba(34,211,238,0.45)]",
};

export function ReactionGame() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [ms, setMs] = useState<number | null>(null);
  const startRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => () => clearTimer(), []);

  const startRound = useCallback(() => {
    clearTimer();
    setPhase("wait");
    setMs(null);
    const delay = 1500 + Math.random() * 2500;
    timerRef.current = setTimeout(() => {
      startRef.current = performance.now();
      setPhase("ready");
    }, delay);
  }, []);

  const handleTap = useCallback(() => {
    if (phase === "intro") {
      startRound();
      return;
    }
    if (phase === "wait") {
      clearTimer();
      setPhase("tooSoon");
      return;
    }
    if (phase === "ready") {
      const elapsed = Math.round(performance.now() - startRef.current);
      setMs(elapsed);
      setPhase("result");
      return;
    }
    if (phase === "tooSoon" || phase === "result") {
      setPhase("intro");
    }
  }, [phase, startRound]);

  const panelClass = phaseStyles[phase];

  return (
    <div className="flex min-h-[min(70vh,520px)] flex-col">
      <button
        type="button"
        onClick={handleTap}
        className={`flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition-all duration-200 ${panelClass}`}
      >
        {phase === "intro" && (
          <span className="max-w-sm text-sm font-medium leading-relaxed">
            Tap to start. When the screen goes{" "}
            <span className="font-bold text-lime-200">neon green</span>, tap
            again as fast as you can.
          </span>
        )}
        {phase === "wait" && (
          <span className="text-sm font-medium text-slate-300">
            Wait for it…
          </span>
        )}
        {phase === "ready" && (
          <span className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-950">
            NOW!
          </span>
        )}
        {phase === "tooSoon" && (
          <span className="max-w-sm text-sm font-semibold">
            Too soon. Tap to try again.
          </span>
        )}
        {phase === "result" && ms !== null && (
          <div className="space-y-2">
            <p className="text-4xl font-black tabular-nums drop-shadow-sm">
              {ms} ms
            </p>
            <p className="text-sm font-medium text-white/95">
              Tap to play again.
            </p>
          </div>
        )}
      </button>
    </div>
  );
}
