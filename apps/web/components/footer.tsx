const mono = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

export function Footer() {
  return (
    <footer style={{
      padding: "32px 48px", borderTop: "1px solid rgba(255,255,255,0.05)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      fontFamily: mono, fontSize: 11, color: "rgba(232,232,240,0.25)",
      letterSpacing: "0.08em", position: "relative", zIndex: 1, flexWrap: "wrap", gap: 12,
    }}>
      <span>© {new Date().getFullYear()} Mattia Valerio</span>
      <span>Portogruaro · Veneto · IT</span>
      <span>MV.dev</span>
    </footer>
  );
}
