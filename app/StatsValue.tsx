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
  const [display, setDisplay] = useState(isNumeric ? 0 : value);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = element.current;
    if (!current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = () => {
      setReady(true);
      if (!isNumeric || reduceMotion) {
        setDisplay(value);
        return;
      }

      const duration = target > 100 ? 1350 : 900;
      let startTime: number | undefined;
      let frame = 0;
      const tick = (time: number) => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        run();
      }
    }, { threshold: .55 });
    observer.observe(current);
    return () => observer.disconnect();
  }, [isNumeric, target, value]);

  return <strong ref={element} className={`stat-value ${ready ? "is-ready" : ""} ${className}`.trim()}>{display}{isNumeric ? suffix : ""}</strong>;
}
