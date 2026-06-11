import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ServicesPage } from "@/components/services-page";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Servizi di Sviluppo Web e Software a Portogruaro",
  description:
    "Pacchetti sito web, gestione completa con hosting incluso, web app su misura e sviluppo software per aziende a Portogruaro, Venezia, Pordenone e Veneto.",
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
    ".NET sviluppatore veneto",
    "blazor web app",
  ],
  alternates: {
    canonical: "/servizi",
  },
  openGraph: {
    title: "Servizi di Sviluppo Web e Software a Portogruaro",
    description:
      "Dai siti professionali alle piattaforme web avanzate: soluzioni concrete per aziende a Portogruaro e nel Veneto orientale.",
    url: "/servizi",
    type: "website",
    locale: "it_IT",
  },
};

export default function ServiziPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mattiavalerio.dev" },
          { "@type": "ListItem", position: 2, name: "Servizi", item: "https://mattiavalerio.dev/servizi" },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://mattiavalerio.dev/servizi#service-pacchetti",
        name: "Pacchetti Sito Web Professionale",
        description:
          "Realizzazione di siti web aziendali professionali con pacchetti START, BUSINESS e PRO. SEO base, mobile-first e configurazione hosting inclusa.",
        provider: { "@id": "https://mattiavalerio.dev/#business" },
        serviceType: "Sviluppo Sito Web",
        areaServed: [
          { "@type": "City", name: "Portogruaro" },
          { "@type": "City", name: "Pordenone" },
          { "@type": "City", name: "Venezia" },
          { "@type": "AdministrativeArea", name: "Veneto" },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://mattiavalerio.dev/servizi#service-webapp",
        name: "Sviluppo Web App su Misura",
        description:
          "Sviluppo applicativi web custom per digitalizzare processi aziendali, gestire clienti e automatizzare flussi operativi.",
        provider: { "@id": "https://mattiavalerio.dev/#business" },
        serviceType: "Sviluppo Web Application",
        areaServed: [
          { "@type": "City", name: "Portogruaro" },
          { "@type": "AdministrativeArea", name: "Veneto" },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://mattiavalerio.dev/servizi#service-maintenance",
        name: "Gestione e Manutenzione Sito Web",
        description:
          "Hosting, backup, aggiornamenti tecnici, modifiche contenuti e supporto prioritario. Un unico referente per tutto il sito.",
        provider: { "@id": "https://mattiavalerio.dev/#business" },
        serviceType: "Manutenzione Sito Web",
        areaServed: { "@type": "AdministrativeArea", name: "Veneto" },
      },
    ],
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  );
}
