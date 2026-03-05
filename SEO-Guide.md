# Next.js SEO Best Practices

Guida completa alle best practice SEO per applicazioni sviluppate con
**Next.js**.\
Questo documento è pensato come checklist pratica da applicare durante
lo sviluppo.

------------------------------------------------------------------------

# 1. Rendering Strategy

Preferire contenuti renderizzati lato server per migliorare
l'indicizzazione.

## Static Site Generation (SSG)

Ideale per: - landing page - blog - pagine marketing

``` ts
export const dynamic = "force-static"
```

## Server Side Rendering (SSR)

Ideale per contenuti dinamici.

``` ts
export const dynamic = "force-dynamic"
```

## Incremental Static Regeneration (ISR)

``` ts
export const revalidate = 3600
```

Rigenera la pagina ogni ora mantenendo performance elevate.

------------------------------------------------------------------------

# 2. Metadata SEO

Utilizzare sempre metadata completi.

``` ts
export const metadata = {
  title: "Titolo Pagina",
  description: "Descrizione SEO della pagina",
  keywords: ["keyword1", "keyword2"]
}
```

Per pagine dinamiche:

``` ts
export async function generateMetadata({ params }) {
  return {
    title: `Prodotto ${params.slug}`,
    description: "Descrizione prodotto"
  }
}
```

------------------------------------------------------------------------

# 3. Open Graph

Permette una corretta anteprima sui social.

``` ts
export const metadata = {
  openGraph: {
    title: "Titolo",
    description: "Descrizione",
    url: "https://site.com",
    images: ["/og-image.png"]
  }
}
```

------------------------------------------------------------------------

# 4. Sitemap

Creare sempre una sitemap.

``` ts
export default function sitemap() {
  return [
    {
      url: "https://site.com",
      lastModified: new Date()
    }
  ]
}
```

Output:

    /sitemap.xml

------------------------------------------------------------------------

# 5. robots.txt

Esempio configurazione:

    User-agent: *
    Allow: /

    Sitemap: https://site.com/sitemap.xml

------------------------------------------------------------------------

# 6. URL SEO Friendly

Evitare query string.

❌

    /product?id=123

✔

    /products/industrial-scanner

In Next.js:

    app/products/[slug]/page.tsx

------------------------------------------------------------------------

# 7. Core Web Vitals

Ottimizzare:

-   LCP
-   CLS
-   INP

Best practice:

-   immagini ottimizzate
-   lazy loading
-   caching
-   bundle piccoli

Utilizzare il componente Image.

``` tsx
import Image from "next/image"

<Image
 src="/image.jpg"
 width={800}
 height={600}
 alt="Descrizione immagine"
/>
```

------------------------------------------------------------------------

# 8. Structured Data (Schema.org)

Aggiungere JSON-LD.

``` html
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "Company Name",
 "url": "https://site.com"
}
</script>
```

------------------------------------------------------------------------

# 9. HTML Semantics

Usare struttura corretta.

    h1 → titolo pagina
    h2 → sezione
    h3 → sottosezione

Evitare layout basati solo su div.

------------------------------------------------------------------------

# 10. Server Components

Preferire dati caricati lato server.

❌ Client fetch

``` ts
useEffect(() => {
 fetch("/api/data")
})
```

✔ Server component

``` ts
const data = await fetch("...")
```

------------------------------------------------------------------------

# 11. Canonical URL

Previene contenuti duplicati.

``` ts
export const metadata = {
  alternates: {
    canonical: "https://site.com/page"
  }
}
```

------------------------------------------------------------------------

# 12. International SEO

Struttura consigliata:

    /it
    /en
    /de

Utilizzare hreflang.

------------------------------------------------------------------------

# 13. Performance Best Practices

Checklist:

-   usare font locali
-   ridurre javascript client
-   usare caching HTTP
-   usare CDN
-   minimizzare CSS

------------------------------------------------------------------------

# 14. Images SEO

Sempre includere:

-   alt text descrittivo
-   dimensioni definite
-   formato moderno (webp)

------------------------------------------------------------------------

# 15. Monitoring SEO

Configurare:

-   Google Search Console
-   Google Analytics

Monitorare:

-   pagine indicizzate
-   keyword
-   errori crawler

------------------------------------------------------------------------

# 16. Struttura consigliata per Web App

Separare sito SEO e applicazione.

    /website   → marketing + SEO
    /app       → dashboard login

Questo migliora indicizzazione e performance.

------------------------------------------------------------------------

# 17. Lighthouse Checklist

Obiettivo:

SEO score = 100

Verificare:

-   meta tag
-   alt immagini
-   link crawlable
-   sitemap
-   robots

------------------------------------------------------------------------

# Conclusione

Applicando queste best practice è possibile ottenere:

-   indicizzazione veloce
-   ranking migliore
-   performance elevate
-   ottima esperienza utente
