import type { MetadataRoute } from "next";
import { projectsData } from "@/lib/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = projectsData.map((p) => ({
    url: `https://mattiavalerio.dev/lavori/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://mattiavalerio.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mattiavalerio.dev/servizi",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://mattiavalerio.dev/lavori",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://mattiavalerio.dev/sviluppo-software-portogruaro",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://mattiavalerio.dev/applicazioni-web-portogruaro",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectPages,
  ];
}
