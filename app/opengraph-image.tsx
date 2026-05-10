import { ImageResponse } from "next/og";

export const alt = "Entrext — Build. Own. Compound.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          color: "#fff",
          padding: 80,
          position: "relative",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 75% 30%, rgba(255,77,0,0.25) 0%, rgba(0,0,0,0) 55%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16}}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#ff4d00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 900,
              color: "#000",
              borderRadius: 4,
            }}
          >
            X
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: -1,
              textTransform: "uppercase",
              fontStyle: "italic",
              textDecoration: "underline",
              textDecorationColor: "#ff4d00",
              textDecorationThickness: 4,
              textUnderlineOffset: 6,
            }}
          >
            Entrext
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32}}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ff4d00",
              fontWeight: 900,
            }}
          >
            World&apos;s First Technology-Owned Founder Ecosystem
          </div>
          <div
            style={{
              fontSize: 140,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: -4,
              textTransform: "uppercase",
              display: "flex",
              flexWrap: "wrap",
              gap: 28,
            }}
          >
            <span>Build.</span>
            <span>Own.</span>
            <span style={{ color: "#ff4d00", fontStyle: "italic" }}>Compound.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 700,
          }}
        >
          <div>Bootstrapped Venture Studio</div>
          <div>entrext.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
