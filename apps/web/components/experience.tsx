"use client";

import { useEffect, useRef } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const items = [
  {
    period: "2022 — presente",
    role: "Full Stack Developer",
    company: "Software House · Pordenone",
    desc: "Sviluppo e manutenzione di un gestionale ERP per l'Industria 4.0 e 5.0. Progettazione architetturale, sviluppo frontend con React/Next.js e backend con Node.js/Fastify. Integrazione con sistemi di fabbrica, macchine CNC e sensori IoT.",
    tech: ["Next.js", "TypeScript", "Fastify", "PostgreSQL", "React", "WebSocket"],
    current: true,
  },
  {
    period: "2022 — presente",
    role: "Sviluppatore Web Freelance",
    company: "Portogruaro · Veneto",
    desc: "Realizzazione di siti web professionali e applicativi web custom per PMI e aziende locali. Gestione completa del progetto dalla consulenza iniziale alla messa online.",
    tech: ["Next.js", "TypeScript", "React", "TailwindCSS", "Node.js"],
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Junior Web Developer",
    company: "Formazione & Primi Progetti",
    desc: "Sviluppo di applicazioni web, apprendimento dei fondamentali del full stack: HTML/CSS, JavaScript, Node.js, database relazionali. Primi contributi a progetti reali.",
    tech: ["JavaScript", "Node.js", "React", "MySQL", "CSS"],
    current: false,
  },
];

export function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealEls = el.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    revealEls.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
      <div className="mv-container">
        <p className="section-label">05 — Esperienza</p>
        <h2 className="reveal" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 64 }}>
          Il mio <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>percorso</em>.
        </h2>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 0, top: 12, bottom: 0, width: 1, background: "rgba(255,255,255,0.08)" }} />

          {items.map((item, i) => (
            <div key={i} className="reveal" style={{ position: "relative", paddingLeft: 40, paddingBottom: i < items.length - 1 ? 56 : 0 }}>
              {/* Dot */}
              <div style={{
                position: "absolute", left: -5, top: 10,
                width: 11, height: 11, borderRadius: "50%",
                border: "2px solid var(--mv-accent)",
                background: item.current ? "var(--mv-accent)" : "var(--mv-bg)",
              }} />

              <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.35)", letterSpacing: "0.1em", marginBottom: 8 }}>{item.period}</div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 4 }}>{item.role}</div>
              <div style={{ fontFamily: mono, fontSize: 13, color: "var(--mv-accent)", fontWeight: 500, marginBottom: 12 }}>{item.company}</div>
              <p style={{ fontSize: 14, color: "rgba(232,232,240,0.6)", lineHeight: 1.8, maxWidth: 600 }}>{item.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
                {item.tech.map((t) => (
                  <span key={t} style={{ fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.4)", background: "rgba(255,255,255,0.04)", padding: "3px 8px", borderRadius: 1, letterSpacing: "0.04em" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
