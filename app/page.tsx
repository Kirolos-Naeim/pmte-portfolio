import { Drill, FolderKanban, Fuel, Hammer, MapPinned, PackageSearch, Tractor, Truck, Waves, Wrench } from "lucide-react";
import { MotionEffects } from "./MotionEffects";
import { StickyNav } from "./StickyNav";
import { CertificateLibrary } from "./CertificateLibrary";
import { StatsValue } from "./StatsValue";

const capabilities = [
  { code: "01", title: "Demolition & Decommissioning", href: "/demolition-company-abu-dhabi", Icon: Hammer, copy: "Structural demolition, controlled dismantling, building removal and decommissioning support for urban and industrial sites." },
  { code: "02", title: "Excavation & Earthworks", href: "/earthworks-excavation-abu-dhabi", Icon: Tractor, copy: "Bulk excavation, cut-and-fill, site grading, foundation excavation, ground clearing and preparation." },
  { code: "03", title: "Marine Works", href: "/marine-works-abu-dhabi", Icon: Waves, copy: "Harbour and shoreline support, underwater concrete-block removal, rock arrangement and specialist waterfront operations." },
  { code: "04", title: "Concrete & Asphalt Removal", Icon: Drill, copy: "Concrete cutting, structural sawing, asphalt removal and controlled breaking for precise alteration and clearance work." },
  { code: "05", title: "Waste Transportation", Icon: Truck, copy: "Construction-waste transport, debris clearing, organic-waste transport and coordinated haulage to approved facilities." },
  { code: "06", title: "Metal Construction", Icon: Wrench, copy: "Metal construction contracting and practical site support aligned with approved project requirements." },
  { code: "07", title: "Oil & Gas Field Services", Icon: Fuel, copy: "Support services for onshore and offshore fields, installations and facilities within the company’s licensed activity scope." },
  { code: "08", title: "Equipment & Technical Supply", href: "/demolition-equipment-uae", Icon: PackageSearch, copy: "Oilfield equipment, devices, spare parts, barriers, e-gates and related technical-supply support." },
];

const projects = [
  { title: "ADNEC · Phases 1–4", href: "/projects/adnec-demolition-phases", location: "Abu Dhabi", scope: "Multi-phase demolition and removal", sector: "Exhibition & events", image: "/assets/projects/gallery-015-p15-01.jpg" },
  { title: "Mina Plaza Demolition", href: "/projects/mina-plaza-demolition", location: "Mina Zayed, Abu Dhabi", scope: "Controlled high-rise demolition support", sector: "Urban redevelopment", image: "/assets/projects/mina-plaza-aerial-before-demolition.jpg" },
  { title: "KMART Abu Dhabi", location: "Abu Dhabi", scope: "Building demolition and clearance", sector: "Commercial", image: "/assets/projects/gallery-025-p21-01.jpg" },
  { title: "Mina Zayed Buildings", location: "Mina Zayed, Abu Dhabi", scope: "Building removal and site levelling", sector: "Urban redevelopment", image: "/assets/projects/gallery-035-p28-01.jpg" },
  { title: "Mina Zayed Harbour", location: "Abu Dhabi", scope: "Underwater concrete-block removal", sector: "Marine", image: "/assets/projects/gallery-049-p39-01.jpg" },
  { title: "Shoreline Rock Arrangement", location: "Abu Dhabi", scope: "Shoreline arrangement and marine support", sector: "Marine", image: "/assets/projects/gallery-051-p40-01.jpg" },
  { title: "Saadiyat Bridge Wall", location: "Saadiyat, Abu Dhabi", scope: "Wall demolition", sector: "Infrastructure", image: "/assets/projects/gallery-027-p23-01.jpg" },
  { title: "Saif Bin Darwish Warehouse", location: "Abu Dhabi", scope: "Warehouse demolition", sector: "Industrial", image: "/assets/projects/gallery-026-p22-01.jpg" },
  { title: "Al Ain Zoo", location: "Al Ain", scope: "Cut, fill, demolition and excavation", sector: "Public realm", image: "/assets/projects/gallery-069-p54-01.jpg" },
  { title: "Fisherman’s Wharf · Phase 1B", location: "Mina Zayed, Abu Dhabi", scope: "Demolition and foundation removal", sector: "Waterfront redevelopment", image: "/assets/projects/gallery-052-p40-02.jpg" },
  { title: "Regional Ground Works", location: "Madinat Zayed · Ghayathi · Al Ain", scope: "Ground works and site preparation", sector: "Infrastructure", image: "/assets/projects/gallery-060-p45-01.jpg" },
  { title: "ADEC School Works", location: "Abu Dhabi", scope: "School demolition and removal work", sector: "Education", image: "/assets/projects/gallery-055-p42-01.jpg" },
];

const equipment = ["Excavators", "Wheel loaders", "Mobile cranes", "Graders", "Dump trucks", "Trailers", "Cutting equipment", "Demolition attachments"];

const credentials = [
  { name: "Economic licence", issue: "09 Jun 2026", expiry: "24 Jun 2027", status: "Current", tone: "current" },
  { name: "Chamber membership", issue: "09 Jun 2026", expiry: "24 Jun 2027", status: "Current", tone: "current" },
  { name: "Waste-management permit", issue: "09 Jun 2026", expiry: "26 Jun 2027", status: "Current", tone: "current" },
  { name: "Civil Defence certificate", issue: "09 Jul 2026", expiry: "08 Jul 2027", status: "Current", tone: "current" },
  { name: "Engineering classification", issue: "11 Jun 2026", expiry: "15 Jan 2028", status: "Current", tone: "current" },
];

const clients = [
  { name: "Sheikh Shakhbout Medical City", image: "/assets/clients/SSMC_logo_abu_dhabi.svg" },
  { name: "PureHealth", image: "/assets/clients/PureHealth_logo.png" },
  { name: "Abu Dhabi Media", image: "/assets/clients/abu-dhabi-media.png" },
  { name: "Aldar", image: "/assets/clients/aldar.png" },
  { name: "Abu Dhabi Investment Office", image: "/assets/clients/adio.png" },
  { name: "Eagle Hills", image: "/assets/clients/EagelHills.png" },
  { name: "Finance House", image: "/assets/clients/finance_ouse.png" },
  { name: "Modon", image: "/assets/clients/modon.png" },
];

const certificateLibrary = [
  { name: "Capacity and energy classification certificate · 2026", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQA1HtadzkveRY4CDj2WG6n2AdRvcMPv4KCU7W2Ie6Qco4E?e=gL2evX", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQQ1HtadzkveRY4CDj2WG6n2ASAM6ARJ41544pYsBYTHjpc" },
  { name: "Chamber of Commerce certificate · 2027", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQD3UoDfHYvfSZpYOWuQ5a-nAREpyhuJhG7IExsCnQDtc3M?e=zVjVfO", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQT3UoDfHYvfSZpYOWuQ5a-nAfFAM1EXphUBD1LN5Y22vxQ" },
  { name: "Civil Defence compliance certificate · 2027", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQC7N38mfqFWSLuOmUySDf6SAUZt1jAqHc8XScTHWU7tAo8?e=NwDSOT", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQS7N38mfqFWSLuOmUySDf6SAT8v-ujEJR09-6_eVGRZT10" },
  { name: "Commercial registration certificate · 2027", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQCOaVhGb_i0T5x-gcBC67jfAXwtN-RuS3uM5X-pRfmGtFM?e=9ouMEo", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQSOaVhGb_i0T5x-gcBC67jfAQF4BgM9CABeCWubo6pJsPQ" },
  { name: "Demolition activity classification certificate · 2028", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQB-SY23sS7TSqAP55XlSYNOAYWc9WLxC3taqFtbIuC3Dc4?e=N3rMnL", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQR-SY23sS7TSqAP55XlSYNOAQYTKsVniiw1ilsvBQMsgno" },
  { name: "VAT registration certificate", href: "https://1drv.ms/b/c/2cea8bedd36ce876/IQA3FYDDKjEtS5udgvN5VNB1AQRxIcjxGprlvPZydKKwN9o?e=oKAihe", embed: "https://1drv.ms/b/c/2cea8bedd36ce876/IQQ3FYDDKjEtS5udgvN5VNB1AfRMO6lW6Um3iLE0btXbEro" },
];

const guinnessCertificateLink = "https://1drv.ms/i/c/2cea8bedd36ce876/IQAhnohx_Wi2S5S_AuzjGkhEAXaBg5D4Chhjpz3yLxJvHcw?e=lDWe8M";
const guinnessEmbedImage = "https://1drv.ms/i/c/2cea8bedd36ce876/IQQhnohx_Wi2S5S_AuzjGkhEAdqq9VGju85KFsaRy6QAnlQ?width=2069&height=3113";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <MotionEffects />
      <section className="hero print-cover" id="home">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="portfolio-tag"><span>Company Portfolio</span><b>2026</b></p>
          <p className="eyebrow"><span /> Established 1994 · Abu Dhabi, UAE</p>
          <h1>Demolition Company<br /><span>in Abu Dhabi, UAE.</span></h1>
          <p className="hero-copy">Controlled demolition, heavy equipment, earthworks and marine works since 1994.</p>
          <div className="hero-actions"><a className="primary-action" href="#projects">View project experience <FolderKanban className="action-icon" aria-hidden="true" /></a><a className="text-action" href="/about">Company overview <span>→</span></a></div>
        </div>
        <div className="hero-stats" aria-label="Company highlights">
          <div><StatsValue value="1994" /><span className="stat-label">Established</span></div><div><StatsValue value="30+" /><span className="stat-label">Years of operation</span></div><div><StatsValue value="8" /><span className="stat-label">Licensed activities</span></div><div><StatsValue value="25+" /><span className="stat-label">Fleet recorded in source profile</span></div>
        </div>
      </section>

      <section className="capabilities-section print-page" id="services"><div className="section-shell">
        <div className="section-index light">02 · Core capabilities</div>
        <div className="split-heading light-heading"><div><p className="section-kicker">Integrated site support</p><h2>One accountable<br /><span>field partner.</span></h2></div><p>Licensed activities and documented delivery experience organised around demanding UAE construction, demolition and waterfront environments.</p></div>
        <div className="capability-grid">{capabilities.map((item) => <article className="capability-card" key={item.code}><span className="capability-code">{item.code}</span><item.Icon className="capability-icon" aria-hidden="true" /><h3>{item.href ? <a href={item.href}>{item.title}</a> : item.title}</h3><p>{item.copy}</p></article>)}</div>
      </div></section>

      <section className="projects-section section-shell print-page" id="projects">
        <div className="section-index">03 · Featured projects</div>
        <div className="split-heading"><div><p className="section-kicker">Selected experience</p><h2>Documented work.<br /><span>Defined scope.</span></h2></div><p>Project names and scopes reflect the supplied company portfolio. No contract values, completion percentages or performance metrics have been added.</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} project photograph`} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></div><div className="project-body"><p>{project.sector}</p><h3>{project.href ? <a href={project.href}>{project.title}</a> : project.title}</h3><dl><div><dt>Location</dt><dd>{project.location}</dd></div><div><dt>Scope</dt><dd>{project.scope}</dd></div></dl></div></article>)}</div>
      </section>

      <section className="clients-section" id="clients"><div className="section-shell">
        <div className="section-index light">04 · Selected client experience</div>
        <div className="split-heading light-heading"><div><p className="section-kicker">Past client portfolio</p><h2>Trusted across<br /><span>Abu Dhabi.</span></h2></div><p>Organisations supplied by PMTE as past client and project-experience references. Engagement details remain project-specific and confidential.</p></div>
        <div className="client-grid">{clients.map((client) => <article className="client-card" key={client.name}><img src={client.image} alt={`${client.name} logo`} loading="lazy" /></article>)}</div>
      </div></section>

      <section className="record-section print-page" id="achievement"><div className="record-photo" aria-hidden="true" /><div className="record-shade" aria-hidden="true" /><div className="record-content"><p className="section-kicker">Major achievement · 27 November 2020</p><p className="record-number">165.032 <span>metres</span></p><h2>Associated with a Guinness World Records controlled-demolition achievement.</h2><p>PMTE was associated with Modon Properties on the controlled demolition of a 165.032-metre building in Abu Dhabi on 27 November 2020. This statement identifies PMTE as an associated contractor and does not imply that PMTE was the sole record holder.</p><a className="record-evidence-link" href="#credentials">View supporting certificate <span aria-hidden="true">↓</span></a></div></section>

      <section className="fleet-section section-shell print-page" id="fleet">
        <div className="section-index">04 · Fleet & equipment</div>
        <div className="fleet-top"><div className="section-title"><p className="section-kicker">Project-specific mobilisation</p><h2>Equipment matched<br /><span>to the work.</span></h2></div><div className="fleet-copy"><p>The supplied profile records more than 25 vehicles and machines. Quantities, performance ratings and specifications are intentionally not stated where the source evidence does not confirm them.</p><div className="verified-models"><article><span>Verified model</span><strong>LiuGong 856H</strong><p>Wheel loader</p></article><article><span>Verified model</span><strong>Caterpillar 340 D2 L</strong><p>Excavator</p></article></div></div></div>
        <div className="equipment-strip"><img src="/assets/equipment/excavator-demolition.jpg" alt="Excavator operating on a demolition site" loading="lazy" /><img src="/assets/equipment/mobile-crane.jpg" alt="Mobile crane used for lifting operations" loading="lazy" /><img src="/assets/equipment/material-handling.jpg" alt="PMTE material-handling equipment" loading="lazy" /><img src="/assets/equipment/lifting-operations.jpg" alt="Heavy lifting operation" loading="lazy" /></div>
        <ul className="equipment-list" aria-label="Equipment categories">{equipment.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
      </section>

      <section className="assurance-section print-page" id="hse"><div className="section-shell">
        <div className="section-index light">05 · HSE & quality</div>
        <div className="split-heading light-heading"><div><p className="section-kicker">Three operating pillars</p><h2>Control risk.<br /><span>Protect outcomes.</span></h2></div><p>The source portfolio documents policies covering health and safety, environmental responsibility and quality management.</p></div>
        <div className="pillar-grid"><article><div className="pillar-icon">S</div><span>01</span><h3>Health & Safety</h3><p>Plan activities, supervise field work, maintain equipment integrity and reinforce responsibility for people and the public.</p></article><article><div className="pillar-icon">E</div><span>02</span><h3>Environment</h3><p>Control site impacts, prevent pollution and support responsible transport, handling and disposal practices.</p></article><article><div className="pillar-icon">Q</div><span>03</span><h3>Quality</h3><p>Work to agreed scope and specifications through documented controls, coordination and continual improvement.</p></article></div>
      </div></section>

      <section className="credentials-section section-shell print-page" id="credentials">
        <div className="section-index">06 · Licences & compliance</div>
        <div className="split-heading"><div><p className="section-kicker">Credential register</p><h2>Current status.<br /><span>Clear dates.</span></h2></div><p>Status is shown against the dates in the supplied portfolio and the preparation date of this document. Credentials must be revalidated before every formal submission.</p></div>
        <div className="credential-table-wrap"><table className="credential-table"><thead><tr><th>Credential</th><th>Issue date</th><th>Expiry date</th><th>Status</th></tr></thead><tbody>{credentials.map((row) => <tr key={row.name}><td data-label="Credential">{row.name}</td><td data-label="Issue date">{row.issue}</td><td data-label="Expiry date">{row.expiry}</td><td data-label="Status"><span className={`status ${row.tone}`}>{row.status}</span></td></tr>)}</tbody></table></div>
        <details className="credential-appendix" open><summary>Appendix · regulatory reference numbers</summary><div className="appendix-grid"><p><span>Economic licence</span>CN-1026538</p><p><span>Chamber membership</span>12700</p><p><span>Waste-management permit</span>PMT-26-20659</p><p><span>Engineering classification</span>D12-2026-1026538-LR1</p><p><span>Unified licence</span>501-1994-100012220</p><p><span>Unified registration</span>101-2021-100053155</p><p><span>Commercial registry</span>6586082</p><p><span>Paid capital</span>AED 100,000</p></div></details><CertificateLibrary certificates={certificateLibrary} guinnessImage={guinnessEmbedImage} />
      </section>

      <section className="leadership-section print-page" id="leadership"><div className="section-shell leadership-grid"><div><div className="section-index light">07 · Leadership & company details</div><p className="section-kicker">Accountable management</p><h2>Abu Dhabi<br /><span>owned and managed.</span></h2></div><div className="leadership-card"><span>Owner & manager</span><h3>Jasem Ahmed Abdulla Almale Almarzooqi</h3><dl><div><dt>Legal form</dt><dd>Limited Liability Company · Single Person Company (L.L.C. - S.P.C.)</dd></div><div><dt>Legal name</dt><dd>Petroleum Machinery and Technical Equipment - L.L.C. - S.P.C.</dd></div><div><dt>Established</dt><dd>19 January 1994</dd></div><div><dt>Head office</dt><dd>Musaffah, Abu Dhabi, UAE</dd></div></dl></div></div></section>

      <section className="contact-section print-page" id="contact"><div className="contact-inner"><div className="contact-heading"><p className="section-kicker">Petroleum Machinery and Technical Equipment</p><h2>Discuss your<br /><span>project scope.</span></h2><p>Demolition · Earthworks · Marine Works · Industrial Support</p></div><div className="contact-grid"><article><span>Telephone</span><a href="tel:+97126337709">+971 2 633 7709</a><a href="tel:+97126756339">+971 2 675 6339</a></article><article><span>Mobile</span><a href="tel:+971508134134">+971 50 813 4134</a></article><article><span>Current email</span><a href="mailto:petrolum@emirates.net.ae">petrolum@emirates.net.ae</a><a href="mailto:petrloum_mach@yahoo.com">petrloum_mach@yahoo.com</a></article><article><span>Location</span><p>Al Madeenah As Sina'iyah 3 St<br />Musaffah M36, Abu Dhabi, UAE<br />P.O. Box 2543</p><a className="map-link" href="https://maps.app.goo.gl/kN36cj9PTJE3rwJk9" target="_blank" rel="noreferrer">Open directions <MapPinned className="action-icon" aria-hidden="true" /></a></article><article className="map-card"><iframe title="PMTE location in Musaffah M36, Abu Dhabi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.0880547499896!2d54.49491857591019!3d24.34342516575067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41f83e053da5%3A0xe7d672e0a68c5376!2sPetroleum%20Machinery%20and%20technical%20equipment(PMTE)!5e0!3m2!1sen!2sae!4v1787657563229!5m2!1sen!2sae" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></article></div></div><footer><img className="pmte-logo" src="/assets/logo/pmte-logo-primary.png" alt="PMTE" /><p>Petroleum Machinery and Technical Equipment - L.L.C. - S.P.C.</p><p>Made by Kirolos Naeim</p><a href="#home">Back to top ↑</a></footer></section>
    </main>
  );
}
