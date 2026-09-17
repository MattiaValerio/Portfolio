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
  experience: {
    title: string;
    roles: readonly {
      organization: string;
      role: string;
      period: string;
      startDate: string;
      endDate?: string;
      accomplishments: readonly string[];
    }[];
  };
  testimonials: {
    title: string;
    items: readonly {
      quote: string;
      name: string;
      role: string;
      initials: string;
    }[];
  };
  credentials: {
    title: string;
    education: readonly {
      institution: string;
      qualification: string;
      period: string;
      startDate: string;
      endDate: string;
      score: string;
      topics: readonly { label: string; detail: string }[];
    }[];
    languages: readonly { language: string; proficiency: string }[];
  };
  statement: { label: string; text: string };
  contact: {
    sectionTitle: string;
    linksLabel: string;
    formTitle: string;
    introduction: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    loading: string;
    success: string;
    missingFields: string;
    deliveryFailure: string;
    serverError: string;
    directEmailPrefix: string;
  };
  footer: {
    location: string;
    backToTop: string;
  };
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
    experience: {
      title: "Esperienza",
      roles: [
        {
          organization: "Proconsulting · Pordenone",
          role: "Full Stack Developer",
          period: "2022 — oggi",
          startDate: "2022",
          accomplishments: [
            "Progettazione e sviluppo dei servizi backend del gestionale ERP: API REST tipizzate in TypeScript su Fastify, con struttura Route → Service → Repository e gestione esplicita degli errori.",
            "Schema PostgreSQL, migrazioni e query tipizzate con Kysely, più sincronizzazione con SQL Server.",
            "Architettura a eventi con code Redis/BullMQ e worker dedicati.",
            "Pipeline AI in produzione per oltre 30 clienti, con validazione e revisione umana.",
            "Servizi Docker Compose, deploy Coolify, storage MinIO e monorepo Turborepo.",
            "Integrazione con macchine e sensori per Industria 4.0 e 5.0.",
          ],
        },
        {
          organization: "Progetti propri e clienti diretti",
          role: "Sviluppatore freelance",
          period: "2022 — oggi",
          startDate: "2022",
          accomplishments: [
            "Progetti portati dalla prima chiamata al deploy, con manutenzione successiva.",
            "Costruzione di un SaaS multi-tenant e di un portale sincronizzato con un gestionale centrale.",
            "Creazione di strumenti e agenti AI riutilizzabili.",
          ],
        },
        {
          organization: "Primi progetti",
          role: "Junior Web Developer",
          period: "2020 — 2022",
          startDate: "2020",
          endDate: "2022",
          accomplishments: [
            "Fondamentali full stack e primi contributi a progetti reali.",
            "Siti e piccoli applicativi per attività commerciali locali.",
            "Requisiti tradotti da termini non tecnici in scelte di sviluppo.",
          ],
        },
      ],
    },
    testimonials: {
      title: "Referenze",
      items: [
        {
          quote:
            "Mattia ha una capacità rara: capisce subito le esigenze di produzione e le traduce in soluzioni software che funzionano davvero sul campo. Proattivo, preciso e mai approssimativo.",
          name: "Marco B.",
          role: "Project Manager · Software House PN",
          initials: "MB",
        },
        {
          quote:
            "Ha gestito da solo intere feature del nostro ERP con una maturità tecnica sopra la media. Quando dice «ci penso io», ci si può fidare.",
          name: "Sara T.",
          role: "CTO · Settore manifatturiero",
          initials: "ST",
        },
        {
          quote:
            "Non è solo un developer: è qualcuno che si fa carico del problema. Lavora con un’attenzione ai dettagli che raramente trovi in profili della sua esperienza.",
          name: "Luca M.",
          role: "Senior Developer · Team interno",
          initials: "LM",
        },
      ],
    },
    credentials: {
      title: "Formazione e lingue",
      education: [
        {
          institution: "Fondazione ITS Alto Adriatico",
          qualification: "Cloud Developer",
          period: "ott 2022 – lug 2024",
          startDate: "2022-10",
          endDate: "2024-07",
          score: "Votazione 95/100",
          topics: [
            { label: "Coding", detail: "C#, .NET, Python" },
            { label: "DB", detail: "Postgres/MSSQL, DB NoSQL" },
            {
              label: "Sviluppo web",
              detail: "HTML5, CSS, JavaScript, Node.js",
            },
            { label: "Deployment", detail: "Docker, Kubernetes" },
            {
              label: "Cloud",
              detail: "AWS, MS Azure, Hadoop/MapReduce, Elasticsearch",
            },
            {
              label: "Enterprise",
              detail:
                "API, microservizi, UML, TDD, BDD, security by design, AI",
            },
          ],
        },
        {
          institution: "ITIS Leonardo Da Vinci",
          qualification: "Perito in informatica e telecomunicazioni",
          period: "set 2016 – giu 2022",
          startDate: "2016-09",
          endDate: "2022-06",
          score: "Votazione 80",
          topics: [
            {
              label: "Argomenti",
              detail:
                "Informatica e telecomunicazioni: programmazione a oggetti, reti e fondamenti di sistemi.",
            },
          ],
        },
      ],
      languages: [
        { language: "Italiano", proficiency: "madrelingua" },
        { language: "Inglese", proficiency: "tecnico, scritto e parlato" },
      ],
    },
    statement: {
      label: "Come la vedo",
      text: "Se un lavoro si fa a mano due volte, può farlo il software.",
    },
    contact: {
      sectionTitle: "Contatti",
      linksLabel: "Contatti diretti",
      formTitle: "Scrivimi due righe",
      introduction:
        "Descrivi il processo o il progetto che hai in mente: rispondo entro un giorno lavorativo.",
      nameLabel: "Nome",
      namePlaceholder: "Mario Rossi",
      emailLabel: "Email",
      emailPlaceholder: "nome@azienda.it",
      messageLabel: "Messaggio",
      messagePlaceholder: "Cosa ti serve automatizzare?",
      submit: "Invia messaggio",
      loading: "Invio in corso…",
      success: "Messaggio inviato. Ti risponderò presto.",
      missingFields: "Compila nome, email e messaggio.",
      deliveryFailure:
        "Invio non riuscito. Riprova o scrivimi direttamente via email.",
      serverError:
        "Si è verificato un errore. Riprova o scrivimi direttamente via email.",
      directEmailPrefix: "Oppure scrivimi direttamente a",
    },
    footer: {
      location: "Portogruaro · Italia",
      backToTop: "Torna su",
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
    experience: {
      title: "Experience",
      roles: [
        {
          organization: "Proconsulting · Pordenone",
          role: "Full Stack Developer",
          period: "2022 — present",
          startDate: "2022",
          accomplishments: [
            "Designed and built the ERP’s backend services: typed REST APIs in TypeScript on Fastify, with a Route → Service → Repository structure and explicit error handling.",
            "PostgreSQL schema, migrations and typed Kysely queries, plus SQL Server synchronization.",
            "Event-driven architecture with Redis/BullMQ queues and dedicated workers.",
            "Production AI pipeline for over 30 clients, with validation and human review.",
            "Docker Compose services, Coolify deployments, MinIO storage and a Turborepo monorepo.",
            "Factory machine and sensor integrations for Industry 4.0 and 5.0.",
          ],
        },
        {
          organization: "Own products and direct clients",
          role: "Freelance developer",
          period: "2022 — present",
          startDate: "2022",
          accomplishments: [
            "Projects run from the first call through deployment, followed by ongoing maintenance.",
            "Built a multi-tenant SaaS and a portal synchronized with a central ERP.",
            "Created reusable tools and AI agents.",
          ],
        },
        {
          organization: "First projects",
          role: "Junior Web Developer",
          period: "2020 — 2022",
          startDate: "2020",
          endDate: "2022",
          accomplishments: [
            "Full-stack fundamentals and first contributions to real projects.",
            "Websites and small applications for local businesses.",
            "Requirements translated from non-technical terms into development choices.",
          ],
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      items: [
        {
          quote:
            "Mattia has a rare ability: he immediately understands production needs and turns them into software solutions that truly work in the field. Proactive, precise and never careless.",
          name: "Marco B.",
          role: "Project Manager · Software House, Pordenone",
          initials: "MB",
        },
        {
          quote:
            "He independently handled entire features of our ERP with above-average technical maturity. When he says, ‘I’ll take care of it,’ you can trust him.",
          name: "Sara T.",
          role: "CTO · Manufacturing sector",
          initials: "ST",
        },
        {
          quote:
            "He is not just a developer: he is someone who takes ownership of the problem. He works with an attention to detail rarely found in people with his level of experience.",
          name: "Luca M.",
          role: "Senior Developer · Internal team",
          initials: "LM",
        },
      ],
    },
    credentials: {
      title: "Education and languages",
      education: [
        {
          institution: "Fondazione ITS Alto Adriatico",
          qualification: "Cloud Developer",
          period: "Oct 2022 – Jul 2024",
          startDate: "2022-10",
          endDate: "2024-07",
          score: "Score 95/100",
          topics: [
            { label: "Coding", detail: "C#, .NET, Python" },
            { label: "Databases", detail: "Postgres/MSSQL, NoSQL databases" },
            {
              label: "Web development",
              detail: "HTML5, CSS, JavaScript, Node.js",
            },
            { label: "Deployment", detail: "Docker, Kubernetes" },
            {
              label: "Cloud",
              detail: "AWS, MS Azure, Hadoop/MapReduce, Elasticsearch",
            },
            {
              label: "Enterprise",
              detail:
                "APIs, microservices, UML, TDD, BDD, security by design, AI",
            },
          ],
        },
        {
          institution: "ITIS Leonardo Da Vinci",
          qualification: "IT and telecommunications diploma",
          period: "Sep 2016 – Jun 2022",
          startDate: "2016-09",
          endDate: "2022-06",
          score: "Score 80/100",
          topics: [
            {
              label: "Topics",
              detail:
                "IT and telecommunications: object-oriented programming, networks and systems fundamentals.",
            },
          ],
        },
      ],
      languages: [
        { language: "Italian", proficiency: "native" },
        { language: "English", proficiency: "technical, written and spoken" },
      ],
    },
    statement: {
      label: "How I see it",
      text: "If a job gets done by hand twice, software can do it.",
    },
    contact: {
      sectionTitle: "Contact",
      linksLabel: "Direct contact details",
      formTitle: "Drop me a line",
      introduction:
        "Describe the process or project you have in mind: I reply within one working day.",
      nameLabel: "Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Email",
      emailPlaceholder: "name@company.com",
      messageLabel: "Message",
      messagePlaceholder: "What needs automating?",
      submit: "Send message",
      loading: "Sending…",
      success: "Message sent. I’ll get back to you soon.",
      missingFields: "Complete your name, email and message.",
      deliveryFailure: "Delivery failed. Try again or email me directly.",
      serverError: "Something went wrong. Try again or email me directly.",
      directEmailPrefix: "Or email me directly at",
    },
    footer: {
      location: "Portogruaro · Italy",
      backToTop: "Back to top",
    },
    metadata: {
      title: "TypeScript Backend Developer",
      description:
        "Mattia Valerio designs production-ready backend services, integrations and AI agents.",
    },
  },
} satisfies Record<Locale, PortfolioDictionary>;
