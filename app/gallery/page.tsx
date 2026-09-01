import type { Metadata } from "next";
import { Gallery } from "../Gallery";
import { StickyNav } from "../StickyNav";

export const metadata: Metadata = {
  title: "Demolition Project Gallery Abu Dhabi",
  description: "View PMTE demolition, earthworks, marine works and heavy-equipment project photographs from Abu Dhabi and documented UAE assignments.",
  alternates: { canonical: "/gallery", languages: { "en-AE": "/gallery", "ar-AE": "/ar/gallery", "x-default": "/gallery" } },
  openGraph: { title: "PMTE Demolition Project Gallery Abu Dhabi", description: "Documented demolition, earthworks, marine and heavy-equipment project photographs.", url: "/gallery", images: ["/assets/projects/mina-plaza-demolition-excavator.jpg"] },
};

export default function GalleryPage() {
  return <main className="route-page"><StickyNav alwaysSolid /><section className="gallery-section section-shell route-intro"><div className="section-index">Project gallery</div><div className="split-heading"><div><p className="section-kicker">Supplied field archive</p><h1>Evidence from<br /><span>the field.</span></h1></div><p>All 73 project photographs extracted from the supplied company portfolio are included. Multi-image source pages are represented as individual gallery records where available.</p></div><Gallery /></section></main>;
}
