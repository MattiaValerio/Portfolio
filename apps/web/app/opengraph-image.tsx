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
          justifyContent: "center",
          padding: "56px",
          background: "#0b1220",
          color: "#f8fafc",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            opacity: 0.8,
            marginBottom: 20,
          }}
        >
          Mattia Valerio
        </div>
        <div
          style={{
            fontSize: 62,
            lineHeight: 1.1,
            fontWeight: 700,
            maxWidth: 980,
            marginBottom: 20,
          }}
        >
          Soluzioni Web per Aziende
        </div>
        <div
          style={{
            fontSize: 30,
            opacity: 0.9,
            maxWidth: 1000,
          }}
        >
          Siti professionali, web app custom e piattaforme scalabili.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
