import { useEffect, useState } from 'react'
import { stats } from '../data/stats'
import { liveProjects, featuredProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import SectionReveal from '../components/SectionReveal'
import StackSection from '../components/StackSection'
import TimelineSection from '../components/TimelineSection'
import profilePic from '../assets/ProfilePic.JPG'
import LeadershipSection from '../components/LeadershipSection'

const allProjects = [...liveProjects, ...featuredProjects]

function Home() {
  const [introDone, setIntroDone] = useState(false)


   type Theme = 'dark' | 'light' | 'terminal' | 'purple'

const [theme, setTheme] = useState<Theme>(() => {
  return (localStorage.getItem('theme') as Theme) || 'dark'
})

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}, [theme])

  
  useEffect(() => {
  const timer = setTimeout(() => {
    setIntroDone(true)
  }, 3900)

  return () => clearTimeout(timer)
}, [])

  return (
    <>
      {!introDone && (
  <div className="intro-screen">
    <div className="intro-corner intro-corner-top-left" />
    <div className="intro-corner intro-corner-top-right" />
    <div className="intro-corner intro-corner-bottom-left" />
    <div className="intro-corner intro-corner-bottom-right" />

    <div className="intro-content">
      <p className="intro-eyebrow">
        Software Engineering Student · Full-Stack Developer · AI / ML Focus
      </p>

      <h1 className="intro-title" data-text="Clean systems. Real software.">
        <span className="intro-title-main">Clean systems.</span>
        <span className="intro-title-sub">Real software.</span>
      </h1>

      <div className="intro-line" />

      <div className="intro-progress">
        <span />
      </div>

      <p className="intro-loader">Building interface</p>
    </div>
  </div>
)}

      <div className={introDone ? 'site-visible' : 'site-hidden'}>
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="portfolio" id="top">
          <div className="page-shell">
            <section className="hero-section">
              <div className="hero-main">
                <div className="hero-copy">
                  <div className="hero-meta">
                    <span>Fontys ICT · Semester 4</span>
                    <span>Looking for internship</span>
                    <span>Proxy board member</span>
                  </div>

                  <p className="hero-text hero-text-compact">
                    I’m Boris Tsankov, a Software Engineering student at Fontys ICT focused on
                    full-stack development, AI, cloud, and practical deployment. I build software
                    with strong structure, realistic implementation, and long-term maintainability
                    in mind.
                  </p>

                  <div className="hero-status">
                    <span className="status-dot" />
                    Available for internships / junior roles
                  </div>

                  <div className="hero-highlights">
                    <span>React / TypeScript</span>
                    <span>ASP.NET / C#</span>
                    <span>Spring Boot / Java</span>
                    <span>AI / ML</span>
                    <span>Azure / AWS / CI-CD</span>
                  </div>

                  <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                      View Projects
                    </a>
                    <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
                      Download CV
                    </a>
                  </div>
                </div>

                <div className="hero-media">
                  <div className="hero-image-shell">
                    <div className="hero-image-ring" />
                    <img src={profilePic} alt="Boris Tsankov" className="hero-image" />
                  </div>
                </div>
              </div>
            </section>

            <SectionReveal>
              <section className="stats-section">
                <div className="info-strip">
                  {stats.map((stat) => (
                    <div key={stat.label} className="info-strip-item">
                      <span className="info-strip-value">{stat.value}</span>
                      <span className="info-strip-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </SectionReveal>

            <SectionReveal>
              <section className="projects-section" id="projects">
                <div className="section-heading projects-heading">
                  <p className="section-label">Projects</p>
                  <h2>Selected work</h2>
                  <p>
                    Projects that reflect how I design, build, and ship software across web
                    development, cloud infrastructure, and AI-related systems.
                  </p>
                </div>

                <div className="projects-grid">
                  {allProjects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index + 1} />
                  ))}
                </div>
              </section>
            </SectionReveal>

            <SectionReveal>
              <StackSection />
            </SectionReveal>

            <SectionReveal>
              <TimelineSection />
            </SectionReveal>

            <SectionReveal>
              <LeadershipSection />
            </SectionReveal>

            <SectionReveal>
              <section className="about-section" id="about">
                <div className="section-heading">
                  <p className="section-label">About</p>
                  <h2>How I approach software</h2>
                </div>

                <div className="about-grid">
                  <div className="about-panel about-text">
                    <p>
                      I’m a Software Engineering student at Fontys who enjoys building systems that
                      feel real, complete, and useful. What interests me most is the combination of
                      full-stack development, AI, and practical deployment.
                    </p>
                    <p>
                      I like software that is not just functional, but also structured well, easy to
                      use, and built with realistic decisions in mind.
                    </p>
                    <p>
                      Right now, I’m especially interested in growing further in software
                      engineering, AI, and data-driven systems through projects, collaboration, and
                      an internship where I can keep learning in a real professional setting.
                    </p>
                  </div>

                  <div className="about-points">
                    <div className="about-point about-panel">
                      <h3>I value structure</h3>
                      <p>
                        Clean separation of concerns, maintainable code, and systems that can grow
                        without becoming messy.
                      </p>
                    </div>

                    <div className="about-point about-panel">
                      <h3>I build for real use</h3>
                      <p>
                        I care about deployment, usability, and features that make sense in
                        practice, not just on paper.
                      </p>
                    </div>

                    <div className="about-point about-panel">
                      <h3>I like solving practical problems</h3>
                      <p>
                        The most interesting projects to me are the ones that connect technology to
                        real user needs or business value.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </SectionReveal>

            <SectionReveal>
  <section className="contact-section" id="contact">
    <div className="section-heading contact-heading-wide">
      <p className="section-label">Contact</p>
      <h2>Let’s build something good</h2>
      <p>
        I’m open to internships, junior opportunities, and software or AI-related work
        where I can contribute and keep growing.
      </p>
    </div>

    <div className="contact-showcase">
      <div className="contact-intro-box">
        <div className="contact-availability">
          <span className="status-dot" />
          <span>Available for</span>
        </div>

        <h3>Internships / junior roles</h3>

        <div className="contact-divider" />

        <p>
          Have an opportunity, collaboration, or role that fits?
          Reach out and let’s talk.
        </p>
      </div>

      <div className="contact-card-grid">
        <a href="mailto:tsankov.b@gmail.com" className="contact-mini-card">
          <span className="contact-corner" />
          <span className="contact-icon">✉</span>
          <strong>Email</strong>
          <p>Send me an email directly.</p>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR-LINKEDIN"
          target="_blank"
          rel="noreferrer"
          className="contact-mini-card"
        >
          <span className="contact-corner" />
          <span className="contact-icon">in</span>
          <strong>LinkedIn</strong>
          <p>Let’s connect on LinkedIn.</p>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://github.com/YOUR-GITHUB"
          target="_blank"
          rel="noreferrer"
          className="contact-mini-card"
        >
          <span className="contact-corner" />
          <span className="contact-icon">GH</span>
          <strong>GitHub</strong>
          <p>Check out my code and projects.</p>
          <span className="contact-arrow">↗</span>
        </a>

        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="contact-mini-card">
          <span className="contact-corner" />
          <span className="contact-icon">▤</span>
          <strong>CV</strong>
          <p>Download my CV PDF.</p>
          <span className="contact-arrow">↗</span>
        </a>
      </div>
    </div>

    <div className="contact-response-strip">
      <span />
      <p>I usually respond within 24-48 hours.</p>
      <span />
    </div>
  </section>
</SectionReveal>

            <footer className="site-footer">
              <p>© 2026 Boris Tsankov. Built with React and TypeScript.</p>
            </footer>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home