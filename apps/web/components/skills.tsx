"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@workspace/ui/components/badge";

const skillsData = {
  categories: [
    {
      name: "Linguaggi",
      items: ["C#", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      name: "Framework & Librerie",
      items: [".NET", "Blazor", "React", "Next.js"],
    },
    {
      name: "Database",
      items: ["SQL Server", "PostgreSQL"],
    },
    {
      name: "DevOps & Cloud",
      items: ["Docker", "Git", "CI/CD", "Azure", "AWS"],
    },
  ],
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Competenze
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm border"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
