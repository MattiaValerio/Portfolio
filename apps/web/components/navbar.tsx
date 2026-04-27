"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "chi sono", hash: "about" },
  { label: "stack", hash: "stack" },
  { label: "progetti", hash: "projects" },
  { label: "servizi", hash: "services" },
  { label: "esperienza", hash: "experience" },
  { label: "contatti", hash: "contact" },
];

const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const getHref = (hash: string) => pathname === "/" ? `#${hash}` : `/#${hash}`;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 48px", height: 64, display: "flex", alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(12px)",
        background: "rgba(10,10,16,0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        animation: "fadeInUp 0.5s cubic-bezier(0.2,0,0,1) 0.05s both",
      }}>
        <Link href="/" style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, color: "var(--mv-accent)", letterSpacing: "0.05em", textDecoration: "none", flexShrink: 0 }}>
          MV.dev
        </Link>

        {/* Desktop nav */}
        <ul className="nav-desktop-links" style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((l) => (
            <li key={l.hash}>
              <Link
                href={getHref(l.hash)}
                style={{ fontFamily: mono, fontSize: 12, color: "rgba(232,232,240,0.5)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mv-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,232,240,0.5)")}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-desktop-cta">
          <Link
            href={getHref("contact")}
            style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, color: "var(--mv-bg)", background: "var(--mv-accent)", padding: "8px 20px", borderRadius: 2, textDecoration: "none", letterSpacing: "0.05em", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Scrivimi →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5, flexShrink: 0 }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
        >
          <span style={{
            display: "block", width: 24, height: 2, background: "#e8e8f0", borderRadius: 1, transition: "transform 0.3s, opacity 0.3s",
            transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            display: "block", width: 24, height: 2, background: "#e8e8f0", borderRadius: 1, transition: "opacity 0.3s",
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: 24, height: 2, background: "#e8e8f0", borderRadius: 1, transition: "transform 0.3s, opacity 0.3s",
            transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className="nav-mobile-drawer"
        style={{
          position: "fixed", top: 64, left: 0, right: 0, bottom: 0,
          background: "rgba(10,10,16,0.97)", backdropFilter: "blur(16px)",
          zIndex: 99, padding: "24px 32px",
          display: "flex", flexDirection: "column",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          visibility: mobileOpen ? "visible" : "hidden",
        }}
      >
        {navLinks.map((l, i) => (
          <Link
            key={l.hash}
            href={getHref(l.hash)}
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: mono, fontSize: 16, color: "rgba(232,232,240,0.6)",
              textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "18px 0", letterSpacing: "0.08em", textTransform: "uppercase",
              borderBottom: "1px solid rgba(255,255,255,0.05)", transition: "color 0.2s",
              transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--mv-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,232,240,0.6)")}
          >
            <span>{l.label}</span>
            <span style={{ fontFamily: mono, fontSize: 11, color: "var(--mv-accent)", opacity: 0.5 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </Link>
        ))}

        <div style={{ marginTop: "auto", paddingBottom: 32 }}>
          <Link
            href={getHref("contact")}
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block", textAlign: "center",
              fontFamily: mono, fontSize: 13, fontWeight: 600,
              color: "var(--mv-bg)", background: "var(--mv-accent)",
              padding: "16px 24px", borderRadius: 2, textDecoration: "none",
              letterSpacing: "0.05em", textTransform: "uppercase",
            }}
          >
            Scrivimi →
          </Link>
        </div>
      </div>

      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-desktop-cta { display: block; }
        .nav-hamburger { display: none; }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
}
