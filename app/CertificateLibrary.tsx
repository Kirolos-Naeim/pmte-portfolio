"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight } from "lucide-react";

type Certificate = {
  name: string;
  href: string;
  embed: string;
};

type SelectedCertificate = {
  name: string;
  embed?: string;
  image?: string;
};

export function CertificateLibrary({ certificates, guinnessImage, locale = "en" }: { certificates: Certificate[]; guinnessImage: string; locale?: "en" | "ar" }) {
  const [selected, setSelected] = useState<SelectedCertificate | null>(null);
  const arabic = locale === "ar";
  const copy = arabic ? {
    evidence: "دليل الإنجاز", guinness: "شهادة غينيس للأرقام القياسية.", description: "توثق الشهادة شركة مدن العقارية بالاشتراك مع بتروليوم ماشينري آند تكنيكال إكويبمنت، أبوظبي، لعملية الهدم المنضبط بتاريخ 27 نوفمبر 2020.",
    library: "مكتبة المستندات", previews: "معاينات الشهادات.", select: "اختر شهادة لعرض مستند OneDrive المقدم داخل هذا الموقع. أعد التحقق من كل مستند قبل أي تقديم رسمي.", preview: "معاينة", heading: "معاينة الشهادة", close: "إغلاق معاينة الشهادة",
  } : {
    evidence: "Achievement evidence", guinness: "Guinness World Records certificate.", description: "The certificate records Modon Properties in association with Petroleum Machinery and Technical Equipment, Abu Dhabi, for the controlled demolition on 27 November 2020.",
    library: "Shared document library", previews: "Certificate previews.", select: "Select a certificate to view its supplied OneDrive document inside this website. Revalidate every item before a formal submission.", preview: "Preview", heading: "Certificate preview", close: "Close certificate preview",
  };

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <button className="certificate-highlight" type="button" onClick={() => setSelected({ name: copy.guinness, image: guinnessImage })}>
        <img src="/assets/certificates/guinness-world-records-certificate.jpeg" alt="Guinness World Records certificate naming Modon Properties in association with Petroleum Machinery and Technical Equipment" />
        <div><p className="section-kicker">{copy.evidence}</p><h3>{copy.guinness}</h3><p>{copy.description}</p><span className="certificate-view-icon" aria-label={copy.preview}><ArrowUpRight aria-hidden="true" /></span></div>
      </button>
      <div className="certificate-library">
        <div><p className="section-kicker">{copy.library}</p><h3>{copy.previews}</h3><p>{copy.select}</p></div>
        <div className="certificate-list">{certificates.map((certificate) => <button key={certificate.name} type="button" onClick={() => setSelected(certificate)}><span>PDF</span>{certificate.name}<b aria-label={`${copy.preview} ${certificate.name}`}><ArrowUpRight aria-hidden="true" /></b></button>)}</div>
      </div>
      {selected && createPortal(
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={selected.name} onClick={() => setSelected(null)}>
          <section onClick={(event) => event.stopPropagation()}>
            <header><div><span>{copy.heading}</span><h3>{selected.name}</h3></div><button type="button" onClick={() => setSelected(null)} aria-label={copy.close}>×</button></header>
            {selected.embed ? <iframe src={selected.embed} title={`${selected.name} preview`} frameBorder="0" scrolling="auto" /> : <img src={selected.image} alt={selected.name} />}
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
