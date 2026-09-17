import type { Metadata } from "next";
import { headers } from "next/headers";
import { GeistSans } from "geist/font/sans";
import { GeistPixelSquare } from "geist/font/pixel";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

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
    ".NET",
    "Blazor",
    "TypeScript",
    "JavaScript",
    "SQL",
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
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
    siteName: "Mattia Valerio — Sviluppo Software",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mattia Valerio - Sviluppo Software a Portogruaro",
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

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mattiavalerio.dev/#website",
      url: "https://mattiavalerio.dev",
      name: "Mattia Valerio — Sviluppo Software a Portogruaro",
      inLanguage: "it-IT",
      publisher: { "@id": "https://mattiavalerio.dev/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://mattiavalerio.dev/#person",
      name: "Mattia Valerio",
      url: "https://mattiavalerio.dev",
      jobTitle: "Full Stack Web Developer",
      description:
        "Full Stack Developer specializzato in .NET, Blazor e React per PMI nel Veneto orientale. Sviluppo software su misura, web app e soluzioni Industria 4.0.",
      knowsAbout: [
        ".NET",
        "Blazor",
        "C#",
        "React",
        "Next.js",
        "Azure",
        "PostgreSQL",
        "Docker",
        "Node.js",
        "TypeScript",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Portogruaro",
        addressRegion: "VE",
        postalCode: "30026",
        addressCountry: "IT",
      },
      sameAs: [
        "https://www.linkedin.com/in/mattiavalerio/",
        "https://github.com/MattiaValerio",
      ],
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale =
    (await headers()).get("x-portfolio-locale") === "en" ? "en" : "it";
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistPixelSquare.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
