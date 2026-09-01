import type { Metadata } from "next";
import { Drill, Fuel, Hammer, MapPinned, PackageSearch, Tractor, Truck, Waves, Wrench } from "lucide-react";
import { CertificateLibrary } from "../CertificateLibrary";
import { StickyNav } from "../StickyNav";

const capabilities = [
  { title: "الهدم وإخراج المنشآت من الخدمة", href: "/ar/demolition-company-abu-dhabi", copy: "هدم إنشائي وتفكيك منضبط وإزالة مبانٍ ودعم أعمال إخراج المنشآت من الخدمة.", Icon: Hammer },
  { title: "الحفريات والأعمال الترابية", href: "/ar/earthworks-excavation-abu-dhabi", copy: "حفر وقطع وردم وتسوية وتجهيز المواقع وأعمال الأساسات.", Icon: Tractor },
  { title: "الأعمال البحرية", href: "/ar/marine-works-abu-dhabi", copy: "دعم الموانئ والسواحل وإزالة الكتل الخرسانية تحت الماء وترتيب الصخور.", Icon: Waves },
  { title: "إزالة الخرسانة والأسفلت", copy: "قطع الخرسانة والنشر الإنشائي وإزالة الأسفلت والتكسير المنضبط.", Icon: Drill },
  { title: "نقل المخلفات وإزالة الأنقاض", copy: "نقل مخلفات الإنشاءات وإزالة الأنقاض وخدمات النقل إلى المنشآت المعتمدة.", Icon: Truck },
  { title: "مقاولات الإنشاءات المعدنية", copy: "مقاولات الأعمال المعدنية ودعم المواقع بما ينسجم مع متطلبات المشروع المعتمدة.", Icon: Wrench },
  { title: "خدمات حقول ومنشآت النفط والغاز", copy: "خدمات دعم للحقول والمنشآت والمرافق البرية والبحرية ضمن نطاق الأنشطة المرخّصة.", Icon: Fuel },
  { title: "توريد المعدات والدعم الفني", href: "/ar/demolition-equipment-uae", copy: "توريد معدات وقطع غيار وحواجز وبوابات إلكترونية وحلول دعم فني ذات صلة.", Icon: PackageSearch },
];

const projects = [
  ["مركز أدنيك · المراحل 1–4", "أبوظبي", "هدم وإزالة متعددة المراحل", "/assets/projects/gallery-015-p15-01.jpg", "adnec-demolition-phases"],
  ["هدم مينا بلازا", "ميناء زايد، أبوظبي", "دعم هدم الأبراج بصورة منضبطة", "/assets/projects/mina-plaza-aerial-before-demolition.jpg", "mina-plaza-demolition"],
  ["كمارت أبوظبي", "أبوظبي", "هدم مبانٍ وإخلاء الموقع", "/assets/projects/gallery-025-p21-01.jpg", "kmart-abu-dhabi-demolition"],
  ["مباني ميناء زايد", "ميناء زايد، أبوظبي", "إزالة مبانٍ وتسوية الموقع", "/assets/projects/gallery-035-p28-01.jpg", "mina-zayed-buildings-removal"],
  ["ميناء زايد البحري", "أبوظبي", "إزالة كتل خرسانية تحت الماء", "/assets/projects/gallery-049-p39-01.jpg", "mina-zayed-harbour-marine-works"],
  ["حديقة الحيوانات بالعين", "العين", "قطع وردم وهدم وحفريات", "/assets/projects/gallery-069-p54-01.jpg", "al-ain-zoo-earthworks"],
];

const clients = [
  ["مدينة الشيخ شخبوط الطبية", "/assets/clients/SSMC_logo_abu_dhabi.svg"], ["بيورهيلث", "/assets/clients/PureHealth_logo.png"], ["أبوظبي للإعلام", "/assets/clients/abu-dhabi-media.png"], ["الدار", "/assets/clients/aldar.png"],
  ["مكتب أبوظبي للاستثمار", "/assets/clients/adio.png"], ["إيجل هيلز", "/assets/clients/EagelHills.png"], ["فاينانس هاوس", "/assets/clients/finance_ouse.png"], ["مدن", "/assets/clients/modon.png"],
];

const certificates = [
  { name: "شهادة تصنيف الطاقة والقدرة · 2026", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQA1HtadzkveRY4CDj2WG6n2AdRvcMPv4KCU7W2Ie6Qco4E?e=gL2evX", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQQ1HtadzkveRY4CDj2WG6n2ASAM6ARJ41544pYsBYTHjpc" },
  { name: "شهادة غرفة التجارة · 2027", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQD3UoDfHYvfSZpYOWuQ5a-nAREpyhuJhG7IExsCnQDtc3M?e=zVjVfO", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQT3UoDfHYvfSZpYOWuQ5a-nAfFAM1EXphUBD1LN5Y22vxQ" },
  { name: "شهادة الامتثال للدفاع المدني · 2027", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQC7N38mfqFWSLuOmUySDf6SAUZt1jAqHc8XScTHWU7tAo8?e=NwDSOT", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQS7N38mfqFWSLuOmUySDf6SAT8v-ujEJR09-6_eVGRZT10" },
  { name: "شهادة السجل التجاري · 2027", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQCOaVhGb_i0T5x-gcBC67jfAXwtN-RuS3uM5X-pRfmGtFM?e=9ouMEo", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQSOaVhGb_i0T5x-gcBC67jfAQF4BgM9CABeCWubo6pJsPQ" },
  { name: "شهادة تصنيف نشاط الهدم · 2028", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQB-SY23sS7TSqAP55XlSYNOAYWc9WLxC3taqFtbIuC3Dc4?e=N3rMnL", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQR-SY23sS7TSqAP55XlSYNOAQYTKsVniiw1ilsvBQMsgno" },
  { name: "شهادة التسجيل لضريبة القيمة المضافة", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQA3FYDDKjEtS5udgvN5VNB1AQRxIcjxGprlvPZydKKwN9o?e=oKAihe", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQQ3FYDDKjEtS5udgvN5VNB1AfRMO6lW6Um3iLE0btXbEro" },
];

const guinnessEmbedImage = "https://1drv.ms/i/c/2cea8bedd36ce876/IQQhnohx_Wi2S5S_AuzjGkhEAdqq9VGju85KFsaRy6QAnlQ?width=2069&height=3113";

export const metadata: Metadata = {
  title: "شركة هدم في أبوظبي، الإمارات",
  description: "PMTE شركة هدم في أبوظبي تقدم الهدم المنضبط والمعدات الثقيلة والأعمال الترابية والبحرية ودعم المواقع منذ 1994.",
  alternates: { canonical: "/ar", languages: { "en-AE": "/", "ar-AE": "/ar", "x-default": "/" } },
  openGraph: { title: "شركة هدم في أبوظبي، الإمارات | PMTE", description: "الهدم المنضبط والمعدات الثقيلة والأعمال الترابية والبحرية منذ 1994.", url: "/ar", locale: "ar_AE", images: ["/assets/social/pmte-social-cover.png"] },
};

export default function ArabicPortfolio() {
  return <main className="arabic-page" dir="rtl" lang="ar">
    <StickyNav locale="ar" />
    <section className="hero arabic-hero" id="home">
      <img className="hero-photo" src="/hero.jpg" alt="حفارة PMTE تنفذ أعمال هدم في موقع بأبوظبي" fetchPriority="high" /><div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <p className="portfolio-tag"><span>ملف الشركة</span><b>2026</b></p>
        <p className="eyebrow"><span /> تأسست عام 1994 · أبوظبي، الإمارات العربية المتحدة</p>
        <h1>شركة هدم<br /><span>في أبوظبي، الإمارات.</span></h1>
        <p className="hero-copy">هدم منضبط ومعدات ثقيلة وأعمال ترابية وبحرية منذ عام 1994.</p>
        <div className="hero-actions"><a className="primary-action" href="#projects">استعرض خبرات المشاريع</a><a className="text-action" href="#about">نبذة عن الشركة <span>←</span></a></div>
      </div>
      <div className="hero-stats" aria-label="ملخص الشركة"><div><strong>1994</strong><span>تاريخ التأسيس</span></div><div><strong>30+</strong><span>سنة من الخبرة</span></div><div><strong>8</strong><span>أنشطة مرخّصة</span></div><div><strong>25+</strong><span>مركبة ومعدة مذكورة في الملف</span></div></div>
    </section>

    <section className="overview-section section-shell" id="about"><div className="section-index">01 · عن الشركة</div><div className="overview-grid"><div className="section-title"><p className="section-kicker">أبوظبي · منذ 1994</p><h2>ثلاثة عقود من<br /><span>القدرة الميدانية.</span></h2></div><div className="overview-copy"><p className="lead">شركة بتروليوم ماشينري آند تكنيكال إكويبمنت - ذ.م.م - ش.ش.و. (PMTE) مقاول في أبوظبي يدعم أعمال الهدم والأعمال الترابية والبحرية والصناعية المعقدة.</p><p>تمتلك الشركة خبرة موثقة مع جهات حكومية وخاصة عبر مرافق المعارض وإعادة التطوير الحضري والواجهات البحرية ومشاريع التعليم وأعمال تجهيز المواقع.</p><p>تجمع PMTE بين فرق المواقع العملية والمعدات المخصصة للمشروع ودعم النقل المنسق لتنفيذ نطاقات العمل المحددة بصورة آمنة ومنهجية.</p></div></div></section>

    <section className="capabilities-section" id="services"><div className="section-shell"><div className="section-index light">02 · الخدمات الأساسية</div><div className="split-heading light-heading"><div><p className="section-kicker">دعم متكامل للمواقع</p><h2>شريك ميداني<br /><span>واحد ومسؤول.</span></h2></div><p>أنشطة مرخّصة وخبرة تنفيذ موثقة للبيئات الإنشائية وبيئات الهدم والواجهات البحرية في دولة الإمارات.</p></div><div className="capability-grid">{capabilities.map(({ title, href, copy, Icon }, index) => <article className="capability-card" key={title}><span className="capability-code">{String(index + 1).padStart(2, "0")}</span><Icon className="capability-icon" aria-hidden="true" /><h3>{href ? <a href={href}>{title}</a> : title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="projects-section section-shell" id="projects"><div className="section-index">03 · مشاريع مختارة</div><div className="split-heading"><div><p className="section-kicker">خبرات موثقة</p><h2>عمل واضح.<br /><span>نطاق محدد.</span></h2></div><p>تعكس أسماء المشاريع ونطاقاتها ملف الشركة المقدم. لم تتم إضافة قيم عقود أو نسب إنجاز أو مؤشرات أداء غير موثقة.</p></div><div className="project-grid">{projects.map(([title, location, scope, image, slug], index) => <article className="project-card" key={title}><div className="project-image"><img src={image} alt={`${title} — ${scope} في ${location}`} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></div><div className="project-body"><p>مشاريع PMTE</p><h3><a href={`/ar/projects/${slug}`}>{title}</a></h3><dl><div><dt>الموقع</dt><dd>{location}</dd></div><div><dt>نطاق العمل</dt><dd>{scope}</dd></div></dl></div></article>)}</div><p className="arabic-gallery-link"><a href="/ar/gallery">استعرض معرض الصور الكامل ←</a></p></section>

    <section className="clients-section" id="clients"><div className="section-shell"><div className="section-index light">04 · خبرات مع العملاء</div><div className="split-heading light-heading"><div><p className="section-kicker">سجل العملاء السابقين</p><h2>موثوقون عبر<br /><span>أبوظبي.</span></h2></div><p>جهات وردت في ملف PMTE باعتبارها عملاء سابقين أو مراجع لخبرات المشاريع. تبقى تفاصيل المشاركة خاصة بكل مشروع.</p></div><div className="client-grid">{clients.map(([name, image]) => <article className="client-card" key={name}><img src={image} alt={`شعار ${name}`} loading="lazy" /></article>)}</div></div></section>

    <section className="record-section" id="achievement"><img className="record-photo" src="/assets/projects/mina-plaza-aerial-before-demolition.jpg" alt="أبراج مينا بلازا في أبوظبي قبل عملية الهدم المنضبط الموثقة" loading="lazy" /><div className="record-shade" aria-hidden="true" /><div className="record-content"><p className="section-kicker">إنجاز رئيسي · 27 نوفمبر 2020</p><p className="record-number">165.032 <span>متراً</span></p><h2>بالاشتراك في إنجاز هدم منضبط مسجل في غينيس للأرقام القياسية.</h2><p>ارتبطت PMTE مع شركة مدن العقارية في عملية الهدم المنضبط لمبنى بارتفاع 165.032 متراً في أبوظبي بتاريخ 27 نوفمبر 2020. يوضح ذلك ارتباط PMTE بالمشروع ولا يعني أنها كانت صاحبة الرقم القياسي الوحيدة.</p><a className="record-evidence-link" href="#credentials">عرض شهادة الدعم <span aria-hidden="true">↓</span></a></div></section>

    <section className="fleet-section section-shell" id="fleet"><div className="section-index">05 · الأسطول والمعدات</div><div className="fleet-top"><div className="section-title"><p className="section-kicker">تجهيز مخصص للمشروع</p><h2>معدات مناسبة<br /><span>لطبيعة العمل.</span></h2></div><div className="fleet-copy"><p>يسجل الملف المقدم أكثر من 25 مركبة ومعدة. لا تُعرض الكميات أو مؤشرات الأداء أو المواصفات التي لا تثبتها المستندات المصدرية.</p><div className="verified-models"><article><span>طراز موثق</span><strong>LiuGong 856H</strong><p>لودر بعجلات</p></article><article><span>طراز موثق</span><strong>Caterpillar 340 D2 L</strong><p>حفارة</p></article></div></div></div><div className="equipment-strip"><img src="/assets/equipment/excavator-demolition.jpg" alt="حفارة في موقع هدم" loading="lazy" /><img src="/assets/equipment/mobile-crane.jpg" alt="رافعة متحركة" loading="lazy" /><img src="/assets/equipment/material-handling.jpg" alt="معدات مناولة المواد" loading="lazy" /><img src="/assets/equipment/lifting-operations.jpg" alt="عملية رفع ثقيلة" loading="lazy" /></div><ul className="equipment-list" aria-label="فئات المعدات"><li><span>01</span>حفارات</li><li><span>02</span>لودرات بعجلات</li><li><span>03</span>رافعات متحركة</li><li><span>04</span>جريدرات</li><li><span>05</span>شاحنات قلاب</li><li><span>06</span>مقطورات</li><li><span>07</span>معدات قطع</li><li><span>08</span>ملحقات الهدم</li></ul></section>

    <section className="assurance-section" id="hse"><div className="section-shell"><div className="section-index light">06 · الصحة والسلامة والجودة</div><div className="split-heading light-heading"><div><p className="section-kicker">ثلاث ركائز تشغيلية</p><h2>السيطرة على المخاطر.<br /><span>حماية النتائج.</span></h2></div><p>يوثق ملف الشركة سياسات تشمل الصحة والسلامة والمسؤولية البيئية وإدارة الجودة.</p></div><div className="pillar-grid"><article><div className="pillar-icon">س</div><span>01</span><h3>الصحة والسلامة</h3><p>تخطيط الأنشطة والإشراف على العمل الميداني والمحافظة على جاهزية المعدات وحماية الأفراد والجمهور.</p></article><article><div className="pillar-icon">ب</div><span>02</span><h3>البيئة</h3><p>التحكم في أثر الموقع ومنع التلوث ودعم النقل والتعامل والتخلص المسؤول من المواد.</p></article><article><div className="pillar-icon">ج</div><span>03</span><h3>الجودة</h3><p>تنفيذ نطاق العمل والمواصفات المتفق عليها من خلال ضوابط موثقة وتنسيق وتحسين مستمر.</p></article></div></div></section>

    <section className="credentials-section section-shell" id="credentials"><div className="section-index">07 · التراخيص والامتثال</div><div className="split-heading"><div><p className="section-kicker">سجل الاعتمادات</p><h2>حالة حالية.<br /><span>تواريخ واضحة.</span></h2></div><p>تعرض الحالة وفق التواريخ الواردة في ملف الشركة. يجب إعادة التحقق من جميع المستندات قبل أي تقديم رسمي.</p></div><div className="credential-table-wrap"><table className="credential-table"><thead><tr><th>الاعتماد</th><th>تاريخ الإصدار</th><th>تاريخ الانتهاء</th><th>الحالة</th></tr></thead><tbody><tr><td>الرخصة الاقتصادية</td><td>09 يونيو 2026</td><td>24 يونيو 2027</td><td><span className="status current">سارية</span></td></tr><tr><td>عضوية غرفة التجارة</td><td>09 يونيو 2026</td><td>24 يونيو 2027</td><td><span className="status current">سارية</span></td></tr><tr><td>تصريح إدارة النفايات</td><td>09 يونيو 2026</td><td>26 يونيو 2027</td><td><span className="status current">ساري</span></td></tr><tr><td>شهادة الدفاع المدني</td><td>09 يوليو 2026</td><td>08 يوليو 2027</td><td><span className="status current">سارية</span></td></tr><tr><td>التصنيف الهندسي</td><td>11 يونيو 2026</td><td>15 يناير 2028</td><td><span className="status current">ساري</span></td></tr></tbody></table></div><CertificateLibrary certificates={certificates} guinnessImage={guinnessEmbedImage} locale="ar" /></section>

    <section className="leadership-section" id="leadership"><div className="section-shell leadership-grid"><div><div className="section-index light">08 · الإدارة وبيانات الشركة</div><p className="section-kicker">إدارة مسؤولة</p><h2>مملوكة ومدارة<br /><span>من أبوظبي.</span></h2></div><div className="leadership-card"><span>المالك والمدير</span><h3>جاسم أحمد عبدالله المله المرزوقي</h3><dl><div><dt>الشكل القانوني</dt><dd>شركة ذات مسؤولية محدودة · شركة الشخص الواحد</dd></div><div><dt>الاسم القانوني</dt><dd>بتروليوم ماشينري آند تكنيكال إكويبمنت - ذ.م.م - ش.ش.و.</dd></div><div><dt>تاريخ التأسيس</dt><dd>19 يناير 1994</dd></div><div><dt>المقر الرئيسي</dt><dd>مصفح، أبوظبي، الإمارات العربية المتحدة</dd></div></dl></div></div></section>

    <section className="contact-section" id="contact"><div className="contact-inner"><div className="contact-heading"><p className="section-kicker">بتروليوم ماشينري آند تكنيكال إكويبمنت</p><h2>ناقش نطاق<br /><span>مشروعك.</span></h2><p>الهدم · الأعمال الترابية · الأعمال البحرية · الدعم الصناعي</p></div><div className="contact-grid"><article><span>الهاتف</span><a href="tel:+97126337709">+971 2 633 7709</a><a href="tel:+97126756339">+971 2 675 6339</a></article><article><span>الهاتف المتحرك</span><a href="tel:+971508134134">+971 50 813 4134</a></article><article><span>البريد الإلكتروني</span><a href="mailto:petrolum@emirates.net.ae">petrolum@emirates.net.ae</a><a href="mailto:petrloum_mach@yahoo.com">petrloum_mach@yahoo.com</a></article><article><span>الموقع</span><p>شارع المدينة الصناعية 3<br />مصفح M36، أبوظبي، الإمارات<br />ص.ب 2543</p><a className="map-link" href="https://maps.app.goo.gl/kN36cj9PTJE3rwJk9" target="_blank" rel="noreferrer">افتح الاتجاهات <MapPinned className="action-icon" aria-hidden="true" /></a></article></div></div><footer><img className="pmte-logo" src="/assets/logo/pmte-logo-primary.png" alt="شعار شركة PMTE للهدم في أبوظبي" /><p>بتروليوم ماشينري آند تكنيكال إكويبمنت - ذ.م.م - ش.ش.و.</p><p>تصميم كيرلس نعيم</p><a href="#home">العودة للأعلى ↑</a></footer></section>
  </main>;
}
