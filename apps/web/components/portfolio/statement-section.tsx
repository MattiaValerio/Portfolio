import type { PortfolioDictionary } from "@/lib/i18n";
import styles from "./career-sections.module.css";

export function Statement({
  copy,
}: {
  copy: PortfolioDictionary["statement"];
}) {
  return (
    <aside className={styles.statement} aria-label={copy.label}>
      <p className={styles.statementLabel}>{copy.label}</p>
      <blockquote>
        <p>{copy.text}</p>
      </blockquote>
    </aside>
  );
}
