import type { MetadataRoute } from "next";
import { languageAlternates, siteOrigin } from "../lib/discovery";
import { locales } from "../lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteOrigin}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: languageAlternates },
  }));
}
