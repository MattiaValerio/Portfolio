"use client";

import { useEffect, useRef } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

export function About() {
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
    <section id="about" ref={ref} style={{ padding: "120px 0", position: "relative", zIndex: 1 }}>
      <div className="mv-container">
        <p className="section-label">01 — Chi sono</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="about-grid">
          <div className="about-text">
            <h2 className="reveal" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 28, lineHeight: 1.1 }}>
              Costruisco sistemi <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>complessi</em> che funzionano.
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: "rgba(232,232,240,0.7)", lineHeight: 1.8, marginBottom: 20 }}>
              Sono Mattia Valerio, Full Stack Web Developer specializzato in soluzioni software per l’Industria 4.0. Nel mio lavoro quotidiano in software house, mantengo e sviluppo un sistema ERP avanzato per aziende del settore manifatturiero, orchestrando dati in tempo reale e processi critici.
            </p>
            <p className="reveal" style={{ fontSize: 16, color: "rgba(232,232,240,0.7)", lineHeight: 1.8, marginBottom: 20 }}>
              Il mio obiettivo? Semplificare l’eccellenza. Non mi limito a scrivere codice: progetto ecosistemi digitali dove velocità, precisione e affidabilità permettono alle aziende di evolvere.
            </p>
            <p className="reveal" style={{ fontSize: 16, color: "rgba(232,232,240,0.7)", lineHeight: 1.8, marginBottom: 20 }}>
              Come freelancer, metto questa esperienza tecnica al servizio delle PMI del Veneto Orientale e del Friuli, realizzando applicativi su misura e siti web che non sono solo "vetrine", ma veri strumenti di crescita.
            </p>
          </div>

          <div>
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 1 }}>
              {[
                { num: "4.0", label: "Industry focus" },
                { num: "5+", label: "Anni di esperienza" },
                { num: "Full Stack", label: "Soluzioni end-to-end" },
                { num: "Tailor-made", label: "Software su misura" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--mv-bg)", padding: "32px 28px" }}>
                  <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--mv-accent)", lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: 1, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.07)", fontFamily: mono, fontSize: 12, color: "rgba(232,232,240,0.5)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--mv-accent)" }}>// Knowledge</strong><br />
              Applicazioni Web · Microservizi · Real Time Data<br />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
