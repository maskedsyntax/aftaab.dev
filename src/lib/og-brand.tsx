/** Shared JSX for Open Graph / Twitter image generation (@vercel/og) */

export function OgBrandImage() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f7f9fb",
        padding: 56,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
      }}
    >
      <div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "#0f172a",
            lineHeight: 1.1,
          }}
        >
          Aftaab Siddiqui
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 26,
            fontWeight: 400,
            color: "#475569",
            maxWidth: 720,
            lineHeight: 1.35,
          }}
        >
          Production-ready systems that feel simple—built for scale and
          reliability.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #cbd5e1",
          paddingTop: 28,
        }}
      >
        <span style={{ fontSize: 18, color: "#0d9488", fontWeight: 600 }}>
          aftaab.xyz
        </span>
        <span
          style={{
            fontSize: 16,
            color: "#64748b",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          systems · tooling · ML
        </span>
      </div>
    </div>
  );
}
