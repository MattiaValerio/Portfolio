"use client";

import { useEffect, useRef, useState } from "react";

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#e8e8f0", fontFamily: "inherit", fontSize: 15,
    padding: "14px 16px", outline: "none", borderRadius: 1,
    transition: "border-color 0.2s", resize: "vertical" as const, width: "100%",
    boxSizing: "border-box",
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
      <div className="mv-container">
        <p className="section-label">07 — Contatti</p>

        <div className="contact-grid reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>
              Parliamo di <em style={{ fontStyle: "normal", color: "var(--mv-accent)" }}>qualcosa di bello</em>.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(232,232,240,0.6)", lineHeight: 1.8, marginBottom: 40 }}>
              Hai un progetto in mente, vuoi collaborare o semplicemente fare una chiacchierata tecnica? Scrivimi — rispondo sempre.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "EMAIL", label: "mattiavalerio.dev@gmail.com", href: "mailto:mattiavalerio.dev@gmail.com" },
                { icon: "LINKEDIN", label: "/in/mattiavalerio", href: "https://www.linkedin.com/in/mattiavalerio/" },
                { icon: "GITHUB", label: "@mattiavalerio", href: "https://github.com/mattiavalerio" },
              ].map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    fontSize: 14, color: "rgba(232,232,240,0.6)", textDecoration: "none",
                    padding: "14px 18px", border: "1px solid rgba(255,255,255,0.07)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mv-accent)"; e.currentTarget.style.color = "#e8e8f0"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(232,232,240,0.6)"; }}
                >
                  <span style={{ fontFamily: mono, fontSize: 10, color: "var(--mv-accent)", letterSpacing: "0.1em", minWidth: 60 }}>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "sent" ? (
              <div style={{ padding: "40px 36px", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 16, color: "var(--mv-accent)" }}>✓</div>
                <p style={{ fontFamily: mono, fontSize: 14, color: "rgba(232,232,240,0.6)" }}>Messaggio inviato. Ti rispondo presto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { key: "name", label: "Nome", type: "text", placeholder: "Il tuo nome" },
                  { key: "email", label: "Email", type: "email", placeholder: "tua@email.it" },
                ].map((field) => (
                  <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{field.label}</label>
                    <input
                      type={field.type}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "var(--mv-accent)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    />
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Messaggio</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Di cosa hai bisogno?"
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--mv-accent)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  />
                </div>
                {status === "error" && (
                  <p style={{ fontFamily: mono, fontSize: 12, color: "#f87171", letterSpacing: "0.05em" }}>
                    Invio fallito. Riprova o scrivimi direttamente via email.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    fontFamily: mono, fontSize: 13, fontWeight: 600,
                    background: "var(--mv-accent)", color: "var(--mv-bg)",
                    border: "none", padding: "16px 32px", cursor: status === "loading" ? "wait" : "pointer",
                    letterSpacing: "0.05em", borderRadius: 2,
                    transition: "opacity 0.2s", textTransform: "uppercase",
                    opacity: status === "loading" ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => { if (status !== "loading") e.currentTarget.style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { if (status !== "loading") e.currentTarget.style.opacity = "1"; }}
                >
                  {status === "loading" ? "Invio..." : "Invia messaggio →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
