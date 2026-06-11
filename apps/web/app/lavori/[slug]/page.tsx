import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { projectsData } from "@/lib/projects-data";

export const revalidate = 86400;

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — Case Study Web App`,
    description: project.description,
    keywords: [project.name, project.category, ...project.techStack, "case study", "portfolio mattia valerio", "sviluppatore portogruaro"],
    alternates: { canonical: `/lavori/${project.slug}` },
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.headline,
      url: `/lavori/${project.slug}`,
      type: "website",
      locale: "it_IT",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mattiavalerio.dev" },
          { "@type": "ListItem", position: 2, name: "Lavori", item: "https://mattiavalerio.dev/lavori" },
          { "@type": "ListItem", position: 3, name: project.name, item: `https://mattiavalerio.dev/lavori/${project.slug}` },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `https://mattiavalerio.dev/lavori/${project.slug}#project`,
        name: project.name,
        description: project.description,
        url: project.links.demo,
        dateCreated: project.year,
        keywords: project.techStack.join(", "),
        creator: { "@id": "https://mattiavalerio.dev/#person" },
        about: project.category,
      },
    ],
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <ProjectDetailPage project={project} />
      <Footer />
    </div>
  );
}
