import type { ProjectContent, ProjectsDictionary } from "@/lib/i18n";

import styles from "./projects.module.css";

function TechnologyList({
  technologies,
  label,
}: Pick<ProjectContent, "technologies"> & { label: string }) {
  return (
    <ul className={styles.technologies} aria-label={label}>
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

function ProjectCard({
  project,
  technologiesLabel,
}: {
  project: ProjectContent;
  technologiesLabel: string;
}) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <h3>{project.title}</h3>
        <span className={styles.status}>{project.status}</span>
      </header>
      <p className={styles.context}>{project.context}</p>
      <p className={styles.description}>{project.description}</p>
      <TechnologyList
        technologies={project.technologies}
        label={technologiesLabel}
      />
    </article>
  );
}

export function Projects({ copy }: { copy: ProjectsDictionary }) {
  return (
    <section
      className={styles.section}
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className={styles.titleRow}>
        <h2 id="projects-heading">{copy.heading}</h2>
        <span aria-hidden="true" />
      </div>

      <article className={styles.featured}>
        <header className={styles.cardHeader}>
          <div>
            <h3>{copy.featured.title}</h3>
            <p className={styles.context}>{copy.featured.context}</p>
          </div>
          <span className={styles.status}>{copy.featured.status}</span>
        </header>
        <p className={styles.description}>{copy.featured.description}</p>
        <p className={styles.currentWork}>
          <strong>{copy.featured.currentWorkLabel}</strong>{" "}
          {copy.featured.currentWork}
        </p>
        <TechnologyList
          technologies={copy.featured.technologies}
          label={copy.technologiesLabel}
        />
      </article>

      <div className={styles.grid}>
        {copy.items.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            technologiesLabel={copy.technologiesLabel}
          />
        ))}
      </div>
    </section>
  );
}
