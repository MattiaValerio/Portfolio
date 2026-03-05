"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@workspace/ui/components/badge";

const audience = [
  "Artigiani",
  "Imprese edili",
  "Studi tecnici",
  "Studi professionali",
  "Ristoranti",
  "Attività commerciali",
  "Aziende locali",
  "Piccole industrie",
];

export function Audience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="audience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Per chi è il servizio
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Soluzioni pensate per imprese locali che vogliono un sito
            professionale senza progetti complessi o costi eccessivi.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {audience.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {item}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
