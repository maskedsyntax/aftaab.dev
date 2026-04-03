"use client";

import { useEffect, useRef } from "react";

export function OrbitLines() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let t = 0;
    let raf = 0;
    let bufW = 0;
    let bufH = 0;

    const syncSize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const w = Math.floor(width * dpr);
      const h = Math.floor(height * dpr);
      if (w !== bufW || h !== bufH) {
        bufW = w;
        bufH = h;
        canvas.width = w;
        canvas.height = h;
      }
    };

    syncSize();
    const ro = new ResizeObserver(() => syncSize());
    ro.observe(canvas);

    const tick = () => {
      syncSize();
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w < 2 || h < 2) {
        raf = requestAnimationFrame(tick);
        return;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const n = 5;
      const base = Math.min(w, h);
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + t * 0.002;
        const r = base * 0.1 + i * (base * 0.065);
        ctx.strokeStyle = `hsla(${(i * 55 + t * 10) % 360}, 85%, 62%, 0.55)`;
        ctx.lineWidth = 2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(a);
        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.55, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      ctx.fillStyle = "rgba(255,255,255,0.12)";
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();

      t += 1;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        A quiet loop—nothing to click. Good for a breath between tasks.
      </p>
      <div className="relative overflow-hidden rounded-2xl border border-fuchsia-500/25 shadow-[0_0_60px_-12px_rgba(168,85,247,0.35)]">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-950 via-violet-950 to-cyan-950"
          aria-hidden
        />
        <canvas
          ref={ref}
          className="relative h-[min(56vh,420px)] w-full"
          aria-hidden
        />
      </div>
    </div>
  );
}
