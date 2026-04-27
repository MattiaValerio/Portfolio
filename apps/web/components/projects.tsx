"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "@/lib/projects-data";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

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
    <section id="projects" ref={ref} style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
      <div className="mv-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <p className="section-label" style={{ marginBottom: 0 }}>03 — Progetti</p>
          <h2 className="reveal" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Cosa ho <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>costruito</em>.
          </h2>
        </div>

        <div className="reveal proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)" }}>
          {projectsData.map((project, i) => {
            const layout = i % 3 === 0 ? "wide" : "narrow";
            const isHov = hovered === i;
            return (
              <Link
                key={project.name}
                href={`/lavori/${project.slug}`}
                className={`proj-card-item ${layout}`}
                style={{
                  background: isHov ? "#12121c" : "#0d0d14",
                  padding: "40px 36px", transition: "background 0.3s",
                  textDecoration: "none", color: "inherit", display: "block",
                  position: "relative", overflow: "hidden",
                  gridColumn: layout === "wide" ? "span 7" : "span 5",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Accent top line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "var(--mv-accent)", transformOrigin: "left",
                  transform: isHov ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.4s ease",
                }} />

                <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.2)", letterSpacing: "0.1em", marginBottom: 24 }}>
                  {String(i + 1).padStart(3, "0")}
                </div>
                <div style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>
                  {project.name}
                </div>
                <p style={{ fontSize: 14, color: "rgba(232,232,240,0.6)", lineHeight: 1.7, marginBottom: 28 }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 28, flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {project.techStack.slice(0, 4).map((t) => (
                      <span key={t} style={{
                        fontFamily: mono, fontSize: 10, fontWeight: 500,
                        padding: "4px 10px", border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(232,232,240,0.5)", letterSpacing: "0.05em", borderRadius: 1,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", letterSpacing: "0.1em", whiteSpace: "nowrap", opacity: isHov ? 1 : 0.4, transition: "opacity 0.2s" }}>
                    Scopri →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="reveal" style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <Link
            href="/lavori"
            style={{
              fontFamily: mono, fontSize: 13, fontWeight: 500,
              border: "1px solid rgba(232,232,240,0.2)", color: "rgba(232,232,240,0.7)",
              padding: "14px 32px", borderRadius: 2, textDecoration: "none",
              letterSpacing: "0.05em", transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "var(--mv-accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(232,232,240,0.2)"; e.currentTarget.style.color = "rgba(232,232,240,0.7)"; }}
          >
            Vedi tutti i lavori →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-card-item { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
