"use client";

import { useEffect, useState } from "react";

import styles from "./portfolio-shell.module.css";

const INITIAL_DELAY = 220;
const CHARACTER_DELAY = 85;
const LINE_PAUSE = 180;
const CURSOR_LINGER = 520;

export function TypedName({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const totalCharacters = firstName.length + lastName.length;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const typeNextCharacter = (count: number) => {
      if (count >= totalCharacters) {
        timeout = setTimeout(() => setIsComplete(true), CURSOR_LINGER);
        return;
      }

      const nextCount = count + 1;
      const delay = count === firstName.length ? LINE_PAUSE : CHARACTER_DELAY;
      timeout = setTimeout(() => {
        setVisibleCharacters(nextCount);
        typeNextCharacter(nextCount);
      }, delay);
    };

    timeout = setTimeout(() => typeNextCharacter(0), INITIAL_DELAY);
    return () => clearTimeout(timeout);
  }, [firstName.length, lastName.length, totalCharacters]);

  const visibleFirstName = firstName.slice(
    0,
    Math.min(visibleCharacters, firstName.length),
  );
  const visibleLastName = lastName.slice(
    0,
    Math.max(0, visibleCharacters - firstName.length),
  );
  const cursorOnFirstName = visibleCharacters < firstName.length;

  return (
    <div className={styles.typedName}>
      <h1>
        <span className={styles.srOnly}>{firstName}</span>
        <span className={styles.typedText} aria-hidden="true">
          {visibleFirstName}
          {!isComplete && cursorOnFirstName ? (
            <span className={styles.typingCursor} />
          ) : null}
        </span>
        <span className={styles.reducedMotionName} aria-hidden="true">
          {firstName}
        </span>
      </h1>
      <h2>
        <span className={styles.srOnly}>{lastName}</span>
        <span className={styles.typedText} aria-hidden="true">
          {visibleLastName}
          {!isComplete && !cursorOnFirstName ? (
            <span className={styles.typingCursor} />
          ) : null}
        </span>
        <span className={styles.reducedMotionName} aria-hidden="true">
          {lastName}
        </span>
      </h2>
    </div>
  );
}
