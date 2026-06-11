import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { ServicesPreview } from "@/components/services-preview";
import { Experience } from "@/components/experience";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Sviluppo Software a Portogruaro",
  description:
    "Sviluppo software, applicazioni web e soluzioni digitali per aziende a Portogruaro, Pordenone, Venezia e Veneto. Specializzato in .NET, Blazor, React e soluzioni Industria 4.0.",
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
    ".NET portogruaro",
    "blazor sviluppatore",
    "industria 4.0 software",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sviluppo Software a Portogruaro",
    description:
      "Applicazioni web e sviluppo software per aziende a Portogruaro e nel Veneto orientale. Specializzato in .NET, Blazor e React.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://mattiavalerio.dev/#business",
        name: "Mattia Valerio — Sviluppo Software",
        url: "https://mattiavalerio.dev",
        // TODO: sostituire con numero di telefono reale prima del deploy
        telephone: "+39XXXXXXXXXX",
        email: "mattiavalerio.dev@gmail.com",
        image: "https://mattiavalerio.dev/opengraph-image",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Portogruaro",
          addressRegion: "VE",
          postalCode: "30026",
          addressCountry: "IT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 45.7749,
          longitude: 12.84019,
        },
        areaServed: [
          { "@type": "City", name: "Portogruaro" },
          { "@type": "City", name: "Pordenone" },
          { "@type": "City", name: "Venezia" },
          { "@type": "City", name: "San Donà di Piave" },
          { "@type": "AdministrativeArea", name: "Veneto" },
        ],
        serviceType: [
          "Sviluppo software su misura",
          "Sviluppo siti web aziendali",
          "Sviluppo applicativi web",
          "Integrazione API e sistemi aziendali",
          "Consulenza tecnica",
          "Soluzioni Industria 4.0",
        ],
        founder: { "@id": "https://mattiavalerio.dev/#person" },
        sameAs: [
          "https://www.linkedin.com/in/mattiavalerio/",
          "https://github.com/MattiaValerio",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://mattiavalerio.dev/#service-webapp",
        name: "Web App su Misura",
        description:
          "Sviluppo applicativi custom per digitalizzare processi aziendali, aree clienti e flussi operativi.",
        provider: { "@id": "https://mattiavalerio.dev/#business" },
        serviceType: "Sviluppo Web App",
        areaServed: { "@type": "AdministrativeArea", name: "Veneto" },
      },
      {
        "@type": "Service",
        "@id": "https://mattiavalerio.dev/#service-integration",
        name: "Integrazioni Aziendali",
        description:
          "Integrazione con API, CRM, gestionali e strumenti di terze parti per centralizzare dati e operazioni aziendali.",
        provider: { "@id": "https://mattiavalerio.dev/#business" },
        serviceType: "Integrazione API",
        areaServed: { "@type": "AdministrativeArea", name: "Veneto" },
      },
      {
        "@type": "Service",
        "@id": "https://mattiavalerio.dev/#service-enterprise",
        name: "Soluzioni Enterprise",
        description:
          "Architetture performanti e scalabili per aziende strutturate, con attenzione a sicurezza e crescita nel tempo.",
        provider: { "@id": "https://mattiavalerio.dev/#business" },
        serviceType: "Software Enterprise",
        areaServed: { "@type": "AdministrativeArea", name: "Veneto" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://mattiavalerio.dev/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quanto costa sviluppare un'applicazione web personalizzata?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Il costo dipende dalla complessità e dalle funzionalità richieste. Un sito web aziendale professionale parte da €800–€1.500, mentre un'applicazione web custom con logica di business, integrazioni e pannello di gestione va da €3.000 in su.",
            },
          },
          {
            "@type": "Question",
            name: "Qual è la differenza tra un sito vetrina e una web application?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un sito vetrina presenta l'azienda e i servizi: è statico e ottimizzato per la SEO. Una web application è un software interattivo nel browser che gestisce dati, utenti e workflow, e può automatizzare processi aziendali complessi.",
            },
          },
          {
            "@type": "Question",
            name: "Lavori anche da remoto fuori dal Veneto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sì, lavoro in remoto con clienti in tutta Italia. La maggior parte dei progetti si gestisce via email, video call e strumenti collaborativi. Per i clienti nella zona di Portogruaro, Pordenone e Venezia posso essere presente anche di persona.",
            },
          },
          {
            "@type": "Question",
            name: "Cosa significa 'Industria 4.0' nello sviluppo software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Industria 4.0 indica la digitalizzazione dei processi produttivi: sistemi che comunicano con macchine CNC, sensori IoT e impianti di fabbrica in tempo reale. Ho esperienza diretta su questi sistemi nel mio lavoro quotidiano in software house.",
            },
          },
          {
            "@type": "Question",
            name: "Quali tecnologie usi per lo sviluppo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Per il frontend utilizzo React, Next.js e TypeScript. Per il backend Node.js, Fastify, C# e .NET. Per i database PostgreSQL e SQL Server. Per il cloud Azure e AWS con Docker.",
            },
          },
          {
            "@type": "Question",
            name: "Quanto tempo richiede un progetto tipico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un sito web professionale richiede 3–10 giorni lavorativi. Un'applicazione web custom richiede tipicamente 4–12 settimane a seconda della complessità delle funzionalità richieste.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ServicesPreview />
        <Experience />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
