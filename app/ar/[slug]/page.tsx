import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLanding } from "../../SeoLanding";
import { services, siteUrl } from "../../seo-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.ar.title,
    description: service.ar.description,
    alternates: {
      canonical: `/ar/${service.slug}`,
      languages: { "en-AE": `/${service.slug}`, "ar-AE": `/ar/${service.slug}`, "x-default": `/${service.slug}` },
    },
    openGraph: { title: `${service.ar.title} | PMTE`, description: service.ar.description, url: `${siteUrl}/ar/${service.slug}`, locale: "ar_AE", type: "website", images: [{ url: service.image, alt: service.ar.title }] },
    twitter: { card: "summary_large_image", title: `${service.ar.title} | PMTE`, description: service.ar.description, images: [service.image] },
  };
}

export default async function ArabicServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <SeoLanding detail={service} kind="service" locale="ar" />;
}
