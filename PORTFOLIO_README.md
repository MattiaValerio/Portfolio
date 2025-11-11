# Mattia Valerio - Portfolio

Un sito portfolio moderno e minimale per uno sviluppatore full stack orientato al backend e al cloud.

## 🚀 Stack Tecnologico

- **Next.js 15** con **TypeScript**
- **TailwindCSS v4** per lo styling
- **shadcn/ui** per i componenti UI
- **Framer Motion** per le animazioni
- **next-themes** per il supporto dark/light mode
- **Turborepo** per la gestione del monorepo

## 🎨 Caratteristiche

- ✨ Design minimal e moderno
- 🌓 Dark/light mode con persistenza
- 📱 Completamente responsive
- ⚡ Animazioni fluide con Framer Motion
- 🎯 SEO ottimizzato
- 🔧 Componenti riutilizzabili con shadcn/ui
- 🎨 Palette personalizzata: blu notte, grigio scuro, accenti verde acqua

## 📦 Installazione

```bash
# Installa le dipendenze
pnpm install

# Avvia il server di sviluppo
pnpm dev

# Build per produzione
pnpm build

# Avvia il server di produzione
pnpm start
```

## 📁 Struttura del Progetto

```
portfolio/
├── apps/
│   └── web/                 # Applicazione Next.js principale
│       ├── app/             # App Router di Next.js
│       ├── components/      # Componenti React specifici dell'app
│       └── public/          # Asset statici
├── packages/
│   ├── ui/                  # Libreria di componenti UI condivisi
│   │   └── src/
│   │       ├── components/  # Componenti shadcn/ui
│   │       ├── styles/      # Stili globali
│   │       └── lib/         # Utility functions
│   ├── eslint-config/       # Configurazioni ESLint condivise
│   └── typescript-config/   # Configurazioni TypeScript condivise
└── structure.json           # Dati strutturati del portfolio
```

## 🎯 Sezioni del Portfolio

1. **Hero** - Introduzione con nome, ruolo e CTA buttons
2. **Chi sono** - Breve descrizione professionale
3. **Competenze** - Categorie di skills con badge
4. **Progetti** - Card con progetti principali
5. **Contatti** - Email e link social
6. **Footer** - Copyright e link social

## 🔧 Personalizzazione

### Aggiornare i contenuti

Modifica il file `structure.json` per aggiornare:

- Informazioni personali
- Progetti
- Competenze
- Link social

### Modificare i colori

I colori del tema sono definiti in `packages/ui/src/styles/globals.css`:

- `:root` per la modalità light
- `.dark` per la modalità dark

### Aggiungere nuovi componenti shadcn/ui

```bash
cd packages/ui
pnpm dlx shadcn@latest add [component-name]
```

## 📝 Script Disponibili

- `pnpm dev` - Avvia il server di sviluppo
- `pnpm build` - Build dell'applicazione
- `pnpm start` - Avvia il server di produzione
- `pnpm lint` - Esegue il linting
- `pnpm lint:fix` - Corregge gli errori di linting automaticamente
- `pnpm typecheck` - Verifica i tipi TypeScript

## 🚀 Deploy

Il progetto è configurato per essere deployato su Vercel:

1. Push del codice su GitHub
2. Importa il repository su Vercel
3. Vercel rileverà automaticamente Next.js e configurerà il build

## 📄 Licenza

© 2025 Mattia Valerio. Tutti i diritti riservati.

## 🔗 Contatti

- Email: [mattiavalerio.dev@gmail.com](mailto:mattiavalerio.dev@gmail.com)
- GitHub: [github.com/mattiavalerio](https://github.com/mattiavalerio)
- LinkedIn: [linkedin.com/in/mattiavalerio](https://www.linkedin.com/in/mattiavalerio/)
