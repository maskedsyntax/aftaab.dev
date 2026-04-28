/** Shared JSX for Open Graph / Twitter image generation (@vercel/og) */

interface OgBrandImageProps {
  /** Small uppercase label above the title (category, "Case study", etc.) */
  eyebrow?: string;
  /** Main heading — defaults to the site author */
  title?: string;
  /** Sub-heading body text */
  subtitle?: string;
  /** Footer right-side label */
  footerNote?: string;
}

export function OgBrandImage({
  eyebrow,
  title = "Aftaab Siddiqui",
  subtitle = "Product designer and full-stack engineer. Web and mobile products from first interface to shipped code.",
  footerNote = "Product · Design · Code",
}: OgBrandImageProps = {}) {
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        {eyebrow ? (
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#0d9488",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#0f172a",
            lineHeight: 1.05,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 26,
            fontWeight: 400,
            color: "#475569",
            maxWidth: 880,
            lineHeight: 1.35,
          }}
        >
          {subtitle}
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
          aftaab.dev
        </span>
        <span
          style={{
            fontSize: 16,
            color: "#64748b",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          {footerNote}
        </span>
      </div>
    </div>
  );
}
