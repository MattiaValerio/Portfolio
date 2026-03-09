import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #172554 38%, #0f766e 100%)",
          color: "#f8fafc",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          Mattia Valerio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 66,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 920,
            }}
          >
            Portfolio progetti e case study web
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              maxWidth: 980,
              opacity: 0.92,
            }}
          >
            Applicazioni reali, strumenti digitali e piattaforme online gia
            pubblicate.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 22,
            opacity: 0.85,
          }}
        >
          <div>Next.js</div>
          <div>TypeScript</div>
          <div>Product Design</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}