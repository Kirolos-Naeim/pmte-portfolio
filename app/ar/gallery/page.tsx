import { Gallery } from "../../Gallery";
import { StickyNav } from "../../StickyNav";

export default function ArabicGalleryPage() {
  return <main className="route-page arabic-page" dir="rtl" lang="ar"><StickyNav locale="ar" alwaysSolid /><section className="gallery-section section-shell route-intro"><div className="section-index">معرض المشاريع</div><div className="split-heading"><div><p className="section-kicker">أرشيف ميداني مقدم</p><h1>شواهد من<br /><span>الميدان.</span></h1></div><p>تتضمن هذه الصفحة جميع صور المشاريع الثلاث والسبعين المستخرجة من ملف الشركة المقدم.</p></div><Gallery locale="ar" /></section></main>;
}
