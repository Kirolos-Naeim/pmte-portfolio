"use client";

import { useEffect, useMemo, useState } from "react";
import galleryData from "./gallery-manifest.json";
import { OptimizedImage } from "./OptimizedImage";

type GalleryItem = (typeof galleryData)[number];

const filters = ["All", "Demolition", "Earthworks", "Marine", "Equipment", "Transport"];
const arabicLabels: Record<string, string> = { All: "الكل", Demolition: "الهدم", Earthworks: "الأعمال الترابية", Marine: "الأعمال البحرية", Equipment: "المعدات", Transport: "النقل" };

export function Gallery({ locale = "en" }: { locale?: "en" | "ar" }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const visibleItems = useMemo(
    () => activeFilter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const index = visibleItems.findIndex((item) => item.id === selected.id);
        const offset = event.key === "ArrowRight" ? 1 : -1;
        const next = (index + offset + visibleItems.length) % visibleItems.length;
        setSelected(visibleItems[next]);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, visibleItems]);

  const move = (offset: number) => {
    if (!selected) return;
    const index = visibleItems.findIndex((item) => item.id === selected.id);
    const next = (index + offset + visibleItems.length) % visibleItems.length;
    setSelected(visibleItems[next]);
  };

  return (
    <>
      <div className="gallery-toolbar" aria-label="Filter gallery">
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {locale === "ar" ? arabicLabels[filter] : filter}
            </button>
          ))}
        </div>
        <p><strong>{visibleItems.length}</strong> {locale === "ar" ? "صورة مشروع" : "project images"}</p>
      </div>

      <div className="gallery-grid">
        {visibleItems.map((item, index) => (
          <button
            className={`gallery-card gallery-card-${(index % 7) + 1}`}
            key={item.id}
            onClick={() => setSelected(item)}
            type="button"
            aria-label={locale === "ar" ? `فتح ${item.project}` : `Open ${item.alt}`}
          >
            <OptimizedImage
              src={item.src}
              alt={item.alt}
              loading="lazy"
              widths={[360, 640, 960]}
              sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 33vw"
            />
            <span className="gallery-card-shade" />
            <span className="gallery-card-copy">
              <small>{item.category}</small>
              <strong>{item.project}</strong>
            </span>
            <span className="gallery-open" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={() => setSelected(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label={locale === "ar" ? "إغلاق الصورة" : "Close image"}>×</button>
          <button className="lightbox-nav previous" type="button" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label={locale === "ar" ? "الصورة السابقة" : "Previous image"}>‹</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <OptimizedImage
              src={selected.src}
              alt={selected.alt}
              widths={[960, 1440, 1920]}
              sizes="min(92vw, 1600px)"
              quality={88}
            />
            <figcaption><span>{selected.category}</span>{selected.project}</figcaption>
          </figure>
          <button className="lightbox-nav next" type="button" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label={locale === "ar" ? "الصورة التالية" : "Next image"}>›</button>
        </div>
      )}
    </>
  );
}
