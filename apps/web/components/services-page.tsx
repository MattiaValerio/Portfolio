"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Check, Mail } from "lucide-react";

const packages = [
  {
    name: "START",
    price: "590€",
    timeline: "3–5 giorni lavorativi",
    description:
      "Ideale per attività che vogliono una presenza online semplice ma professionale.",
    features: [
      "Sito one-page responsive",
      "Presentazione azienda, servizi e contatti",
      "Pulsante WhatsApp e modulo contatti email",
      "Google Maps, SEO base e ottimizzazione mobile",
      "Configurazione iniziale dominio e hosting",
      "1 revisione inclusa",
    ],
  },
  {
    name: "BUSINESS",
    price: "790€",
    timeline: "5–7 giorni lavorativi",
    description:
      "Pensato per aziende che vogliono presentare meglio i propri servizi.",
    features: [
      "Tutto del pacchetto START",
      "Sito multipagina fino a 5 pagine",
      "Struttura: Home, Chi siamo, Servizi, Portfolio, Contatti",
      "Integrazione strumenti di analisi base",
      "Ottimizzazione performance",
      "2 revisioni incluse",
    ],
  },
  {
    name: "PRO",
    price: "1290€",
    timeline: "7–10 giorni lavorativi",
    description:
      "Per aziende che vogliono un sito piu evoluto, con contenuti dinamici e una struttura piu flessibile.",
    features: [
      "Tutto del pacchetto BUSINESS",
      "Sistema per aggiornare contenuti",
      "News/articoli e portfolio dinamico",
      "Supporto multilingua IT/EN",
      "3 revisioni incluse",
    ],
  },
];

const recurringServices = [
  {
    name: "Hosting",
    price: "15€/mese",
    items: [
      "Hosting sito sul VPS dedicato",
      "DB incluso per siti standard",
      "Incluso per tutti i siti pubblicati sul VPS",
      "Per applicazioni con DB personalizzato: su preventivo",
    ],
  },
  {
    name: "Manutenzione Tecnica",
    price: "49€/mese",
    items: [
      "Monitoraggio sito e backup periodici",
      "Aggiornamenti tecnici",
      "Piccole modifiche contenuti (fino a 30 min/mese)",
      "Supporto email",
    ],
  },
  {
    name: "Aggiornamento Contenuti",
    price: "59€/mese",
    items: [
      "Aggiornamento testi e immagini",
      "Inserimento nuovi lavori o servizi",
      "Gestione contenuti del sito",
    ],
  },
  {
    name: "SEO Locale",
    price: "129€/mese",
    items: [
      "Revisione e ottimizzazione pagine esistenti",
      "Miglioramento struttura per il posizionamento locale",
      "Aggiornamento meta e contenuti SEO-friendly",
    ],
  },
  {
    name: "Supporto Tecnico Prioritario",
    price: "69€/mese",
    items: [
      "Risposta garantita entro 24h",
      "Interventi urgenti su sito o funzionalita",
      "Piccole implementazioni tecniche",
    ],
  },
  {
    name: "Gestione Completa Sito + Hosting",
    price: "su preventivo",
    items: [
      "Hosting incluso e gestione tecnica centralizzata",
      "Monitoraggio, backup e aggiornamenti continuativi",
      "Gestione contenuti e supporto operativo",
      "Un unico referente per sito, pubblicazione e continuita del servizio",
    ],
  },
];

const advancedServices = [
  {
    title: "Web App su Misura",
    description:
      "Sviluppo applicativi custom per digitalizzare processi aziendali, aree clienti e flussi operativi.",
  },
  {
    title: "Integrazioni Aziendali",
    description:
      "Integrazione con API, CRM, gestionali e strumenti di terze parti per centralizzare dati e operazioni.",
  },
  {
    title: "Soluzioni Enterprise-ready",
    description:
      "Architetture performanti e scalabili, con attenzione a sicurezza, manutenzione e crescita nel tempo.",
  },
];

const processSteps = [
  {
    title: "Analisi iniziale",
    description:
      "Call breve o scambio email per capire attività, obiettivi e servizi da promuovere.",
  },
  {
    title: "Raccolta materiali",
    description:
      "Raccolta logo, testi, immagini e informazioni aziendali, con supporto nella preparazione contenuti se necessario.",
  },
  {
    title: "Sviluppo",
    description:
      "Realizzazione con stack moderno, focus su velocità, mobile e SEO base.",
  },
  {
    title: "Revisione e pubblicazione",
    description:
      "Applicazione delle revisioni incluse e messa online con configurazione corretta.",
  },
];

const faqs = [
  {
    question: "Il dominio e l'hosting sono inclusi?",
    answer:
      "L'hosting è un servizio separato a 15€/mese, obbligatorio per tutti i siti pubblicati sul VPS. Se non disponi di un dominio, ci penso io.",
  },
  {
    question: "Quanto costa l'hosting?",
    answer:
      "Per siti standard parte da 15€/mese, con DB incluso. Per applicazioni con database personalizzato e architettura su misura, il costo è su preventivo.",
  },
  {
    question: "Posso aggiornare il sito da solo?",
    answer:
      "Sì, con il pacchetto PRO è inclusa una gestione contenuti che permette aggiornamenti autonomi.",
  },
  {
    question: "Quanto tempo serve?",
    answer:
      "In media da 3 a 10 giorni lavorativi, in base al pacchetto e alla complessità.",
  },
  {
    question: "È prevista assistenza dopo la pubblicazione?",
    answer:
      "Sì, è possibile attivare uno dei piani ricorrenti di manutenzione e aggiornamento.",
  },
];

export function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main ref={ref}>
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">
              Servizi Digitali per Aziende
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Sviluppo software e soluzioni web a Portogruaro
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Supporto PMI e aziende strutturate a Portogruaro, Venezia,
              Pordenone e nel Veneto orientale con soluzioni digitali che
              uniscono presenza online, automazione dei processi e sviluppo di
              piattaforme web evolute.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="packages" className="py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Pacchetti Sito Web
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pack, index) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle>{pack.name}</CardTitle>
                      <Badge>{pack.price}</Badge>
                    </div>
                    <CardDescription>{pack.description}</CardDescription>
                    <p className="text-sm text-muted-foreground">
                      Tempi: {pack.timeline}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pack.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <Check className="h-4 w-4 mt-0.5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t">
                      Hosting: 15€/mese
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="recurring" className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Servizi Ricorrenti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recurringServices.map((service, index) => (
              <Card key={service.name}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <Check className="h-4 w-4 mt-0.5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advanced" className="py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Soluzioni Avanzate
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Oltre alla realizzazione iniziale, e disponibile anche la gestione
            completa del sito con hosting incluso, manutenzione e supporto.
          </p>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            I pacchetti sito web sono il punto di partenza: posso occuparmi
            anche di applicativi web complessi per aziende con esigenze più
            strutturate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advancedServices.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Processo di Lavoro
          </h2>
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <Card key={step.title}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="outline" className="mt-0.5">
                      {index + 1}
                    </Badge>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Domande Frequenti
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Richiedi una consulenza
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Valutiamo insieme se per la tua azienda è più adatto un sito
            professionale, una piattaforma web custom o una soluzione ibrida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:mattiavalerio.dev@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                mattiavalerio.dev@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}