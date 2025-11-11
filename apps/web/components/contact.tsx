"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Contatti
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Se vuoi collaborare o discutere di un progetto, scrivimi
            liberamente.
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="mailto:mattiavalerio.dev@gmail.com"
                    className="flex items-center justify-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    mattiavalerio.dev@gmail.com
                  </a>
                </Button>

                <div className="flex gap-4 justify-center mt-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/mattiavalerio"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/mattiavalerio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
