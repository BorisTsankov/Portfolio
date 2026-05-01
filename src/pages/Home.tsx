import { useEffect, useState } from 'react'
import { stats } from '../data/stats'
import { liveProjects, featuredProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import SectionReveal from '../components/SectionReveal'
import StackSection from '../components/StackSection'
import TimelineSection from '../components/TimelineSection'
import LeadershipSection from '../components/LeadershipSection'
import profilePic from '../assets/ProfilePic.JPG'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiExternalLink, FiMail, FiFileText } from 'react-icons/fi'

const allProjects = [...liveProjects, ...featuredProjects]

type Theme = 'dark' | 'light' | 'terminal' | 'purple'

function Home() {
  const [introDone, setIntroDone] = useState(false)

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
            <section className="poster-hero">
              <div className="poster-frame">
                <div className="poster-image-wrap">
                  <img src={profilePic} alt="Boris Tsankov" className="poster-image" />
                </div>

                <div className="poster-overlay" />

                <div className="poster-content">
                  <div className="poster-copy">
                    <p className="poster-label">Software Engineering Student</p>

                    <h1 className="poster-title">
                      <span>Boris</span>
                      <span>Tsankov</span>
                    </h1>

                    <p className="poster-subtitle">Full-stack developer in progress.</p>

                    <p className="poster-text">
                      Software Engineering student focused on full-stack web development,
                      clean architecture, and practical software systems.
                    </p>

                    <div className="poster-actions">
                      <a href="#projects" className="btn btn-primary">
                        View Projects
                      </a>

                      <a
                        href="/BorisTsankov.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                      >
                        Open CV
                      </a>
                    </div>

                    <p className="poster-availability-line">
                      <span className="status-dot" />
                      Open to internships
                    </p>
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
                    Projects that show how I design, build, and ship full-stack
                    applications with frontend interfaces, backend services, databases,
                    authentication, deployment, and clean architecture.
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
                      I’m a Software Engineering student at Fontys who enjoys building
                      full-stack applications that feel real, complete, and useful. I like
                      working on both the frontend and backend, connecting user interfaces
                      with business logic, databases, APIs, authentication, and deployment.
                    </p>

                    <p>
                      I like software that is not just functional, but also structured
                      well, easy to use, and built with realistic decisions in mind.
                    </p>

                    <p>
                      Right now, I’m especially interested in growing further as a
                      full-stack developer through projects, collaboration, and an
                      internship where I can keep learning in a real professional setting.
                      I also want to keep exploring AI, cloud, and data-driven systems as
                      part of practical software development.
                    </p>
                  </div>

                  <div className="about-points">
                    <div className="about-point about-panel">
                      <h3>I value structure</h3>
                      <p>
                        Clean separation of concerns, maintainable code, and systems that
                        can grow without becoming messy.
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
                        The most interesting projects to me are the ones that connect
                        technology to real user needs or business value.
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
                    I’m open to full-stack internships, junior developer opportunities, and
                    software work where I can contribute across frontend, backend,
                    databases, and deployment while continuing to grow.
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
                      Have an opportunity, collaboration, or role that fits? Reach out and
                      let’s talk.
                    </p>
                  </div>

                  <div className="contact-card-grid">
                    <a href="mailto:boristsankov05@gmail.com" className="contact-mini-card">
                      <span className="contact-corner" />
                      <span className="contact-icon">
                        <FiMail />
                      </span>
                      <strong>Email</strong>
                      <p>Send me an email directly.</p>
                      <span className="contact-arrow" aria-hidden="true">
                        <FiExternalLink />
                      </span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/boris-ts/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-mini-card"
                    >
                      <span className="contact-corner" />
                      <span className="contact-icon">
                        <FaLinkedinIn />
                      </span>
                      <strong>LinkedIn</strong>
                      <p>Let’s connect on LinkedIn.</p>
                      <span className="contact-arrow" aria-hidden="true">
                        <FiExternalLink />
                      </span>
                    </a>

                    <a
                      href="https://github.com/BorisTsankov"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-mini-card"
                    >
                      <span className="contact-corner" />
                      <span className="contact-icon">
                        <FaGithub />
                      </span>
                      <strong>GitHub</strong>
                      <p>Check out my code and projects.</p>
                      <span className="contact-arrow" aria-hidden="true">
                        <FiExternalLink />
                      </span>
                    </a>

                    <a
                      href="/BorisTsankov.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-mini-card"
                    >
                      <span className="contact-corner" />
                      <span className="contact-icon">
                        <FiFileText />
                      </span>
                      <strong>CV</strong>
                      <p>Preview my CV PDF.</p>
                      <span className="contact-arrow" aria-hidden="true">
                        <FiExternalLink />
                      </span>
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