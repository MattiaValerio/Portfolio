export type ProjectLink = {
  demo?: string;
  github?: string;
};

export type ProjectPalette = {
  from: string;
  to: string;
  glow: string;
};

export type ProjectImpact = {
  label: string;
  value: string;
};

export type ProjectItem = {
  slug: string;
  name: string;
  category: string;
  year: string;
  headline: string;
  description: string;
  highlights: string[];
  impact: ProjectImpact;
  techStack: string[];
  palette: ProjectPalette;
  links: ProjectLink;
};

export const projectsData: ProjectItem[] = [
  {
    slug: "hyper-broker",
    name: "Hyper Broker",
    category: "Fintech Platform",
    year: "2026",
    headline: "Dashboard operative per conti trading e flussi realtime.",
    description: "Piattaforma di gestione dei conti trading in tempo reale, pensata per monitorare posizioni, performance e attività operative con rapidità.",
    highlights: [
      "Vista centralizzata su conti, movimenti e operatività trading.",
      "Monitoraggio realtime dei flussi e supporto alle decisioni in pochi secondi.",
      "Architettura frontend scalabile, pronta per nuove integrazioni e report avanzati.",
    ],
    impact: {
      label: "Focus",
      value: "Controllo operativo",
    },
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    palette: {
      from: "#1d4ed8",
      to: "#0f172a",
      glow: "rgba(59, 130, 246, 0.24)",
    },
    links: {
      demo: "https://hyper-broker.com/",
    },
  },
  {
    slug: "audix",
    name: "Audix",
    category: "AI Productivity",
    year: "2025",
    headline: "Audio, testo e traduzione in un workflow unico assistito da AI.",
    description:
      "Piattaforma di trascrizione e traduzione automatica che converte audio in testo, sottotitoli e versioni multilingua per contenuti digitali.",
    highlights: [
      "Trascrizione immediata di note vocali e file audio con qualità elevata.",
      "Generazione automatica di sottotitoli, traduzioni e versioni pronte per pubblicazione.",
      "Interfaccia orientata a ridurre i tempi di produzione di contenuti multilingua.",
    ],
    impact: {
      label: "Focus",
      value: "Efficienza contenuti",
    },
    techStack: ["AI", "Next.js", "TypeScript", "API Integration"],
    palette: {
      from: "#0f766e",
      to: "#111827",
      glow: "rgba(20, 184, 166, 0.22)",
    },
    links: {
      demo: "https://www.audix.dev/",
    },
  },
  {
    slug: "timbry",
    name: "Timbry",
    category: "Fidelity App",
    year: "2026",
    headline: "Tessera fedeltà digitale via QR per negozi locali e attività commerciali.",
    description:
      "PWA che sostituisce le tessere cartacee: un cliente mostra il QR, il negozio timbra digitalmente e il premio viene gestito automaticamente.",
    highlights: [
      "Fidelizzazione dei clienti senza costi di stampa e senza hardware aggiuntivo.",
      "Dashboard semplice per gestire timbri, premi, statistiche e campagne di retention.",
      "Onboarding rapido per bar, negozi retail, beauty e servizi locali con kit di comunicazione fisica incluso.",
    ],
    impact: {
      label: "Focus",
      value: "Fedeltà digitale",
    },
    techStack: ["Next.js", "TypeScript", "PWA", "API Integration"],
    palette: {
      from: "#f97316",
      to: "#0f172a",
      glow: "rgba(249, 115, 22, 0.22)",
    },
    links: {
      demo: "https://timbry.app/",
    },
  },
  {
    slug: "myfinance",
    name: "MyFinance",
    category: "Personal Finance",
    year: "2025",
    headline: "Monitoraggio spese e finanze personali con UX chiara e diretta.",
    description: "Applicazione web per organizzare budget, categorie di spesa e visualizzare subito la salute finanziaria personale.",
    highlights: [
      "Panoramica immediata di entrate, uscite e tendenze di spesa.",
      "Strumenti pensati per assumere decisioni finanziarie più consapevoli.",
      "Struttura modulare che facilita l'aggiunta di report e automatismi futuri.",
    ],
    impact: {
      label: "Focus",
      value: "Controllo finanziario",
    },
    techStack: ["Next.js", "TypeScript", "React", "TailwindCSS"],
    palette: {
      from: "#7c3aed",
      to: "#172554",
      glow: "rgba(124, 58, 237, 0.2)",
    },
    links: {
      demo: "https://my-finance-one.vercel.app/",
    },
  },
];
