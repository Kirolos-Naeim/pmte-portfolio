import { FileDown } from "lucide-react";
import { StatsValue } from "../StatsValue";
import { StickyNav } from "../StickyNav";

const facts = [["1994", "Establishment year"], ["Public + private", "Project sectors"], ["8", "Licensed activities"], ["25+", "Vehicles and machines recorded in the source profile"]];

export default function AboutPage() {
  return <main className="route-page">
    <StickyNav alwaysSolid />
    <section className="overview-section section-shell route-intro"><div className="section-index">01 · Company overview</div><div className="overview-grid"><div className="section-title"><p className="section-kicker">Abu Dhabi · Since 1994</p><h1>Three decades of<br /><span>field capability.</span></h1></div><div className="overview-copy"><p className="lead">Petroleum Machinery and Technical Equipment - L.L.C. - S.P.C. (PMTE) is an Abu Dhabi contractor supporting complex demolition, earthworks, marine and industrial assignments.</p><p>Established on 19 January 1994, the company has documented experience with government and private-sector clients across exhibition facilities, urban redevelopment, waterfront environments, education assets and regional site works.</p><p>PMTE combines practical site teams, project-specific machinery and coordinated transport support to deliver defined scopes safely and methodically.</p><a className="document-link" href="/PMTE-Company-Portfolio-2026.pdf" download>Download A4 company portfolio <FileDown className="action-icon" aria-hidden="true" /></a></div></div><div className="fact-grid" aria-label="Company statistics">{facts.map(([value, label]) => <article key={label}><StatsValue value={value} /><span className="stat-label">{label}</span></article>)}</div></section>
    <section className="leadership-section"><div className="section-shell leadership-grid"><div><div className="section-index light">02 · Leadership & company details</div><p className="section-kicker">Accountable management</p><h2>Abu Dhabi<br /><span>owned and managed.</span></h2></div><div className="leadership-card"><span>Owner & manager</span><h3>Jasem Ahmed Abdulla Almale Almarzooqi</h3><dl><div><dt>Legal form</dt><dd>Limited Liability Company · Single Person Company (L.L.C. - S.P.C.)</dd></div><div><dt>Legal name</dt><dd>Petroleum Machinery and Technical Equipment - L.L.C. - S.P.C.</dd></div><div><dt>Established</dt><dd>19 January 1994</dd></div><div><dt>Head office</dt><dd>Musaffah, Abu Dhabi, UAE</dd></div></dl></div></div></section>
  </main>;
}
