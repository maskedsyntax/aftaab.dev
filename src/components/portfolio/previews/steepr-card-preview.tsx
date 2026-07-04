"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Brand palette — warm tea tones
const CREAM_BG = "#FDF8F0";
const CREAM_DARK_BG = "#0D0B09";
const BROWN = "#6B3A2A";
const BROWN_LIGHT = "#8B5240";
const TEA_AMBER = "#C87941";
const INK = "#1A100A";
const INK_MUTED = "rgba(26,16,10,0.5)";

export function SteeprCardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full overflow-hidden rounded-[inherit]",
        className,
      )}
      aria-hidden
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: CREAM_BG }}
      />
      <div className="absolute inset-0 dark:block hidden" style={{ backgroundColor: CREAM_DARK_BG }} />

      {/* Warm radial glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(200,121,65,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Left side copy */}
      <div className="relative z-[2] flex min-w-0 flex-1 flex-col justify-center gap-2 pl-5 pr-3 sm:pl-7 sm:pr-4">
        <span
          className="inline-flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] sm:text-[9px]"
          style={{
            borderColor: "rgba(107,58,42,0.25)",
            backgroundColor: "rgba(107,58,42,0.07)",
            color: BROWN_LIGHT,
          }}
        >
          <span
            className="h-1 w-1 rounded-full"
            style={{ backgroundColor: TEA_AMBER }}
          />
          Tea Timer · Apple Watch
        </span>

        <p
          className="font-serif italic font-normal leading-[1.05] tracking-tight text-[16px] sm:text-[19px] md:text-[21px]"
          style={{ color: INK }}
        >
          Your Darjeeling
          <br />
          is ready.
        </p>

        <p
          className="text-[9.5px] leading-snug sm:text-[10.5px]"
          style={{ color: INK_MUTED }}
        >
          3:00 steep complete.
          <br />
          Pour and enjoy.
        </p>
      </div>

      {/* Right side — devices */}
      <div className="relative z-[2] flex shrink-0 items-center justify-end gap-2 pr-4 sm:gap-3 sm:pr-6">
        {/* iPhone */}
        <PhoneFrame />
        {/* Apple Watch */}
        <WatchFrame />
      </div>
    </div>
  );
}

function PhoneFrame() {
  const W = 76;
  const H = 152;
  const scale = W / 118;
  const px = (n: number) => n * scale;

  return (
    <motion.div
      initial={{ y: 6, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            width: W,
            height: H,
            borderRadius: px(24),
            backgroundColor: "#0b0b0c",
            boxShadow:
              "0 18px 36px -14px rgba(0,0,0,0.5), 0 0 0 1.5px rgba(255,255,255,0.07) inset",
          }}
        >
          {/* Dynamic island */}
          <div
            className="absolute left-1/2 top-[5px] z-10 -translate-x-1/2"
            style={{
              width: px(38),
              height: px(9),
              borderRadius: 999,
              backgroundColor: "#000",
            }}
          />

          {/* Screen */}
          <div
            className="absolute overflow-hidden"
            style={{
              inset: px(2),
              borderRadius: px(22),
              backgroundColor: CREAM_BG,
            }}
          >
            {/* Status bar */}
            <div
              className="flex items-center justify-between"
              style={{
                paddingLeft: px(10),
                paddingRight: px(10),
                paddingTop: px(8),
                fontSize: px(6.5),
                fontWeight: 600,
                color: INK,
              }}
            >
              <span>9:41</span>
              <span style={{ fontSize: px(5.5), color: INK_MUTED }}>●●●</span>
            </div>

            {/* App name */}
            <div
              className="flex items-center gap-1"
              style={{
                marginTop: px(6),
                paddingLeft: px(10),
                paddingRight: px(10),
              }}
            >
              <span
                className="grid shrink-0 place-items-center rounded-[3px]"
                style={{
                  width: px(10),
                  height: px(10),
                  backgroundColor: BROWN,
                }}
              >
                <svg viewBox="0 0 10 10" style={{ width: px(6), height: px(6) }}>
                  <path d="M5 1 C3 3.5,3 6.5,5 9 C7 6.5,7 3.5,5 1Z" fill="#fff" fillOpacity="0.85" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: px(6.5),
                  fontWeight: 600,
                  color: INK,
                  letterSpacing: "-0.01em",
                }}
              >
                Steepr
              </span>
            </div>

            {/* Tea name + type */}
            <div
              style={{
                marginTop: px(8),
                paddingLeft: px(10),
                paddingRight: px(10),
              }}
            >
              <p
                style={{
                  fontSize: px(10),
                  fontWeight: 700,
                  color: INK,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Darjeeling
              </p>
              <p
                style={{
                  fontSize: px(5.5),
                  color: INK_MUTED,
                  marginTop: px(1.5),
                }}
              >
                First Flush · 90°C · 3 min
              </p>
            </div>

            {/* Timer ring */}
            <div
              className="relative flex justify-center"
              style={{ marginTop: px(8) }}
            >
              <svg
                viewBox="0 0 48 48"
                style={{ width: px(38), height: px(38) }}
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="rgba(107,58,42,0.12)"
                  strokeWidth="3"
                />
                <motion.circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke={BROWN}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * 0.15}`}
                  transform="rotate(-90 24 24)"
                  animate={{ strokeDashoffset: [`${2 * Math.PI * 20 * 0.15}`, `${2 * Math.PI * 20 * 0.02}`, `${2 * Math.PI * 20 * 0.15}`] }}
                  transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                />
                <text
                  x="24"
                  y="27"
                  textAnchor="middle"
                  style={{
                    fontSize: px(8),
                    fontWeight: 700,
                    fill: INK,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  0:27
                </text>
              </svg>
            </div>

            {/* Steep button */}
            <div
              className="flex justify-center"
              style={{ marginTop: px(6) }}
            >
              <div
                className="grid place-items-center"
                style={{
                  width: px(52),
                  height: px(16),
                  borderRadius: 999,
                  backgroundColor: BROWN,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <span
                  style={{
                    fontSize: px(5.5),
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "0.04em",
                  }}
                >
                  Brewing...
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WatchFrame() {
  const W = 48;
  const H = 56;

  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
    >
      <motion.div
        animate={{ y: [2, -2, 2] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        {/* Watch body */}
        <div className="relative" style={{ width: W, height: H }}>
          {/* Crown / side button */}
          <div
            className="absolute -right-[3px] top-[10px]"
            style={{
              width: 3,
              height: 12,
              borderRadius: 2,
              backgroundColor: "#2a2a2c",
            }}
          />
          <div
            className="absolute -right-[3px] top-[28px]"
            style={{
              width: 3,
              height: 7,
              borderRadius: 2,
              backgroundColor: "#2a2a2c",
            }}
          />

          {/* Watch case */}
          <div
            className="relative overflow-hidden"
            style={{
              width: W,
              height: H,
              borderRadius: 14,
              backgroundColor: "#1a1a1c",
              boxShadow:
                "0 12px 24px -10px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06) inset",
            }}
          >
            {/* Screen */}
            <div
              className="absolute overflow-hidden"
              style={{
                inset: 2,
                borderRadius: 12,
                backgroundColor: "#0a0604",
              }}
            >
              {/* Time */}
              <div className="flex flex-col items-center justify-center h-full gap-0.5">
                <p
                  style={{
                    fontSize: 8,
                    fontWeight: 700,
                    color: "#fff",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  0:27
                </p>

                {/* Small ring */}
                <svg viewBox="0 0 28 28" style={{ width: 26, height: 26 }}>
                  <circle
                    cx="14"
                    cy="14"
                    r="11"
                    fill="none"
                    stroke="rgba(107,58,42,0.3)"
                    strokeWidth="2.5"
                  />
                  <motion.circle
                    cx="14"
                    cy="14"
                    r="11"
                    fill="none"
                    stroke={TEA_AMBER}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 11}`}
                    strokeDashoffset={`${2 * Math.PI * 11 * 0.15}`}
                    transform="rotate(-90 14 14)"
                    animate={{
                      strokeDashoffset: [
                        `${2 * Math.PI * 11 * 0.15}`,
                        `${2 * Math.PI * 11 * 0.02}`,
                        `${2 * Math.PI * 11 * 0.15}`,
                      ],
                    }}
                    transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                  />
                </svg>

                <p
                  style={{
                    fontSize: 5.5,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Steepr
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
