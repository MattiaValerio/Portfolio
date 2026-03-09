import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "56px",
          background:
            "linear-gradient(135deg, #111827 0%, #1d4ed8 45%, #0f766e 100%)",
          color: "#f8fafc",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.78,
            marginBottom: 18,
          }}
        >
          Portfolio lavori
        </div>
        <div
          style={{
            fontSize: 58,
            lineHeight: 1.08,
            fontWeight: 700,
            maxWidth: 920,
            marginBottom: 20,
          }}
        >
          Progetti web reali, consultabili online
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.3,
            opacity: 0.9,
            maxWidth: 960,
          }}
        >
          Una selezione di case study tra AI, fintech e strumenti digitali.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}