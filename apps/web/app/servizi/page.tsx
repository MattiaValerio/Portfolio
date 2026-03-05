import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ServicesPage } from "@/components/services-page";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Servizi Web e Soluzioni Custom",
  description:
    "Pacchetti sito web, servizi ricorrenti e sviluppo applicativi web avanzati per PMI e aziende strutturate.",
  keywords: [
    "pacchetti sito web",
    "sviluppo web aziende",
    "applicativi web su misura",
    "servizi digitali aziendali",
    "SEO locale",
    "manutenzione sito web",
  ],
  alternates: {
    canonical: "/servizi",
  },
  openGraph: {
    title: "Servizi Web e Soluzioni Custom",
    description:
      "Dai siti professionali alle piattaforme web avanzate: soluzioni concrete per la crescita digitale.",
    url: "/servizi",
    type: "website",
  },
};

export default function ServiziPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Servizi Web e Soluzioni Custom",
    provider: {
      "@type": "Person",
      name: "Mattia Valerio",
      url: "https://mattiavalerio.dev",
    },
    areaServed: "IT",
    serviceType: [
      "Sviluppo siti web",
      "Sviluppo applicativi web complessi",
      "Integrazioni API",
      "Manutenzione e SEO",
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