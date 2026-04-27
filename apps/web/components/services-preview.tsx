"use client";

import { useEffect, useRef } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const packages = [
  {
    badge: "Start",
    name: "START",
    time: "Tempi: 3–5 giorni lavorativi",
    desc: "Ideale per attività che vogliono una presenza online semplice ma professionale.",
    features: [
      "Sito one-page responsive",
      "Presentazione azienda, servizi e contatti",
      "Pulsante WhatsApp e modulo contatti email",
      "Google Maps, SEO base e ottimizzazione mobile",
      "Configurazione iniziale dominio e hosting",
      "1 revisione inclusa",
    ],
    featured: false,
  },
  {
    badge: "Più richiesto",
    name: "BUSINESS",
    time: "Tempi: 5–7 giorni lavorativi",
    desc: "Pensato per aziende che vogliono presentare meglio i propri servizi.",
    features: [
      "Tutto del pacchetto START",
      "Sito multipagina fino a 5 pagine",
      "Struttura: Home, Chi siamo, Servizi, Portfolio, Contatti",
      "Integrazione strumenti di analisi base",
      "Ottimizzazione performance",
      "2 revisioni incluse",
    ],
    featured: true,
  },
  {
    badge: "Avanzato",
    name: "PRO",
    time: "Tempi: 7–10 giorni lavorativi",
    desc: "Per aziende che vogliono un sito più evoluto, con contenuti dinamici e struttura flessibile.",
    features: [
      "Tutto del pacchetto BUSINESS",
      "Sistema per aggiornare contenuti",
      "News/articoli e portfolio dinamico",
      "Supporto multilingua IT/EN",
      "3 revisioni incluse",
    ],
    featured: false,
  },
];

const recurring = [
  { name: "Hosting", features: ["Hosting VPS dedicato", "DB incluso per siti standard", "Architetture custom su preventivo"] },
  { name: "Manutenzione Tecnica", features: ["Monitoraggio e backup periodici", "Aggiornamenti tecnici", "Modifiche contenuti (30 min/mese)", "Supporto email"] },
  { name: "Aggiornamento Contenuti", features: ["Aggiornamento testi e immagini", "Inserimento nuovi lavori/servizi", "Gestione contenuti del sito"] },
  { name: "SEO Locale", features: ["Revisione pagine esistenti", "Ottimizzazione posizionamento locale", "Meta e contenuti SEO-friendly"] },
  { name: "Supporto Prioritario", features: ["Risposta garantita entro 24h", "Interventi urgenti", "Piccole implementazioni tecniche"] },
  { name: "Gestione Completa", features: ["Hosting + gestione centralizzata", "Monitoraggio, backup continui", "Unico referente operativo"] },
];

const advanced = [
  { icon: "⬡", name: "Web App su Misura", desc: "Sviluppo applicativi custom per digitalizzare processi aziendali, aree clienti e flussi operativi." },
  { icon: "⇄", name: "Integrazioni Aziendali", desc: "Integrazione con API, CRM, gestionali e strumenti di terze parti per centralizzare dati e operazioni." },
  { icon: "◈", name: "Soluzioni Enterprise", desc: "Architetture performanti e scalabili, con attenzione a sicurezza, manutenzione e crescita nel tempo." },
];

const process = [
  { num: "01", title: "Analisi iniziale", desc: "Call breve o scambio email per capire attività, obiettivi e servizi da promuovere." },
  { num: "02", title: "Raccolta materiali", desc: "Logo, testi, immagini e informazioni aziendali. Ti supporto nella preparazione se necessario." },
  { num: "03", title: "Sviluppo", desc: "Realizzazione con stack moderno, focus su velocità, mobile e SEO base." },
  { num: "04", title: "Revisione e pubblicazione", desc: "Applicazione delle revisioni incluse e messa online con configurazione corretta." },
];

function Sublabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24, marginTop: 64, display: "block" }}>
      {children}
    </span>
  );
}

export function ServicesPreview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealEls = el.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.05 }
    );
    revealEls.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
      <div className="mv-container">
        <p className="section-label">04 — Servizi</p>
        <h2 className="reveal" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1 }}>
          Quello che <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>posso fare</em> per te.
        </h2>
        <p className="reveal" style={{ fontSize: 16, color: "rgba(232,232,240,0.55)", maxWidth: 560, lineHeight: 1.7, marginBottom: 0 }}>
          Supporto PMI e aziende a Portogruaro, Venezia e nel Veneto orientale con soluzioni digitali che uniscono presenza online, automazione dei processi e sviluppo di piattaforme web evolute.
        </p>

        {/* Packages */}
        <Sublabel>Pacchetti Sito Web</Sublabel>
        <div className="reveal pkg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)", marginBottom: 1 }}>
          {packages.map((pkg) => (
            <div key={pkg.name} style={{ background: pkg.featured ? "#101020" : "#0d0d14", padding: "40px 32px", position: "relative", transition: "background 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#12121c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = pkg.featured ? "#101020" : "#0d0d14"; }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--mv-accent)", opacity: pkg.featured ? 1 : 0, transition: "opacity 0.3s" }}
                className="pkg-topbar" />
              <div style={{ fontFamily: mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mv-accent)", marginBottom: 6 }}>{pkg.badge}</div>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>{pkg.name}</div>
              <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.3)", letterSpacing: "0.08em", marginBottom: 24 }}>{pkg.time}</div>
              <p style={{ fontSize: 13, color: "rgba(232,232,240,0.55)", lineHeight: 1.6, marginBottom: 28 }}>{pkg.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 36, padding: 0 }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: "rgba(232,232,240,0.7)", display: "flex", gap: 10, alignItems: "flex-start", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--mv-accent)", fontFamily: mono, fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:mattiavalerio.dev@gmail.com"
                style={{ display: "inline-block", fontFamily: mono, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 24px", border: `1px solid ${pkg.featured ? "var(--mv-accent)" : "rgba(255,255,255,0.15)"}`, color: pkg.featured ? "var(--mv-accent)" : "rgba(232,232,240,0.7)", textDecoration: "none", borderRadius: 2, transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "var(--mv-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = pkg.featured ? "var(--mv-accent)" : "rgba(255,255,255,0.15)"; e.currentTarget.style.color = pkg.featured ? "var(--mv-accent)" : "rgba(232,232,240,0.7)"; }}
              >
                Contattami →
              </a>
            </div>
          ))}
        </div>

        {/* Recurring */}
        <Sublabel>Servizi Ricorrenti</Sublabel>
        <div className="reveal rec-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)" }}>
          {recurring.map((r) => (
            <div key={r.name} style={{ background: "var(--mv-bg)", padding: "28px 24px", transition: "background 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0d0d18"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--mv-bg)"; }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{r.name}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7, marginBottom: 20, padding: 0 }}>
                {r.features.map((f) => (
                  <li key={f} style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.5)", display: "flex", gap: 8, lineHeight: 1.4 }}>
                    <span style={{ color: "var(--mv-accent)", flexShrink: 0, opacity: 0.6 }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="mailto:mattiavalerio.dev@gmail.com" style={{ fontFamily: mono, fontSize: 10, color: "var(--mv-accent)", letterSpacing: "0.1em", textDecoration: "none", opacity: 0.7, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.7"; }}>
                Richiedi info →
              </a>
            </div>
          ))}
        </div>

        {/* Advanced */}
        <Sublabel>Soluzioni Avanzate</Sublabel>
        <div className="reveal adv-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)" }}>
          {advanced.map((a) => (
            <div key={a.name} style={{ background: "var(--mv-bg)", padding: "40px 32px" }}>
              <div style={{ fontFamily: mono, fontSize: 22, color: "var(--mv-accent)", marginBottom: 16, opacity: 0.8 }}>{a.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 10 }}>{a.name}</div>
              <p style={{ fontSize: 14, color: "rgba(232,232,240,0.55)", lineHeight: 1.7 }}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <Sublabel>Come lavoro</Sublabel>
        <div className="reveal process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)" }}>
          {process.map((p) => (
            <div key={p.num} style={{ background: "var(--mv-bg)", padding: "32px 28px" }}>
              <div style={{ fontFamily: mono, fontSize: 32, fontWeight: 700, color: "var(--mv-accent)", opacity: 0.3, marginBottom: 12, lineHeight: 1 }}>{p.num}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{p.title}</div>
              <p style={{ fontSize: 13, color: "rgba(232,232,240,0.5)", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .rec-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .pkg-grid { grid-template-columns: 1fr !important; }
          .adv-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .rec-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
