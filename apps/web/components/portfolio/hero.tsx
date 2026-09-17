import type { PortfolioDictionary } from "@/lib/i18n";
import { TechnologyGrid } from "./technology-grid";
import { TypedName } from "./typed-name";
import styles from "./portfolio-shell.module.css";

export function Hero({
  copy,
  identity,
}: {
  copy: PortfolioDictionary["hero"];
  identity: PortfolioDictionary["identity"];
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <TypedName
          firstName={identity.firstName}
          lastName={identity.lastName}
        />
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
