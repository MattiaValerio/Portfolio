import type { PortfolioDictionary } from "@/lib/i18n";
import styles from "./portfolio-shell.module.css";

type FooterProps = { copy: PortfolioDictionary["footer"] };

export function Footer({ copy }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Mattia Valerio</span>
      <span>{copy.location}</span>
      <a href="#top">
        {copy.backToTop} <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
