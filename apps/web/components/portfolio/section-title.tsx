import styles from "./portfolio-shell.module.css";

export function SectionTitle({ children }: { children: string }) {
  return (
    <div className={styles.sectionTitle}>
      <h2>{children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}
