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
  title: "Soluzioni Web per PMI e Aziende",
  description:
    "Siti web professionali, web app su misura e integrazioni per digitalizzare processi e aumentare i risultati di business.",
  keywords: [
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
    title: "Soluzioni Web per PMI e Aziende",
    description:
      "Siti web professionali, web app su misura e integrazioni per accelerare la crescita aziendale.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mattia Valerio - Soluzioni Web per Aziende",
    url: "https://mattiavalerio.dev",
    areaServed: "IT",
    serviceType: [
      "Sviluppo siti web",
      "Sviluppo applicativi web",
      "Integrazione API",
      "Consulenza tecnica",
    ],
    provider: {
      "@type": "Person",
      name: "Mattia Valerio",
    },
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
