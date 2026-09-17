import type { PortfolioDictionary } from "@/lib/i18n";
import { SectionTitle } from "./section-title";
import styles from "./career-sections.module.css";

export function Education({
  copy,
}: {
  copy: PortfolioDictionary["credentials"];
}) {
  return (
    <section className={styles.section}>
      <SectionTitle>{copy.title}</SectionTitle>
      <div className={styles.education}>
        {copy.education.map((item) => (
          <article key={item.institution}>
            <header>
              <div>
                <h3>{item.institution}</h3>
                <p>{item.qualification}</p>
              </div>
              <div className={styles.dateScore}>
                <time dateTime={item.startDate}>{item.period}</time>
                <strong>{item.score}</strong>
              </div>
            </header>
            <dl>
              {item.topics.map((topic) => (
                <div key={topic.label}>
                  <dt>{topic.label}</dt>
                  <dd>{topic.detail}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <ul className={styles.languages}>
        {copy.languages.map((item) => (
          <li key={item.language}>
            <strong>{item.language}</strong> <span>{item.proficiency}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
