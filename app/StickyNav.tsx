"use client";

import { BadgeCheck, Building2, HardHat, Home, Images, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const content = {
  en: { home: "Home", about: "About", services: "Core capabilities", projects: "Projects", gallery: "Gallery", credentials: "Credentials", contact: "Contact PMTE", language: "العربية" },
  ar: { home: "الرئيسية", about: "عن الشركة", services: "الخدمات الأساسية", projects: "المشاريع", gallery: "معرض الصور", credentials: "الاعتمادات", contact: "تواصل مع PMTE", language: "English" },
} as const;

export function StickyNav({ locale = "en", alwaysSolid = false }: { locale?: "en" | "ar"; alwaysSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const copy = content[locale];
  const isArabic = locale === "ar";
  const anchorRoot = alwaysSolid ? (isArabic ? "/ar" : "/") : "";

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1361px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return <header ref={headerRef} className={`scroll-nav is-visible ${alwaysSolid || scrolled ? "is-scrolled" : "is-over-hero"}`} dir="ltr" onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMenuOpen(false);
  }}>
    <a className="scroll-nav-brand" href={alwaysSolid ? (isArabic ? "/ar" : "/") : "#home"} aria-label="PMTE home" onClick={() => setMenuOpen(false)}><img src="/assets/logo/pmte-logo-primary.png" alt="PMTE demolition company Abu Dhabi logo" /></a>
    <button ref={toggleRef} className="scroll-nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="scrollNavLinks" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}<span className="sr-only">{isArabic ? (menuOpen ? "إغلاق القائمة" : "فتح القائمة") : (menuOpen ? "Close navigation" : "Open navigation")}</span></button>
    <nav className={menuOpen ? "is-open" : ""} id="scrollNavLinks" aria-label="PMTE navigation" onClick={(event) => {
      if (event.target instanceof Element && event.target.closest("a")) setMenuOpen(false);
    }}>
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
