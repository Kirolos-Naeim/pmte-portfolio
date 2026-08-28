"use client";

import { BadgeCheck, Building2, HardHat, Home, Images, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const content = {
  en: { home: "Home", about: "About", services: "Core capabilities", projects: "Projects", gallery: "Gallery", credentials: "Credentials", contact: "Contact PMTE", language: "العربية" },
  ar: { home: "الرئيسية", about: "عن الشركة", services: "الخدمات الأساسية", projects: "المشاريع", gallery: "معرض الصور", credentials: "الاعتمادات", contact: "تواصل مع PMTE", language: "English" },
} as const;

export function StickyNav({ locale = "en", alwaysSolid = false }: { locale?: "en" | "ar"; alwaysSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content[locale];
  const isArabic = locale === "ar";
  const anchorRoot = alwaysSolid ? (isArabic ? "/ar" : "/") : "";

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <header className={`scroll-nav is-visible ${alwaysSolid || scrolled ? "is-scrolled" : "is-over-hero"}`} dir="ltr">
    <a className="scroll-nav-brand" href={alwaysSolid ? (isArabic ? "/ar" : "/") : "#home"} aria-label="PMTE home"><img src="/assets/logo/pmte-logo-primary.png" alt="PMTE" /></a>
    <button className="scroll-nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="scrollNavLinks" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}<span className="sr-only">Toggle navigation</span></button>
    <nav className={menuOpen ? "is-open" : ""} id="scrollNavLinks" aria-label="PMTE navigation">
      <a href={`${anchorRoot}#home`}><Home />{copy.home}</a>
      <a href={isArabic ? `${anchorRoot}#about` : "/about"}><Building2 />{copy.about}</a>
      <a href={`${anchorRoot}#services`}><HardHat />{copy.services}</a>
      <a href={`${anchorRoot}#projects`}><Building2 />{copy.projects}</a>
      <a href={isArabic ? "/ar/gallery" : "/gallery"}><Images />{copy.gallery}</a>
      <a href={`${anchorRoot}#credentials`}><BadgeCheck />{copy.credentials}</a>
      <a className="scroll-nav-language" href={isArabic ? "/" : "/ar"} lang={isArabic ? "en" : "ar"} dir={isArabic ? "ltr" : "rtl"}>{copy.language}</a>
      <a className="scroll-nav-contact" href={`${anchorRoot}#contact`}>{copy.contact}</a>
    </nav>
  </header>;
}
