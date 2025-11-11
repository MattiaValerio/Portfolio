# 🎨 Portfolio Mattia Valerio - Documentazione Completa

## ✅ Cosa è stato creato

Un sito portfolio moderno, minimale e completamente responsive per uno sviluppatore full stack specializzato in backend e cloud development.

### 🎯 Caratteristiche Principali

✨ **Design Moderno e Minimale**

- Layout verticale con sezioni scrollabili
- Molto spazio bianco per un aspetto pulito
- Palette di colori blu notte, grigio scuro con accenti verde acqua
- Font Inter per un aspetto professionale

🌓 **Dark/Light Mode**

- Toggle theme con persistenza
- Colori ottimizzati per entrambe le modalità
- Transizioni fluide tra i temi

📱 **Responsive Design**

- Ottimizzato per mobile, tablet e desktop
- Menu mobile con hamburger menu
- Layout adattivo per tutte le sezioni

⚡ **Animazioni Fluide**

- Framer Motion per animazioni di entrata
- Scroll animations con `useInView` hook
- Hover effects su cards e buttons
- Gradient text per il nome nel hero

🎯 **SEO Ottimizzato**

- Meta tags completi
- Open Graph per social sharing
- Twitter Card support
- Keywords strategiche
- Lang attribute italiano

---

## 📁 Struttura Completa

### Componenti Creati

#### 1. **Hero Section** (`apps/web/components/hero.tsx`)

- Saluto personalizzato "Ciao, sono"
- Nome con gradient text animato
- Ruolo "Full Stack Developer"
- Subtitle con tecnologie principali
- Due CTA buttons:
  - "Contattami" (primary) con icona mail
  - "Guarda i miei progetti" (outline)
- Animazioni di entrata con fade-in e slide-up
- Hover effects sui buttons

#### 2. **About Section** (`apps/web/components/about.tsx`)

- Titolo "Chi sono"
- Descrizione professionale dettagliata
- Scroll animation con Framer Motion
- Layout centrato con max-width per leggibilità

#### 3. **Skills Section** (`apps/web/components/skills.tsx`)

- Titolo "Competenze"
- 4 categorie in griglia 2x2 (responsive):
  - **Linguaggi**: C#, TypeScript, JavaScript, HTML, CSS, SQL
  - **Framework & Librerie**: .NET, Blazor, React, Next.js
  - **Database**: SQL Server, PostgreSQL
  - **DevOps & Cloud**: Docker, Git, CI/CD, Azure, AWS
- Ogni categoria in un Card component
- Badge per ogni skill
- Background muted per contrasto
- Animazioni stagerate per ogni card

#### 4. **Projects Section** (`apps/web/components/projects.tsx`)

- Titolo "Progetti"
- 3 card progetti in griglia (responsive 1-2-3 colonne):

  **Factory Insight**
  - Descrizione: Piattaforma di monitoraggio industriale
  - Tech: .NET, React, Docker, SQL Server
  - Links: GitHub + Demo

  **Survey Integration API**
  - Descrizione: Servizio backend per SurveyMonkey
  - Tech: .NET, C#, REST API
  - Links: GitHub

  **Portfolio Website**
  - Descrizione: Sito personale con Next.js
  - Tech: Next.js, TypeScript, TailwindCSS, shadcn/ui
  - Links: GitHub + Demo

- Hover shadow effect sulle cards
- Badge outline per tech stack
- Buttons per GitHub e Demo con icone

#### 5. **Contact Section** (`apps/web/components/contact.tsx`)

- Titolo "Contatti"
- Testo invito alla collaborazione
- Card centrale con:
  - Button email principale (mailto link)
  - Icone social (GitHub, LinkedIn) come icon buttons
- Background muted per contrasto
- Scroll animation

#### 6. **Navbar** (`apps/web/components/navbar.tsx`)

- Logo "MV" a sinistra
- Navigation links centrati (desktop):
  - Chi sono
  - Competenze
  - Progetti
  - Contatti
- Theme toggle button a destra
- Mobile hamburger menu con:
  - Menu slide-down
  - Chiusura automatica al click
- Backdrop blur quando scrollato
- Border bottom quando scrollato
- Transizioni fluide

#### 7. **Footer** (`apps/web/components/footer.tsx`)

- Icone social (GitHub, LinkedIn)
- Separator decorativo
- Copyright "© 2025 Mattia Valerio. Tutti i diritti riservati."
- Background muted
- Layout centrato

---

## 🎨 Tema e Stili

### Colori Personalizzati (OKLCH)

**Light Mode:**

- Background: `oklch(0.99 0.005 240)` - Bianco leggermente bluastro
- Foreground: `oklch(0.15 0.02 240)` - Nero bluastro
- Primary: `oklch(0.45 0.15 240)` - Blu notte intenso
- Secondary/Accent: `oklch(0.55 0.12 190)` - Verde acqua
- Muted: `oklch(0.96 0.005 240)` - Grigio chiaro bluastro

**Dark Mode:**

- Background: `oklch(0.12 0.02 240)` - Blu notte molto scuro
- Foreground: `oklch(0.92 0.01 240)` - Bianco bluastro
- Primary: `oklch(0.55 0.15 240)` - Blu più chiaro
- Secondary/Accent: `oklch(0.60 0.12 190)` - Verde acqua più chiaro
- Muted: `oklch(0.25 0.02 240)` - Grigio scuro bluastro

### Font

- **Inter** - Font principale (Google Fonts)
- Fallback: sans-serif

---

## 🔧 Componenti shadcn/ui Installati

- **Button** - Aggiornato con nuova configurazione
- **Card** - Con Header, Title, Description, Content, Footer
- **Badge** - Varianti: default, secondary, outline
- **Separator** - Divider decorativo

---

## 📦 Dipendenze Aggiunte

```json
{
  "framer-motion": "^12.23.24"
}
```

---

## 🚀 Come Usare il Portfolio

### Avvio Sviluppo

```bash
pnpm dev
```

Il sito sarà disponibile su `http://localhost:3000` (o porta alternativa se occupata)

### Build Produzione

```bash
pnpm build
pnpm start
```

### Deploy su Vercel

1. Push del repository su GitHub
2. Importa su Vercel
3. Deploy automatico

---

## 📝 Personalizzazione Futura

### Aggiungere un Nuovo Progetto

Modifica `apps/web/components/projects.tsx`:

```typescript
const projectsData = [
  // ... progetti esistenti
  {
    name: "Nuovo Progetto",
    description: "Descrizione del progetto...",
    techStack: ["Tech1", "Tech2", "Tech3"],
    links: {
      github: "https://github.com/mattiavalerio/nuovo-progetto",
      demo: "https://demo.example.com", // opzionale
    },
  },
];
```

### Modificare le Competenze

Modifica `apps/web/components/skills.tsx`:

```typescript
const skillsData = {
  categories: [
    {
      name: "Nuova Categoria",
      items: ["Skill1", "Skill2", "Skill3"],
    },
  ],
};
```

### Cambiare i Colori

Modifica `packages/ui/src/styles/globals.css`:

- Sezione `:root` per light mode
- Sezione `.dark` per dark mode

---

## ✨ Animazioni Implementate

1. **Hero Section**
   - Fade-in + slide-up del testo principale
   - Delay sui buttons
   - Gradient text animato
   - Arrow icon che si muove all'hover

2. **Sezioni con Scroll**
   - Animazioni triggered quando la sezione entra nel viewport
   - Margin offset di -100px per anticipare l'animazione
   - Flag `once: true` per animare una sola volta

3. **Cards**
   - Stagger animations (ritardo progressivo)
   - Hover shadow effect
   - Transizioni fluide

4. **Navbar**
   - Backdrop blur al scroll
   - Theme toggle con rotate animation
   - Mobile menu slide-down

---

## 🎯 Best Practices Implementate

✅ **Accessibilità**

- Semantic HTML
- aria-labels sui buttons
- Alt text dove necessario
- Contrast ratio ottimale

✅ **Performance**

- Server Components dove possibile
- Client Components solo dove necessario
- Lazy loading con scroll animations
- Ottimizzazione font con `display: swap`

✅ **SEO**

- Meta tags completi
- Structured data ready (structure.json)
- Semantic HTML
- Lang attribute

✅ **Code Quality**

- TypeScript strict mode
- ESLint configurato
- Componenti riutilizzabili
- Naming conventions chiare

---

## 📧 Informazioni di Contatto Configurate

- **Email**: mattiavalerio.dev@gmail.com
- **GitHub**: github.com/mattiavalerio
- **LinkedIn**: linkedin.com/in/mattiavalerio

---

## 🎉 Risultato Finale

Un portfolio professionale, moderno e completamente funzionale che:

- Mette in risalto le tue competenze tecniche
- Mostra i tuoi progetti principali
- Facilita il contatto
- Offre un'esperienza utente eccellente
- È pronto per il deploy immediato

**URL Locale**: http://localhost:3001 (attualmente attivo)

---

## 📚 Risorse Utili

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TailwindCSS v4 Docs](https://tailwindcss.com/docs)

---

Buon lavoro con il tuo nuovo portfolio! 🚀
