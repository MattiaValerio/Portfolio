"use client";

import { useEffect, useRef } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const items = [
  {
    quote: "Mattia ha una capacità rara: capisce subito le esigenze di produzione e le traduce in soluzioni software che funzionano davvero sul campo. Proattivo, preciso e mai approssimativo.",
    name: "Marco B.",
    role: "Project Manager · Software House PN",
    initials: "MB",
  },
  {
    quote: "Ha gestito da solo intere feature del nostro ERP con una maturità tecnica sopra la media. Quando dice \"ci penso io\", ci si può fidare.",
    name: "Sara T.",
    role: "CTO · Settore Manifatturiero",
    initials: "ST",
  },
  {
    quote: "Non è solo un developer: è qualcuno che si fa carico del problema. Lavora con un'attenzione ai dettagli che raramente trovi in profili della sua esperienza.",
    name: "Luca M.",
    role: "Senior Developer · Team Interno",
    initials: "LM",
  },
];

export function Testimonials() {
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
    <section id="testimonials" ref={ref} style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
      <div className="mv-container">
        <p className="section-label">06 — Referenze</p>
        <h2 className="reveal" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 64 }}>
          Cosa dicono <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>di me</em>.
        </h2>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)" }}>
          {items.map((t, i) => (
            <div key={i} style={{ background: "var(--mv-bg)", padding: "40px 36px" }}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(232,232,240,0.8)", marginBottom: 28, position: "relative", paddingTop: 16 }}>
                <span style={{ position: "absolute", top: -24, left: -8, fontSize: 64, fontWeight: 700, color: "var(--mv-accent)", opacity: 0.2, lineHeight: 1 }}>"</span>
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: mono, fontSize: 13, color: "var(--mv-accent)", fontWeight: 700,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.35)", letterSpacing: "0.05em" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
