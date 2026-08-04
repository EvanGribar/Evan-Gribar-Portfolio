import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const projects = [
  {
    number: '01',
    title: 'SemVerge',
    eyebrow: 'Release automation · Open source',
    description: 'A GitHub Action that turns change detection into a repeatable release path, from version selection and readiness checks to release notes and publishing.',
    details: ['TypeScript', 'GitHub Action', 'Semantic versioning', 'Deterministic releases'],
    link: 'https://github.com/EvanGribar/semverge',
    linkLabel: 'Explore SemVerge',
    visual: 'release',
  },
  {
    number: '02',
    title: 'Swarm Review',
    eyebrow: 'GitHub Action · Open source',
    description: 'A multi-agent code review system where specialized reviewers inspect a pull request, debate their findings, and deliver one principal-level decision.',
    details: ['Multi-agent review', 'Structured debate', 'GitHub Actions', 'Provider agnostic'],
    link: 'https://github.com/EvanGribar/Swarm-Review',
    linkLabel: 'Explore Swarm Review',
    visual: 'swarm',
  },
]

const credentials = [
  ['2026', 'Lean Six Sigma White Belt', 'CSSC'],
  ['2026', 'Project Management Fundamentals', 'IBM'],
  ['2026', 'Data Fundamentals', 'IBM'],
  ['2026', 'Enterprise Design Thinking Practitioner', 'IBM'],
  ['2026', 'Reporting Certification', 'HubSpot'],
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ type }) {
  if (type === 'release') {
    return (
      <div className="project-visual release-visual" aria-hidden="true">
        <div className="release-header">
          <span>RELEASE / MAIN</span>
          <span className="release-status"><i /> READY TO SHIP</span>
        </div>
        <div className="release-pipeline">
          <div className="release-stage">
            <span className="stage-number">01</span>
            <p className="stage-label">Detect changes</p>
            <div className="release-change"><b>PR #248</b><span>ship:feature</span></div>
            <div className="release-change"><b>PR #247</b><span>ship:fix</span></div>
          </div>
          <div className="release-stage">
            <span className="stage-number">02</span>
            <p className="stage-label">Choose version</p>
            <div className="release-version"><span>NEXT RELEASE</span><strong>v0.1.3</strong></div>
            <p className="release-note">MINOR + PATCH</p>
          </div>
          <div className="release-stage release-final-stage">
            <span className="stage-number">03</span>
            <p className="stage-label">Publish</p>
            <div className="release-count">01</div>
            <strong className="release-title">Release<br />ready</strong>
          <p className="release-copy">TAG + NOTES + VERIFIED + PUBLISHED</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual swarm-visual" aria-hidden="true">
      <div className="swarm-header">
        <span>PULL REQUEST / #248</span>
        <span className="review-status"><i /> REVIEW COMPLETE</span>
      </div>
      <div className="swarm-pipeline">
        <div className="swarm-stage review-stage">
          <span className="stage-number">01</span>
          <p className="stage-label">Independent review</p>
          <div className="review-agent"><b>SEC</b><span>2 findings</span></div>
          <div className="review-agent"><b>PERF</b><span>1 finding</span></div>
          <div className="review-agent"><b>ARCH</b><span>1 finding</span></div>
          <div className="review-agent"><b>DX</b><span>clear</span></div>
        </div>
        <div className="swarm-stage transcript-stage">
          <span className="stage-number">02</span>
          <p className="stage-label">Structured debate</p>
          <div className="transcript-row"><span>SEC / 01</span><strong>BLOCKING</strong></div>
          <p className="transcript-copy">Untrusted input reaches query construction.</p>
          <div className="transcript-row"><span>PERF / 02</span><strong>CONCUR</strong></div>
          <p className="transcript-copy">Low traffic does not reduce the risk.</p>
          <div className="debate-count"><span>ROUND</span><strong>02 / 02</strong></div>
        </div>
        <div className="swarm-stage decision-stage">
          <span className="stage-number">03</span>
          <p className="stage-label">Principal decision</p>
          <div className="decision-count">01</div>
          <strong className="decision-title">Blocking<br />finding</strong>
          <p className="decision-copy">MERGE HELD</p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const reduceMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="hero" id="top">
        <nav className="nav frame" aria-label="Primary navigation">
          <a className="monogram" href="#top" aria-label="Evan Gribar, home">EG<span>.</span></a>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="mobile-menu">
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="https://github.com/EvanGribar" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          </div>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
            <span className="sr-only">Toggle navigation</span><span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </nav>

        <div className="hero-content frame">
          <motion.div className="hero-kicker" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <span>Product systems / AI tooling</span><span>Pittsburgh · Tuscaloosa</span>
          </motion.div>
          <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span>Evan</span><span className="hero-name-shift">Gribar<span className="hero-period">.</span></span>
          </motion.h1>
          <div className="hero-bottom">
            <p>I build clear systems for messy problems across product, operations, and AI-assisted software.</p>
            <a className="round-link" href="#work" aria-label="View selected work"><Arrow /></a>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true"><div>PRODUCT THINKING · SYSTEM DESIGN · OPERATIONAL CLARITY · PRODUCT THINKING · SYSTEM DESIGN · OPERATIONAL CLARITY ·</div></div>
      </header>

      <main id="main">
        <section className="work-section frame" id="work">
          <div className="section-intro">
            <p className="section-label">Selected work / 2026</p>
            <h2>Built to make<br />judgment <em>visible.</em></h2>
            <p className="section-summary">Two open-source systems exploring how software teams reason about requirements, evidence, and review quality.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project-copy">
                  <div className="project-meta"><span>{project.number}</span><span>{project.eyebrow}</span></div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow diagonal /></a>
                </div>
                <ProjectVisual type={project.visual} />
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="frame about-grid">
            <div className="about-statement">
              <p className="section-label">About / approach</p>
              <h2>Business context.<br />Technical curiosity.<br /><em>Useful outcomes.</em></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">I’m a Management Information Systems and Business Cyber Security student at The University of Alabama. I’m interested in the space between a requirement and the system that has to deliver it.</p>
              <p>That means asking better questions, making the process legible, and shipping work that can be tested, not just presented.</p>
              <div className="education-card"><span className="card-index">EDU / 01</span><div><strong>The University of Alabama</strong><span>B.S. Management Information Systems</span><span>Business Cyber Security · GPA 3.7</span><span>2025-2029</span></div></div>
              <div className="education-card"><span className="card-index">EXP / 01</span><div><strong>Mystical Dream Travel</strong><span>Digital Operations &amp; Project Strategy Intern</span><span>North Huntingdon, Pennsylvania</span></div></div>
              <div className="education-card"><span className="card-index">LDR / 01</span><div><strong>Million Dollar Band</strong><span>Manager</span><span>Logistics for a 400+ member organization</span></div></div>
            </div>
          </div>
        </section>

        <section className="credentials-section frame" aria-labelledby="credentials-title">
          <div className="credentials-heading"><p className="section-label">Selected credentials</p><h2 id="credentials-title">Learning, applied.</h2></div>
          <div className="credential-list">
            {credentials.map(([year, title, issuer]) => <div className="credential-row" key={title}><span>{year}</span><strong>{title}</strong><span>{issuer}</span></div>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="frame contact-inner">
            <p className="section-label">Contact / open to opportunities</p>
            <h2>Have a problem worth solving?<br /><em>Let’s work through it.</em></h2>
            <div className="contact-links">
              <a href="mailto:ewgribar@crimson.ua.edu">Email me <Arrow diagonal /></a>
              <a href="https://www.linkedin.com/in/evangribar/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
              <a href="https://github.com/EvanGribar" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer frame"><span>© {new Date().getFullYear()} Evan Gribar</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
