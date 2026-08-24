"use client";

import { BadgeCheck, Building2, ChevronDown, Drill, Fuel, Hammer, HardHat, Home, Images, Menu, PackageSearch, Tractor, Truck, Waves, Wrench, X } from "lucide-react";
import { useEffect, useState } from "react";

const serviceGroups = [
  { title: "Demolition & Removal", links: [[Hammer, "Demolition & decommissioning"], [Drill, "Concrete cutting & asphalt removal"], [Truck, "Waste transport & debris clearing"]] },
  { title: "Earthworks & Marine", links: [[Tractor, "Excavation & site preparation"], [Waves, "Marine works"]] },
  { title: "Industrial Services", links: [[Wrench, "Metal construction contracting"], [Fuel, "Oil & gas facility services"]] },
  { title: "Equipment & Supply", links: [[PackageSearch, "Equipment & technical supply"]] },
] as const;

export function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const update = () => setVisible((document.querySelector(".hero")?.getBoundingClientRect().bottom ?? 1) <= 0);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <header className={`scroll-nav ${visible ? "is-visible" : ""}`}>
    <a className="scroll-nav-brand" href="#home" aria-label="PMTE home"><img src="/assets/logo/pmte-logo-primary.png" alt="PMTE" /></a>
    <button className="scroll-nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="scrollNavLinks" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}<span className="sr-only">Toggle navigation</span></button>
    <nav className={menuOpen ? "is-open" : ""} id="scrollNavLinks" aria-label="PMTE navigation">
      <a href="#home"><Home />Home</a><a href="/about"><Building2 />About</a>
      <div className={`scroll-nav-services ${servicesOpen ? "is-open" : ""}`}>
        <button type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}><HardHat />Core capabilities<ChevronDown /></button>
        <div className="services-mega-menu">{serviceGroups.map(({ title, links }) => <section key={title}><p>{title}</p>{links.map(([Icon, label]) => <a href="#services" key={label}><Icon />{label}</a>)}</section>)}</div>
      </div>
      <a href="#projects"><Building2 />Projects</a><a href="/gallery"><Images />Gallery</a><a href="#credentials"><BadgeCheck />Credentials</a>
      <a className="scroll-nav-contact" href="#contact">Contact PMTE</a>
    </nav>
  </header>;
}
