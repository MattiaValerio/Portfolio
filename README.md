# 🎨 Mattia Valerio - Portfolio

> Un sito portfolio moderno e minimale per uno sviluppatore full stack specializzato in backend e cloud development.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)](https://ui.shadcn.com/)

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)

---

## ✨ Caratteristiche

- 🎨 **Design minimale e moderno** con palette personalizzata
- 🌓 **Dark/Light mode** con persistenza
- 📱 **Completamente responsive** (mobile, tablet, desktop)
- ⚡ **Animazioni fluide** con Framer Motion
- 🎯 **SEO ottimizzato** con meta tags completi
- 🔧 **Componenti riutilizzabili** con shadcn/ui
- 🚀 **Performance ottimizzate** con Next.js 15

---

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+
- pnpm (installa con `npm install -g pnpm`)

### Installazione

```bash
# Installa le dipendenze
pnpm install

# Avvia il server di sviluppo
pnpm dev

# Apri http://localhost:3000 nel browser
```

### Build per Produzione

```bash
# Build dell'applicazione
pnpm build

# Avvia il server di produzione
pnpm start
```

---

## 📁 Struttura del Progetto

```
portfolio/
├── apps/
│   └── web/                    # Applicazione Next.js principale
│       ├── app/                # App Router di Next.js
│       │   ├── layout.tsx      # Layout principale + SEO
│       │   ├── page.tsx        # Home page
│       │   ├── sitemap.ts      # Sitemap automatico
│       │   └── manifest.ts     # PWA manifest
│       └── components/         # Componenti React
│           ├── hero.tsx
│           ├── about.tsx
│           ├── skills.tsx
│           ├── projects.tsx
│           ├── contact.tsx
│           ├── navbar.tsx
│           └── footer.tsx
├── packages/
│   ├── ui/                     # Libreria UI condivisa
│   │   └── src/
│   │       ├── components/     # shadcn/ui components
│   │       ├── styles/         # Tema e colori personalizzati
│   │       └── lib/            # Utility functions
│   ├── eslint-config/          # Configurazioni ESLint
│   └── typescript-config/      # Configurazioni TypeScript
└── structure.json              # Dati strutturati del portfolio
```

---

## 🎯 Sezioni del Portfolio

| Sezione        | Descrizione                                  |
| -------------- | -------------------------------------------- |
| **Hero**       | Introduzione con nome, ruolo e CTA buttons   |
| **Chi sono**   | Descrizione professionale dettagliata        |
| **Competenze** | Skills organizzate per categoria (24 totali) |
| **Progetti**   | 3 progetti principali con tech stack e links |
| **Contatti**   | Email e link social (GitHub, LinkedIn)       |
| **Footer**     | Copyright e social icons                     |

---

## 🛠️ Stack Tecnologico

### Core

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Type safety e migliore DX
- **TailwindCSS v4** - Utility-first CSS

### UI & Animazioni

- **shadcn/ui** - Componenti accessibili e personalizzabili
- **Framer Motion** - Animazioni fluide e performanti
- **Lucide React** - Icone moderne e leggere

### Tooling

- **Turborepo** - Gestione monorepo efficiente
- **pnpm** - Package manager veloce
- **ESLint** - Linting e code quality

---

## 🎨 Personalizzazione

### Modificare i Contenuti

Aggiorna il file `structure.json` per cambiare:

- Informazioni personali
- Progetti
- Competenze
- Link social

### Cambiare i Colori

Modifica `packages/ui/src/styles/globals.css`:

```css
:root {
  --primary: oklch(0.45 0.15 240); /* Blu notte */
  --secondary: oklch(0.55 0.12 190); /* Verde acqua */
  --background: oklch(0.99 0.005 240); /* Bianco bluastro */
  /* ... altri colori ... */
}

.dark {
  --primary: oklch(0.55 0.15 240); /* Blu più chiaro */
  --background: oklch(0.12 0.02 240); /* Blu notte scuro */
  /* ... altri colori ... */
}
```

### Aggiungere Nuovi Componenti shadcn/ui

```bash
cd packages/ui
pnpm dlx shadcn@latest add [component-name]
```

Poi importa nel tuo codice:

```tsx
import { ComponentName } from "@workspace/ui/components/component-name";
```

---

## 📝 Script Disponibili

| Comando          | Descrizione                   |
| ---------------- | ----------------------------- |
| `pnpm dev`       | Avvia il server di sviluppo   |
| `pnpm build`     | Build dell'applicazione       |
| `pnpm start`     | Avvia il server di produzione |
| `pnpm lint`      | Esegue il linting             |
| `pnpm lint:fix`  | Corregge errori di linting    |
| `pnpm typecheck` | Verifica i tipi TypeScript    |

---

## 🚀 Deploy

### Vercel (Consigliato)

1. Push del codice su GitHub
2. Importa il repository su [Vercel](https://vercel.com)
3. Vercel detecterà automaticamente Next.js e configurerà il build
4. Clicca "Deploy"

Il sito sarà live su `https://your-project.vercel.app`

### Altre Piattaforme

Il progetto funziona anche su:

- Netlify
- Railway
- Render
- Cloudflare Pages

---

## 📊 Performance

Il portfolio è ottimizzato per:

- ⚡ **First Contentful Paint** < 1s
- 🎯 **Time to Interactive** < 2s
- 💯 **Lighthouse Score** > 90

---

## 🌐 SEO

### Meta Tags Inclusi

- ✅ Title e Description
- ✅ Keywords strategiche
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Sitemap.xml automatico
- ✅ robots.txt
- ✅ Web Manifest (PWA ready)

---

## 📱 Browser Support

| Browser | Support        |
| ------- | -------------- |
| Chrome  | ✅ Latest      |
| Firefox | ✅ Latest      |
| Safari  | ✅ Latest      |
| Edge    | ✅ Latest      |
| Mobile  | ✅ iOS/Android |

---

## 📚 Documentazione

- [Quick Start Guide](./QUICK_START.md) - Guida rapida per iniziare
- [Portfolio Summary](./PORTFOLIO_SUMMARY.md) - Documentazione completa
- [Project Complete](./PROJECT_COMPLETE.md) - Panoramica finale

---

## 🔗 Contatti

- **Email**: [mattiavalerio.dev@gmail.com](mailto:mattiavalerio.dev@gmail.com)
- **GitHub**: [github.com/mattiavalerio](https://github.com/mattiavalerio)
- **LinkedIn**: [linkedin.com/in/mattiavalerio](https://www.linkedin.com/in/mattiavalerio/)

---

## 📄 Licenza

© 2025 Mattia Valerio. Tutti i diritti riservati.

---

## 🙏 Crediti

Realizzato con:

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**⭐ Se ti piace questo progetto, lascia una stella su GitHub!**
