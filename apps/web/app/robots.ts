import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Block AI TRAINING crawlers only (not search bots)
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      // Allow AI SEARCH crawlers (real-time answers, not training)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Allow all other bots
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://mattiavalerio.dev/sitemap.xml",
    host: "https://mattiavalerio.dev",
  };
}
