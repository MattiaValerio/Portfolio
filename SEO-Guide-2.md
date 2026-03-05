# Local SEO Metadata Strategy (Portogruaro)

Questo documento definisce le **best practice SEO locali** da
implementare nel progetto **Next.js** per migliorare la visibilità nelle
ricerche relative alla zona di **Portogruaro**.

L'obiettivo è migliorare il posizionamento su Google per ricerche locali
come:

-   sviluppo software portogruaro
-   sviluppatore web portogruaro
-   software gestionale portogruaro

------------------------------------------------------------------------

# 1. Title SEO

Il tag `title` è uno dei fattori SEO più importanti.

Formato consigliato:

Servizio + Città \| Nome Azienda

Esempio:

Sviluppo Software a Portogruaro \| Nome Azienda

Implementazione in Next.js:

``` ts
export const metadata = {
  title: "Sviluppo Software a Portogruaro | Nome Azienda"
}
```

------------------------------------------------------------------------

# 2. Meta Description

La description deve includere la città e i servizi principali.

``` ts
export const metadata = {
  description:
    "Sviluppo software, applicazioni web e soluzioni industriali per aziende a Portogruaro, Pordenone e Venezia."
}
```

------------------------------------------------------------------------

# 3. Keywords locali

``` ts
keywords: [
  "sviluppo software portogruaro",
  "sviluppatore web portogruaro",
  "software gestionale portogruaro",
  "sviluppo applicazioni veneto"
]
```

------------------------------------------------------------------------

# 4. OpenGraph Metadata

``` ts
openGraph: {
  title: "Sviluppo Software a Portogruaro",
  description: "Applicazioni web e software industriale per aziende del Veneto",
  locale: "it_IT"
}
```

------------------------------------------------------------------------

# 5. Schema.org LocalBusiness

Inserire JSON-LD nel sito:

``` html
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": "Nome Azienda",
 "address": {
   "@type": "PostalAddress",
   "addressLocality": "Portogruaro",
   "addressRegion": "Veneto",
   "postalCode": "30026",
   "addressCountry": "IT"
 },
 "areaServed": "Portogruaro",
 "url": "https://tuosito.it"
}
</script>
```

------------------------------------------------------------------------

# 6. Pagine SEO locali

Creare pagine dedicate ai servizi con la città nel percorso URL.

/sviluppo-software-portogruaro\
/software-gestionale-portogruaro\
/applicazioni-web-portogruaro

------------------------------------------------------------------------

# 7. Heading H1

``` html
<h1>Sviluppo Software a Portogruaro</h1>
```

------------------------------------------------------------------------

# 8. Citare città vicine

-   Portogruaro
-   Pordenone
-   San Donà di Piave
-   Latisana
-   Bibione
-   Caorle

------------------------------------------------------------------------

# 9. Google Business Profile

Checklist:

-   Nome azienda
-   indirizzo
-   telefono
-   sito web
-   categoria attività
-   recensioni clienti

------------------------------------------------------------------------

# 10. Footer con località

Esempio:

Sviluppo software e applicazioni web a Portogruaro, Venezia, Pordenone e
Veneto.

------------------------------------------------------------------------

# 11. Metadata completo consigliato

``` ts
export const metadata = {
  title: "Sviluppo Software a Portogruaro | Applicazioni Web e Industriali",
  description:
    "Sviluppo software, gestionali e applicazioni web per aziende a Portogruaro, Venezia e Pordenone.",
  keywords: [
    "sviluppo software portogruaro",
    "software gestionale portogruaro",
    "sviluppatore web portogruaro"
  ],
  openGraph: {
    locale: "it_IT",
    type: "website"
  }
}
```

------------------------------------------------------------------------

# 12. Strategia SEO consigliata

1 pagina principale servizio\
+\
5 articoli blog locali

Esempio:

Sviluppo software Portogruaro

Blog: - Come digitalizzare un'azienda a Portogruaro - Software per PMI a
Portogruaro - Industria 4.0 per aziende del Veneto

------------------------------------------------------------------------

# Obiettivo

Migliorare il posizionamento del sito per ricerche locali legate a
sviluppo software, applicazioni web e gestionali aziendali nella zona di
**Portogruaro e Veneto orientale**.
