"use client";

import { useEffect, useState } from "react";
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

export function CertificateLibrary({ certificates, guinnessImage }: { certificates: Certificate[]; guinnessImage: string }) {
  const [selected, setSelected] = useState<SelectedCertificate | null>(null);

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
      <button className="certificate-highlight" type="button" onClick={() => setSelected({ name: "Guinness World Records certificate", image: guinnessImage })}>
        <img src="/assets/certificates/guinness-world-records-certificate.jpeg" alt="Guinness World Records certificate naming Modon Properties in association with Petroleum Machinery and Technical Equipment" />
        <div><p className="section-kicker">Achievement evidence</p><h3>Guinness World Records certificate.</h3><p>The certificate records Modon Properties in association with Petroleum Machinery and Technical Equipment, Abu Dhabi, for the controlled demolition on 27 November 2020.</p><span className="certificate-view-icon" aria-label="View certificate"><ArrowUpRight aria-hidden="true" /></span></div>
      </button>
      <div className="certificate-library">
        <div><p className="section-kicker">Shared document library</p><h3>Certificate previews.</h3><p>Select a certificate to view its supplied OneDrive document inside this website. Revalidate every item before a formal submission.</p></div>
        <div className="certificate-list">{certificates.map((certificate) => <button key={certificate.name} type="button" onClick={() => setSelected(certificate)}><span>PDF</span>{certificate.name}<b aria-label={`Preview ${certificate.name}`}><ArrowUpRight aria-hidden="true" /></b></button>)}</div>
      </div>
      {selected && <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={selected.name} onClick={() => setSelected(null)}><section onClick={(event) => event.stopPropagation()}><header><div><span>Certificate preview</span><h3>{selected.name}</h3></div><button type="button" onClick={() => setSelected(null)} aria-label="Close certificate preview">×</button></header>{selected.embed ? <iframe src={selected.embed} title={`${selected.name} preview`} frameBorder="0" scrolling="auto" /> : <img src={selected.image} alt={selected.name} />}</section></div>}
    </>
  );
}
