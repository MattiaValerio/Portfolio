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
    name: "Hyper Broker",
    category: "Fintech Platform",
    year: "2026",
    headline: "Dashboard operative per conti trading e flussi realtime.",
    description: "Piattaforma di gestione dei conti trading in tempo reale.",
    highlights: [
      "Vista centralizzata su conti, movimenti e operativita.",
      "Interfaccia pensata per consultazione rapida e decisioni veloci.",
      "Architettura frontend moderna pronta a evolvere con nuove integrazioni.",
    ],
    impact: {
      label: "Focus",
      value: "Controllo realtime",
    },
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    palette: {
      from: "#1d4ed8",
      to: "#0f172a",
      glow: "rgba(59, 130, 246, 0.24)",
    },
    links: {
      demo: "https://hyper-broker.vercel.app/",
    },
  },
  {
    name: "Audix",
    category: "AI Productivity",
    year: "2025",
    headline: "Audio, testo e traduzione in un workflow unico assistito da AI.",
    description:
      "Piattaforma di trascrizione istantanea che usa AI per trasformare note audio in testo, sottotitoli e traduzioni in oltre 100 lingue.",
    highlights: [
      "Trascrizione rapida di note vocali e file audio.",
      "Output in testo, sottotitoli e contenuti tradotti.",
      "Esperienza orientata a ridurre tempi operativi su contenuti multilingua.",
    ],
    impact: {
      label: "Focus",
      value: "Automazione contenuti",
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
    name: "MyFinance",
    category: "Personal Finance",
    year: "2025",
    headline: "Monitoraggio spese e finanze personali con UX chiara e diretta.",
    description: "Applicazione web per la gestione delle finanze personali.",
    highlights: [
      "Organizzazione chiara di entrate, uscite e abitudini di spesa.",
      "Approccio prodotto centrato su semplicita e lettura immediata dei dati.",
      "Base solida per estensioni future e funzionalita di reporting.",
    ],
    impact: {
      label: "Focus",
      value: "Chiarezza finanziaria",
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