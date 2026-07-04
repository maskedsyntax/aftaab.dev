"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, RotateCcw } from "lucide-react";

// ─── grid constants ───────────────────────────────────────────────────────────
const COLS = 20;
const ROWS = 20;
const CELL = 20;
const W = COLS * CELL; // 400
const H = ROWS * CELL; // 400
const TICK = 115; // ms per step

// ─── direction vectors ────────────────────────────────────────────────────────
type Pt = { x: number; y: number };
const R: Pt = { x: 1, y: 0 };
const L: Pt = { x: -1, y: 0 };
const U: Pt = { x: 0, y: -1 };
const D: Pt = { x: 0, y: 1 };

// ─── canvas colours (hardcoded — CSS vars aren't readable by canvas) ──────────
const BG       = "#09090b";
const GRID     = "rgba(255,255,255,0.028)";
const SNAKE_H  = "#6366f1";
const FOOD_COL = "#f97316";

function randomFood(snake: Pt[]): Pt {
  let p: Pt;
  do { p = { x: (Math.random() * COLS) | 0, y: (Math.random() * ROWS) | 0 }; }
  while (snake.some(s => s.x === p.x && s.y === p.y));
  return p;
}

function rr(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

type Phase = "idle" | "playing" | "dead";

interface GameState {
  snake: Pt[];
  dir: Pt;
  next: Pt;
  food: Pt;
  score: number;
  phase: Phase;
}

const makeInitial = (): GameState => ({
  snake: [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }],
  dir: R, next: R,
  food: { x: 15, y: 10 },
  score: 0,
  phase: "idle",
});

export function Snake404() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gs        = useRef<GameState>(makeInitial());
  const ticker    = useRef<ReturnType<typeof setInterval> | null>(null);

  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const [best,  setBest]  = useState(0);

  // ── draw ──────────────────────────────────────────────────────────────────
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const { snake, food } = gs.current;

    // background
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, W, H);

    // subtle grid lines
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 0.5;
    for (let i = 1; i < COLS; i++) {
      ctx.beginPath(); ctx.moveTo(i * CELL, 0); ctx.lineTo(i * CELL, H); ctx.stroke();
    }
    for (let j = 1; j < ROWS; j++) {
      ctx.beginPath(); ctx.moveTo(0, j * CELL); ctx.lineTo(W, j * CELL); ctx.stroke();
    }

    // food — glowing orb
    const fx = food.x * CELL + CELL / 2;
    const fy = food.y * CELL + CELL / 2;
    const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, CELL);
    glow.addColorStop(0, `${FOOD_COL}cc`);
    glow.addColorStop(1, "transparent");
    ctx.beginPath(); ctx.arc(fx, fy, CELL, 0, Math.PI * 2);
    ctx.fillStyle = glow; ctx.fill();
    ctx.beginPath(); ctx.arc(fx, fy, CELL / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = FOOD_COL; ctx.fill();

    // snake segments — fade opacity toward tail
    snake.forEach((seg, i) => {
      const isHead = i === 0;
      const alpha  = isHead ? 1 : Math.max(0.2, 1 - (i / snake.length) * 0.75);
      const pad    = isHead ? 1 : 2;
      const radius = isHead ? 6 : 4;
      ctx.fillStyle = isHead
        ? SNAKE_H
        : `rgba(99,102,241,${alpha.toFixed(2)})`;
      rr(ctx, seg.x * CELL + pad, seg.y * CELL + pad, CELL - pad * 2, CELL - pad * 2, radius);
      ctx.fill();
    });
  }, []);

  // ── stop ticker ───────────────────────────────────────────────────────────
  const stop = useCallback(() => {
    if (ticker.current) { clearInterval(ticker.current); ticker.current = null; }
  }, []);

  // ── start / restart ───────────────────────────────────────────────────────
  const startGame = useCallback(() => {
    gs.current = { ...makeInitial(), phase: "playing" };
    setPhase("playing");
    setScore(0);
    stop();
    draw();
    ticker.current = setInterval(() => {
      const s = gs.current;
      if (s.phase !== "playing") return;

      s.dir = s.next;
      const head: Pt = {
        x: (s.snake[0].x + s.dir.x + COLS) % COLS,
        y: (s.snake[0].y + s.dir.y + ROWS) % ROWS,
      };

      // self-collision → game over
      if (s.snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        s.phase = "dead";
        setBest(b => Math.max(b, s.score));
        setPhase("dead");
        stop();
        draw();
        return;
      }

      const ate = head.x === s.food.x && head.y === s.food.y;
      s.snake = [head, ...s.snake];
      if (ate) {
        s.score++;
        s.food = randomFood(s.snake);
        setScore(s.score);
      } else {
        s.snake.pop();
      }
      draw();
    }, TICK);
  }, [draw, stop]);

  // ── keyboard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const startKeys = new Set([" ", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"]);
    const dirMap: Record<string, Pt> = {
      ArrowUp: U, w: U, W: U,
      ArrowDown: D, s: D, S: D,
      ArrowLeft: L, a: L, A: L,
      ArrowRight: R, d: R, D: R,
    };

    const onKey = (e: KeyboardEvent) => {
      const s = gs.current;
      if (s.phase !== "playing") {
        if (startKeys.has(e.key)) { e.preventDefault(); startGame(); }
        return;
      }
      const nd = dirMap[e.key];
      if (!nd) return;
      if (nd.x === -s.dir.x && nd.y === -s.dir.y) return; // no 180°
      e.preventDefault();
      s.next = nd;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [startGame]);

  // ── touch / swipe ─────────────────────────────────────────────────────────
  useEffect(() => {
    let sx = 0, sy = 0;
    const onTouchStart = (e: TouchEvent) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; };
    const onTouchEnd   = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      const s  = gs.current;

      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) {
        if (s.phase !== "playing") startGame();
        return;
      }
      if (s.phase !== "playing") return;
      const nd: Pt = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? R : L) : (dy > 0 ? D : U);
      if (nd.x === -s.dir.x && nd.y === -s.dir.y) return;
      s.next = nd;
    };

    const el = canvasRef.current;
    el?.addEventListener("touchstart", onTouchStart, { passive: true });
    el?.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      el?.removeEventListener("touchstart", onTouchStart);
      el?.removeEventListener("touchend",   onTouchEnd);
    };
  }, [startGame]);

  // ── initial render + cleanup ──────────────────────────────────────────────
  useEffect(() => { draw(); return stop; }, [draw, stop]);

  return (
    <div className="flex w-full max-w-[420px] flex-col items-center gap-5">
      {/* Page header */}
      <div className="w-full">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
          Error · 404
        </p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <h1 className="font-serif italic font-normal text-[2rem] leading-tight tracking-tight text-foreground sm:text-[2.4rem]">
            Page not found
          </h1>
          {phase === "playing" && (
            <p className="mb-1 shrink-0 font-mono text-[12px] text-muted-foreground">
              <span className="font-semibold text-foreground">{score}</span> pts
            </p>
          )}
        </div>
      </div>

      {/* Canvas */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-border/70 bg-[#09090b]">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="w-full touch-none select-none"
        />

        {/* Idle overlay */}
        {phase === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/60 backdrop-blur-[2px]">
            <span className="text-4xl" aria-hidden>🐍</span>
            <p className="font-display text-[15px] font-semibold text-foreground">
              While you&apos;re here…
            </p>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              Press any key · or tap to play
            </p>
          </div>
        )}

        {/* Game-over overlay */}
        {phase === "dead" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/70 backdrop-blur-[2px]">
            <p className="font-display text-[15px] font-semibold text-foreground">
              Game over
            </p>
            <div className="font-mono text-[12px] text-muted-foreground text-center space-y-0.5">
              <p>Score: <span className="font-semibold text-foreground">{score}</span></p>
              {best > 0 && (
                <p>Best: <span className="font-semibold text-foreground">{best}</span></p>
              )}
            </div>
            <button
              onClick={startGame}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/20"
            >
              <RotateCcw className="h-3 w-3" />
              Play again
            </button>
          </div>
        )}
      </div>

      {/* D-pad for mobile */}
      <div className="grid grid-cols-3 gap-1.5 sm:hidden" aria-label="Game controls">
        {[
          { dir: U, label: "▲", col: 2, row: 1 },
          { dir: L, label: "◀", col: 1, row: 2 },
          { dir: D, label: "▼", col: 2, row: 2 },
          { dir: R, label: "▶", col: 3, row: 2 },
        ].map(({ dir, label, col, row }) => (
          <button
            key={label}
            aria-label={label}
            style={{ gridColumn: col, gridRow: row }}
            onPointerDown={(e) => {
              e.preventDefault();
              const s = gs.current;
              if (s.phase !== "playing") { startGame(); return; }
              if (dir.x === -s.dir.x && dir.y === -s.dir.y) return;
              s.next = dir;
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card text-[12px] text-muted-foreground transition-colors active:bg-accent active:text-foreground"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-5 font-mono text-[11px] text-muted-foreground/60">
        <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> Home
        </Link>
        <span aria-hidden>·</span>
        <Link href="/projects" className="inline-flex items-center gap-1 transition-colors hover:text-foreground">
          Work <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
