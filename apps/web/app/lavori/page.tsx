import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WorksPage } from "@/components/works-page";
import { projectsData } from "@/lib/projects-data";

export const revalidate = 86400;

const publicProjects = projectsData.filter((project) => project.links.demo);

export const metadata: Metadata = {
  title: "Portfolio Progetti Web — Mattia Valerio Portogruaro",
  description:
    "Portfolio di progetti web e case study sviluppati da Mattia Valerio: piattaforme digitali, strumenti online e applicazioni consultabili dal vivo.",
  keywords: [
    "portfolio progetti sviluppatore web",
    "lavori sviluppatore portogruaro",
    "progetti web mattia valerio",
    "case study applicazioni web",
    "portfolio sviluppo software",
    "portfolio sviluppatore freelance",
    "progetti next js typescript",
    "portfolio .net blazor",
    "portfolio sviluppatore veneto",
  ],
  alternates: {
    canonical: "/lavori",
  },
  openGraph: {
    title: "Portfolio Progetti Web — Mattia Valerio Portogruaro",
    description:
      "Scopri i progetti web realizzati: applicazioni, strumenti digitali e case study online con focus su UX, performance e prodotto.",
    url: "/lavori",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/lavori/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfolio progetti di Mattia Valerio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Progetti Web — Mattia Valerio Portogruaro",
    description:
      "Una selezione di lavori reali tra web app, strumenti digitali e piattaforme online.",
    images: ["/lavori/twitter-image"],
  },
};

export default function LavoriPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mattiavalerio.dev" },
          { "@type": "ListItem", position: 2, name: "Lavori", item: "https://mattiavalerio.dev/lavori" },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://mattiavalerio.dev/lavori#page",
        name: "Portfolio progetti e case study web",
        url: "https://mattiavalerio.dev/lavori",
        description: "Una raccolta di progetti web reali sviluppati da Mattia Valerio.",
        author: { "@id": "https://mattiavalerio.dev/#person" },
      },
      {
        "@type": "ItemList",
        "@id": "https://mattiavalerio.dev/lavori#list",
        name: "Progetti sviluppati da Mattia Valerio",
        itemListElement: publicProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            "@id": `https://mattiavalerio.dev/lavori/${project.slug}#project`,
            name: project.name,
            applicationCategory: project.category,
            operatingSystem: "Web",
            url: project.links.demo,
            description: project.description,
            keywords: project.techStack.join(", "),
            creator: { "@id": "https://mattiavalerio.dev/#person" },
          },
        })),
      },
    ],
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <WorksPage />
      <Footer />
    </div>
  );
}
