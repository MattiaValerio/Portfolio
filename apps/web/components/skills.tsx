"use client";

import { useEffect, useRef } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "advanced" },
      { name: "TypeScript", level: "expert" },
      { name: "TailwindCSS", level: "advanced" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: "expert" },
      { name: "Fastify", level: "advanced" },
      { name: "REST / API", level: "expert" },
      { name: "C# / .NET", level: "intermediate" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "SQL Server", level: "intermediate" },
      { name: "Redis", level: "intermediate" },
      { name: "Prisma ORM", level: "advanced" },
    ],
  },
  {
    title: "Tooling",
    items: [
      { name: "Git / GitHub", level: "expert" },
      { name: "Docker", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
      { name: "Azure / AWS", level: "intermediate" },
    ],
  },
];

export function Skills() {
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
    <section id="stack" ref={ref} style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
      <div className="mv-container">
        <p className="section-label">02 — Tecnologie</p>
        <h2 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 64, maxWidth: 700, lineHeight: 1.2 }}>
          Le mie armi di <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>scelta quotidiana</em>.
        </h2>

        <div className="reveal stack-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "rgba(255,255,255,0.07)" }}>
          {categories.map((cat) => (
            <div key={cat.title} style={{ background: "var(--mv-bg)", padding: "36px 28px" }}>
              <div style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
                {cat.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.items.map((item) => (
                  <div key={item.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--mv-accent)", opacity: 0.6, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, fontWeight: 500, color: "rgba(232,232,240,0.85)" }}>{item.name}</span>
                    <span style={{ marginLeft: "auto", fontFamily: mono, fontSize: 10, color: "rgba(232,232,240,0.3)", letterSpacing: "0.05em" }}>{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
