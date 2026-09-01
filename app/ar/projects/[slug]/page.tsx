import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLanding } from "../../../SeoLanding";
import { projects, siteUrl } from "../../../seo-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.ar.title,
    description: project.ar.description,
    alternates: { canonical: `/ar/projects/${project.slug}`, languages: { "en-AE": `/projects/${project.slug}`, "ar-AE": `/ar/projects/${project.slug}`, "x-default": `/projects/${project.slug}` } },
    openGraph: { title: `${project.ar.title} | PMTE`, description: project.ar.description, url: `${siteUrl}/ar/projects/${project.slug}`, locale: "ar_AE", type: "article", images: [{ url: project.image, alt: project.ar.title }] },
    twitter: { card: "summary_large_image", title: `${project.ar.title} | PMTE`, description: project.ar.description, images: [project.image] },
  };
}

export default async function ArabicProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <SeoLanding detail={project} kind="project" locale="ar" />;
}
