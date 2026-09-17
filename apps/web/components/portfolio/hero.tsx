import type { PortfolioDictionary } from "@/lib/i18n";
import { TechnologyGrid } from "./technology-grid";
import styles from "./portfolio-shell.module.css";

export function Hero({
  copy,
  identity,
}: {
  copy: PortfolioDictionary["hero"];
  identity: PortfolioDictionary["identity"];
}) {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroCopy}>
        <h1>{identity.firstName}</h1>
        <h2>{identity.lastName}</h2>
        <p className={styles.role}>{copy.role}</p>
        <div className={styles.meta}>
          <span>{copy.availability}</span>
          <span>{copy.experience}</span>
        </div>
      </div>
      <TechnologyGrid
        label={copy.technologies}
        technologies={copy.technologyLabels}
      />
    </section>
  );
}
