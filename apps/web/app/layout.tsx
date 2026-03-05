import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mattiavalerio.dev"),
  title: {
    default: "Sviluppatore Web a Portogruaro | Mattia Valerio",
    template: "%s | Mattia Valerio",
  },
  description:
    "Sviluppo software, siti web professionali e applicazioni web per aziende a Portogruaro, Venezia, Pordenone e Veneto.",
  keywords: [
    "sviluppo software portogruaro",
    "sviluppatore web portogruaro",
    "software gestionale portogruaro",
    "sviluppo applicazioni veneto",
    "sviluppo software venezia",
    "sviluppo software pordenone",
    "Sviluppatore Portogruaro",
    "Mattia Valerio Portogruaro",
    "Sviluppatore web Portogruaro",
    "Sviluppatore Veneto",
    "Sviluppatore web Veneto",
    "Sviluppatore web Venezia",
    "Sviluppo siti web",
    "Applicativi web custom",
    "Soluzioni web aziendali",
    "Web app",
    "Integrazione API",
    "Automazione processi",
    "Consulenza digitale",
    "Sviluppatore web",
    "Mattia Valerio",
    "Software engineering",
    "Web development",
    "Digital transformation",
    "C#",
    "TypeScript",
    "JavaScript",
    "SQL",
    "Blazor",
    "Next.js",
    "Azure",
    "AWS",
    "CI/CD",
    "Software Architecture",
    "Microservices",
    "REST API",
  ],
  authors: [{ name: "Mattia Valerio" }],
  creator: "Mattia Valerio",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    title: "Sviluppo Software a Portogruaro",
    description:
      "Applicazioni web, siti professionali e soluzioni software per aziende del Veneto orientale.",
    siteName: "Mattia Valerio Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mattia Valerio - Soluzioni Web per Aziende",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sviluppo Software a Portogruaro | Mattia Valerio",
    description:
      "Sviluppo software e applicazioni web per aziende a Portogruaro e in Veneto.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
