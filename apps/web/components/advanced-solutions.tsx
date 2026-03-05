"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

const solutions = [
  {
    title: "Applicativi Web Custom",
    description:
      "Sviluppo piattaforme su misura per processi aziendali complessi, dashboard operative e aree riservate.",
    tags: ["Web App", "Dashboard", "Portali"],
  },
  {
    title: "Integrazioni e API",
    description:
      "Collego sistemi esterni, gestionali e servizi terzi per automatizzare flussi e ridurre attività manuali.",
    tags: ["API", "Integrazioni", "Automazione"],
  },
  {
    title: "Architetture Scalabili",
    description:
      "Progetto soluzioni moderne cloud-ready, performanti e manutenibili, adatte anche a team e aziende strutturate.",
    tags: ["Cloud", "Performance", "Scalabilità"],
  },
];

export function AdvancedSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="advanced"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Molto più di un semplice sito
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Oltre alla creazione di siti web, posso supportarti nello sviluppo
            di applicativi web complessi e soluzioni digitali evolute per la tua
            azienda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
