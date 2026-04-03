/** Compare stellar radii (approximate, relative to Sun = 1). */
const STARS = [
  { name: "Sun", radius: 1, note: "G-type main sequence" },
  { name: "Sirius A", radius: 1.7, note: "Brightest star in Earth’s night sky" },
  { name: "Pollux", radius: 8.8, note: "Orange giant" },
  { name: "Aldebaran", radius: 44, note: "Red giant in Taurus" },
  { name: "Betelgeuse", radius: 700, note: "Red supergiant—rough lower bound" },
] as const;

const maxR = Math.max(...STARS.map((s) => s.radius));

const barGradients = [
  "from-yellow-500 via-amber-400 to-orange-400",
  "from-orange-400 via-amber-500 to-orange-600",
  "from-orange-500 via-red-500 to-rose-600",
  "from-rose-600 via-red-700 to-red-900",
  "from-red-950 via-purple-950 to-violet-950",
];

export function StarScale() {
  return (
    <div className="space-y-6 rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-[#0a0f2e] via-[#120a28] to-[#1a0520] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <p className="text-sm leading-relaxed text-indigo-200/90">
        Radii are approximate (solar radii) and meant for intuition, not
        astronomy homework. Betelgeuse is huge and fuzzy in real life too.
      </p>
      <ul className="space-y-4">
        {STARS.map((s, i) => (
          <li key={s.name} className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-medium text-sky-100">{s.name}</span>
              <span className="font-mono text-xs text-indigo-300/90">
                ×{s.radius} R<sub>☉</sub>
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-black/40 ring-1 ring-white/10">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${barGradients[i] ?? barGradients[4]}`}
                style={{ width: `${Math.max(4, (s.radius / maxR) * 100)}%` }}
              />
            </div>
            <p className="text-xs text-indigo-300/80">{s.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
