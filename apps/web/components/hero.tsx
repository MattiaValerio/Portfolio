"use client";

import { useState, useEffect } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const techStack = [".NET", "Blazor", "C#", "React", "Azure"];

export function Hero() {
  const [typed, setTyped] = useState("");
  const role = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(role.slice(0, ++i));
      if (i >= role.length) clearInterval(t);
    }, 65);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="page-loader" />
      <div className="page-curtain" />

      <section id="hero" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", paddingTop: 100, paddingBottom: 60,
        overflow: "hidden", position: "relative", zIndex: 1,
      }}>
        <div className="mv-container">
          <div style={{ position: "relative" }}>
            <div className="anim-1" style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.3)", letterSpacing: "0.15em", marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
              <span>✦</span> PORTFOLIO — 2026
              <span style={{ marginLeft: 8, color: "var(--mv-accent)", opacity: 0.9, display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--mv-accent)", boxShadow: "0 0 6px var(--mv-accent)" }} />
                Disponibile per nuove opportunità
              </span>
            </div>

            <h1 className="anim-2" style={{
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em",
              marginBottom: 24,
            }}>
              Mattia<br />
              <span style={{ color: "var(--mv-accent)" }}>Valerio</span>
            </h1>

            <p className="anim-3" style={{ fontFamily: mono, fontSize: "clamp(13px, 2vw, 18px)", color: "rgba(232,232,240,0.5)", fontWeight: 300, letterSpacing: "0.05em", marginBottom: 16 }}>
              &lt; {typed}<span className="cursor" />&nbsp;/&gt;
            </p>

            {/* Tech stack tagline — visible above fold per SEO e clienti enterprise */}
            <div className="anim-3" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 28 }}>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    color: "rgba(232,232,240,0.45)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "3px 10px",
                    borderRadius: 2,
                    letterSpacing: "0.06em",
                  }}
                >
                  {tech}
                </span>
              ))}
              <span style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.25)", letterSpacing: "0.06em" }}>
                — soluzioni enterprise per le PMI venete
              </span>
            </div>

            <p className="anim-4" style={{
              fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 400,
              color: "rgba(232,232,240,0.8)", maxWidth: 600, lineHeight: 1.6, marginBottom: 56,
              borderLeft: "2px solid var(--mv-accent)", paddingLeft: 20,
            }}>
              Dinamico e proattivo, metto il 100% di me stesso in ogni progetto.
            </p>

            <div className="anim-5" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="#projects"
                style={{
                  fontFamily: mono, fontSize: 13, fontWeight: 500,
                  background: "var(--mv-accent)", color: "var(--mv-bg)",
                  padding: "14px 32px", borderRadius: 2, textDecoration: "none",
                  letterSpacing: "0.05em", transition: "opacity 0.2s, transform 0.2s", display: "inline-block",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
              >
                Guarda i miei lavori
              </a>
              <a
                href="#contact"
                style={{
                  fontFamily: mono, fontSize: 13, fontWeight: 400,
                  border: "1px solid rgba(232,232,240,0.2)", color: "rgba(232,232,240,0.7)",
                  padding: "14px 32px", borderRadius: 2, textDecoration: "none",
                  letterSpacing: "0.05em", transition: "border-color 0.2s, color 0.2s", display: "inline-block",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "var(--mv-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(232,232,240,0.2)"; e.currentTarget.style.color = "rgba(232,232,240,0.7)"; }}
              >
                Parliamo →
              </a>
            </div>

            <div className="anim-6" style={{ marginTop: 80, fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.3)", letterSpacing: "0.15em", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 40, height: 1, background: "rgba(232,232,240,0.2)", display: "inline-block" }} />
              scroll per scoprire
            </div>

            {/* Geometric deco */}
            <svg
              style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", width: 360, height: 360, pointerEvents: "none", opacity: 0.08 }}
              viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="180" cy="180" r="160" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="180" cy="180" r="100" stroke="white" strokeWidth="1" />
              <circle cx="180" cy="180" r="40" stroke="white" strokeWidth="1" />
              <line x1="0" y1="180" x2="360" y2="180" stroke="white" strokeWidth="0.5" />
              <line x1="180" y1="0" x2="180" y2="360" stroke="white" strokeWidth="0.5" />
              <circle cx="180" cy="20" r="4" fill="white" />
              <circle cx="180" cy="340" r="4" fill="white" />
              <circle cx="20" cy="180" r="4" fill="white" />
              <circle cx="340" cy="180" r="4" fill="white" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
                const r = 160;
                const x = 180 + r * Math.cos((a * Math.PI) / 180);
                const y = 180 + r * Math.sin((a * Math.PI) / 180);
                return <circle key={a} cx={x} cy={y} r="3" fill="white" opacity="0.5" />;
              })}
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
