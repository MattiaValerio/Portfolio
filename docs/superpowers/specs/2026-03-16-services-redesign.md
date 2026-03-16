# Services Redesign — Spec

**Data:** 2026-03-16
**Autore:** Mattia Valerio
**Stato:** Approvato

---

## Contesto

Il portfolio è hostato su un VPS Hetzner (6€/mese) gestito con Coolify. Ogni sito cliente viene deployato direttamente sul VPS. Il cliente paga solo il dominio (opzionalmente gestito da Mattia). Al momento nessun cliente ha ancora sottoscritto i piani ricorrenti.

**Obiettivo:** Aumentare sia il margine sui pacchetti una tantum che le entrate ricorrenti, con modifiche minime e mirate alla pagina servizi.

---

## Modifiche ai Pacchetti Una Tantum

| Pacchetto | Prezzo attuale | Prezzo nuovo |
|-----------|---------------|--------------|
| START     | 590€          | 590€         |
| BUSINESS  | 790€          | 790€         |
| PRO       | 1090€         | **1290€**    |

Il pacchetto PRO include CMS dinamico e supporto multilingua IT/EN — il nuovo prezzo è più allineato al mercato.

Ogni card pacchetto deve indicare: **"Hosting a partire da 15€/mese"**.

---

## Servizi Ricorrenti

| Servizio                        | Prezzo attuale | Prezzo nuovo   |
|---------------------------------|---------------|----------------|
| **Hosting** *(nuovo)*           | —             | **15€/mese**   |
| Manutenzione Tecnica            | 39€/mese      | **49€/mese**   |
| Aggiornamento Contenuti         | 59€/mese      | 59€/mese       |
| SEO Locale                      | 79€/mese      | **129€/mese**  |
| Supporto Tecnico Prioritario    | 69€/mese      | 69€/mese       |
| Gestione Completa + Hosting     | su preventivo | su preventivo  |

### Hosting — dettaglio
- **15€/mese**: siti standard con piccolo DB dedicato
- **Su preventivo**: applicazioni con database personalizzato, schema dedicato e ottimizzato

L'hosting è il servizio a margine più alto: costo reale ~0.50€/cliente/mese, margine ~97%.

---

## Formula Markup Dominio (regola interna)

| Costo dominio | Markup |
|---------------|--------|
| < 20€         | × 3    |
| 20€ – 50€     | × 2    |
| > 50€         | × 1.5  |
| **Minimo**    | **25€** |

Questa formula non è esposta al cliente. In pagina compare solo: *"Se non disponi di un dominio, ci penso io."*

---

## Modifiche alla Pagina Servizi (`services-page.tsx`)

1. **PRO**: prezzo da `"1090€"` → `"1290€"`
2. **Hosting**: aggiunto come primo `recurringService` con prezzo `"15€/mese"` e descrizione che distingue base (15€) da preventivo (DB dedicato)
3. **Manutenzione Tecnica**: prezzo da `"39€/mese"` → `"49€/mese"`
4. **SEO Locale**: prezzo da `"79€/mese"` → `"129€/mese"`
5. **Card pacchetti**: aggiungere sotto ogni card la nota *"Hosting a partire da 15€/mese"*
6. **FAQ**: aggiungere *"Quanto costa l'hosting?"* → risposta che distingue 15€/mese (standard) da preventivo (DB personalizzato)
7. **Dominio**: aggiungere in FAQ o sezione contatti *"Se non disponi di un dominio, ci penso io."*

---

## Impatto Economico Stimato

- **10 clienti hosting**: 150€/mese ricorrenti, costo VPS ~6€/mese
- **20 clienti hosting**: 300€/mese, eventuale upgrade VPS a ~12€/mese
- **SEO repricing**: +50€/mese per ogni cliente SEO attivo
- **Manutenzione repricing**: +10€/mese per ogni cliente manutenzione attivo
