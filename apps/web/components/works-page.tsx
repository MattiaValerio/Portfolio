"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { projectsData } from "@/lib/projects-data";

const portfolioStats = [
  {
    label: "Progetti online",
    value: String(projectsData.length),
    description: "Una selezione di lavori pubblici gia visitabili.",
  },
  {
    label: "Categorie coperte",
    value: String(new Set(projectsData.map((project) => project.category)).size),
    description: "Fintech, AI e strumenti orientati a produttivita e controllo.",
  },
  {
    label: "Tecnologie chiave",
    value: String(
      new Set(projectsData.flatMap((project) => project.techStack)).size
    ),
    description: "Stack frontend moderni e integrazioni pensate per crescere.",
  },
];

const capabilityPoints = [
  "Converto un requisito in un prodotto chiaro e navigabile.",
  "Lavoro su performance, UX e struttura tecnica fin dall'inizio.",
  "Progetto interfacce che comunicano valore anche a livello commerciale.",
];

export function WorksPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main ref={ref}>
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">
              Portfolio Progetti
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Lavori realizzati e progetti pubblicati
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Una raccolta dei progetti sviluppati finora: applicazioni web
              pubbliche, strumenti digitali e piattaforme costruite con focus
              su usabilita, performance e obiettivi concreti.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {portfolioStats.map((stat) => (
              <Card key={stat.label} className="h-full bg-muted/30 border-border/70">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <Card className="border-border/70 bg-gradient-to-br from-background via-background to-primary/5">
              <CardContent className="pt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Come lavoro
                </p>
                <h2 className="text-2xl font-semibold mb-3">
                  Non una vetrina generica, ma progetti presentati con contesto.
                </h2>
                <p className="text-muted-foreground">
                  Questa pagina e pensata per mostrare non solo i link ai lavori,
                  ma anche il tipo di problema affrontato, il taglio del prodotto
                  e il valore percepibile nel risultato finale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-muted/20">
              <CardContent className="pt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  Cosa porto in un progetto
                </p>
                <ul className="space-y-3">
                  {capabilityPoints.map((point) => (
                    <li key={point} className="text-sm text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Progetti selezionati
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Ogni scheda evidenzia il contesto del progetto, il focus
                funzionale e alcuni elementi concreti del lavoro svolto.
              </p>
            </div>
            <Badge className="w-fit">{projectsData.length} progetti online</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full flex flex-col border-border/70 shadow-sm hover:shadow-lg transition-shadow">
                  <div
                    className="px-6 py-5 border-b"
                    style={{
                      background: `linear-gradient(135deg, ${project.palette.from}, ${project.palette.to})`,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 50px ${project.palette.glow}`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 text-white">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/75 mb-2">
                          {project.category}
                        </p>
                        <p className="text-xl font-semibold leading-tight max-w-[18rem]">
                          {project.headline}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-white/80">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <Badge variant="secondary">0{index + 1}</Badge>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge variant="outline">{project.year}</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow space-y-5">
                    <div className="rounded-lg border bg-muted/30 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        {project.impact.label}
                      </p>
                      <p className="text-lg font-semibold">{project.impact.value}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-3">Cosa e stato realizzato</p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    {project.links.demo ? (
                      <Button asChild className="w-full">
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visita il progetto
                        </a>
                      </Button>
                    ) : null}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
            <CardContent className="py-8 px-6 sm:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Hai in mente un progetto simile?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Posso aiutarti a trasformare un processo aziendale, un servizio
                o un'idea di prodotto in un'applicazione web concreta e ben
                eseguita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/#contact" className="group">
                    <Mail className="mr-2 h-5 w-5" />
                    Parliamone
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/servizi">Vedi servizi e soluzioni</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}