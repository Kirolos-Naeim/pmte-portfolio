import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLanding } from "../../SeoLanding";
import { projects, siteUrl } from "../../seo-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}`, languages: { "en-AE": `/projects/${project.slug}`, "ar-AE": `/ar/projects/${project.slug}`, "x-default": `/projects/${project.slug}` } },
    openGraph: { title: `${project.title} | PMTE`, description: project.description, url: `${siteUrl}/projects/${project.slug}`, locale: "en_AE", type: "article", images: [{ url: project.image, alt: `${project.title} project in ${project.location}` }] },
    twitter: { card: "summary_large_image", title: `${project.title} | PMTE`, description: project.description, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <SeoLanding detail={project} kind="project" />;
}
