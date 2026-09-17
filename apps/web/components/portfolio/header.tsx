"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import type { Locale, PortfolioDictionary } from "@/lib/i18n";
import styles from "./portfolio-shell.module.css";

export function Header({
  locale,
  copy,
}: {
  locale: Locale;
  copy: PortfolioDictionary;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const siblingLocale: Locale = locale === "it" ? "en" : "it";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!menuOpen) return;
    firstMenuLinkRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function switchLanguage() {
    document.cookie = `NEXT_LOCALE=${siblingLocale}; Max-Age=31536000; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    window.location.assign(`/${siblingLocale}${window.location.hash}`);
  }

  function closeMenu() {
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <header className={styles.header}>
      <a
        className={styles.identity}
        href="#top"
        aria-label={copy.identity.homeLabel}
      >
        {copy.identity.firstName} {copy.identity.lastName}
      </a>
      <nav
        className={styles.desktopNavigation}
        aria-label={copy.navigation.label}
      >
        {copy.navigation.items.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className={styles.controls}>
        <button
          type="button"
          onClick={switchLanguage}
          aria-label={copy.preferences.switchLanguage}
        >
          <span className={styles.srOnly}>{copy.preferences.language}: </span>
          {locale.toUpperCase()}
        </button>
        <button
          type="button"
          onClick={() => setTheme(dark ? "light" : "dark")}
          aria-label={
            mounted
              ? dark
                ? copy.preferences.useLight
                : copy.preferences.useDark
              : copy.preferences.theme
          }
        >
          <span className={styles.srOnly}>{copy.preferences.theme}: </span>
          {mounted &&
            (dark ? (
              <Sun aria-hidden="true" size={15} />
            ) : (
              <Moon aria-hidden="true" size={15} />
            ))}
        </button>
        <button
          className={styles.menuButton}
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            menuOpen ? copy.navigation.menuClose : copy.navigation.menuOpen
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" size={18} />
          ) : (
            <Menu aria-hidden="true" size={18} />
          )}
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className={styles.mobileNavigation}
          aria-label={copy.navigation.label}
        >
          {copy.navigation.items.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstMenuLinkRef : undefined}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
