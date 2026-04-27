"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const packages = [
  {
    badge: "Start",
    name: "START",
    timeline: "3–5 giorni lavorativi",
    description: "Ideale per attività che vogliono una presenza online semplice ma professionale.",
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
    timeline: "5–7 giorni lavorativi",
    description: "Pensato per aziende che vogliono presentare meglio i propri servizi.",
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
    timeline: "7–10 giorni lavorativi",
    description: "Per aziende che vogliono un sito più evoluto, con contenuti dinamici e struttura flessibile.",
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

const recurringServices = [
  { name: "Hosting", items: ["Hosting VPS dedicato", "DB incluso per siti standard", "Architetture custom su preventivo"] },
  { name: "Manutenzione Tecnica", items: ["Monitoraggio e backup periodici", "Aggiornamenti tecnici", "Modifiche contenuti (30 min/mese)", "Supporto email"] },
  { name: "Aggiornamento Contenuti", items: ["Aggiornamento testi e immagini", "Inserimento nuovi lavori/servizi", "Gestione contenuti del sito"] },
  { name: "SEO Locale", items: ["Revisione pagine esistenti", "Ottimizzazione posizionamento locale", "Meta e contenuti SEO-friendly"] },
  { name: "Supporto Prioritario", items: ["Risposta garantita entro 24h", "Interventi urgenti", "Piccole implementazioni tecniche"] },
  { name: "Gestione Completa", items: ["Hosting + gestione centralizzata", "Monitoraggio, backup continui", "Unico referente operativo"] },
];

const advancedServices = [
  { icon: "⬡", name: "Web App su Misura", desc: "Sviluppo applicativi custom per digitalizzare processi aziendali, aree clienti e flussi operativi." },
  { icon: "⇄", name: "Integrazioni Aziendali", desc: "Integrazione con API, CRM, gestionali e strumenti di terze parti per centralizzare dati e operazioni." },
  { icon: "◈", name: "Soluzioni Enterprise-ready", desc: "Architetture performanti e scalabili, con attenzione a sicurezza, manutenzione e crescita nel tempo." },
];

const faqs = [
  { q: "Il dominio e l'hosting sono inclusi?", a: "L'hosting è un servizio separato a 15€/mese, obbligatorio per tutti i siti pubblicati sul VPS. Se non disponi di un dominio, ci penso io." },
  { q: "Quanto costa l'hosting?", a: "Per siti standard parte da 15€/mese, con DB incluso. Per applicazioni con database personalizzato e architettura su misura, il costo è su preventivo." },
  { q: "Posso aggiornare il sito da solo?", a: "Sì, con il pacchetto PRO è inclusa una gestione contenuti che permette aggiornamenti autonomi." },
  { q: "Quanto tempo serve?", a: "In media da 3 a 10 giorni lavorativi, in base al pacchetto e alla complessità." },
  { q: "È prevista assistenza dopo la pubblicazione?", a: "Sì, è possibile attivare uno dei piani ricorrenti di manutenzione e aggiornamento." },
];

function Sublabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24, marginTop: 80, display: "block" }}>
      {children}
    </p>
  );
}

export function ServicesPage() {
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
    <main ref={ref} style={{ position: "relative", zIndex: 1 }}>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80 }}>
        <div className="mv-container">
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.35)", letterSpacing: "0.1em", textDecoration: "none", marginBottom: 48, transition: "color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--mv-accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(232,232,240,0.35)"; }}>
            ← Torna al portfolio
          </Link>

          <p style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.25)", letterSpacing: "0.15em", marginBottom: 20 }}>SERVIZI DIGITALI PER AZIENDE</p>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: 28 }}>
            Quello che posso<br /><em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>fare per te</em>.
          </h1>
          <p style={{ fontSize: 18, color: "rgba(232,232,240,0.6)", maxWidth: 600, lineHeight: 1.7 }}>
            Supporto PMI e aziende a Portogruaro, Venezia e nel Veneto orientale con soluzioni digitali che uniscono presenza online, automazione dei processi e sviluppo di piattaforme web evolute.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: 120 }}>
        <div className="mv-container">

          {/* Packages */}
          <Sublabel>Pacchetti Sito Web</Sublabel>
          <div className="reveal pkg-grid-sp" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)" }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{ background: pkg.featured ? "#101020" : "#0d0d14", padding: "40px 32px", position: "relative", transition: "background 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#12121c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = pkg.featured ? "#101020" : "#0d0d14"; }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--mv-accent)", opacity: pkg.featured ? 1 : 0, transition: "opacity 0.3s" }} />
                <div style={{ fontFamily: mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mv-accent)", marginBottom: 6 }}>{pkg.badge}</div>
                <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>{pkg.name}</div>
                <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.3)", letterSpacing: "0.08em", marginBottom: 24 }}>Tempi: {pkg.timeline}</div>
                <p style={{ fontSize: 13, color: "rgba(232,232,240,0.55)", lineHeight: 1.6, marginBottom: 28 }}>{pkg.description}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 36, padding: 0 }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ fontSize: 13, color: "rgba(232,232,240,0.7)", display: "flex", gap: 10, alignItems: "flex-start", lineHeight: 1.5 }}>
                      <span style={{ color: "var(--mv-accent)", fontFamily: mono, fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="mailto:mattiavalerio.dev@gmail.com" style={{ display: "inline-block", fontFamily: mono, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 24px", border: `1px solid ${pkg.featured ? "var(--mv-accent)" : "rgba(255,255,255,0.15)"}`, color: pkg.featured ? "var(--mv-accent)" : "rgba(232,232,240,0.7)", textDecoration: "none", borderRadius: 2, transition: "border-color 0.2s, color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "var(--mv-accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = pkg.featured ? "var(--mv-accent)" : "rgba(255,255,255,0.15)"; e.currentTarget.style.color = pkg.featured ? "var(--mv-accent)" : "rgba(232,232,240,0.7)"; }}>
                  Contattami →
                </a>
              </div>
            ))}
          </div>

          {/* Recurring */}
          <Sublabel>Servizi Ricorrenti</Sublabel>
          <div className="reveal rec-grid-sp" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)" }}>
            {recurringServices.map((r) => (
              <div key={r.name} style={{ background: "var(--mv-bg)", padding: "28px 24px", transition: "background 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#0d0d18"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--mv-bg)"; }}>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{r.name}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7, marginBottom: 20, padding: 0 }}>
                  {r.items.map((item) => (
                    <li key={item} style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.5)", display: "flex", gap: 8, lineHeight: 1.4 }}>
                      <span style={{ color: "var(--mv-accent)", flexShrink: 0, opacity: 0.6 }}>—</span>{item}
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
          <div className="reveal adv-grid-sp" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)" }}>
            {advancedServices.map((a) => (
              <div key={a.name} style={{ background: "var(--mv-bg)", padding: "40px 32px" }}>
                <div style={{ fontFamily: mono, fontSize: 22, color: "var(--mv-accent)", marginBottom: 16, opacity: 0.8 }}>{a.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 10 }}>{a.name}</div>
                <p style={{ fontSize: 14, color: "rgba(232,232,240,0.55)", lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <Sublabel>Domande Frequenti</Sublabel>
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.07)" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "var(--mv-bg)", padding: "28px 32px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: "rgba(232,232,240,0.6)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal" style={{ marginTop: 80, padding: "60px 48px", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Richiedi una consulenza
            </h2>
            <p style={{ fontSize: 16, color: "rgba(232,232,240,0.6)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Valutiamo insieme se per la tua azienda è più adatto un sito professionale, una piattaforma web custom o una soluzione ibrida.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:mattiavalerio.dev@gmail.com" style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, background: "var(--mv-accent)", color: "var(--mv-bg)", padding: "14px 32px", borderRadius: 2, textDecoration: "none", letterSpacing: "0.05em", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                mattiavalerio.dev@gmail.com
              </a>
              <Link href="/lavori" style={{ fontFamily: mono, fontSize: 13, fontWeight: 400, border: "1px solid rgba(232,232,240,0.2)", color: "rgba(232,232,240,0.7)", padding: "14px 32px", borderRadius: 2, textDecoration: "none", letterSpacing: "0.05em", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "var(--mv-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(232,232,240,0.2)"; e.currentTarget.style.color = "rgba(232,232,240,0.7)"; }}>
                Vedi i lavori
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1200px) {
          .rec-grid-sp { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .pkg-grid-sp, .adv-grid-sp { grid-template-columns: 1fr !important; }
          .rec-grid-sp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
