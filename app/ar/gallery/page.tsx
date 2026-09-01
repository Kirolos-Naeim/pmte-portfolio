import type { Metadata } from "next";
import { Gallery } from "../../Gallery";
import { StickyNav } from "../../StickyNav";

export const metadata: Metadata = {
  title: "معرض مشاريع الهدم في أبوظبي",
  description: "شاهد صور مشاريع PMTE الموثقة في الهدم والأعمال الترابية والبحرية والمعدات الثقيلة في أبوظبي والإمارات.",
  alternates: { canonical: "/ar/gallery", languages: { "en-AE": "/gallery", "ar-AE": "/ar/gallery", "x-default": "/gallery" } },
  openGraph: { title: "معرض مشاريع PMTE في أبوظبي", description: "صور موثقة لمشاريع الهدم والأعمال الترابية والبحرية والمعدات الثقيلة.", url: "/ar/gallery", locale: "ar_AE", images: ["/assets/projects/mina-plaza-demolition-excavator.jpg"] },
};

export default function ArabicGalleryPage() {
  return <main className="route-page arabic-page" dir="rtl" lang="ar"><StickyNav locale="ar" alwaysSolid /><section className="gallery-section section-shell route-intro"><div className="section-index">معرض المشاريع</div><div className="split-heading"><div><p className="section-kicker">أرشيف ميداني مقدم</p><h1>شواهد من<br /><span>الميدان.</span></h1></div><p>تتضمن هذه الصفحة جميع صور المشاريع الثلاث والسبعين المستخرجة من ملف الشركة المقدم.</p></div><Gallery locale="ar" /></section></main>;
}
