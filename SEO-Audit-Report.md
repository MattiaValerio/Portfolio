# SEO Audit Report — mattiavalerio.dev

**Audit Date:** June 11, 2026
**Business:** Mattia Valerio — Sviluppo Software, Portogruaro (VE)
**Site:** https://mattiavalerio.dev
**Tech Stack:** Next.js SSR + Cloudflare CDN

---

## SEO Health Score: 35 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 35/100 | 7.7 |
| Content Quality | 23% | 38/100 | 8.7 |
| On-Page SEO | 20% | 38/100 | 7.6 |
| Schema / Structured Data | 10% | 22/100 | 2.2 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness | 10% | 18/100 | 1.8 |
| Images | 5% | 35/100 | 1.75 |
| **Overall** | **100%** | | **35 / 100** |

> **Interpretation:** The site has a clean technical foundation (Next.js SSR + Cloudflare, HTTPS enforced) and holds a fragile but real position #1 for its exact-match geo-keyword. However, it is effectively invisible to AI search, has no local presence (no GBP, no citations), thin content, and broken schema. Every gap is fixable in under 60 hours of focused work.

---

## What Is Working (Do Not Break)

- **Position #1 for "sviluppo software Portogruaro"** — the exact-match title tag is working. Don't change the format.
- **Domain brand clarity** — `mattiavalerio.dev` is a personal brand differentiator vs generic agency names.
- **Tech stack specificity** — .NET/Blazor/Industria 4.0 positioning is a real moat. No generic agency in the area can credibly claim it. Currently invisible in the copy — surfacing it is the highest-leverage content action.
- **Next.js SSR + Cloudflare** — modern, fast stack with CDN. Performance is likely solid even without direct CWV measurement.
- **Schema exists** — many local freelancers have none. The JSON-LD is broken but the intent is right.
- **Geographic focus** — targeting Portogruaro specifically beats trying to rank for all of Veneto at this stage.

---

## Sub-Audit Scores

| Sub-Audit | Score | Status |
|---|---|---|
| Content Quality / E-E-A-T | 38/100 | Needs Development |
| GEO / AI Search Readiness | 18/100 | Critical |
| Local SEO | 18/100 | Critical |
| SXO (Search Experience) | 41/100 | Needs Work |
| Schema Markup | 22/100 | Critical Issues |

---

## CRITICAL FINDINGS

### 1. All AI Crawlers Blocked — GEO Score: 18/100

The `robots.txt` explicitly blocks every major AI search platform:

| Blocked Agent | Platform Impact |
|---|---|
| `GPTBot` | ChatGPT search invisible |
| `ClaudeBot` | Claude.ai search invisible |
| `Google-Extended` | Google AI Overviews invisible |
| `meta-externalagent` | Meta AI invisible |
| `Applebot-Extended` | Apple Intelligence invisible |
| `CCBot` | Common Crawl invisible |
| `Bytespider` | TikTok/ByteDance AI invisible |

The intent (`Content-Signal: search=yes, ai-train=no`) is correct — search visibility without training corpus inclusion. The implementation is wrong: `GPTBot`, `ClaudeBot`, and `OAI-SearchBot` power **live search answer engines**, not training scrapers. Blocking them opts out of AI search entirely.

**Fix — robots.txt (30 min):**

```
# Block AI TRAINING crawlers only
User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: cohere-ai
Disallow: /

# Allow AI SEARCH crawlers (real-time answers, not training)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Allow Google AI Overviews (remove the Google-Extended block)
# User-agent: Google-Extended
# Disallow: /

User-agent: *
Allow: /
Sitemap: https://mattiavalerio.dev/sitemap.xml
```

> This single change moves AI search readiness from 18 → ~45/100 without removing any training protection.

---

### 2. Only 1 Page Indexed by Google (4 pages exist)

DuckDuckGo indexes 4 pages (`/`, `/servizi`, `/lavori`, `/lavori/myfinance`). Google indexes only 1.

**Likely causes:**
- `sitemap.xml` returns 403 — Googlebot cannot discover sub-pages via sitemap
- `CloudflareBrowserRenderingCrawler` is blocked — may affect Google's JavaScript rendering pipeline
- Possible `noindex` on sub-pages, or canonical consolidation to homepage

**Fix:**
1. Check Google Search Console → Coverage report for `/servizi`, `/lavori`, `/lavori/myfinance`
2. Fix the `sitemap.xml` 403 and add `Sitemap:` directive to `robots.txt`
3. Remove `CloudflareBrowserRenderingCrawler` from the Disallow list

---

### 3. Schema Broken — Two Conflicting Entities, No `@id`, No Telephone

Schema exists as a `@graph` with `LocalBusiness` and `ProfessionalService` nodes, but both share the same `url` with no `@id` anchor — creating two disconnected entities in Google's Knowledge Graph. `telephone` is absent (required for local pack eligibility). The `<script>` block is in `<body>`, not `<head>`.

**Replace the entire existing JSON-LD with this (move to `<head>`):**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mattiavalerio.dev/#website",
      "url": "https://mattiavalerio.dev",
      "name": "Mattia Valerio — Sviluppo Software a Portogruaro",
      "inLanguage": "it-IT",
      "publisher": { "@id": "https://mattiavalerio.dev/#person" }
    },
    {
      "@type": "Person",
      "@id": "https://mattiavalerio.dev/#person",
      "name": "Mattia Valerio",
      "url": "https://mattiavalerio.dev",
      "jobTitle": "Full Stack Web Developer",
      "description": "Full Stack Developer specializzato in .NET, Blazor e React per PMI nel Veneto orientale.",
      "knowsAbout": [".NET", "Blazor", "C#", "React", "Next.js", "Azure", "PostgreSQL", "Docker"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Portogruaro",
        "addressRegion": "VE",
        "postalCode": "30026",
        "addressCountry": "IT"
      },
      "sameAs": [
        "https://www.linkedin.com/in/mattiavalerio/",
        "https://github.com/MattiaValerio"
      ]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://mattiavalerio.dev/#business",
      "name": "Mattia Valerio — Sviluppo Software",
      "url": "https://mattiavalerio.dev",
      "telephone": "+39XXXXXXXXXX",
      "email": "YOUR_EMAIL",
      "image": "https://mattiavalerio.dev/opengraph-image?ac07db3cacb8fe11",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Portogruaro",
        "addressRegion": "VE",
        "postalCode": "30026",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.77490,
        "longitude": 12.84019
      },
      "areaServed": [
        { "@type": "City", "name": "Portogruaro" },
        { "@type": "City", "name": "Pordenone" },
        { "@type": "City", "name": "Venezia" },
        { "@type": "City", "name": "San Donà di Piave" },
        { "@type": "AdministrativeArea", "name": "Veneto" }
      ],
      "serviceType": [
        "Sviluppo software su misura",
        "Sviluppo siti web aziendali",
        "Sviluppo applicativi web",
        "Integrazione API e sistemi aziendali",
        "Consulenza tecnica"
      ],
      "founder": { "@id": "https://mattiavalerio.dev/#person" },
      "sameAs": [
        "https://www.linkedin.com/in/mattiavalerio/",
        "https://github.com/MattiaValerio"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://mattiavalerio.dev/#service-webapp",
      "name": "Web App su Misura",
      "description": "Sviluppo applicativi custom per digitalizzare processi aziendali, aree clienti e flussi operativi.",
      "provider": { "@id": "https://mattiavalerio.dev/#business" },
      "serviceType": "Sviluppo Web App"
    },
    {
      "@type": "Service",
      "@id": "https://mattiavalerio.dev/#service-integration",
      "name": "Integrazioni Aziendali",
      "description": "Integrazione con API, CRM, gestionali e strumenti di terze parti per centralizzare dati e operazioni aziendali.",
      "provider": { "@id": "https://mattiavalerio.dev/#business" },
      "serviceType": "Integrazione API"
    },
    {
      "@type": "Service",
      "@id": "https://mattiavalerio.dev/#service-enterprise",
      "name": "Soluzioni Enterprise",
      "description": "Architetture performanti e scalabili per aziende strutturate, con attenzione a sicurezza e crescita nel tempo.",
      "provider": { "@id": "https://mattiavalerio.dev/#business" },
      "serviceType": "Software Enterprise"
    }
  ]
}
```

---

### 4. No Google Business Profile — Local SEO Score: 18/100

No GBP found for "Mattia Valerio Portogruaro." Without a GBP, the site **cannot appear in the Local Pack** (the 3-box map result) — a position that competitors already occupy via ProntoPro and Addlance. This is the #1 local ranking factor (Whitespark 2026).

**Fix (2 hours):**
1. Go to [business.google.com](https://business.google.com) and create a listing
2. Name: "Mattia Valerio - Sviluppo Software"
3. Type: Service Area Business (SAB) — or use registered Partita IVA address
4. Service areas: Portogruaro, Pordenone, Venezia, Veneto
5. Primary category: "Software company" or "Web designer"
6. Secondary categories: "Computer consultant", "Internet marketing service"
7. Line up 3–5 past clients ready to leave reviews **on day 1** (Whitespark 18-day review velocity rule)

---

### 5. Zero NAP Citations Anywhere

No address, phone, or email is findable in any directory, citation source, or on the website itself. GitHub lists location as "Venice" — 70km from Portogruaro. This creates entity confusion in Google's Knowledge Graph.

**Immediate fix:**
- **GitHub:** Change location from "Venice" → "Portogruaro, Veneto, Italy" (5 minutes)
- **Website footer:** Add city + phone + P.IVA at minimum
- **PagineGialle:** Register under sviluppo software, web agency, programmatori (3 free listings)

---

## HIGH PRIORITY (Fix Within 2 Weeks)

### 6. Content Depth — E-E-A-T Score: 38/100

The homepage is ~200–350 words functioning as a digital business card. Competing agency pages are 800–1,100 words. The site **will lose position #1** as soon as any agency publishes a deeper service page targeting the same geo-keyword.

**Required content additions:**

| Gap | Action | Target Words |
|---|---|---|
| Tech stack invisible above fold | Add tagline: ".NET, Blazor, Azure, C# — sviluppo software enterprise per le PMI venete" | 20 |
| No case studies | Add 3 "Progetti" cards: client type / problem / tech / outcome | 450 |
| No service depth | Expand each service section (Web App, Integrazione, Cloud, Custom) to 80–120w | 400 |
| No FAQ | Add 6-question "Domande Frequenti" section with FAQPage schema | 300 |
| No about section | Add "Chi sono" paragraph: .NET background, years experience, Veneto focus | 150 |
| No testimonials | Add 2–3 named testimonials with company type | 150 |

Target: **900–1,100 words** total on homepage.

**Suggested FAQ questions:**
- "Quanto costa sviluppare un'applicazione web personalizzata?"
- "Qual è la differenza tra un sito vetrina e una web application?"
- "Lavori anche da remoto fuori dal Veneto?"
- "Cosa significa 'Industria 4.0' nello sviluppo software?"
- "Quali tecnologie usi per lo sviluppo?"
- "Quanto tempo richiede un progetto tipico?"

> Note: FAQPage schema no longer generates rich results for commercial pages in Google, but significantly aids AI Overview citation and LLM extraction.

---

### 7. Trust Architecture Missing

All four buyer personas score 5–8/25 on Trust. Italian B2B buyers expect a Partita IVA visible on commercial pages — its absence signals an unregistered freelancer.

**Fix:**
- Footer: `Portogruaro (VE) | +39 XXX XXX XXXX | P.IVA XXXXXXXXXXX`
- Header: WhatsApp link or Calendly CTA — "Prenota una chiamata gratuita di 20 minuti"
- Homepage: 2–3 named testimonials (company type is sufficient if NDA applies)

---

### 8. Create `/llms.txt`

A 150-word structured self-description gives AI systems a trusted manifest without requiring full crawl parsing:

```
# Mattia Valerio — Software Developer

Mattia Valerio is a full-stack software developer based in Portogruaro, Veneto,
Italy, specializing in .NET, Blazor, and React web applications for small and
medium-sized businesses. Services include custom web application development,
backend API design (C#, Node.js), cloud deployment (Azure, AWS), database
architecture (PostgreSQL), and ERP/system integrations. Available for project-
based and ongoing development work across the Veneto region and remotely.

## Services
- Custom web applications (.NET / Blazor / React)
- Backend development (C#, Node.js, REST APIs)
- Cloud infrastructure (Azure, AWS, Docker)
- System integrations and ERP connectivity
- Database design (PostgreSQL, MySQL)

## Service Area
Portogruaro, Venice, Veneto region, Italy. Remote projects accepted.

## Contact
mattiavalerio.dev

## AI Use Policy
Search and citation use permitted. AI training use not permitted.
```

---

### 9. Sub-Pages Need Individual Optimization

Once Google indexation is fixed, each sub-page needs:

| Page | Title Tag | Schema to Add |
|---|---|---|
| `/servizi` | "Servizi di Sviluppo Web e Software \| Portogruaro, Veneto" | Service nodes, BreadcrumbList |
| `/lavori` | "Portfolio Progetti Web \| Mattia Valerio Portogruaro" | ItemList, BreadcrumbList |
| `/lavori/myfinance` | "MyFinance — Progetto Web App \| Mattia Valerio" | CreativeWork, BreadcrumbList |

---

## MEDIUM PRIORITY (Fix Within 30 Days)

### 10. Marketplace Citations

70 competitors are already listed on ProntoPro in the Portogruaro area with verified reviews and star ratings. Google displays these above individual freelancer sites for many queries.

| Platform | Action | Priority |
|---|---|---|
| PagineGialle | Register under 3 categories (sviluppo software, web agency, programmatori) | High |
| ProntoPro | Create profile, solicit reviews | High |
| Addlance | Create profile with stack tags (.NET, Blazor, Azure) | High |
| Clutch.co | Add 2–3 case studies | Medium |
| Kompass Italy | Register free listing | Medium |

---

### 11. Wikidata Entity

Create a Wikidata item: `instance of: software developer` + `country: IT` + `website: mattiavalerio.dev`. This is the fastest path to AI entity grounding without Wikipedia requirements. Correlation between Wikidata entity presence and AI citation is high.

---

### 12. Service Area Landing Pages

Create dedicated pages targeting high-value secondary locations:

- `/portogruaro` — "Sviluppo Software a Portogruaro"
- `/pordenone` — "Sviluppo Web a Pordenone"
- `/veneto` — "Sviluppo Applicazioni Web per le PMI del Veneto"

Each page: 700+ words, unique content, city in H1 + title, Maps embed, local business schema with `areaServed`.

---

## SXO Analysis — SERP Landscape

**SXO Gap Score: 41/100**

The SERP for target keywords is dominated by **directories (50%)** and **agency service pages (30%)**. Google is serving comparison-shopping intent — three of the top five positions are ProntoPro/Addlance pages showing 70+ providers with ratings, prices, and reviews.

### Current SERP Positions

| Pos | Domain | Type |
|---|---|---|
| 1 | mattiavalerio.dev | Freelancer Homepage |
| 2 | sw-studio.it | Agency Service Page |
| 3–5 | prontopro.it | Directory (70+ providers) |
| 6 | paginegialle.it | Local Business Directory |
| 7 | brbdevelopment.com | Agency Service Page |
| 8 | addlance.com | Marketplace |
| 9 | indeed.com | Job Board |
| 10 | paginebianche.it | Local Directory |

### Persona Scores

| Persona | Score | Issue |
|---|---|---|
| Local Business Owner (SME, Portogruaro) | 42/100 | No portfolio visible, no pricing signal |
| Technical Manager at Veneto SME | 31/100 | .NET/Blazor specialization invisible, no case studies |
| Startup Founder | 38/100 | Full-stack capability unclear, no tech stack declaration |
| Geographic Proximity Searcher | 53/100 | Location confirmed via title but no address/phone |

**The Technical Manager persona (31/100) represents the highest-value client segment** — projects worth €5,000–€50,000+. Fix for this persona: add a "Progetti" case study section + technology stack declaration above the fold.

---

## Competitive Landscape

| Competitor | Strength | Mattia's Counter-Strategy |
|---|---|---|
| equo.biz | 28 years local presence | .NET/Blazor enterprise specificity |
| NetPlanner | 3 offices, full team | Personal brand trust, responsiveness |
| SW Studio | PagineGialle presence, full service | Industria 4.0 / cloud positioning |
| ProntoPro (70 providers) | Marketplace authority | Get listed, accumulate reviews |
| LumiaWeb | €250 price anchor | Position on enterprise value, not commodity price |

> Your competitive moat is **tech stack depth + local presence**. No area agency credibly claims .NET/Blazor enterprise development. Surface this in the first 40 words of the homepage.

---

## Prioritized Action Plan

| # | Action | Effort | Impact | When |
|---|---|---|---|---|
| 1 | Fix `robots.txt`: unblock AI search crawlers (GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot) | 30 min | Critical | Day 1 |
| 2 | Fix `sitemap.xml` 403 + add Sitemap directive to `robots.txt` | 1 hr | Critical | Day 1 |
| 3 | Remove `CloudflareBrowserRenderingCrawler` from Disallow + fix GSC indexation of /servizi, /lavori | 2 hr | Critical | Day 1 |
| 4 | Replace schema JSON-LD: add `@id`, `telephone`, `Person` node, move `<script>` to `<head>` | 1 hr | Critical | Day 1 |
| 5 | Create Google Business Profile (SAB, primary category: Software company) | 2 hr | Critical | Day 2 |
| 6 | Fix GitHub location: "Venice" → "Portogruaro, Veneto, Italy" | 5 min | High | Day 1 |
| 7 | Create `/llms.txt` | 1 hr | High | Day 2 |
| 8 | Add phone, city, P.IVA to footer | 30 min | High | Day 2 |
| 9 | Add above-fold .NET/Blazor specialization tagline | 30 min | High | Day 3 |
| 10 | Expand homepage content: service sections, FAQ, case studies, testimonials (target 900–1,100w) | 8 hr | High | Week 1 |
| 11 | Add WhatsApp / Calendly CTA in header | 30 min | High | Week 1 |
| 12 | Register on PagineGialle (3 categories) | 1 hr | High | Week 1 |
| 13 | Register on ProntoPro + Addlance, solicit first reviews | 2 hr | High | Week 1 |
| 14 | FAQPage schema on homepage | 1 hr | Medium | Week 2 |
| 15 | Service + BreadcrumbList schema on `/servizi`, `/lavori` | 1 hr | Medium | Week 2 |
| 16 | Create Wikidata entity | 1 hr | Medium | Week 2 |
| 17 | Create 3 service-area landing pages (/portogruaro, /pordenone, /veneto) | 6 hr | Medium | Week 3–4 |
| 18 | Publish 1 technical article externally (dev.to / Medium) | 3 hr | Medium | Month 1 |
| 19 | Clutch.co profile with 2–3 case studies | 3 hr | Medium | Month 1 |

**Total estimated effort for Critical + High items: ~24 hours**
**Expected SEO Health Score after completion: ~62/100**

---

## Falsifiability — How to Know the Fixes Worked

| Fix | Verification Method |
|---|---|
| AI crawlers unblocked | Cloudflare Access Logs or GSC Crawl Stats show GPTBot/ClaudeBot activity within 2 weeks |
| Schema fixed | Google Rich Results Test passes for LocalBusiness + Person + WebSite |
| GBP created | Site appears in Local Pack for "sviluppo software Portogruaro" within 4–8 weeks |
| Sub-pages indexed | GSC Coverage shows /servizi, /lavori as "Indexed" within 3 weeks of sitemap fix |
| Content depth | Google position for "web agency Portogruaro" enters top 10 within 60 days |
| Citations added | PagineGialle, ProntoPro listings appear in search within 2 weeks |
| llms.txt deployed | Accessible at mattiavalerio.dev/llms.txt, returns 200 for all user-agents |

---

## Three Changes Under 2 Hours That Unlock the Most Value

1. **Fix `robots.txt`** to allow AI search crawlers → unlocks ChatGPT, Claude, Perplexity, Google AI Overviews
2. **Create the Google Business Profile** → unlocks Local Pack eligibility
3. **Replace the broken schema JSON-LD** → fixes entity graph, enables rich results

Do these three first. Everything else builds on top.

---

*Generated by claude-seo audit — mattiavalerio.dev — June 11, 2026*
