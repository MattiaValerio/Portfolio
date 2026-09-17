import type { Metadata } from "next";

import { dictionaries, type Locale } from "./i18n";

export const siteOrigin = "https://mattiavalerio.dev";
export const socialImageSize = { width: 1200, height: 630 } as const;

const languageTags = { it: "it-IT", en: "en-US" } as const;
const openGraphLocales = { it: "it_IT", en: "en_US" } as const;
const socialImageAlt = {
  it: "Mattia Valerio, sviluppatore backend TypeScript",
  en: "Mattia Valerio, TypeScript backend developer",
} as const;

export const languageAlternates = {
  "it-IT": `${siteOrigin}/it`,
  "en-US": `${siteOrigin}/en`,
  "x-default": `${siteOrigin}/it`,
} as const;

export function localizedMetadata(locale: Locale): Metadata {
  const copy = dictionaries[locale].metadata;
  const canonical = `${siteOrigin}/${locale}`;
  const image = {
    url: `${siteOrigin}/${locale}/opengraph-image`,
    ...socialImageSize,
    alt: socialImageAlt[locale],
  };

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical, languages: languageAlternates },
    openGraph: {
      type: "profile",
      url: canonical,
      title: copy.title,
      description: copy.description,
      siteName: "Mattia Valerio",
      locale: openGraphLocales[locale],
      alternateLocale: [openGraphLocales[locale === "it" ? "en" : "it"]],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export function buildStructuredData(locale: Locale) {
  const copy = dictionaries[locale];
  const canonical = `${siteOrigin}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonical}#profile`,
    url: canonical,
    name: copy.metadata.title,
    description: copy.metadata.description,
    inLanguage: languageTags[locale],
    mainEntity: {
      "@type": "Person",
      "@id": `${siteOrigin}/#person`,
      name: `${copy.identity.firstName} ${copy.identity.lastName}`,
      url: canonical,
      jobTitle: copy.hero.role,
      description: copy.about.paragraphs.join(" "),
      knowsAbout: copy.hero.technologyLabels.map(({ label }) => label),
      sameAs: [
        "https://www.linkedin.com/in/mattiavalerio/",
        "https://github.com/MattiaValerio",
      ],
    },
  };
}
