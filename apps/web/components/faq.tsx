"use client";

import { useState, useEffect, useRef } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const faqs = [
  {
    q: "Quanto costa sviluppare un'applicazione web personalizzata?",
    a: "Il costo dipende dalla complessità e dalle funzionalità richieste. Un sito web aziendale professionale parte da €800–€1.500, mentre un'applicazione web custom con logica di business, integrazioni e pannello di gestione va da €3.000 in su. Prima dell'offerta faccio sempre una call gratuita per capire le esigenze reali e fornire una stima precisa senza sorprese.",
  },
  {
    q: "Qual è la differenza tra un sito vetrina e una web application?",
    a: "Un sito vetrina presenta l'azienda e i servizi: è statico, ottimizzato per la SEO e ideale per generare visibilità. Una web application è un software interattivo nel browser: gestisce dati, utenti e workflow, e può automatizzare processi aziendali complessi. Sviluppo entrambi con stack moderni ottimizzati per performance, mobile e posizionamento su Google.",
  },
  {
    q: "Lavori anche da remoto fuori dal Veneto?",
    a: "Sì, lavoro in remoto con clienti in tutta Italia. La maggior parte dei progetti si gestisce tranquillamente via email, video call e strumenti collaborativi condivisi. Per i clienti nella zona di Portogruaro, Pordenone e Venezia posso essere presente anche di persona per il kickoff e le revisioni principali.",
  },
  {
    q: "Cosa significa 'Industria 4.0' nello sviluppo software?",
    a: "Industria 4.0 indica la digitalizzazione dei processi produttivi: sistemi che comunicano con macchine CNC, sensori IoT e impianti di fabbrica in tempo reale. Nel mio lavoro quotidiano mantengo e sviluppo un gestionale ERP avanzato per il manifatturiero, quindi ho esperienza diretta su questi sistemi — non solo teorica — che metto a disposizione anche dei clienti freelance.",
  },
  {
    q: "Quali tecnologie usi per lo sviluppo?",
    a: "Per il frontend utilizzo React, Next.js e TypeScript. Per il backend Node.js, Fastify, C# e .NET con architetture REST API. Per i database PostgreSQL e SQL Server. Per il cloud Azure e AWS con Docker per la containerizzazione. Lo stack viene scelto in base alle esigenze specifiche del progetto, dando priorità a performance, manutenibilità e scalabilità.",
  },
  {
    q: "Quanto tempo richiede un progetto tipico?",
    a: "Un sito web professionale richiede 3–10 giorni lavorativi. Un'applicazione web custom richiede tipicamente 4–12 settimane a seconda della complessità delle funzionalità. Ogni progetto inizia con un'analisi delle esigenze che produce una timeline precisa. Lavoro con sprint chiari e aggiornamenti regolari così sai sempre a che punto siamo.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealEls = el.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.05 }
    );
    revealEls.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={ref}
      style={{
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mv-container">
        <p className="section-label">07 — FAQ</p>
        <h2
          className="reveal"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Domande <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>frequenti</em>.
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: 16,
            color: "rgba(232,232,240,0.5)",
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: 56,
          }}
        >
          Risposte dirette alle domande più comuni su costi, tempi, tecnologie e modalità di lavoro.
        </p>

        <div
          className="reveal"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            background: "rgba(255,255,255,0.07)",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "var(--mv-bg)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
                aria-expanded={open === i}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "rgba(232,232,240,0.9)",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 18,
                    color: "var(--mv-accent)",
                    flexShrink: 0,
                    transition: "transform 0.25s",
                    display: "inline-block",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: open === i ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(232,232,240,0.6)",
                    lineHeight: 1.8,
                    padding: "0 28px 24px",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
