"use client";

import { motion } from "framer-motion";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">
            Ciao, sono
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mattia Valerio
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            Sviluppo Siti Web per Aziende Locali
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Realizzo siti moderni, veloci e ottimizzati per aiutarti a ricevere
            più contatti e presentare al meglio la tua attività online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" asChild>
            <a href="#contact" className="group">
              <Mail className="mr-2 h-5 w-5" />
              Richiedi una consulenza
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/servizi">Vedi i servizi</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
