import type { PortfolioDictionary } from "@/lib/i18n";
import { SectionTitle } from "./section-title";
import styles from "./portfolio-shell.module.css";

export function Skills({ copy }: { copy: PortfolioDictionary["skills"] }) {
  return (
    <section className={styles.section} id="skills">
      <SectionTitle>{copy.title}</SectionTitle>
      <div className={styles.skills}>
        {copy.groups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
