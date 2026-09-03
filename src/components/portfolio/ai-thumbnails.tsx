/**
 * Purpose-built thumbnails for the AI & systems cards.
 *
 * Drawn rather than photographed: both tools are speech pipelines with no UI
 * worth screenshotting, and the marketing art carries baked-in text that gets
 * cut whenever the card ratio moves. Inline SVG scales to any card size, has
 * nothing to crop, and follows the theme.
 *
 * The pair is deliberately mirrored — VoxFlow reads left-to-right as speech
 * becoming text, Utter as text becoming speech — so the two cards rhyme.
 */

import type { ReactNode } from "react";

const CENTER_Y = 100;

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
}

/** The quiet chevron that carries the eye from source to result. */
function Flow() {
  return (
    <g
      className="text-muted-foreground"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity={0.45}
    >
      <path d={`M152 ${CENTER_Y - 11} l11 11 l-11 11`} />
    </g>
  );
}

/** Bars standing in for a line of text. */
function TextLines({ x, widths }: { x: number; widths: number[] }) {
  return (
    <g className="text-foreground" fill="currentColor">
      {widths.map((w, i) => (
        <rect
          key={i}
          x={x}
          y={CENTER_Y - 26 + i * 22}
          width={w}
          height={10}
          rx={5}
          opacity={0.3 - i * 0.07}
        />
      ))}
    </g>
  );
}

// Nine bars keeps the waveform clear of the flow chevron at x=152
const WAVE = [18, 40, 64, 44, 88, 54, 74, 34, 20];

/** Speech in, text out. */
export function VoxflowThumbnail() {
  const barW = 7;
  const gap = 5;

  return (
    <Frame label="VoxFlow: speech transcribed into text at the cursor">
      <g className="text-primary" fill="currentColor">
        {WAVE.map((h, i) => (
          <rect
            key={i}
            x={36 + i * (barW + gap)}
            y={CENTER_Y - h / 2}
            width={barW}
            height={h}
            rx={barW / 2}
            opacity={0.35 + (h / 88) * 0.65}
          />
        ))}
      </g>

      <Flow />

      {/* Text landing, with the caret sitting at the end of the last line */}
      <TextLines x={182} widths={[96, 74]} />
      <g className="text-foreground" fill="currentColor">
        <rect
          x={264}
          y={CENTER_Y - 5}
          width={7}
          height={19}
          rx={1.5}
          opacity={0.8}
        />
      </g>
    </Frame>
  );
}

/** Text in, speech out. */
export function UtterThumbnail() {
  return (
    <Frame label="Utter: text spoken aloud, entirely on device">
      {/* Prompt, then the text being read */}
      <text
        x={34}
        y={CENTER_Y - 15}
        className="fill-primary"
        fontSize={19}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        opacity={0.85}
      >
        $
      </text>
      <TextLines x={56} widths={[84, 62]} />

      <Flow />

      {/* Sound leaving the machine */}
      <g className="text-primary">
        <rect
          x={186}
          y={CENTER_Y - 15}
          width={9}
          height={30}
          rx={4.5}
          fill="currentColor"
          opacity={0.9}
        />
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth={5}
          strokeLinecap="round"
        >
          <path d={`M212 ${CENTER_Y - 20} a26 26 0 0 1 0 40`} opacity={0.7} />
          <path d={`M234 ${CENTER_Y - 34} a44 44 0 0 1 0 68`} opacity={0.45} />
          <path d={`M256 ${CENTER_Y - 48} a62 62 0 0 1 0 96`} opacity={0.22} />
        </g>
      </g>
    </Frame>
  );
}

export function AiThumbnail({ id }: { id: string }) {
  if (id === "voxflow") return <VoxflowThumbnail />;
  if (id === "utter") return <UtterThumbnail />;
  return null;
}
