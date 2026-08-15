import { Gallery } from "./Gallery";

const services = [
  {
    number: "01",
    title: "Demolition & Decommissioning",
    description: "Building and industrial demolition, controlled dismantling, concrete cutting, structural removal and complete site restoration.",
    details: ["Structural demolition", "Concrete cutting", "Asset recovery"],
  },
  {
    number: "02",
    title: "Excavation & Earthworks",
    description: "Bulk excavation, cut-and-fill, foundation works, ground clearing, grading and site preparation for demanding programmes.",
    details: ["Bulk excavation", "Cut and fill", "Site levelling"],
  },
  {
    number: "03",
    title: "Marine Works",
    description: "Shoreline protection, harbour works, underwater concrete removal and specialist waterfront support using project-specific equipment.",
    details: ["Shoreline protection", "Underwater removal", "Harbour support"],
  },
  {
    number: "04",
    title: "Transport & Waste",
    description: "Construction-waste transport, organic-waste transport, debris removal and coordinated haulage across Abu Dhabi and the UAE.",
    details: ["C&D waste", "Haulage support", "Debris clearance"],
  },
  {
    number: "05",
    title: "Construction Support",
    description: "Metal construction contracting, foundation excavation, piling support and field services for onshore and offshore facilities.",
    details: ["Metal construction", "Piling support", "Field services"],
  },
  {
    number: "06",
    title: "Technical Supply",
    description: "Oil and gas field equipment, devices and spare parts, e-gates, barriers, importing and commercial agency support.",
    details: ["Oilfield equipment", "Spare parts", "E-gates & barriers"],
  },
];

const projects = [
  {
    title: "ADNEC Demolition",
    location: "Abu Dhabi",
    image: "/gallery/gallery-009-p08-01.jpg",
    scope: "Phases 1 to 4",
    description: "Multi-phase demolition, concrete breaking, structural removal and debris-clearing operations at the Abu Dhabi National Exhibition Centre.",
  },
  {
    title: "Mina Plaza",
    location: "Mina Zayed, Abu Dhabi",
    image: "/gallery/gallery-028-p24-01.jpg",
    scope: "High-rise demolition",
    description: "Demolition support associated with the Mina Plaza development, backed by documented project photography and specialist heavy equipment.",
  },
  {
    title: "Marine Removal Works",
    location: "Mina Zayed Harbour",
    image: "/gallery/gallery-049-p39-01.jpg",
    scope: "Underwater concrete removal",
    description: "Waterfront operations involving removal of heavy concrete blocks using excavators, cranes and lifting arrangements along the harbour edge.",
  },
  {
    title: "Al Ain Ground Works",
    location: "Al Ain",
    image: "/gallery/gallery-070-p55-01.jpg",
    scope: "Cut, fill & excavation",
    description: "Earthworks, demolition, excavation and site preparation across multiple work areas, supported by loaders, excavators and transport vehicles.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <header className="site-header">
          <a className="brand" href="#home" aria-label="PMTE home">
            <img src="/pmte-logo-white.png" alt="PMTE" />
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">Company</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
          </nav>
          <a className="header-contact" href="#contact">Contact us</a>
        </header>

        <div className="hero-content">
          <p className="eyebrow"><span /> Abu Dhabi, United Arab Emirates</p>
          <h1>Built for the work<br />others step away from.</h1>
          <p className="hero-copy">
            Three decades of demolition, earthworks, marine operations and
            construction support - delivered with disciplined teams and serious equipment.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">Explore our work <span>↗</span></a>
            <a className="text-action" href="#about">Discover PMTE <span>↓</span></a>
          </div>
        </div>

        <div className="hero-stats" aria-label="Company highlights">
          <div><strong>30+</strong><span>Years operating</span></div>
          <div><strong>25+</strong><span>Heavy machines</span></div>
          <div><strong>165m</strong><span>Record demolition</span></div>
          <div><strong>UAE</strong><span>Nationwide reach</span></div>
        </div>
      </section>

      <section className="intro-section section-shell" id="about">
        <div className="section-heading">
          <p className="section-kicker">Petroleum Machinery & Technical Equipment</p>
          <h2>Heavy capability.<br /><em>Precise execution.</em></h2>
        </div>
        <div className="intro-copy">
          <p className="lead">
            Since 1994, PMTE has supported government and private-sector projects
            across Abu Dhabi and the UAE with experienced people, specialist equipment,
            and an uncompromising focus on safe delivery.
          </p>
          <p>
            Our work spans demolition, excavation, earthworks, marine operations,
            waste transportation, metal construction and oil and gas field support.
            We mobilise practical teams and fit-for-purpose machinery around each project.
          </p>
          <a className="inline-link" href="/PMTE-Company-Portfolio-2026.pdf" download>Download company profile <span>↓</span></a>
        </div>
        <div className="company-facts">
          <div><span>Established</span><strong>19 January 1994</strong></div>
          <div><span>Economic licence</span><strong>CN-1026538</strong></div>
          <div><span>ADCCI membership</span><strong>12700</strong></div>
          <div><span>Head office</span><strong>Musaffah, Abu Dhabi</strong></div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-shell">
          <div className="section-heading light-heading split-heading">
            <div>
              <p className="section-kicker">Core capabilities</p>
              <h2>One contractor.<br /><em>Multiple disciplines.</em></h2>
            </div>
            <p>Integrated field capability for complex sites, compressed programmes and high-consequence work.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">Selected project experience</p>
            <h2>Work that leaves<br /><em>a clear mark.</em></h2>
          </div>
          <p>Documented experience across exhibition, urban redevelopment, harbour and major site-development environments.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.title}>
              <img src={project.image} alt={`${project.title} project`} loading="lazy" />
              <div className="project-overlay" />
              <div className="project-copy">
                <span>{project.location}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.scope}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="record-section">
        <div className="record-photo" aria-hidden="true" />
        <div className="record-content">
          <p className="section-kicker">Recognised achievement</p>
          <span className="record-height">165.032<small>metres</small></span>
          <h2>Part of a Guinness World Records controlled-demolition achievement.</h2>
          <p>
            PMTE was named as an associated contractor on the record for the tallest
            building demolished using explosives, achieved in Abu Dhabi on 27 November 2020.
          </p>
        </div>
      </section>

      <section className="fleet-section section-shell" id="fleet">
        <div className="fleet-copy">
          <p className="section-kicker">Fleet & equipment</p>
          <h2>Built around<br /><em>real site demands.</em></h2>
          <p>
            PMTE&apos;s source profile records more than 25 heavy vehicles and machines,
            supported by specialist demolition, cutting, lifting and marine equipment.
          </p>
          <ul className="equipment-list">
            <li>Excavators & demolition attachments</li>
            <li>Wheel loaders & graders</li>
            <li>Mobile cranes & lifting support</li>
            <li>Dump trucks & haulage vehicles</li>
            <li>Concrete cutting & asphalt sawing</li>
            <li>Fuel tankers, trailers & marine support</li>
          </ul>
        </div>
        <div className="fleet-images">
          <img src="/gallery/gallery-047-p38-01.jpg" alt="PMTE mobile crane" loading="lazy" />
          <img src="/gallery/gallery-048-p38-02.jpg" alt="PMTE material handling equipment" loading="lazy" />
          <img src="/gallery/gallery-041-p35-01.jpg" alt="PMTE excavator on demolition site" loading="lazy" />
        </div>
      </section>

      <section className="assurance-section">
        <div className="section-shell assurance-grid">
          <div className="assurance-intro">
            <p className="section-kicker">HSE & quality</p>
            <h2>Control the risk.<br /><em>Protect the result.</em></h2>
            <p>Our documented approach centres on safe working conditions, equipment integrity, pollution prevention, legal compliance and continuous improvement.</p>
          </div>
          <div className="assurance-pillars">
            <article><span>01</span><h3>Safety</h3><p>Protect people and the public through training, supervision, equipment checks and incident learning.</p></article>
            <article><span>02</span><h3>Environment</h3><p>Control impacts, minimise pollution and waste, and apply responsible transport and disposal practices.</p></article>
            <article><span>03</span><h3>Quality</h3><p>Meet agreed specifications through documented procedures, field controls and continual improvement.</p></article>
          </div>
          <div className="credential-band">
            <div><strong>CN-1026538</strong><span>Economic licence</span></div>
            <div><strong>PMT-26-20659</strong><span>Waste permit</span></div>
            <div><strong>D12-2026-1026538-LR1</strong><span>Demolition classification</span></div>
            <div><strong>12700</strong><span>Chamber membership</span></div>
          </div>
        </div>
      </section>

      <section className="gallery-section section-shell" id="gallery">
        <div className="section-heading split-heading gallery-heading">
          <div>
            <p className="section-kicker">Project gallery</p>
            <h2>From the field.<br /><em>Not the drawing board.</em></h2>
          </div>
          <p>Every project photograph supplied in the original company portfolio is represented in this gallery, including multi-image field records.</p>
        </div>
        <Gallery />
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-lead">
            <p className="section-kicker">Start a conversation</p>
            <h2>Bring us the<br /><em>hard part.</em></h2>
            <p>Discuss demolition, earthworks, marine, transport or technical requirements with the PMTE team in Abu Dhabi.</p>
          </div>
          <div className="contact-details">
            <div><span>Telephone</span><a href="tel:+97126337709">+971 2 633 7709</a><a href="tel:+97126756339">+971 2 675 6339</a></div>
            <div><span>Mobile</span><a href="tel:+971508134134">+971 50 813 4134</a></div>
            <div><span>Email</span><a href="mailto:petrolum@emirates.net.ae">petrolum@emirates.net.ae</a><a href="mailto:petrloum_mach@yahoo.com">petrloum_mach@yahoo.com</a></div>
            <div><span>Address</span><p>Musaffah, P.O. Box 2543<br />Abu Dhabi, United Arab Emirates</p></div>
          </div>
        </div>
        <footer>
          <img src="/pmte-logo-white.png" alt="PMTE" />
          <p>Petroleum Machinery and Technical Equipment - L.L.C. - S.P.C.</p>
          <a href="#home">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
