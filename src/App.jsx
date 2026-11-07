import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SemvergeDemo from './demos/SemvergeDemo'
import SwarmReviewDemo from './demos/SwarmReviewDemo'

const projects = [
  {
    number: '01',
    title: 'SemVerge',
    eyebrow: 'Release automation · Open source',
    description: 'A GitHub Action for version selection, release readiness checks, release notes, and publication workflows.',
    details: ['TypeScript', 'GitHub Action', 'Semantic versioning', 'Deterministic releases'],
    link: 'https://github.com/EvanGribar/semverge',
    linkLabel: 'Explore SemVerge',
    visual: 'release',
  },
  {
    number: '02',
    title: 'Swarm Review',
    eyebrow: 'GitHub Action · Open source',
    description: 'A GitHub Action that runs independent AI reviews of a pull request, then combines findings into one review. Debate is optional.',
    details: ['TypeScript', 'GitHub Actions', 'Code review', 'Cost controls'],
    link: 'https://github.com/EvanGribar/Swarm-Review',
    linkLabel: 'Explore Swarm Review',
    visual: 'swarm',
  },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
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
            <span>Product · Technology · Operations</span><span>Pittsburgh, PA</span>
          </motion.div>
          <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span>Evan</span><span className="hero-name-shift">Gribar<span className="hero-period">.</span></span>
          </motion.h1>
          <div className="hero-bottom">
            <p>I'm an MIS student interested in product management, technology consulting, and building useful software.</p>
            <a className="round-link" href="#work" aria-label="View selected work"><Arrow /></a>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true"><div>PRODUCT · ENGINEERING · OPERATIONS · PRODUCT · ENGINEERING · OPERATIONS ·</div></div>
      </header>

      <main id="main">
        <section className="work-section frame" id="work">
          <div className="section-intro">
            <p className="section-label">Selected work / 2026</p>
            <h2>Selected<br /><em>projects.</em></h2>
            <p className="section-summary">Two open-source developer tools exploring safer releases and more useful pull request reviews.</p>
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
                <div className="project-visual project-demo" aria-label={`Illustrative demonstration of ${project.title}`}><span className="sr-only">Illustrative demonstration, not a live production run.</span>{project.visual === 'release' ? <SemvergeDemo /> : <SwarmReviewDemo />}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="frame about-grid">
            <div className="about-statement">
              <p className="section-label">About</p>
              <h2>Business and technology.<br /><em>In practice.</em></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">I study Management Information Systems and Business Cyber Security at The University of Alabama. I'm pursuing opportunities in product management and technology consulting.</p>
              <p>Alongside coursework, I've supported instruction, improved business websites and operations, and worked on large-team logistics. My side projects help me learn how software is designed, tested, and shipped.</p>
              <div className="education-card"><span className="card-index">EDU / 01</span><div><strong>The University of Alabama</strong><span>Management Information Systems · Business Cyber Security minor</span><span>2025–present · Planning to transfer to Pitt Business in Fall 2027</span></div></div>
              <div className="education-card"><span className="card-index">EXP / 01</span><div><strong>Mystical Dream Travel</strong><span>Digital Operations &amp; Project Strategy Intern · Summer 2026</span><span>Website improvement, mobile experience, and business operations</span></div></div>
              <div className="education-card"><span className="card-index">EXP / 02</span><div><strong>University of Alabama</strong><span>MIS 200 Teaching Assistant · Fall 2026</span><span>Supported coursework and assignment review for approximately 120 students</span></div></div>
              <div className="education-card"><span className="card-index">LDR / 01</span><div><strong>Million Dollar Band</strong><span>Band Manager · 2025–2026</span><span>Logistics support for a 400+ member organization</span></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="frame contact-inner">
            <p className="section-label">Contact</p>
            <h2>Interested in working together?<br /><em>Get in touch.</em></h2>
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
