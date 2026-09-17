"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import StackIcon from "tech-stack-icons";

import type { PortfolioDictionary } from "@/lib/i18n";
import { technologyIconNames } from "@/lib/technology-icons";
import styles from "./portfolio-shell.module.css";

export function Hero({
  copy,
  identity,
}: {
  copy: PortfolioDictionary["hero"];
  identity: PortfolioDictionary["identity"];
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const iconVariant = resolvedTheme === "dark" ? "dark" : "light";
  useEffect(() => setMounted(true), []);

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
      <div className={styles.technologies} aria-label={copy.technologies}>
        {copy.technologyLabels.map(({ id, label }, index) => (
          <div
            key={id}
            style={{ "--delay": `${index * 0.16}s` } as CSSProperties}
          >
            <span aria-hidden="true">
              {mounted && (
                <StackIcon
                  name={technologyIconNames[id]}
                  variant={iconVariant}
                />
              )}
            </span>
            <b>{label}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
