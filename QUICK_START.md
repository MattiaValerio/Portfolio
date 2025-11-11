# 🚀 Quick Start Guide - Portfolio Mattia Valerio

## 📋 Prerequisiti

- Node.js 18+ installato
- pnpm installato (`npm install -g pnpm`)
- Git installato

## ⚡ Avvio Rapido

### 1. Installa le dipendenze

```bash
pnpm install
```

### 2. Avvia il server di sviluppo

```bash
pnpm dev
```

Il sito sarà disponibile su **http://localhost:3000** (o porta alternativa se occupata)

### 3. Visualizza il sito

Apri il browser e vai su `http://localhost:3000`

## 🎨 Cosa Vedrai

Il portfolio è composto da 6 sezioni principali:

1. **Hero** - Introduzione con nome e CTA buttons
2. **Chi sono** - Descrizione professionale
3. **Competenze** - Skills organizzate per categoria
4. **Progetti** - 3 progetti principali con links
5. **Contatti** - Email e social links
6. **Footer** - Copyright e social icons

## 🌓 Toggle Dark/Light Mode

Usa il button con l'icona sole/luna nella navbar (in alto a destra)

## 📱 Mobile Menu

Su mobile, clicca l'icona hamburger per aprire il menu di navigazione

## 🔧 Comandi Utili

```bash
# Avvia server di sviluppo
pnpm dev

# Build per produzione
pnpm build

# Avvia server di produzione
pnpm start

# Linting
pnpm lint

# Fix automatico errori di linting
pnpm lint:fix

# Type checking
pnpm typecheck
```

## 📝 Personalizzazione Base

### Modificare i Contenuti

Il file `structure.json` contiene tutti i dati strutturati del portfolio. Puoi modificarlo per aggiornare:

- Informazioni personali
- Progetti
- Competenze
- Links social

### Modificare i Colori

I colori del tema sono in `packages/ui/src/styles/globals.css`:

- Sezione `:root` per la modalità light
- Sezione `.dark` per la modalità dark

### Aggiungere Componenti

```bash
cd packages/ui
pnpm dlx shadcn@latest add [nome-componente]
```

## 🚀 Deploy su Vercel

### Metodo Automatico

1. Push del codice su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Importa il repository
4. Vercel detecterà automaticamente Next.js
5. Clicca "Deploy"

### Configurazione

Vercel configurerà automaticamente:

- Build command: `pnpm build`
- Output directory: `.next`
- Install command: `pnpm install`

## 📂 Struttura File Principali

```
portfolio/
├── apps/web/
│   ├── app/
│   │   ├── layout.tsx          # Layout principale + SEO
│   │   └── page.tsx            # Home page
│   └── components/             # Tutti i componenti delle sezioni
│       ├── hero.tsx
│       ├── about.tsx
│       ├── skills.tsx
│       ├── projects.tsx
│       ├── contact.tsx
│       ├── navbar.tsx
│       └── footer.tsx
└── packages/ui/
    └── src/
        ├── components/         # Componenti shadcn/ui
        └── styles/
            └── globals.css     # Tema e colori
```

## ✅ Checklist Prima del Deploy

- [ ] Verifica che tutti i link funzionino
- [ ] Testa su mobile
- [ ] Testa dark/light mode
- [ ] Verifica SEO metadata in `layout.tsx`
- [ ] Controlla che non ci siano errori nella console
- [ ] Testa tutti i link esterni (GitHub, LinkedIn, email)
- [ ] Verifica che le animazioni siano fluide

## 🐛 Troubleshooting

### Porta già in uso

Se vedi "Port 3000 is in use", Next.js userà automaticamente la porta successiva disponibile (3001, 3002, etc.)

### Errori di compilazione

1. Elimina `node_modules` e `.next`:

```bash
rm -rf node_modules .next
pnpm install
```

2. Riavvia il dev server:

```bash
pnpm dev
```

### Problemi con pnpm

Se pnpm non è installato:

```bash
npm install -g pnpm
```

## 📞 Supporto

Per domande o problemi:

- Email: mattiavalerio.dev@gmail.com
- GitHub: github.com/mattiavalerio

## 📚 Documentazione Completa

Vedi `PORTFOLIO_SUMMARY.md` per la documentazione completa e dettagliata.

---

**Buona navigazione! 🎉**
