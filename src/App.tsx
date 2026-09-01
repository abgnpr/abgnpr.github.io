import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import FlowMark from './components/FlowMark';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import { capabilityGroups, principles, projects } from './data/portfolio';

const navigation = [
  ['Work', '#work'],
  ['Approach', '#approach'],
  ['Capabilities', '#capabilities'],
  ['Contact', '#contact'],
] as const;

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const elements = heroRef.current?.querySelectorAll('[data-hero-reveal]');
    if (!elements?.length) {
      return;
    }

    animate(elements, {
      opacity: [0, 1],
      y: [20, 0],
      delay: stagger(85),
      duration: 650,
      ease: 'out(4)',
    });
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abhigyan Prakash home">
          <span>AP</span>
          <span className="brand__line" aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav id="site-navigation" className={isMenuOpen ? 'is-open' : undefined}>
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero" ref={heroRef}>
          <div className="hero__copy">
            <p className="eyebrow" data-hero-reveal>
              Backend engineer · Kolkata, India
            </p>
            <h1 data-hero-reveal>
              Legacy banking systems,
              <span>made safely reachable.</span>
            </h1>
            <p className="hero__summary" data-hero-reveal>
              I build the layer between modern applications and legacy banking systems:
              payment switches, protocol adapters and authorization-aware platforms
              where correctness matters.
            </p>
            <div className="hero__actions" data-hero-reveal>
              <a className="button button--primary" href="#work">
                Explore selected work <span aria-hidden="true">↘</span>
              </a>
              <a
                className="button button--quiet"
                href="mailto:abgnpr@gmail.com?subject=Portfolio%20enquiry"
              >
                Request résumé
              </a>
            </div>
          </div>
          <div className="hero__visual" data-hero-reveal>
            <p className="hero__visual-label">SYSTEM / INTERFACE / STATE</p>
            <FlowMark />
            <div className="hero__visual-caption">
              <span>modern client</span>
              <span>safe bridge</span>
              <span>banking rail</span>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Career proof points">
          <div>
            <strong>5+</strong>
            <span>years in production banking systems</span>
          </div>
          <div>
            <strong>2–3 lakh</strong>
            <span>UPI transactions per day</span>
          </div>
          <div>
            <strong>NPCI</strong>
            <span>certified IMPS switch</span>
          </div>
          <div>
            <strong>300</strong>
            <span>core-banking transaction types</span>
          </div>
        </section>

        <section id="work" className="section work-section">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Four builds, one integration discipline.</>}
            body="The work changes stack and scale. The underlying responsibility stays the same: make a critical legacy boundary safe to use."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.index} project={project} />
            ))}
          </div>
        </section>

        <section id="approach" className="section approach-section">
          <SectionHeading
            eyebrow="Engineering approach"
            title={<>Systems that cannot afford ambiguity.</>}
          />
          <div className="principles-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="section capabilities-section">
          <SectionHeading
            eyebrow="Focused capabilities"
            title={<>Depth where systems meet.</>}
            body="Tools support the work. The enduring skill is engineering reliable interfaces across modern and legacy estates."
          />
          <div className="capability-grid">
            {capabilityGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="career-section" aria-label="Career progression">
          <p className="eyebrow">Career snapshot</p>
          <p>
            Production support and legacy operations <span>→</span> payment-switch
            delivery <span>→</span> platform leadership and modern banking integration.
          </p>
        </section>

        <section id="contact" className="contact-section">
          <p className="eyebrow">Let’s build something dependable</p>
          <h2>Open to backend, payments and platform engineering roles.</h2>
          <div className="contact-section__actions">
            <a href="mailto:abgnpr@gmail.com?subject=Portfolio%20enquiry">
              abgnpr@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/abgnpr" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/abgnpr" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Abhigyan Prakash</span>
        <span>Built for systems that matter.</span>
      </footer>
    </div>
  );
}

export default App;
