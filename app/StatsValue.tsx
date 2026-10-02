"use client";

import { useEffect, useRef, useState } from "react";

type StatsValueProps = {
  value: string;
  className?: string;
};

export function StatsValue({ value, className = "" }: StatsValueProps) {
  const target = Number.parseInt(value, 10);
  const isNumeric = Number.isFinite(target) && /^\d/.test(value);
  const suffix = isNumeric ? value.replace(/^\d+/, "") : "";
  const element = useRef<HTMLElement>(null);
  // Render the real number on the server and without JavaScript. Animate only
  // after intersection, without replacing the accessible value with a counter.
  const [display, setDisplay] = useState(isNumeric ? target : value);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = element.current;
    if (!current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const run = () => {
      setReady(true);
      if (!isNumeric || reduceMotion) {
        setDisplay(isNumeric ? target : value);
        return;
      }

      const duration = target > 100 ? 1350 : 900;
      let startTime: number | undefined;
      const tick = (time: number) => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        run();
      }
    }, { threshold: .55 });
    observer.observe(current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [isNumeric, target, value]);

  return <strong ref={element} aria-label={value} className={`stat-value ${ready ? "is-ready" : ""} ${className}`.trim()}><span aria-hidden="true">{display}{isNumeric ? suffix : ""}</span></strong>;
}
