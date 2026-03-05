import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@workspace/ui/components/button";

export const metadata: Metadata = {
  title: "Applicazioni Web a Portogruaro",
  description:
    "Sviluppo applicazioni web su misura per aziende a Portogruaro, Venezia, Pordenone e Veneto orientale.",
  keywords: [
    "applicazioni web portogruaro",
    "sviluppo applicazioni web portogruaro",
    "web app portogruaro",
    "sviluppatore web portogruaro",
    "applicazioni web veneto",
  ],
  alternates: {
    canonical: "/applicazioni-web-portogruaro",
  },
  openGraph: {
    title: "Applicazioni Web a Portogruaro",
    description:
      "Web app professionali e soluzioni digitali per aziende a Portogruaro e nel Veneto orientale.",
    url: "/applicazioni-web-portogruaro",
    type: "website",
    locale: "it_IT",
  },
};

export default function ApplicazioniWebPortogruaroPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Applicazioni Web a Portogruaro",
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
      "Sviluppo applicazioni web",
      "Web app su misura",
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
            Applicazioni Web a Portogruaro
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Progetto e sviluppo applicazioni web su misura per aziende di
            Portogruaro e del Veneto orientale, con attenzione a performance,
            usabilità e crescita nel tempo.
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
