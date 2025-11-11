import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mattia Valerio - Full Stack Developer",
    short_name: "Mattia Valerio",
    description:
      "Full Stack Developer specializzato in backend e cloud development",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#0078D4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
