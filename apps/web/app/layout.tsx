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
  title: "Mattia Valerio | Full Stack Developer",
  description:
    "Full Stack Developer specializzato in backend e cloud development. Sviluppo soluzioni scalabili e performanti con .NET, React e Docker.",
  keywords: [
    "Full Stack",
    "Backend",
    ".NET",
    "React",
    "Cloud",
    "Docker",
    "Portfolio",
    "Developer",
    "Web Developer",
    "Sviluppatore Web",
    "Mattia Valerio",
    "Software Engineer",
    "Web Development",
    "DevOps",
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
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://mattiavalerio.vercel.app",
    title: "Mattia Valerio | Full Stack Developer",
    description:
      "Full Stack Developer specializzato in backend e cloud development.",
    siteName: "Mattia Valerio Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattia Valerio | Full Stack Developer",
    description:
      "Full Stack Developer specializzato in backend e cloud development.",
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
