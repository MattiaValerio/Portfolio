import type { PortfolioDictionary } from "@/lib/i18n";
import { SectionTitle } from "./section-title";
import styles from "./career-sections.module.css";

export function Experience({
  copy,
}: {
  copy: PortfolioDictionary["experience"];
}) {
  return (
    <section className={styles.section} id="experience">
      <SectionTitle>{copy.title}</SectionTitle>
      <div className={styles.timeline}>
        {copy.roles.map((item) => (
          <article key={`${item.organization}-${item.startDate}`}>
            <header>
              <div>
                <h3>{item.organization}</h3>
                <p>{item.role}</p>
              </div>
              <time dateTime={item.startDate}>{item.period}</time>
            </header>
            <ul>
              {item.accomplishments.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
