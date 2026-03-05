import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@workspace/ui/components/button";

export const metadata: Metadata = {
  title: "Sviluppo Software a Portogruaro",
  description:
    "Sviluppo software, applicazioni web e soluzioni digitali per aziende a Portogruaro, Venezia, Pordenone e Veneto orientale.",
  keywords: [
    "sviluppo software portogruaro",
    "sviluppatore web portogruaro",
    "software gestionale portogruaro",
    "applicazioni web portogruaro",
    "sviluppo software veneto",
  ],
  alternates: {
    canonical: "/sviluppo-software-portogruaro",
  },
  openGraph: {
    title: "Sviluppo Software a Portogruaro",
    description:
      "Applicazioni web e soluzioni software per aziende a Portogruaro e nel Veneto orientale.",
    url: "/sviluppo-software-portogruaro",
    type: "website",
    locale: "it_IT",
  },
};

export default function SviluppoSoftwarePortogruaroPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sviluppo Software a Portogruaro",
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
    ],
    serviceType: [
      "Sviluppo software",
      "Sviluppo applicazioni web",
      "Sviluppo siti web professionali",
      "Integrazione API",
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Sviluppo Software a Portogruaro
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Realizzo software e applicazioni web su misura per aziende di
            Portogruaro e del Veneto orientale, con focus su performance,
            automazione e risultati concreti.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:mattiavalerio.dev@gmail.com">Richiedi una consulenza</a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
