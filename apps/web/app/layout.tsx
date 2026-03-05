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
    default: "Mattia Valerio | Soluzioni Web per Aziende",
    template: "%s | Mattia Valerio",
  },
  description:
    "Sviluppo siti web professionali, applicativi custom e soluzioni digitali scalabili per PMI e aziende strutturate.",
  keywords: [
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
    title: "Mattia Valerio | Soluzioni Web Aziendali",
    description:
      "Siti web professionali, web app custom e soluzioni digitali per far crescere il business.",
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
    title: "Mattia Valerio | Soluzioni Web Aziendali",
    description:
      "Siti web professionali, web app custom e soluzioni digitali scalabili.",
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
