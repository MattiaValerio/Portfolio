# Services Redesign — Spec

**Data:** 2026-03-16
**Autore:** Mattia Valerio
**Stato:** Approvato

---

## Contesto

Il portfolio è hostato su un VPS Hetzner (6€/mese) gestito con Coolify. Ogni sito cliente viene deployato direttamente sul VPS. Il cliente paga solo il dominio (opzionalmente gestito da Mattia). Al momento nessun cliente ha ancora sottoscritto i piani ricorrenti. Tutti i prezzi si applicano a nuovi clienti.

**Obiettivo:** Aumentare sia il margine sui pacchetti una tantum che le entrate ricorrenti, con modifiche minime e mirate alla pagina servizi.

---

## Modifiche ai Pacchetti Una Tantum

| Pacchetto | Prezzo attuale | Prezzo nuovo |
|-----------|---------------|--------------|
| START     | 590€          | 590€         |
| BUSINESS  | 790€          | 790€         |
| PRO       | 1090€         | **1290€**    |

Il pacchetto PRO include CMS dinamico e supporto multilingua IT/EN — il nuovo prezzo è più allineato al mercato.

Ogni card pacchetto deve indicare: **"Hosting: 15€/mese"** (obbligatorio per tutti i clienti).

---

## Servizi Ricorrenti

| Servizio                        | Prezzo attuale | Prezzo nuovo   |
|---------------------------------|---------------|----------------|
| **Hosting** *(nuovo)*           | —             | **15€/mese**   |
| Manutenzione Tecnica            | 39€/mese      | **49€/mese**   |
| Aggiornamento Contenuti         | 59€/mese      | 59€/mese *(invariato)* |
| SEO Locale                      | 79€/mese      | **129€/mese**  |
| Supporto Tecnico Prioritario    | 69€/mese      | 69€/mese *(invariato)* |
| Gestione Completa Sito + Hosting | su preventivo | su preventivo *(invariato)* |

### Hosting — dettaglio
L'hosting è **obbligatorio** per tutti i clienti i cui siti sono deployati sul VPS.

- **15€/mese**: siti standard con piccolo DB dedicato (es. siti vetrina, blog, portfolio)
- **Su preventivo**: applicazioni con database personalizzato, schema dedicato e ottimizzato

La voce "Gestione Completa Sito + Hosting" rimane su preventivo perché copre uno scenario distinto: gestione operativa completa del sito (contenuti, pubblicazione, supporto) in cui l'hosting è incluso nel pacchetto complessivo. Non è un'alternativa al piano hosting standalone.

---

## Formula Markup Dominio (regola interna — non esposta al cliente)

| Costo dominio | Markup | Esempio |
|---------------|--------|---------|
| < 20€         | × 3    | .it a 10€ → fattura 30€ |
| 20€ – 50€     | × 2    | .com a 25€ → fattura 50€ |
| > 50€         | × 1.5  | .io a 60€ → fattura 90€ |
| **Minimo**    | **25€** | dominio a 5€ → fattura 25€ |

In pagina compare solo: *"Se non disponi di un dominio, ci penso io."* Nessun prezzo o sovrapprezzo visibile.

---

## Modifiche alla Pagina Servizi (`services-page.tsx`)

### Pacchetti una tantum
1. **PRO**: prezzo da `"1090€"` → `"1290€"`
2. **Card pacchetti**: aggiungere all'interno di `CardContent`, dopo la `<ul>` delle feature e prima del tag di chiusura, un paragrafo con la nota `"Hosting: 15€/mese"`. Esempio:
   ```tsx
   <p className="text-xs text-muted-foreground mt-3 pt-3 border-t">Hosting: 15€/mese</p>
   ```

### Servizi ricorrenti — array `recurringServices`
L'array deve essere riscritto nell'**ordine seguente** (6 elementi, griglia 2 colonne, nessun elemento a larghezza piena):

| Posizione | Servizio |
|-----------|----------|
| 0 | Hosting *(nuovo)* |
| 1 | Manutenzione Tecnica |
| 2 | Aggiornamento Contenuti |
| 3 | SEO Locale |
| 4 | Supporto Tecnico Prioritario |
| 5 | Gestione Completa Sito + Hosting |

3. **Hosting** (index 0): aggiunto con:
   - Nome: `"Hosting"`
   - Prezzo: `"15€/mese"`
   - Voci: `["Hosting sito sul VPS dedicato", "DB incluso per siti standard", "Incluso per tutti i siti pubblicati sul VPS", "Per applicazioni con DB personalizzato: su preventivo"]`
4. **Layout griglia**: rimuovere la logica `index === recurringServices.length - 1 ? "md:col-span-2" : ""`. Con 6 elementi la griglia 2-colonne è uniforme — nessun elemento occupa due colonne.
5. **Manutenzione Tecnica** (index 1): prezzo da `"39€/mese"` → `"49€/mese"` *(nessuna modifica alle voci)*
6. **Aggiornamento Contenuti** (index 2): nessuna modifica
7. **SEO Locale** (index 3): prezzo da `"79€/mese"` → `"129€/mese"` *(nessuna modifica alle voci)*
8. **Supporto Tecnico Prioritario** (index 4): nessuna modifica
9. **Gestione Completa Sito + Hosting** (index 5): nessuna modifica

### FAQ
10. **Modificare** la FAQ esistente `"Il dominio e l'hosting sono inclusi?"`:
    - Nuova risposta: `"L'hosting è un servizio separato a 15€/mese, obbligatorio per tutti i siti pubblicati sul VPS. Se non disponi di un dominio, ci penso io."`
    - Questa voce copre sia il tema hosting che il tema dominio come punto di ingresso.
11. **Aggiungere** nuova FAQ `"Quanto costa l'hosting?"` → `"Per siti standard parte da 15€/mese, con DB incluso. Per applicazioni con database personalizzato e architettura su misura, il costo è su preventivo."` La sovrapposizione con la voce precedente è intenzionale: la prima è il punto di ingresso, la seconda fornisce il dettaglio tecnico per chi vuole approfondire.

---

## Modifiche al Componente Preview (`services-preview.tsx`)

12. **PRO**: prezzo da `"1090€"` → `"1290€"` (il componente espone i prezzi dei pacchetti anche nella homepage)
13. **Heading "Pacchetti da 590€"**: lasciare invariato — indica il prezzo di ingresso, non il massimo.

---

## Impatto Economico Stimato

Tutti i prezzi si applicano a nuovi clienti. Non ci sono clienti ricorrenti esistenti da aggiornare.

| Scenario | Entrate ricorrenti | Costo VPS |
|----------|-------------------|-----------|
| 10 clienti hosting | 150€/mese | ~6€/mese |
| 20 clienti hosting | 300€/mese | ~12€/mese (upgrade) |

Ogni cliente SEO attivo: +50€/mese rispetto al prezzo attuale.
Ogni cliente manutenzione attivo: +10€/mese rispetto al prezzo attuale.
