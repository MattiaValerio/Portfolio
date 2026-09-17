import type { PortfolioDictionary } from "@/lib/i18n";
import styles from "./career-sections.module.css";

export function Testimonials({
  copy,
}: {
  copy: PortfolioDictionary["testimonials"];
}) {
  return (
    <section
      className={`${styles.section} ${styles.testimonials}`}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.title}>
        <h2 id="testimonials-title">{copy.title}</h2>
        <span aria-hidden="true" />
      </div>
      <div className={styles.quoteGrid}>
        {copy.items.map((item) => (
          <figure key={item.name}>
            <blockquote>
              <p>{item.quote}</p>
            </blockquote>
            <figcaption>
              <span aria-hidden="true">{item.initials}</span>
              <span>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
