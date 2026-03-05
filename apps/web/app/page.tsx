import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Audience } from "@/components/audience";
import { ServicesPreview } from "@/components/services-preview";
import { AdvancedSolutions } from "@/components/advanced-solutions";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Sviluppo Software a Portogruaro",
  description:
    "Sviluppo software, applicazioni web e soluzioni digitali per aziende a Portogruaro, Pordenone, Venezia e Veneto.",
  keywords: [
    "mattia valerio portogruaro",
    "sviluppatore portogruaro",
    "sviluppatore web portogruaro",
    "sviluppo software portogruaro",
    "software gestionale portogruaro",
    "applicazioni web portogruaro",
    "sviluppo software veneto",
    "sviluppo software venezia",
    "sviluppo software pordenone",
    "sviluppatore san donà di piave",
    "sviluppatore latisana",
    "sviluppatore caorle",
    "sviluppatore bibione",
    "sviluppatore veneto",
    "siti web aziendali",
    "web app custom",
    "sviluppo software aziendale",
    "integrazione API",
    "automazione processi",
    "sviluppatore web aziende",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sviluppo Software a Portogruaro",
    description:
      "Applicazioni web e sviluppo software per aziende a Portogruaro e nel Veneto orientale.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Mattia Valerio - Sviluppo Software",
        url: "https://mattiavalerio.dev",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Portogruaro",
          addressRegion: "Veneto",
          postalCode: "30026",
          addressCountry: "IT",
        },
        areaServed: [
          "Portogruaro",
          "Pordenone",
          "San Donà di Piave",
          "Latisana",
          "Bibione",
          "Caorle",
          "Veneto",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Mattia Valerio - Soluzioni Web per Aziende",
        url: "https://mattiavalerio.dev",
        serviceType: [
          "Sviluppo software",
          "Sviluppo siti web",
          "Sviluppo applicativi web",
          "Integrazione API",
          "Consulenza tecnica",
        ],
        provider: {
          "@type": "Person",
          name: "Mattia Valerio",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Audience />
        <ServicesPreview />
        <AdvancedSolutions />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
