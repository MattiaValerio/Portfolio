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
    title: `${project.name} — Case Study`,
    description: project.description,
    keywords: [project.name, project.category, ...project.techStack, "case study", "portfolio mattia valerio"],
    alternates: { canonical: `/lavori/${project.slug}` },
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.headline,
      url: `/lavori/${project.slug}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <ProjectDetailPage project={project} />
      <Footer />
    </div>
  );
}
