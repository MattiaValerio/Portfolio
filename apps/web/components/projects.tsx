"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    name: "Hyper Broker",
    description: "Piattaforma di gestione dei conti trading in tempo reale",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    links: {
      demo: "https://hyper-broker.vercel.app/",
    },
  },
  {
    name: "Audix",
    description:
      "Piattaforma di trascrizione istantanea che tramite l'utilizzo dell'AI trasforma note audio in file di testo, sottotitoli, e traduce in oltre 100 lingue in pochi secondi",
    techStack: ["AI", "Next.js", "TypeScript", "API Integration"],
    links: {
      demo: "https://www.audix.dev/",
    },
  },
  {
    name: "MyFinance",
    description: "Applicazione web per la gestione delle finanze personali",
    techStack: ["Next.js", "TypeScript", "React", "TailwindCSS"],
    links: {
      demo: "https://my-finance-one.vercel.app/",
    },
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Case Study Applicativi
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Alcuni esempi di applicativi web reali sviluppati con approccio
            orientato a performance, scalabilità e obiettivi di business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.links.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Case Study
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
