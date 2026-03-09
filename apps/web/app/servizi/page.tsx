import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ServicesPage } from "@/components/services-page";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Servizi Web e Software a Portogruaro",
  description:
    "Pacchetti sito web, gestione completa del sito con hosting incluso, servizi ricorrenti e sviluppo software per aziende a Portogruaro, Venezia, Pordenone e Veneto.",
  keywords: [
    "servizi web portogruaro",
    "sviluppo software portogruaro",
    "software gestionale portogruaro",
    "sviluppatore portogruaro",
    "sviluppatore web veneto",
    "sviluppatore web venezia",
    "sviluppatore web pordenone",
    "pacchetti sito web",
    "sviluppo web aziende",
    "applicativi web su misura",
    "servizi digitali aziendali",
    "SEO locale",
    "gestione sito web",
    "hosting sito web",
    "manutenzione sito web",
  ],
  alternates: {
    canonical: "/servizi",
  },
  openGraph: {
    title: "Servizi Web e Software a Portogruaro",
    description:
      "Dai siti professionali alle piattaforme web avanzate: soluzioni concrete per aziende a Portogruaro e nel Veneto orientale.",
    url: "/servizi",
    type: "website",
  },
};

export default function ServiziPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Servizi Web e Software a Portogruaro",
    provider: {
      "@type": "Person",
      name: "Mattia Valerio",
      url: "https://mattiavalerio.dev",
    },
    areaServed: [
      "Portogruaro",
      "Pordenone",
      "San Donà di Piave",
      "Latisana",
      "Bibione",
      "Caorle",
      "Veneto",
      "IT",
    ],
    serviceType: [
      "Sviluppo siti web",
      "Gestione completa sito web con hosting",
      "Sviluppo applicativi web complessi",
      "Integrazioni API",
      "Manutenzione tecnica e SEO base",
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  );
}