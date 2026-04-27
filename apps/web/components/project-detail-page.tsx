"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ProjectItem } from "@/lib/projects-data";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

export function ProjectDetailPage({ project }: { project: ProjectItem }) {
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
          <Link
            href="/lavori"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.35)", letterSpacing: "0.1em", textDecoration: "none", marginBottom: 48, transition: "color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--mv-accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(232,232,240,0.35)"; }}
          >
            ← Torna ai lavori
          </Link>

          <div className="proj-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 64, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
                <span style={{ fontFamily: mono, fontSize: 10, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {project.category}
                </span>
                <span style={{ fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.25)", letterSpacing: "0.08em" }}>
                  {project.year}
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: 24 }}>
                {project.name}
              </h1>
              <p style={{ fontSize: 20, color: "rgba(232,232,240,0.6)", lineHeight: 1.7, maxWidth: 560 }}>
                {project.headline}
              </p>
            </div>

            {/* Palette circle */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 24, paddingTop: 8 }}>
              <div
                style={{
                  width: 200, height: 200, borderRadius: "50%",
                  background: `radial-gradient(circle at 40% 40%, ${project.palette.from}, ${project.palette.to})`,
                  boxShadow: `0 0 80px ${project.palette.glow}`,
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meta bar */}
      <section>
        <div className="mv-container">
          <div className="reveal proj-meta-bar" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)", marginBottom: 80 }}>
            <div style={{ background: "var(--mv-bg)", padding: "24px 28px" }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Categoria</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{project.category}</div>
            </div>
            <div style={{ background: "var(--mv-bg)", padding: "24px 28px" }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Anno</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{project.year}</div>
            </div>
            <div style={{ background: "var(--mv-bg)", padding: "24px 28px" }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{project.impact.label}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--mv-accent)" }}>{project.impact.value}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: 120 }}>
        <div className="mv-container">
          <div className="proj-content-grid" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 80, alignItems: "start" }}>

            {/* Left */}
            <div>
              <div className="reveal" style={{ marginBottom: 64 }}>
                <p style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
                  Il progetto
                </p>
                <p style={{ fontSize: 16, color: "rgba(232,232,240,0.7)", lineHeight: 1.85 }}>
                  {project.description}
                </p>
              </div>

              <div className="reveal">
                <p style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
                  Highlights
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.07)" }}>
                  {project.highlights.map((h, i) => (
                    <div key={i} style={{ background: "var(--mv-bg)", padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", opacity: 0.5, flexShrink: 0, marginTop: 2 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p style={{ fontSize: 14, color: "rgba(232,232,240,0.7)", lineHeight: 1.7 }}>{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              <div className="reveal">
                <p style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
                  Stack tecnologico
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, padding: "6px 14px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,232,240,0.6)", letterSpacing: "0.05em", borderRadius: 1 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <p style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>
                  Link
                </p>
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontFamily: mono, fontSize: 12, fontWeight: 600,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      padding: "14px 24px",
                      background: "var(--mv-accent)", color: "var(--mv-bg)",
                      textDecoration: "none", borderRadius: 2,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                  >
                    Visita il sito →
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontFamily: mono, fontSize: 12, fontWeight: 600,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      padding: "14px 24px",
                      border: "1px solid rgba(255,255,255,0.15)", color: "rgba(232,232,240,0.7)",
                      textDecoration: "none", borderRadius: 2,
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "var(--mv-accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(232,232,240,0.7)"; }}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="reveal" style={{ marginTop: 80, padding: "60px 48px", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 14 }}>
              Hai un progetto simile?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(232,232,240,0.6)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
              Posso aiutarti a costruire qualcosa di concreto, ben eseguito e pronto a crescere.
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
                href="/lavori"
                style={{ fontFamily: mono, fontSize: 13, fontWeight: 400, border: "1px solid rgba(232,232,240,0.2)", color: "rgba(232,232,240,0.7)", padding: "14px 32px", borderRadius: 2, textDecoration: "none", letterSpacing: "0.05em", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "var(--mv-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(232,232,240,0.2)"; e.currentTarget.style.color = "rgba(232,232,240,0.7)"; }}
              >
                Altri lavori
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .proj-hero-grid { grid-template-columns: 1fr !important; }
          .proj-hero-grid > div:last-child { display: none !important; }
          .proj-content-grid { grid-template-columns: 1fr !important; }
          .proj-meta-bar { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
