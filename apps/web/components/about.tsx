"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Chi sono
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Sono uno sviluppatore full stack con una forte passione per il
            backend e l&apos;architettura software. Mi occupo di sviluppo
            cloud-ready, API e integrazioni scalabili, con un approccio moderno
            e orientato alla qualità del codice. Amo progettare soluzioni che
            uniscono efficienza, chiarezza e automazione.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
