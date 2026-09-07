"use client";

import { useEffect, useState } from "react";
import { OptimizedImage } from "./OptimizedImage";

type DataSavingNavigator = Navigator & {
  connection?: { saveData?: boolean };
};

export function HeroMedia({ locale = "en" }: { locale?: "en" | "ar" }) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as DataSavingNavigator).connection;
    const updatePreference = () => {
      setShowVideo(!motionPreference.matches && !connection?.saveData);
    };

    updatePreference();
    motionPreference.addEventListener("change", updatePreference);
    return () => motionPreference.removeEventListener("change", updatePreference);
  }, []);

  const alt = locale === "ar"
    ? "حفارة هدم ثقيلة في موقع صناعي بأبوظبي"
    : "Heavy demolition excavator at an industrial site in Abu Dhabi";

  return (
    <div className="hero-media">
      <OptimizedImage
        className="hero-poster"
        src="/hero.jpg"
        alt={alt}
        fetchPriority="high"
        loading="eager"
        widths={[768, 1280, 1920]}
        quality={88}
      />
      {showVideo ? (
        <video
          className={`hero-video${videoReady ? " is-ready" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero.jpg"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/assets/video/demolition-hero-720p.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
