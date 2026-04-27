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
              Sono Mattia Valerio, sviluppatore web full stack con base tra Portogruaro e Pordenone. Lavoro in una software house dove sviluppo un gestionale ERP pensato per le fabbriche del futuro — Industria 4.0 e 5.0, nei settori della lavorazione del legno e della meccanica.
            </p>
            <p className="reveal" style={{ fontSize: 16, color: "rgba(232,232,240,0.7)", lineHeight: 1.8, marginBottom: 20 }}>
              Ogni giorno mi confronto con sistemi articolati, dati in tempo reale e interfacce che devono essere veloci, precise e affidabili. Non scrivo solo codice: progetto esperienze utente che semplificano la complessità industriale.
            </p>
            <p className="reveal" style={{ fontSize: 16, color: "rgba(232,232,240,0.7)", lineHeight: 1.8, marginBottom: 20 }}>
              Come freelancer supporto PMI e aziende nel Veneto orientale con siti web professionali, applicativi su misura e soluzioni digitali concrete.
            </p>
          </div>

          <div>
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 1 }}>
              {[
                { num: "4.0", label: "Industry focus" },
                { num: "5+", label: "Anni di codice" },
                { num: "100%", label: "Ogni progetto" },
                { num: "PN / VE", label: "Pordenone · Veneto" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--mv-bg)", padding: "32px 28px" }}>
                  <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--mv-accent)", lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: 1, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.07)", fontFamily: mono, fontSize: 12, color: "rgba(232,232,240,0.5)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--mv-accent)" }}>// Settori</strong><br />
              Lavorazione legno · Metalmeccanica<br />
              Fabbrica 4.0 · Gestione ERP · Web Platform
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
