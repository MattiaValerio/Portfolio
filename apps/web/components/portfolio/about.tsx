import type { PortfolioDictionary } from "@/lib/i18n";
import { SectionTitle } from "./section-title";
import styles from "./portfolio-shell.module.css";

export function About({ copy }: { copy: PortfolioDictionary["about"] }) {
  return (
    <section className={styles.section} id="about">
      <SectionTitle>{copy.title}</SectionTitle>
      <div className={styles.about}>
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
