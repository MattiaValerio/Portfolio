const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

export function Footer() {
  return (
    <footer
      style={{
        padding: "32px 48px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        fontFamily: mono,
        fontSize: 11,
        color: "rgba(232,232,240,0.25)",
        letterSpacing: "0.08em",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <span>© {new Date().getFullYear()} Mattia Valerio</span>
        <span>Portogruaro · Veneto · IT</span>
        <span>MV.dev</span>
      </div>
      {/* NAP — Name Address Phone. Sostituire con dati reali prima del deploy */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          paddingTop: 14,
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "center",
          color: "rgba(232,232,240,0.18)",
          fontSize: 10,
          letterSpacing: "0.06em",
        }}
      >
        <address style={{ fontStyle: "normal" }}>
          Mattia Valerio · Portogruaro (VE) 30026 · Veneto, Italia
        </address>
        <a
          href="mailto:mattiavalerio.dev@gmail.com"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          mattiavalerio.dev@gmail.com
        </a>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer { padding: 24px 20px !important; }
        }
      `}</style>
    </footer>
  );
}
