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
    name: "Factory Insight",
    description:
      "Piattaforma di monitoraggio industriale sviluppata in .NET e React, containerizzata con Docker. Progettata per scalabilità e osservabilità cloud.",
    techStack: [".NET", "React", "Docker", "SQL Server"],
    links: {
      github: "https://github.com/mattiavalerio/factory-insight",
      demo: "https://factoryinsight.example.com",
    },
  },
  {
    name: "Survey Integration API",
    description:
      "Servizio backend .NET per l'integrazione con l'API di SurveyMonkey. Gestione centralizzata dei sondaggi con DI e clean architecture.",
    techStack: [".NET", "C#", "REST API"],
    links: {
      github: "https://github.com/mattiavalerio/survey-integration-api",
    },
  },
  {
    name: "Portfolio Website",
    description:
      "Sito personale sviluppato in Next.js e TailwindCSS, responsive e SEO-friendly, con componenti shadcn e animazioni Framer Motion.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui"],
    links: {
      github: "https://github.com/mattiavalerio/portfolio",
      demo: "https://mattiavalerio.vercel.app",
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
            Progetti
          </h2>

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
                    {project.links.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
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
