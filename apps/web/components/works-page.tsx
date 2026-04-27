"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { projectsData } from "@/lib/projects-data";


const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

export function WorksPage() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealEls = el.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    revealEls.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <main ref={ref} style={{ position: "relative", zIndex: 1 }}>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, position: "relative", zIndex: 1 }}>
        <div className="mv-container">
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.35)", letterSpacing: "0.1em", textDecoration: "none", marginBottom: 48, transition: "color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--mv-accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(232,232,240,0.35)"; }}>
            ← Torna al portfolio
          </Link>

          <p style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.25)", letterSpacing: "0.15em", marginBottom: 20 }}>LAVORI / PORTFOLIO</p>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: 28 }}>
            Cosa ho <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>costruito</em>.
          </h1>
          <p style={{ fontSize: 18, color: "rgba(232,232,240,0.6)", maxWidth: 600, lineHeight: 1.7, marginBottom: 64 }}>
            Una selezione di applicativi web reali, piattaforme e strumenti digitali sviluppati con focus su performance, UX e obiettivi concreti.
          </p>

          {/* Stats */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)", maxWidth: 640 }}>
            {[
              { num: String(projectsData.length), label: "Progetti online" },
              { num: String(new Set(projectsData.map((p) => p.category)).size), label: "Categorie coperte" },
              { num: String(new Set(projectsData.flatMap((p) => p.techStack)).size), label: "Tecnologie usate" },
            ].map((s) => (
              <div key={s.label} style={{ background: "var(--mv-bg)", padding: "28px 24px" }}>
                <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--mv-accent)", lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
                <div style={{ fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ paddingBottom: 120, position: "relative", zIndex: 1 }}>
        <div className="mv-container">
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 80 }}>
            <p style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 48 }}>
              Progetti selezionati
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.07)" }}>
              {projectsData.map((project, i) => (
                <Link
                  key={project.name}
                  href={`/lavori/${project.slug}`}
                  className="reveal works-card"
                  style={{
                    background: "#0d0d14", padding: "40px 36px", textDecoration: "none",
                    color: "inherit", display: "block", transition: "background 0.3s", position: "relative", overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#12121c";
                    const line = e.currentTarget.querySelector<HTMLElement>(".works-line");
                    if (line) line.style.transform = "scaleX(1)";
                    const arrow = e.currentTarget.querySelector<HTMLElement>(".works-arrow");
                    if (arrow) arrow.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#0d0d14";
                    const line = e.currentTarget.querySelector<HTMLElement>(".works-line");
                    if (line) line.style.transform = "scaleX(0)";
                    const arrow = e.currentTarget.querySelector<HTMLElement>(".works-arrow");
                    if (arrow) arrow.style.opacity = "0.4";
                  }}
                >
                  <div className="works-line" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--mv-accent)", transformOrigin: "left", transform: "scaleX(0)", transition: "transform 0.4s ease" }} />

                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.2)", letterSpacing: "0.1em" }}>
                          {String(i + 1).padStart(3, "0")}
                        </span>
                        <span style={{ fontFamily: mono, fontSize: 10, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                          {project.category}
                        </span>
                        <span style={{ fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.25)", letterSpacing: "0.08em" }}>
                          {project.year}
                        </span>
                      </div>

                      <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.1 }}>
                        {project.name}
                      </h2>
                      <p style={{ fontSize: 14, color: "rgba(232,232,240,0.6)", lineHeight: 1.7, marginBottom: 20, maxWidth: 600 }}>
                        {project.headline}
                      </p>

                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {project.techStack.map((t) => (
                          <span key={t} style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, padding: "4px 10px", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(232,232,240,0.5)", letterSpacing: "0.05em", borderRadius: 1 }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
                      <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, ${project.palette.from}, ${project.palette.to})`, opacity: 0.8 }} />
                      <span className="works-arrow" style={{ fontFamily: mono, fontSize: 12, color: "var(--mv-accent)", letterSpacing: "0.1em", opacity: 0.4, transition: "opacity 0.2s" }}>
                        Scopri →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 120, position: "relative", zIndex: 1 }}>
        <div className="mv-container">
          <div className="reveal" style={{ padding: "60px 48px", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Hai in mente un progetto simile?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(232,232,240,0.6)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Posso aiutarti a trasformare un processo aziendale o un'idea di prodotto in un'applicazione web concreta e ben eseguita.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/#contact"
                style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, background: "var(--mv-accent)", color: "var(--mv-bg)", padding: "14px 32px", borderRadius: 2, textDecoration: "none", letterSpacing: "0.05em", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                Parliamone →
              </Link>
              <Link
                href="/servizi"
                style={{ fontFamily: mono, fontSize: 13, fontWeight: 400, border: "1px solid rgba(232,232,240,0.2)", color: "rgba(232,232,240,0.7)", padding: "14px 32px", borderRadius: 2, textDecoration: "none", letterSpacing: "0.05em", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "var(--mv-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(232,232,240,0.2)"; e.currentTarget.style.color = "rgba(232,232,240,0.7)"; }}
              >
                Vedi servizi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
