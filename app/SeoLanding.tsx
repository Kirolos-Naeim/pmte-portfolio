import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { StickyNav } from "./StickyNav";
import { OptimizedImage } from "./OptimizedImage";
import { businessId, projects, services, siteUrl, websiteId } from "./seo-data";

type TextBlock = { title: string; text: string };
type Faq = { question: string; answer: string };
type Detail = {
  slug: string;
  title: string;
  heading?: string;
  intro?: string;
  description: string;
  image: string;
  scope?: readonly string[];
  paragraphs?: readonly string[];
  process?: readonly TextBlock[];
  faq?: readonly Faq[];
  relatedProjects?: readonly string[];
  relatedServiceSlug?: string;
  location?: string;
  sector?: string;
  ar: {
    title: string;
    heading?: string;
    intro?: string;
    description: string;
    scope?: readonly string[];
    paragraphs?: readonly string[];
    process?: readonly TextBlock[];
    faq?: readonly Faq[];
    location?: string;
    sector?: string;
  };
};

export function SeoLanding({ detail, kind, locale = "en" }: { detail: Detail; kind: "service" | "project"; locale?: "en" | "ar" }) {
  const arabic = locale === "ar";
  const copy = arabic ? {
    title: detail.ar.title,
    heading: detail.ar.heading ?? detail.ar.title,
    intro: detail.ar.intro ?? detail.ar.description,
    description: detail.ar.description,
    paragraphs: detail.ar.paragraphs ?? detail.paragraphs,
    process: detail.ar.process ?? detail.process,
    faq: detail.ar.faq ?? detail.faq,
    label: kind === "service" ? "خدمة PMTE" : "دراسة حالة موثقة",
    category: kind === "service" ? "الخدمات" : "المشاريع",
    scopeTitle: kind === "service" ? "نطاق الدعم" : "نطاق المشروع الموثق",
    approach: "منهجية دعم المشروع",
    experience: "خبرات مشاريع مرتبطة",
    questions: "أسئلة شائعة",
    location: "الموقع",
    sector: "القطاع",
    contact: "ناقش نطاق مشروعك",
    contactCopy: "تواصل مع PMTE لمناقشة نطاق العمل ومتطلبات الموقع في أبوظبي والإمارات.",
    relatedService: "الخدمة المرتبطة",
    back: "العودة إلى ملف الشركة",
    home: "الرئيسية",
  } : {
    title: detail.title,
    heading: detail.heading ?? detail.title,
    intro: detail.intro ?? detail.description,
    description: detail.description,
    paragraphs: detail.paragraphs,
    process: detail.process,
    faq: detail.faq,
    label: kind === "service" ? "PMTE Service" : "Documented case study",
    category: kind === "service" ? "Services" : "Projects",
    scopeTitle: kind === "service" ? "Support scope" : "Documented project scope",
    approach: "How PMTE supports the work",
    experience: "Related project experience",
    questions: "Frequently asked questions",
    location: "Location",
    sector: "Sector",
    contact: "Discuss your project scope",
    contactCopy: "Contact PMTE to discuss the defined scope and site requirements in Abu Dhabi and the UAE.",
    relatedService: "Related service",
    back: "Back to company portfolio",
    home: "Home",
  };

  const path = kind === "service" ? (arabic ? `/ar/${detail.slug}` : `/${detail.slug}`) : (arabic ? `/ar/projects/${detail.slug}` : `/projects/${detail.slug}`);
  const categoryPath = arabic ? "/ar" : "/";
  const relatedProjects = detail.relatedProjects?.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean) ?? [];
  const relatedService = detail.relatedServiceSlug ? services.find((service) => service.slug === detail.relatedServiceSlug) : undefined;
  const pageEntity = kind === "service" ? {
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name: copy.title,
    serviceType: copy.title,
    description: copy.description,
    url: `${siteUrl}${path}`,
    image: `${siteUrl}${detail.image}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    isPartOf: { "@id": websiteId },
    availableLanguage: arabic ? "Arabic" : "English",
  } : {
    "@type": "Article",
    "@id": `${siteUrl}${path}#case-study`,
    headline: copy.title,
    description: copy.description,
    url: `${siteUrl}${path}`,
    mainEntityOfPage: `${siteUrl}${path}`,
    image: `${siteUrl}${detail.image}`,
    author: { "@id": businessId },
    publisher: { "@id": businessId },
    about: relatedService ? { "@type": "Service", name: relatedService.title, url: `${siteUrl}/${relatedService.slug}` } : "Demolition and technical contracting",
    contentLocation: { "@type": "Place", name: arabic ? detail.ar.location ?? detail.location : detail.location },
    inLanguage: arabic ? "ar-AE" : "en-AE",
    isPartOf: { "@id": websiteId },
  };
  const structuredGraph: Record<string, unknown>[] = [
    pageEntity,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: copy.home, item: `${siteUrl}${arabic ? "/ar" : "/"}` },
        { "@type": "ListItem", position: 2, name: copy.category, item: `${siteUrl}${categoryPath}${kind === "project" ? "#projects" : "#services"}` },
        { "@type": "ListItem", position: 3, name: copy.title, item: `${siteUrl}${path}` },
      ],
    },
  ];
  if (copy.faq?.length) {
    structuredGraph.push({
      "@type": "FAQPage",
      "@id": `${siteUrl}${path}#faq`,
      mainEntity: copy.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    });
  }
  const jsonLd = { "@context": "https://schema.org", "@graph": structuredGraph };
  const imageAlt = kind === "project"
    ? `${copy.title} — documented PMTE project in ${arabic ? detail.ar.location ?? detail.location : detail.location}`
    : `${copy.title} — PMTE heavy equipment and contracting services`;

  return <main className={`seo-page ${arabic ? "arabic-page" : ""}`} dir={arabic ? "rtl" : "ltr"} lang={arabic ? "ar" : "en"}>
    <StickyNav locale={locale} alwaysSolid />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <section className="seo-hero">
      <OptimizedImage src={detail.image} alt={imageAlt} fetchPriority="high" loading="eager" widths={[768, 1280, 1920]} quality={88} />
      <div className="seo-hero-shade" aria-hidden="true" />
      <div className="seo-hero-content">
        <nav className="seo-breadcrumbs" aria-label={arabic ? "مسار الصفحة" : "Breadcrumb"}><a href={arabic ? "/ar" : "/"}>{copy.home}</a><span>/</span><a href={`${categoryPath}${kind === "project" ? "#projects" : "#services"}`}>{copy.category}</a></nav>
        <p className="section-kicker">{copy.label}</p><h1>{copy.heading}</h1><p>{copy.intro}</p>
      </div>
    </section>

    <section className="seo-content section-shell">
      <div className="seo-summary"><p className="section-kicker">PMTE · Abu Dhabi · Established 1994</p><h2>{copy.scopeTitle}</h2><p>{copy.description}</p>{copy.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a className="seo-contact-link" href={arabic ? "/ar#contact" : "/#contact"}><Phone aria-hidden="true" />{copy.contact}</a></div>
      <aside className="seo-facts"><p><MapPin aria-hidden="true" /><span>{copy.location}</span>{detail.location ? (arabic ? detail.ar.location ?? detail.location : detail.location) : (arabic ? "أبوظبي، الإمارات العربية المتحدة" : "Abu Dhabi, UAE")}</p>{detail.sector && <p><Check aria-hidden="true" /><span>{copy.sector}</span>{arabic ? detail.ar.sector ?? detail.sector : detail.sector}</p>}<ul>{detail.scope?.map((item, index) => <li key={item}><Check aria-hidden="true" />{arabic ? detail.ar.scope?.[index] ?? item : item}</li>)}</ul></aside>
    </section>

    {copy.process?.length ? <section className="seo-deep-section"><div className="section-shell"><p className="section-kicker">PMTE · {copy.category}</p><h2>{copy.approach}</h2><div className="seo-process-grid">{copy.process.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section> : null}

    {kind === "service" && relatedProjects.length ? <section className="seo-related section-shell"><p className="section-kicker">PMTE · Abu Dhabi</p><h2>{copy.experience}</h2><div className="seo-related-grid">{relatedProjects.map((project) => project && <a key={project.slug} href={arabic ? `/ar/projects/${project.slug}` : `/projects/${project.slug}`}><OptimizedImage src={project.image} alt={arabic ? `مشروع ${project.ar.title}` : `${project.title} project`} loading="lazy" widths={[480, 768, 1100]} sizes="(max-width: 760px) 100vw, 33vw" /><span>{arabic ? project.ar.location : project.location}</span><h3>{arabic ? project.ar.title : project.title}</h3><ArrowRight aria-hidden="true" /></a>)}</div></section> : null}

    {kind === "project" && relatedService ? <section className="seo-related-service section-shell"><div><p className="section-kicker">PMTE · {copy.relatedService}</p><h2>{arabic ? relatedService.ar.title : relatedService.title}</h2><p>{arabic ? relatedService.ar.description : relatedService.description}</p></div><a href={arabic ? `/ar/${relatedService.slug}` : `/${relatedService.slug}`}>{copy.relatedService}<ArrowRight aria-hidden="true" /></a></section> : null}

    {copy.faq?.length ? <section className="seo-faq section-shell"><p className="section-kicker">PMTE · Abu Dhabi</p><h2>{copy.questions}</h2><div>{copy.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section> : null}

    <section className="seo-next section-shell"><div><p className="section-kicker">PMTE · Abu Dhabi</p><h2>{copy.contact}</h2><p>{copy.contactCopy}</p></div><a href={arabic ? "/ar" : "/"}>{copy.back}<ArrowRight aria-hidden="true" /></a></section>
  </main>;
}
