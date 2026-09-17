"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import StackIcon from "tech-stack-icons";

import type { PortfolioDictionary } from "@/lib/i18n";
import { technologyIconNames } from "@/lib/technology-icons";
import styles from "./portfolio-shell.module.css";

export function TechnologyGrid({
  label,
  technologies,
}: {
  label: string;
  technologies: PortfolioDictionary["hero"]["technologyLabels"];
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const iconVariant = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => setMounted(true), []);

  return (
    <div className={styles.technologies} aria-label={label}>
      {technologies.map(({ id, label: technologyLabel }, index) => {
        const iconName = technologyIconNames[id];
        return (
          <div
            key={id}
            style={{ "--delay": `${index * 0.16}s` } as CSSProperties}
          >
            <span className={styles.technologyMark} aria-hidden="true">
              {mounted && iconName ? (
                <StackIcon name={iconName} variant={iconVariant} />
              ) : (
                <span className={styles.technologyFallback}>
                  {technologyLabel.slice(0, 2)}
                </span>
              )}
            </span>
            <b>{technologyLabel}</b>
          </div>
        );
      })}
    </div>
  );
}
