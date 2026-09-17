"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import StackIcon from "tech-stack-icons";

import type { PortfolioDictionary } from "@/lib/i18n";
import { technologyIconNames } from "@/lib/technology-icons";
import styles from "./portfolio-shell.module.css";

const iconPositions = [
  { x: 10, y: 12, mobileX: 11, mobileY: 13 },
  { x: 42, y: 7, mobileX: 38, mobileY: 8 },
  { x: 76, y: 14, mobileX: 67, mobileY: 14 },
  { x: 94, y: 34, mobileX: 90, mobileY: 28 },
  { x: 20, y: 39, mobileX: 18, mobileY: 42 },
  { x: 55, y: 34, mobileX: 49, mobileY: 35 },
  { x: 78, y: 51, mobileX: 76, mobileY: 52 },
  { x: 7, y: 70, mobileX: 8, mobileY: 69 },
  { x: 36, y: 64, mobileX: 35, mobileY: 67 },
  { x: 62, y: 77, mobileX: 62, mobileY: 78 },
  { x: 91, y: 72, mobileX: 90, mobileY: 72 },
  { x: 43, y: 94, mobileX: 43, mobileY: 94 },
] as const;

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
        const position = iconPositions[index];
        return (
          <div
            key={id}
            style={
              {
                "--entrance-delay": `${1.35 + index * 0.08}s`,
                "--float-delay": `${index * -0.28}s`,
                "--x": `${position?.x ?? 50}%`,
                "--y": `${position?.y ?? 50}%`,
                "--mobile-x": `${position?.mobileX ?? 50}%`,
                "--mobile-y": `${position?.mobileY ?? 50}%`,
              } as CSSProperties
            }
          >
            <span className={styles.technologyMark} aria-hidden="true">
              {!iconName ? (
                <span className={styles.technologyFallback}>
                  {technologyLabel.slice(0, 2)}
                </span>
              ) : mounted ? (
                <StackIcon name={iconName} variant={iconVariant} />
              ) : (
                <span className={styles.technologyPlaceholder} />
              )}
            </span>
            <span className={styles.srOnly}>{technologyLabel}</span>
          </div>
        );
      })}
    </div>
  );
}
