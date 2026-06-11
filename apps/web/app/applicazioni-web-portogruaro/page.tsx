import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Applicazioni Web a Portogruaro",
  description:
    "Sviluppo applicazioni web su misura per aziende a Portogruaro, Venezia, Pordenone e Veneto orientale. Web app custom con React, Next.js e .NET. Portali, dashboard, gestionali e automazione processi.",
  keywords: [
    "applicazioni web portogruaro",
    "sviluppo applicazioni web portogruaro",
    "web app portogruaro",
    "sviluppatore web portogruaro",
    "applicazioni web veneto",
    "web app aziendale veneto",
    "portale clienti portogruaro",
    "gestionale web portogruaro",
    "applicativo su misura veneto",
    "react developer portogruaro",
  ],
  alternates: {
    canonical: "/applicazioni-web-portogruaro",
  },
  openGraph: {
    title: "Applicazioni Web a Portogruaro",
    description:
      "Web app professionali e soluzioni digitali su misura per aziende a Portogruaro e nel Veneto orientale.",
    url: "/applicazioni-web-portogruaro",
    type: "website",
    locale: "it_IT",
  },
};

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const appTypes = [
  {
    icon: "⬡",
    title: "Portali Clienti",
    desc: "Aree riservate dove i clienti accedono a documenti, ordini, stato pratiche e comunicazioni. Sostituiscono email e telefonate con un sistema centralizzato e sempre disponibile.",
  },
  {
    icon: "◈",
    title: "Gestionali Interni",
    desc: "Software per gestire dipendenti, commesse, magazzino, produzione o qualsiasi flusso operativo specifico dell'azienda. Sviluppati sulle esigenze reali, non su template standard.",
  },
  {
    icon: "⇄",
    title: "Integrazioni e Connettori",
    desc: "Applicazioni che collegano sistemi esistenti: ERP, CRM, e-commerce, gestionali di contabilità. Eliminano i doppi inserimenti e sincronizzano i dati in automatico.",
  },
  {
    icon: "◇",
    title: "Dashboard e Analytics",
    desc: "Visualizzazione di dati aziendali in tempo reale: KPI, performance operative, andamento vendite, monitoraggio impianti. Decisioni basate su dati, non su sensazioni.",
  },
  {
    icon: "⊕",
    title: "E-commerce e Marketplace",
    desc: "Piattaforme di vendita online personalizzate, configuratori di prodotto, preventivatori automatici e sistemi B2B con accesso per agenti e rivenditori.",
  },
  {
    icon: "⊙",
    title: "Automazione Processi",
    desc: "Workflow automatizzati che eliminano operazioni ripetitive: approvazioni, notifiche, generazione documenti, invio report periodici. Meno errori umani, più tempo per il lavoro ad alto valore.",
  },
];

const advantages = [
  {
    title: "Su misura, non a template",
    desc: "Ogni applicazione viene progettata partendo dalle esigenze reali dell'azienda. Nessuna funzionalità inutile, nessun vincolo imposto da soluzioni preconfezionate.",
  },
  {
    title: "Performance native",
    desc: "Stack moderno (React, Next.js, .NET) ottimizzato per velocità. Nessun builder visivo, codice pulito e manutenibile che dura nel tempo.",
  },
  {
    title: "Scalabile nel tempo",
    desc: "Architettura pensata per crescere: aggiungere utenti, funzionalità o integrazioni senza riscrivere tutto da zero.",
  },
  {
    title: "Punto di riferimento locale",
    desc: "Non sparisco dopo il deploy. Sono disponibile per evoluzioni, bug fix e consulenza tecnica continuativa — con la possibilità di incontrarci di persona.",
  },
];

const process = [
  { num: "01", title: "Discovery", desc: "Analisi dei flussi esistenti, identificazione dei punti di attrito e definizione delle funzionalità prioritarie." },
  { num: "02", title: "Architettura", desc: "Scelta dello stack tecnologico, struttura del database, flusso dati e integrazioni necessarie. Documento tecnico condiviso." },
  { num: "03", title: "Sviluppo iterativo", desc: "Sprint di sviluppo con demo regolari. Possibilità di rivedere le priorità in corso d'opera senza bloccare tutto." },
  { num: "04", title: "Test e Deploy", desc: "Test funzionali completi, configurazione dell'ambiente di produzione e formazione del team sull'utilizzo del software." },
];

export default function ApplicazioniWebPortogruaroPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mattiavalerio.dev" },
          { "@type": "ListItem", position: 2, name: "Applicazioni Web Portogruaro", item: "https://mattiavalerio.dev/applicazioni-web-portogruaro" },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://mattiavalerio.dev/applicazioni-web-portogruaro#service",
        name: "Sviluppo Applicazioni Web a Portogruaro",
        description:
          "Sviluppo web application su misura per aziende a Portogruaro e nel Veneto orientale: portali clienti, gestionali, dashboard e automazione processi.",
        provider: { "@id": "https://mattiavalerio.dev/#business" },
        serviceType: "Sviluppo Applicazioni Web",
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
              Web Application · Portogruaro
            </p>
            <h1 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 24 }}>
              Applicazioni Web<br />
              <span style={{ color: "var(--mv-accent)" }}>a Portogruaro</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(232,232,240,0.65)", maxWidth: 640, lineHeight: 1.7, marginBottom: 16 }}>
              Progetto e sviluppo <strong style={{ color: "rgba(232,232,240,0.9)" }}>web application su misura</strong> per aziende di Portogruaro e del Veneto orientale. Portali clienti, gestionali interni, dashboard operative e automazione processi — costruiti con React, Next.js e .NET.
            </p>
            <p style={{ fontFamily: mono, fontSize: 12, color: "rgba(232,232,240,0.35)", letterSpacing: "0.08em", marginBottom: 40 }}>
              React · Next.js · .NET · TypeScript · PostgreSQL
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
                Parliamo del tuo progetto
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
                Vedi esempi →
              </a>
            </div>
          </div>
        </section>

        {/* Cosa sono le web app */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="webapp-grid">
              <div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.2 }}>
                  Cos'è una<br />
                  <span style={{ color: "var(--mv-accent)" }}>web application</span>?
                </h2>
                <p style={{ fontSize: 15, color: "rgba(232,232,240,0.65)", lineHeight: 1.8, marginBottom: 16 }}>
                  Una web application è un software che gira nel browser, accessibile da qualsiasi dispositivo senza installazioni. A differenza di un sito vetrina — che presenta l'azienda — una web app <strong style={{ color: "rgba(232,232,240,0.8)" }}>fa qualcosa di concreto</strong>: gestisce dati, automatizza processi, permette agli utenti di compiere azioni.
                </p>
                <p style={{ fontSize: 15, color: "rgba(232,232,240,0.65)", lineHeight: 1.8, marginBottom: 16 }}>
                  Esempi pratici per le PMI venete: un portale dove i clienti scaricano le fatture senza chiamare l'ufficio, un sistema che aggiorna lo stato degli ordini in tempo reale, un gestionale per tracciare le ore di lavoro dei cantieri, o un configuratore online per i preventivi.
                </p>
                <p style={{ fontSize: 15, color: "rgba(232,232,240,0.65)", lineHeight: 1.8 }}>
                  Ho sviluppato e mantengo quotidianamente sistemi di questo tipo per ambienti industriali. Conosco le sfide di rendere software complessi usabili, veloci e affidabili anche in contesti critici.
                </p>
              </div>
              <div style={{ padding: "32px 28px", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontFamily: mono, fontSize: 10, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
                  Sito web vs Web App
                </div>
                {[
                  { label: "Sito vetrina", items: ["Presenta azienda e servizi", "Contenuto statico o semi-statico", "Ottimizzato per SEO", "Costo contenuto, tempi brevi"] },
                  { label: "Web Application", items: ["Gestisce dati e utenti", "Logica di business complessa", "Integrazione con sistemi aziendali", "ROI misurabile sull'operatività"] },
                ].map((cat, i) => (
                  <div key={cat.label} style={{ marginBottom: i === 0 ? 24 : 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: i === 0 ? "rgba(232,232,240,0.6)" : "var(--mv-accent)", marginBottom: 10 }}>{cat.label}</div>
                    {cat.items.map((item) => (
                      <div key={item} style={{ fontSize: 12, color: "rgba(232,232,240,0.45)", display: "flex", gap: 8, marginBottom: 6, lineHeight: 1.5 }}>
                        <span style={{ color: "var(--mv-accent)", opacity: i === 0 ? 0.4 : 0.8 }}>→</span>
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tipologie di applicazioni */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <p style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Tipologie</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.2 }}>
              Che tipo di applicazione<br />
              <span style={{ color: "var(--mv-accent)" }}>posso sviluppare</span>?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)" }}>
              {appTypes.map((app) => (
                <div key={app.title} style={{ background: "var(--mv-bg)", padding: "32px 28px" }}>
                  <div style={{ fontFamily: mono, fontSize: 20, color: "var(--mv-accent)", marginBottom: 14, opacity: 0.8 }}>{app.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>{app.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(232,232,240,0.5)", lineHeight: 1.7 }}>{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vantaggi */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <p style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Perché scegliermi</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.2 }}>
              Vantaggi del lavoro<br />
              <span style={{ color: "var(--mv-accent)" }}>con uno specialista locale</span>.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)" }}>
              {advantages.map((a) => (
                <div key={a.title} style={{ background: "var(--mv-bg)", padding: "32px 28px" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: "rgba(232,232,240,0.9)" }}>{a.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(232,232,240,0.5)", lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container">
            <p style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Processo</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48, lineHeight: 1.2 }}>
              Come nasce una<br />
              <span style={{ color: "var(--mv-accent)" }}>web app su misura</span>.
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

        {/* CTA */}
        <section style={{ padding: "80px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <div className="mv-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Hai un'idea in mente?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(232,232,240,0.55)", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Descrivi il problema che vuoi risolvere. In 20 minuti di call capisco se e come posso aiutarti — senza impegno.
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
          .webapp-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
