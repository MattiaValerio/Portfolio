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
          background: "#0b1220",
          color: "#f8fafc",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            opacity: 0.8,
            marginBottom: 16,
          }}
        >
          Mattia Valerio
        </div>
        <div
          style={{
            fontSize: 56,
            lineHeight: 1.1,
            fontWeight: 700,
            maxWidth: 980,
            marginBottom: 20,
          }}
        >
          Siti Web e Applicativi Custom
        </div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.9,
            maxWidth: 1000,
          }}
        >
          Soluzioni digitali orientate a risultati, performance e scalabilità.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
