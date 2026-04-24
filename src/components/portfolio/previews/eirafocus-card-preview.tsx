"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * EiraFocus preview — a green composition that sits on the site's card surface.
 * No cream outer rectangle: the site's own background shows through so the
 * preview reads as a scene, not a pasted UI screenshot. The phone screen
 * keeps its authentic cream interior since that's part of the app's identity.
 */

// Brand palette for the green scene (independent of site tokens)
const CIRCLE = "#2F6D43";
const CIRCLE_DEEP = "#1F4B2E";
const LEAF_DARK = "#1F4B2E";
const LEAF_MID = "#5B8C62";
const LEAF_LIGHT = "#B8D1B4";
const LEAF_PALE = "#D9E6D3";
const BUTTON = "#23543A";
const SCREEN_CREAM = "#EBE4D3";
const INK = "#1B2420";

type Layout = "landscape" | "portrait";

// Per-layout sizing so the composition fills its card without overflow.
// Landscape cards sit at aspect-[16/10] inside ~300–420px wide columns, so
// the phone has to come down in size; portrait cards can host the original
// larger phone comfortably.
const SIZING: Record<
  Layout,
  { glow: number; disc: number; ringOuter: number; ringInner: number; phoneW: number; phoneH: number }
> = {
  portrait: {
    glow: 320,
    disc: 240,
    ringOuter: 186,
    ringInner: 140,
    phoneW: 118,
    phoneH: 232,
  },
  landscape: {
    glow: 220,
    disc: 170,
    ringOuter: 132,
    ringInner: 100,
    phoneW: 86,
    phoneH: 170,
  },
};

export function EiraFocusCardPreview({
  className,
  layout = "portrait",
}: {
  className?: string;
  /** landscape = side-by-side; portrait = centered composition */
  layout?: Layout;
}) {
  const s = SIZING[layout];

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[inherit]",
        className,
      )}
      aria-hidden
    >
      {/* Soft ambient green wash — tints the card surface without adding a hard edge */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 70% at 50% 50%, rgba(47,109,67,0.22) 0%, rgba(47,109,67,0.10) 40%, transparent 75%)",
        }}
      />
      {/* A second warmer wash so leaves feel haloed */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 40%, rgba(184,209,180,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        className={cn(
          "relative flex h-full w-full",
          layout === "portrait"
            ? "items-center justify-center p-4"
            : "items-center justify-between gap-4 px-5 py-4 sm:gap-5 sm:px-6 sm:py-5",
        )}
      >
        {/* Landscape-only side copy */}
        {layout === "landscape" && (
          <div className="relative z-[5] hidden min-w-0 flex-1 flex-col gap-2 sm:flex">
            <span
              className="inline-flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em]"
              style={{
                borderColor: "rgba(47,109,67,0.35)",
                backgroundColor: "rgba(47,109,67,0.10)",
                color: "#C8DBC4",
              }}
            >
              <span
                className="h-1 w-1 rounded-full"
                style={{ backgroundColor: "#8BB08A" }}
              />
              Mobile · Flutter
            </span>
            <p
              className="font-serif italic font-normal leading-[1.05] tracking-tight text-[17px] md:text-[19px]"
              style={{ color: "#ECEFE8" }}
            >
              Good morning.
            </p>
            <p
              className="max-w-[22ch] text-[10.5px] leading-snug md:text-[11.5px]"
              style={{ color: "rgba(217,230,211,0.72)" }}
            >
              A gentle breath to begin?
            </p>
          </div>
        )}

        <div className="relative flex shrink-0 items-center justify-center">
          {/* Outer soft glow behind the disc for depth */}
          <div
            aria-hidden
            className="absolute rounded-full"
            style={{
              width: s.glow,
              height: s.glow,
              background:
                "radial-gradient(circle, rgba(47,109,67,0.30) 0%, transparent 65%)",
              filter: "blur(10px)",
            }}
          />

          {/* Main green disc */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute rounded-full"
            style={{
              width: s.disc,
              height: s.disc,
              background: `radial-gradient(circle at 35% 25%, ${CIRCLE} 0%, ${CIRCLE_DEEP} 100%)`,
              boxShadow:
                "inset 0 2px 20px rgba(255,255,255,0.06), inset 0 -20px 40px rgba(0,0,0,0.18), 0 30px 60px -30px rgba(31,75,46,0.55)",
            }}
          />

          {/* Concentric ring inside the disc */}
          <div
            aria-hidden
            className="absolute rounded-full border"
            style={{
              width: s.ringOuter,
              height: s.ringOuter,
              borderColor: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            aria-hidden
            className="absolute rounded-full border"
            style={{
              width: s.ringInner,
              height: s.ringInner,
              borderColor: "rgba(255,255,255,0.05)",
            }}
          />

          {/* Leaves scattered around the disc */}
          <Leaf
            x={layout === "portrait" ? "-44%" : "-52%"}
            y="-28%"
            size={layout === "portrait" ? 76 : 56}
            rotate={-30}
            color={LEAF_MID}
            veinColor={LEAF_DARK}
          />
          <Leaf
            x="46%"
            y="-36%"
            size={layout === "portrait" ? 58 : 44}
            rotate={38}
            color={LEAF_PALE}
            veinColor={LEAF_MID}
          />
          <Leaf
            x="50%"
            y="32%"
            size={layout === "portrait" ? 64 : 48}
            rotate={-58}
            color={LEAF_LIGHT}
            veinColor={LEAF_MID}
          />
          <Leaf
            x="-40%"
            y="38%"
            size={layout === "portrait" ? 52 : 40}
            rotate={78}
            color={LEAF_PALE}
            veinColor={LEAF_MID}
          />

          {/* Ambient dots */}
          <Dot x="54%" y="-10%" size={layout === "portrait" ? 6 : 5} color={LEAF_PALE} />
          <Dot x="-48%" y="6%" size={layout === "portrait" ? 5 : 4} color={LEAF_LIGHT} />
          <Dot x="34%" y="46%" size={layout === "portrait" ? 7 : 5} color={LEAF_LIGHT} />
          <Dot x="-10%" y="52%" size={layout === "portrait" ? 5 : 4} color={LEAF_PALE} />

          {/* Phone */}
          <PhoneFrame width={s.phoneW} height={s.phoneH} />
        </div>
      </div>
    </div>
  );
}

function Leaf({
  x,
  y,
  size,
  rotate,
  color,
  veinColor,
}: {
  x: string;
  y: string;
  size: number;
  rotate: number;
  color: string;
  veinColor: string;
}) {
  return (
    <motion.div
      className="absolute"
      style={{
        transform: `translate(${x}, ${y}) rotate(${rotate}deg)`,
        width: size,
        height: size * 1.9,
      }}
      animate={{ rotate: [rotate - 1, rotate + 1, rotate - 1] }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      aria-hidden
    >
      <svg viewBox="0 0 100 200" className="h-full w-full">
        <path
          d="M50 8 C 18 54, 18 146, 50 192 C 82 146, 82 54, 50 8 Z"
          fill={color}
          stroke={veinColor}
          strokeWidth="0.5"
          strokeOpacity="0.35"
        />
        <path
          d="M50 12 L50 188"
          stroke={veinColor}
          strokeWidth="1"
          strokeOpacity="0.35"
        />
      </svg>
    </motion.div>
  );
}

function Dot({
  x,
  y,
  size,
  color,
}: {
  x: string;
  y: string;
  size: number;
  color: string;
}) {
  return (
    <span
      aria-hidden
      className="absolute rounded-full"
      style={{
        transform: `translate(${x}, ${y})`,
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
}

function PhoneFrame({ width, height }: { width: number; height: number }) {
  // All internal metrics scale with phone width so the UI stays crisp at any size.
  const scale = width / 118;
  const px = (n: number) => n * scale;

  return (
    <motion.div
      initial={{ y: 4, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            width,
            height,
            borderRadius: px(26),
            backgroundColor: "#0b0b0c",
            boxShadow:
              "0 22px 40px -18px rgba(0,0,0,0.55), 0 0 0 1.5px rgba(255,255,255,0.06) inset",
          }}
        >
          {/* Dynamic island */}
          <div
            className="absolute left-1/2 top-[6px] z-10 -translate-x-1/2"
            style={{
              width: px(42),
              height: px(10),
              borderRadius: 999,
              backgroundColor: "#000",
            }}
          />

          {/* Screen */}
          <div
            className="absolute overflow-hidden"
            style={{
              inset: px(2.5),
              borderRadius: px(24),
              backgroundColor: SCREEN_CREAM,
            }}
          >
            {/* Status bar */}
            <div
              className="relative z-[1] flex items-center justify-between"
              style={{
                paddingLeft: px(12),
                paddingRight: px(12),
                paddingTop: px(8),
                fontSize: px(7),
                fontWeight: 600,
                color: INK,
              }}
            >
              <span>9:41</span>
              <span className="flex items-center" style={{ gap: px(3) }}>
                <svg viewBox="0 0 12 12" style={{ width: px(8), height: px(8) }}>
                  <path
                    d="M6 10 C 2 6, 1 3, 3 2 C 4.5 1.5, 5.5 2.5, 6 3.5 C 6.5 2.5, 7.5 1.5, 9 2 C 11 3, 10 6, 6 10 Z"
                    fill={CIRCLE}
                  />
                </svg>
              </span>
            </div>

            {/* Logo */}
            <div
              className="relative z-[1] flex items-center"
              style={{
                marginTop: px(10),
                paddingLeft: px(12),
                paddingRight: px(12),
                gap: px(6),
              }}
            >
              <span
                className="grid place-items-center rounded-full"
                style={{
                  width: px(12),
                  height: px(12),
                  backgroundColor: CIRCLE,
                }}
              >
                <svg
                  viewBox="0 0 12 12"
                  style={{ width: px(8), height: px(8) }}
                >
                  <path
                    d="M6 1 C 3 4, 3 8, 6 11 C 9 8, 9 4, 6 1 Z"
                    fill="#fff"
                    fillOpacity="0.9"
                  />
                </svg>
              </span>
              <span
                style={{
                  fontSize: px(7),
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: INK,
                }}
              >
                EiraFocus
              </span>
            </div>

            {/* Greeting */}
            <div
              className="relative z-[1]"
              style={{
                marginTop: px(10),
                paddingLeft: px(12),
                paddingRight: px(12),
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: px(13),
                  fontWeight: 600,
                  lineHeight: 1.02,
                  letterSpacing: "-0.01em",
                  color: INK,
                }}
              >
                Good
                <br />
                morning.
              </p>
              <p
                style={{
                  marginTop: px(4),
                  fontSize: px(6),
                  lineHeight: 1.15,
                  color: "rgba(27,36,32,0.55)",
                }}
              >
                A gentle breath
                <br />
                to begin?
              </p>
            </div>

            {/* Inhale button */}
            <div
              className="relative z-[1] flex justify-center"
              style={{ marginTop: px(12) }}
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="grid place-items-center"
                style={{
                  width: px(48),
                  height: px(48),
                  borderRadius: 999,
                  backgroundColor: BUTTON,
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px -8px rgba(35,84,58,0.6)",
                }}
              >
                <div className="flex flex-col items-center leading-none">
                  <span
                    style={{
                      fontSize: px(5),
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    Inhale
                  </span>
                  <span
                    style={{
                      marginTop: px(2),
                      fontSize: px(11),
                      fontWeight: 700,
                      fontVariantNumeric: "tabular-nums",
                      color: "#fff",
                    }}
                  >
                    4s
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Bottom ritual pill */}
            <div
              className="absolute"
              style={{
                left: px(8),
                right: px(8),
                bottom: px(8),
              }}
            >
              <div
                className="flex items-center"
                style={{
                  gap: px(6),
                  borderRadius: px(12),
                  paddingLeft: px(8),
                  paddingRight: px(8),
                  paddingTop: px(6),
                  paddingBottom: px(6),
                  backgroundColor: "#fff",
                  boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
                }}
              >
                <span
                  className="grid shrink-0 place-items-center"
                  style={{
                    width: px(16),
                    height: px(16),
                    borderRadius: px(6),
                    backgroundColor: "rgba(47,109,67,0.12)",
                  }}
                >
                  <svg
                    viewBox="0 0 12 12"
                    style={{ width: px(10), height: px(10) }}
                  >
                    <path
                      d="M2 6 Q 4 2, 6 6 T 10 6"
                      fill="none"
                      stroke={CIRCLE}
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div className="min-w-0 flex-1" style={{ lineHeight: 1.15 }}>
                  <p
                    style={{
                      fontSize: px(7),
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: INK,
                    }}
                  >
                    Breathing
                  </p>
                  <p
                    style={{
                      fontSize: px(5.5),
                      fontWeight: 500,
                      color: "rgba(27,36,32,0.5)",
                    }}
                  >
                    Box · 4-7-8
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
