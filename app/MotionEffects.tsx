"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(.hero)"));
    if (reduced) return;
    sections.forEach((section) => section.classList.add("motion-reveal"));
    const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) { target.classList.add("is-revealed"); observer.unobserve(target); }
    }), { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));

    const interactive = document.querySelectorAll<HTMLElement>(".project-card, .capability-card");
    const reset = (element: HTMLElement) => element.style.removeProperty("--tilt");
    const move = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      const tilt = ((event.clientX - rect.left) / rect.width - .5) * 4;
      element.style.setProperty("--tilt", `${tilt}deg`);
    };
    const leave = (event: PointerEvent) => reset(event.currentTarget as HTMLElement);
    interactive.forEach((element) => { element.addEventListener("pointermove", move); element.addEventListener("pointerleave", leave); });
    return () => { observer.disconnect(); interactive.forEach((element) => { element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", leave); }); };
  }, []);
  return null;
}
