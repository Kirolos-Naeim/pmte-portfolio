import type { Metadata } from "next";
import { SeoLanding } from "../../../SeoLanding";
import { projects, siteUrl } from "../../../seo-data";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};
  return { title: `${project.ar.title} | PMTE`, description: project.ar.description, alternates: { canonical: `/ar/projects/${project.slug}`, languages: { "en-AE": `/projects/${project.slug}`, "ar-AE": `/ar/projects/${project.slug}` } }, openGraph: { title: `${project.ar.title} | PMTE`, description: project.ar.description, url: `${siteUrl}/ar/projects/${project.slug}`, images: [project.image] } };
}

export default function ArabicProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return null;
  return <SeoLanding detail={project} kind="project" locale="ar" />;
}
