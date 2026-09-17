"use client";

import { useState, type FormEvent } from "react";

import type { PortfolioDictionary } from "@/lib/i18n";
import styles from "./portfolio-shell.module.css";

const emailAddress = "mattiavalerio.dev@gmail.com";

type ContactStatus =
  | "idle"
  | "loading"
  | "success"
  | "missing"
  | "delivery"
  | "server";

type ContactProps = { copy: PortfolioDictionary["contact"] };

export function Contact({ copy }: ContactProps) {
  const [status, setStatus] = useState<ContactStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("missing");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (response.status === 400 || result?.error === "Campi mancanti") {
        setStatus("missing");
      } else if (result?.error === "Invio fallito") {
        setStatus("delivery");
      } else {
        setStatus("server");
      }
    } catch {
      setStatus("server");
    }
  }

  const feedback =
    status === "success"
      ? copy.success
      : status === "missing"
        ? copy.missingFields
        : status === "delivery"
          ? copy.deliveryFailure
          : status === "server"
            ? copy.serverError
            : null;

  return (
    <section
      className={styles.contact}
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className={styles.sectionTitle}>
        <b>{copy.sectionTitle}</b>
        <i aria-hidden="true" />
      </h2>
      <div className={styles.contactLinks} aria-label={copy.linksLabel}>
        <a href={`mailto:${emailAddress}`}>
          <span>Email</span>
          <b>{emailAddress}</b>
        </a>
        <a
          href="https://github.com/MattiaValerio"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <b>github.com/MattiaValerio</b>
        </a>
        <a
          href="https://it.linkedin.com/in/mattiavalerio"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <b>linkedin.com/in/mattiavalerio</b>
        </a>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
        <h3>{copy.formTitle}</h3>
        <p>{copy.introduction}</p>
        <div className={styles.contactFields}>
          <label>
            {copy.nameLabel}
            <input
              name="name"
              autoComplete="name"
              placeholder={copy.namePlaceholder}
              required
            />
          </label>
          <label>
            {copy.emailLabel}
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder={copy.emailPlaceholder}
              required
            />
          </label>
          <label>
            {copy.messageLabel}
            <textarea
              name="message"
              rows={4}
              placeholder={copy.messagePlaceholder}
              required
            />
          </label>
        </div>
        <div className={styles.contactActions}>
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? copy.loading : copy.submit}
          </button>
          <span>
            {copy.directEmailPrefix}{" "}
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </span>
        </div>
        {feedback ? (
          <p
            className={
              status === "success" ? styles.formSuccess : styles.formError
            }
            role={status === "success" ? "status" : "alert"}
          >
            {feedback}
          </p>
        ) : null}
      </form>
    </section>
  );
}
