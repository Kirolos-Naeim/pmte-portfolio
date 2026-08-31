import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { StickyNav } from "./StickyNav";
import { siteUrl } from "./seo-data";

type Detail = {
  slug: string;
  title: string;
  heading: string;
  intro: string;
  description: string;
  image: string;
  scope?: readonly string[];
  location?: string;
  sector?: string;
  ar: { title: string; heading?: string; intro?: string; description: string; scope?: readonly string[]; location?: string; sector?: string };
};

export function SeoLanding({ detail, kind, locale = "en" }: { detail: Detail; kind: "service" | "project"; locale?: "en" | "ar" }) {
  const arabic = locale === "ar";
  const copy = arabic ? {
    title: detail.ar.title, heading: detail.ar.heading ?? detail.ar.title, intro: detail.ar.intro ?? detail.ar.description, description: detail.ar.description,
    label: kind === "service" ? "خدمة PMTE" : "دراسة حالة موثقة", scopeTitle: kind === "service" ? "نطاق الدعم" : "معلومات المشروع", location: "الموقع", sector: "القطاع", contact: "ناقش نطاق مشروعك", contactCopy: "تواصل مع PMTE لمناقشة نطاق العمل ومتطلبات الموقع في أبوظبي والإمارات.", services: "جميع الخدمات", projects: "مشاريع موثقة", back: "العودة إلى ملف الشركة", phone: "اتصل بـ PMTE",
  } : {
    title: detail.title, heading: detail.heading, intro: detail.intro, description: detail.description,
    label: kind === "service" ? "PMTE Service" : "Documented case study", scopeTitle: kind === "service" ? "Support scope" : "Project details", location: "Location", sector: "Sector", contact: "Discuss your project scope", contactCopy: "Contact PMTE to discuss defined scope and site requirements in Abu Dhabi and the UAE.", services: "All services", projects: "Documented projects", back: "Back to company portfolio", phone: "Call PMTE",
  };
  const path = kind === "service" ? (arabic ? `/ar/${detail.slug}` : `/${detail.slug}`) : (arabic ? `/ar/projects/${detail.slug}` : `/projects/${detail.slug}`);
  const jsonLd = kind === "service" ? {
    "@context": "https://schema.org", "@type": "Service", name: copy.title, description: copy.description, url: `${siteUrl}${path}`,
    provider: { "@type": "LocalBusiness", name: "Petroleum Machinery and Technical Equipment - L.L.C. - S.P.C.", url: siteUrl }, areaServed: { "@type": "City", name: "Abu Dhabi" },
  } : {
    "@context": "https://schema.org", "@type": "Project", name: copy.title, description: copy.description, url: `${siteUrl}${path}`, image: `${siteUrl}${detail.image}`,
    location: { "@type": "Place", name: detail.location }, contributor: { "@type": "Organization", name: "Petroleum Machinery and Technical Equipment - L.L.C. - S.P.C." },
  };

  return <main className={`seo-page ${arabic ? "arabic-page" : ""}`} dir={arabic ? "rtl" : "ltr"} lang={arabic ? "ar" : "en"}>
    <StickyNav locale={locale} alwaysSolid />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="seo-hero">
      <img src={detail.image} alt={copy.title} />
      <div className="seo-hero-shade" />
      <div className="seo-hero-content"><p className="section-kicker">{copy.label}</p><h1>{copy.heading}</h1><p>{copy.intro}</p></div>
    </section>
    <section className="seo-content section-shell"><div className="seo-summary"><p className="section-kicker">PMTE · Abu Dhabi · Established 1994</p><h2>{kind === "service" ? copy.scopeTitle : copy.title}</h2><p>{copy.description}</p><a className="seo-contact-link" href={arabic ? "/ar#contact" : "/#contact"}><Phone aria-hidden="true" />{copy.contact}</a></div><aside className="seo-facts"><p><MapPin aria-hidden="true" /><span>{copy.location}</span>{detail.location ?? (arabic ? "أبوظبي، الإمارات العربية المتحدة" : "Abu Dhabi, UAE")}</p>{detail.sector && <p><Check aria-hidden="true" /><span>{copy.sector}</span>{arabic ? detail.ar.sector : detail.sector}</p>}<ul>{detail.scope?.map((item, index) => <li key={item}><Check aria-hidden="true" />{arabic ? detail.ar.scope?.[index] ?? item : item}</li>)}</ul></aside></section>
    <section className="seo-next section-shell"><div><p className="section-kicker">{kind === "service" ? copy.projects : copy.services}</p><h2>{copy.contact}</h2><p>{copy.contactCopy}</p></div><a href={arabic ? "/ar" : "/"}>{copy.back}<ArrowRight aria-hidden="true" /></a></section>
  </main>;
}
