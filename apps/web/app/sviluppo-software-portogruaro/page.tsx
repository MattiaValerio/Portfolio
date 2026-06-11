import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Sviluppo Software a Portogruaro",
  description:
    "Sviluppo software su misura, applicazioni web e soluzioni .NET/Blazor per aziende a Portogruaro, Venezia, Pordenone e Veneto orientale. 5+ anni di esperienza, specializzato in Industria 4.0.",
  keywords: [
    "sviluppo software portogruaro",
    "sviluppatore web portogruaro",
    "software gestionale portogruaro",
    "applicazioni web portogruaro",
    "sviluppo software veneto",
    ".NET sviluppatore portogruaro",
    "blazor portogruaro",
    "industria 4.0 veneto",
    "software aziendale portogruaro",
    "sviluppatore freelance portogruaro",
  ],
  alternates: {
    canonical: "/sviluppo-software-portogruaro",
  },
  openGraph: {
    title: "Sviluppo Software a Portogruaro",
    description:
      "Applicazioni web e soluzioni software .NET/Blazor per aziende a Portogruaro e nel Veneto orientale.",
    url: "/sviluppo-software-portogruaro",
    type: "website",
    locale: "it_IT",
  },
};

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const services = [
  {
    title: "Web App su Misura",
    desc: "Applicativi web personalizzati per digitalizzare processi aziendali: portali clienti, gestionali interni, dashboard operative e strumenti di monitoraggio in tempo reale. Sviluppati con .NET, Blazor o React a seconda delle esigenze.",
  },
  {
    title: "Siti Web Aziendali",
    desc: "Siti web professionali ottimizzati per la SEO locale, veloci, mobile-first e costruiti per convertire visitatori in clienti. Dal sito one-page per l'artigiano al portale multi-pagina per l'azienda strutturata.",
  },
  {
    title: "Integrazione Sistemi",
    desc: "Collegamento tra gestionali, CRM, ERP, e-commerce e strumenti di terze parti tramite API REST. Centralizzazione dei dati aziendali per eliminare doppi inserimenti e ridurre gli errori operativi.",
  },
  {
    title: "Soluzioni Industria 4.0",
    desc: "Software per ambienti manifatturieri: integrazione con macchine CNC, sensori IoT e sistemi SCADA. Raccolta e visualizzazione dati di produzione in tempo reale per decisioni operative più rapide.",
  },
  {
    title: "Backend e API",
    desc: "Architetture backend scalabili in C#/.NET e Node.js con API REST documentate, autenticazione sicura e database relazionali ottimizzati. Deployment su Azure o AWS con pipeline CI/CD.",
  },
  {
    title: "Consulenza Tecnica",
    desc: "Analisi delle esigenze digitali dell'azienda, scelta dello stack tecnologico più adatto, revisione di architetture esistenti e supporto nella pianificazione di nuovi progetti software.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "Blazor", "TypeScript", "TailwindCSS"] },
  { category: "Backend", items: ["C# / .NET", "Node.js", "Fastify", "REST API"] },
  { category: "Database", items: ["PostgreSQL", "SQL Server", "Redis"] },
  { category: "Cloud & DevOps", items: ["Azure", "AWS", "Docker", "CI/CD"] },
];

const process = [
  { num: "01", title: "Analisi", desc: "Call gratuita di 20 minuti per capire obiettivi, funzionalità e vincoli tecnici. Nessun impegno." },
  { num: "02", title: "Proposta", desc: "Documento tecnico con architettura proposta, timeline realistica e preventivo dettagliato." },
  { num: "03", title: "Sviluppo", desc: "Sprint di sviluppo con aggiornamenti regolari. Accesso a un ambiente di anteprima per vedere i progressi." },
  { num: "04", title: "Deploy & Supporto", desc: "Messa online con configurazione corretta di dominio, hosting e SSL. Supporto post-lancio incluso." },
];

const areas = ["Portogruaro", "Pordenone", "Venezia", "San Donà di Piave", "Latisana", "Caorle", "Bibione", "Sacile", "Oderzo"];

export default function SviluppoSoftwarePortogruaroPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mattiavalerio.dev" },
          { "@type": "ListItem", position: 2, name: "Sviluppo Software Portogruaro", item: "https://mattiavalerio.dev/sviluppo-software-portogruaro" },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://mattiavalerio.dev/sviluppo-software-portogruaro#service",
        name: "Sviluppo Software a Portogruaro",
        description:
          "Sviluppo software su misura, web app e soluzioni .NET/Blazor per PMI a Portogruaro e nel Veneto orientale.",
        provider: { "@id": "https://mattiavalerio.dev/#business" },
        serviceType: "Sviluppo Software",
        areaServed: [
          { "@type": "City", name: "Portogruaro" },
          { "@type": "City", name: "Pordenone" },
          { "@type": "City", name: "Venezia" },
          { "@type": "AdministrativeArea", name: "Veneto" },
        ],
      },
    ],
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{ paddingTop: 120, paddingBottom: 80, position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <p style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
              Sviluppo Software · Portogruaro
            </p>
            <h1 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 24 }}>
              Sviluppo Software<br />
              <span style={{ color: "var(--mv-accent)" }}>a Portogruaro</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(232,232,240,0.65)", maxWidth: 640, lineHeight: 1.7, marginBottom: 16 }}>
              Soluzioni software su misura per PMI del Veneto orientale. Specializzato in <strong style={{ color: "rgba(232,232,240,0.9)" }}>.NET, Blazor e React</strong> — dal sito vetrina alla piattaforma enterprise, con 5+ anni di esperienza in ambienti industriali complessi.
            </p>
            <p style={{ fontFamily: mono, fontSize: 12, color: "rgba(232,232,240,0.35)", letterSpacing: "0.08em", marginBottom: 40 }}>
              .NET · Blazor · C# · React · Azure · PostgreSQL
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="mailto:mattiavalerio.dev@gmail.com"
                style={{
                  fontFamily: mono, fontSize: 13, fontWeight: 500,
                  background: "var(--mv-accent)", color: "var(--mv-bg)",
                  padding: "14px 28px", borderRadius: 2, textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                Richiedi una consulenza gratuita
              </a>
              <a
                href="/#projects"
                style={{
                  fontFamily: mono, fontSize: 13,
                  border: "1px solid rgba(232,232,240,0.2)", color: "rgba(232,232,240,0.7)",
                  padding: "14px 28px", borderRadius: 2, textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                Guarda i progetti →
              </a>
            </div>
          </div>
        </section>

        {/* Perché scegliere uno sviluppatore locale */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="local-grid">
              <div>
                <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
                  Sviluppatore locale,<br />
                  <span style={{ color: "var(--mv-accent)" }}>soluzioni reali</span>.
                </h2>
                <p style={{ fontSize: 15, color: "rgba(232,232,240,0.65)", lineHeight: 1.8, marginBottom: 16 }}>
                  Sono Mattia Valerio, Full Stack Developer con sede a Portogruaro. Nel mio lavoro quotidiano sviluppo e mantengo un gestionale ERP complesso per l'Industria 4.0 in una software house di Pordenone — questo significa che lavoro ogni giorno con le stesse sfide tecniche che affrontano le aziende manifatturiere e industriali del Veneto orientale.
                </p>
                <p style={{ fontSize: 15, color: "rgba(232,232,240,0.65)", lineHeight: 1.8, marginBottom: 16 }}>
                  Come freelance porto questa competenza tecnica alle PMI locali: aziende che hanno bisogno di software che funziona davvero sul campo, non di soluzioni generiche. Conosco le esigenze delle imprese della zona, posso essere presente di persona e offro un punto di riferimento stabile nel tempo.
                </p>
                <p style={{ fontSize: 15, color: "rgba(232,232,240,0.65)", lineHeight: 1.8 }}>
                  La mia specializzazione in <strong style={{ color: "rgba(232,232,240,0.9)" }}>.NET e Blazor</strong> mi distingue dagli sviluppatori web generici: sono in grado di costruire applicazioni enterprise-grade, integrarmi con sistemi esistenti e garantire performance e sicurezza nei contesti più critici.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.07)" }}>
                {[
                  { num: "5+", label: "Anni di esperienza" },
                  { num: "4.0", label: "Industria focus" },
                  { num: ".NET", label: "Stack enterprise" },
                  { num: "PMI", label: "Clienti target" },
                ].map((s) => (
                  <div key={s.label} style={{ background: "var(--mv-bg)", padding: "28px 24px" }}>
                    <div style={{ fontSize: 40, fontWeight: 700, color: "var(--mv-accent)", lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
                    <div style={{ fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Servizi */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <p style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Servizi</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.15 }}>
              Cosa posso sviluppare<br />
              <span style={{ color: "var(--mv-accent)" }}>per la tua azienda</span>.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)" }}>
              {services.map((s) => (
                <div key={s.title} style={{ background: "var(--mv-bg)", padding: "32px 28px" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(232,232,240,0.55)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack tecnologico */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <p style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Stack tecnologico</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.15 }}>
              Tecnologie <span style={{ color: "var(--mv-accent)" }}>professionali</span>.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)", marginBottom: 32 }}>
              {techStack.map((cat) => (
                <div key={cat.category} style={{ background: "var(--mv-bg)", padding: "28px 24px" }}>
                  <div style={{ fontFamily: mono, fontSize: 10, fontWeight: 600, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
                    {cat.category}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {cat.items.map((item) => (
                      <div key={item} style={{ fontSize: 14, color: "rgba(232,232,240,0.75)", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--mv-accent)", opacity: 0.6, flexShrink: 0, display: "inline-block" }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14, color: "rgba(232,232,240,0.45)", lineHeight: 1.7, maxWidth: 640 }}>
              Lo stack tecnologico viene scelto in base alle esigenze specifiche del progetto. Per applicazioni web standard utilizzo Next.js e React. Per sistemi aziendali più complessi o integrazioni con infrastrutture Microsoft utilizzo C# e .NET con Blazor. Per il backend preferisco architetture stateless con Fastify o .NET Web API.
            </p>
          </div>
        </section>

        {/* Processo */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <p style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Come lavoro</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.15 }}>
              Dal brief al <span style={{ color: "var(--mv-accent)" }}>deploy</span>.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)" }}>
              {process.map((p) => (
                <div key={p.num} style={{ background: "var(--mv-bg)", padding: "32px 28px" }}>
                  <div style={{ fontFamily: mono, fontSize: 28, fontWeight: 700, color: "var(--mv-accent)", opacity: 0.3, marginBottom: 12, lineHeight: 1 }}>{p.num}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(232,232,240,0.5)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Area di servizio */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <p style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Area di servizio</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              Veneto orientale e <span style={{ color: "var(--mv-accent)" }}>tutta Italia</span>.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(232,232,240,0.6)", lineHeight: 1.8, maxWidth: 600, marginBottom: 32 }}>
              Lavoro principalmente con aziende di Portogruaro e del Veneto orientale, dove posso essere presente di persona per kickoff, revisioni e supporto diretto. Per clienti in tutta Italia lavoro completamente da remoto con la stessa qualità e reattività.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {areas.map((area) => (
                <span
                  key={area}
                  style={{
                    fontFamily: mono, fontSize: 12,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(232,232,240,0.55)",
                    padding: "6px 14px", borderRadius: 2,
                    letterSpacing: "0.06em",
                  }}
                >
                  {area}
                </span>
              ))}
              <span
                style={{
                  fontFamily: mono, fontSize: 12,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--mv-accent)",
                  padding: "6px 14px", borderRadius: 2,
                  letterSpacing: "0.06em",
                }}
              >
                + tutta Italia (remoto)
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Pronto a iniziare?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(232,232,240,0.55)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Parliamo del tuo progetto. La prima consulenza è gratuita e senza impegno.
            </p>
            <a
              href="mailto:mattiavalerio.dev@gmail.com"
              style={{
                fontFamily: mono, fontSize: 13, fontWeight: 500,
                background: "var(--mv-accent)", color: "var(--mv-bg)",
                padding: "16px 36px", borderRadius: 2, textDecoration: "none",
                letterSpacing: "0.05em", display: "inline-block",
              }}
            >
              Scrivimi →
            </a>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .local-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
