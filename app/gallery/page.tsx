import { Gallery } from "../Gallery";
import { StickyNav } from "../StickyNav";

export default function GalleryPage() {
  return <main className="route-page"><StickyNav alwaysSolid /><section className="gallery-section section-shell route-intro"><div className="section-index">Project gallery</div><div className="split-heading"><div><p className="section-kicker">Supplied field archive</p><h1>Evidence from<br /><span>the field.</span></h1></div><p>All 73 project photographs extracted from the supplied company portfolio are included. Multi-image source pages are represented as individual gallery records where available.</p></div><Gallery /></section></main>;
}
