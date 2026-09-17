export const locales = ["it", "en"] as const;

export type Locale = (typeof locales)[number];

export type TechnologyId =
  | "typescript"
  | "nodejs"
  | "nestjs"
  | "postgresql"
  | "redis"
  | "docker"
  | "git"
  | "github"
  | "claude"
  | "openai"
  | "turborepo"
  | "zod";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type PortfolioDictionary = {
  identity: {
    firstName: string;
    lastName: string;
    homeLabel: string;
  };
  navigation: {
    label: string;
    items: readonly { href: `#${string}`; label: string }[];
    menuOpen: string;
    menuClose: string;
  };
  preferences: {
    language: string;
    switchLanguage: string;
    theme: string;
    useLight: string;
    useDark: string;
  };
  hero: {
    role: string;
    availability: string;
    experience: string;
    technologies: string;
    technologyLabels: readonly { id: TechnologyId; label: string }[];
  };
  about: {
    title: string;
    paragraphs: readonly [string, string];
  };
  skills: {
    title: string;
    groups: readonly {
      title: string;
      description: string;
    }[];
  };
  projects: ProjectsDictionary;
  metadata: {
    title: string;
    description: string;
  };
};

export type ProjectContent = {
  title: string;
  context: string;
  status: string;
  description: string;
  technologies: readonly string[];
};

export type ProjectsDictionary = {
  heading: string;
  technologiesLabel: string;
  featured: ProjectContent & {
    currentWorkLabel: string;
    currentWork: string;
  };
  items: readonly [
    ProjectContent,
    ProjectContent,
    ProjectContent,
    ProjectContent,
  ];
};

export const dictionaries = {
  it: {
    identity: {
      firstName: "Mattia",
      lastName: "Valerio",
      homeLabel: "Mattia Valerio — pagina iniziale",
    },
    navigation: {
      label: "Navigazione principale",
      items: [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Competenze" },
        { href: "#projects", label: "Progetti" },
        { href: "#experience", label: "Esperienza" },
        { href: "#contact", label: "Contatti" },
      ],
      menuOpen: "Apri il menu",
      menuClose: "Chiudi il menu",
    },
    preferences: {
      language: "Lingua",
      switchLanguage: "Passa all’inglese",
      theme: "Tema",
      useLight: "Usa il tema chiaro",
      useDark: "Usa il tema scuro",
    },
    hero: {
      role: "Backend developer — TypeScript",
      availability: "Aperto a nuove opportunità",
      experience: "Dal 2020 in produzione",
      technologies: "Tecnologie principali",
      technologyLabels: [
        { id: "typescript", label: "TypeScript" },
        { id: "nodejs", label: "Node.js" },
        { id: "nestjs", label: "NestJS" },
        { id: "postgresql", label: "Postgres" },
        { id: "redis", label: "Redis" },
        { id: "docker", label: "Docker" },
        { id: "git", label: "Git" },
        { id: "github", label: "GitHub" },
        { id: "claude", label: "Claude" },
        { id: "openai", label: "OpenAI" },
        { id: "turborepo", label: "Turborepo" },
        { id: "zod", label: "Zod" },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "Sono uno sviluppatore backend TypeScript. Progetto e realizzo servizi, integrazioni e agenti AI che girano in produzione ogni giorno, non in demo.",
        "In questo periodo mi concentro sull’automazione dei processi aziendali: sistemi che leggono documenti, tengono allineati i gestionali e lasciano alle persone solo le decisioni. Seguo i progetti dall’architettura al deploy e resto a manutenerli.",
      ],
    },
    skills: {
      title: "Competenze",
      groups: [
        {
          title: "Backend",
          description:
            "TypeScript, Node.js, Fastify, NestJS, API REST, DDD, Result/Option",
        },
        {
          title: "AI & Agenti",
          description: "Mastra, OpenAI, Anthropic, LLM vision, OCR, GraphRAG",
        },
        {
          title: "Dati & code",
          description: "PostgreSQL, Kysely, Redis, BullMQ, SQL Server, MinIO",
        },
        {
          title: "DevOps",
          description: "Docker, Docker Compose, Coolify, VPS, Turborepo, PNPM",
        },
        {
          title: "Testing",
          description: "Vitest, validazione con Zod, API tipizzate end-to-end",
        },
        {
          title: "Frontend",
          description: "Next.js, React, TypeScript",
        },
      ],
    },
    projects: {
      heading: "Progetti",
      technologiesLabel: "Tecnologie",
      featured: {
        title: "Automazione documentale per ERP",
        context: "Pipeline AI · cliente anonimo",
        status: "In produzione",
        description:
          "Oltre 30 clienti inviano ordini, DDT e fatture ognuno con il proprio layout. Il sistema li legge, li controlla e li registra nel gestionale; i casi dubbi passano a una coda che una persona approva in pochi secondi.",
        currentWorkLabel: "Sto lavorando a:",
        currentWork:
          "un chatbot che risponde in linguaggio naturale sui dati del gestionale.",
        technologies: [
          "Fastify",
          "BullMQ",
          "Redis",
          "PostgreSQL",
          "SQL Server",
          "MinIO",
          "Mastra",
        ],
      },
      items: [
        {
          title: "SaaS immobiliare",
          context: "Piattaforma multi-tenant",
          status: "Venduta",
          description:
            "Le agenzie raccolgono richieste e gestiscono immobili in un unico posto; un agente AI stima il valore di una casa a partire da dati di mercato e immobili simili.",
          technologies: [
            "Fastify",
            "Kysely",
            "PostgreSQL",
            "Mastra",
            "Next.js",
          ],
        },
        {
          title: "Portale rivenditori",
          context: "Contratti e firma digitale",
          status: "In produzione",
          description:
            "I contratti di noleggio restano allineati al gestionale centrale, si firmano dal telefono e i PDF si generano da soli.",
          technologies: ["NestJS", "PostgreSQL", "Docker Compose"],
        },
        {
          title: "Developer OS",
          context: "Progetto personale",
          status: "Uso interno",
          description:
            "Un assistente AI che ricorda il contesto dei miei progetti e lavora da Slack su più repository.",
          technologies: ["Mastra", "GraphRAG", "Redis"],
        },
        {
          title: "Business OS",
          context: "Progetto personale",
          status: "Uso interno",
          description:
            "Preventivi, analisi dei progetti e conti tenuti in ordine da un gruppo di agenti che parlano tra loro.",
          technologies: ["Mastra", "Turborepo", "PostgreSQL"],
        },
      ],
    },
    metadata: {
      title: "Backend Developer TypeScript",
      description:
        "Mattia Valerio progetta servizi backend, integrazioni e agenti AI pronti per la produzione.",
    },
  },
  en: {
    identity: {
      firstName: "Mattia",
      lastName: "Valerio",
      homeLabel: "Mattia Valerio — home",
    },
    navigation: {
      label: "Main navigation",
      items: [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
      ],
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    preferences: {
      language: "Language",
      switchLanguage: "Switch to Italian",
      theme: "Theme",
      useLight: "Use light theme",
      useDark: "Use dark theme",
    },
    hero: {
      role: "Backend developer — TypeScript",
      availability: "Open to new opportunities",
      experience: "Shipping since 2020",
      technologies: "Core technologies",
      technologyLabels: [
        { id: "typescript", label: "TypeScript" },
        { id: "nodejs", label: "Node.js" },
        { id: "nestjs", label: "NestJS" },
        { id: "postgresql", label: "Postgres" },
        { id: "redis", label: "Redis" },
        { id: "docker", label: "Docker" },
        { id: "git", label: "Git" },
        { id: "github", label: "GitHub" },
        { id: "claude", label: "Claude" },
        { id: "openai", label: "OpenAI" },
        { id: "turborepo", label: "Turborepo" },
        { id: "zod", label: "Zod" },
      ],
    },
    about: {
      title: "About",
      paragraphs: [
        "I’m a TypeScript backend developer. I design and build services, integrations and AI agents that run in production every day, not in demos.",
        "Right now I focus on automating business processes: systems that read documents, keep business software in sync and leave only the decisions to people. I follow projects from architecture to deploy, and stay on to maintain them.",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          title: "Backend",
          description:
            "TypeScript, Node.js, Fastify, NestJS, REST APIs, DDD, Result/Option",
        },
        {
          title: "AI & Agents",
          description: "Mastra, OpenAI, Anthropic, LLM vision, OCR, GraphRAG",
        },
        {
          title: "Data & Queues",
          description: "PostgreSQL, Kysely, Redis, BullMQ, SQL Server, MinIO",
        },
        {
          title: "DevOps",
          description: "Docker, Docker Compose, Coolify, VPS, Turborepo, PNPM",
        },
        {
          title: "Testing",
          description: "Vitest, Zod validation, end-to-end typed APIs",
        },
        {
          title: "Frontend",
          description: "Next.js, React, TypeScript",
        },
      ],
    },
    projects: {
      heading: "Projects",
      technologiesLabel: "Technologies",
      featured: {
        title: "Document automation for an ERP",
        context: "AI pipeline · client anonymised",
        status: "In production",
        description:
          "Over 30 clients send orders, delivery notes and invoices, each in their own layout. The system reads, checks and files them in the ERP; uncertain cases go to a queue a person approves in seconds.",
        currentWorkLabel: "Working on:",
        currentWork:
          "a chatbot that answers questions on ERP data in plain language.",
        technologies: [
          "Fastify",
          "BullMQ",
          "Redis",
          "PostgreSQL",
          "SQL Server",
          "MinIO",
          "Mastra",
        ],
      },
      items: [
        {
          title: "Real-estate SaaS",
          context: "Multi-tenant platform",
          status: "Sold",
          description:
            "Agencies collect enquiries and manage properties in one place; an AI agent estimates a home's value from market data and comparable properties.",
          technologies: [
            "Fastify",
            "Kysely",
            "PostgreSQL",
            "Mastra",
            "Next.js",
          ],
        },
        {
          title: "Dealer portal",
          context: "Contracts and e-signature",
          status: "In production",
          description:
            "Rental contracts stay aligned with the central ERP, are signed from a phone and the PDFs generate themselves.",
          technologies: ["NestJS", "PostgreSQL", "Docker Compose"],
        },
        {
          title: "Developer OS",
          context: "Personal project",
          status: "Internal use",
          description:
            "An AI assistant that remembers project context and works from Slack across several repositories.",
          technologies: ["Mastra", "GraphRAG", "Redis"],
        },
        {
          title: "Business OS",
          context: "Personal project",
          status: "Internal use",
          description:
            "Quotes, project analysis and finances kept in order by a set of agents talking to each other.",
          technologies: ["Mastra", "Turborepo", "PostgreSQL"],
        },
      ],
    },
    metadata: {
      title: "TypeScript Backend Developer",
      description:
        "Mattia Valerio designs production-ready backend services, integrations and AI agents.",
    },
  },
} satisfies Record<Locale, PortfolioDictionary>;
