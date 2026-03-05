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
import { ArrowRight } from "lucide-react";

const packages = [
  {
    name: "START",
    price: "590€",
    description: "One-page professionale per iniziare con la giusta presenza online.",
  },
  {
    name: "BUSINESS",
    price: "790€",
    description: "Sito multipagina per presentare servizi, attività e lavori in modo completo.",
  },
  {
    name: "PRO",
    price: "1090€",
    description: "Soluzione avanzata con contenuti dinamici e funzionalità orientate al marketing.",
  },
];

export function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offers" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Pacchetti da 590€
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Scegli la soluzione più adatta alla tua attività. Ogni pacchetto è
            pensato per un sito veloce, mobile-friendly e orientato ai contatti.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packages.map((pack, index) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle>{pack.name}</CardTitle>
                      <Badge>{pack.price}</Badge>
                    </div>
                    <CardDescription>{pack.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/servizi">Scopri dettagli</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href="/servizi" className="group">
                Vedi tutti i servizi
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
