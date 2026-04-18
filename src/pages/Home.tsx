import { stats } from '../data/stats'
import { liveProjects, featuredProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import SectionReveal from '../components/SectionReveal'
import StackSection from '../components/StackSection'
import TimelineSection from '../components/TimelineSection'
import profilePic from '../assets/ProfilePic.JPG'

const allProjects = [...liveProjects, ...featuredProjects]

function Home() {
  return (
    <>
      <Navbar />

      <main className="portfolio" id="top">
        <div className="page-shell">
          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Full-Stack Developer · AI / ML Engineer</p>

              <h1 className="hero-title">
                Clean systems. <span>Real software.</span>
              </h1>

              <p className="hero-text hero-text-compact">
                Software Engineering student at Fontys ICT focused on full-stack development,
                AI, cloud, and practical deployment with strong attention to structure,
                usability, and maintainability.
              </p>

              <div className="hero-status">
                <span className="status-dot" />
                Available for internships / junior roles
              </div>

              <div className="hero-highlights">
                <span>React / TypeScript</span>
                <span>ASP.NET / C#</span>
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
            <section className="about-section" id="about">
              <div className="section-heading">
                <p className="section-label">About</p>
                <h2>What matters to me when building</h2>
              </div>

              <div className="about-grid">
                <div className="about-panel about-text">
                  <p>
                    I care about software that feels complete. Not just code that runs, but
                    systems with solid structure, thoughtful UX, and realistic deployment.
                  </p>
                  <p>
                    My main interest is combining software engineering with AI and data to solve
                    actual problems in a practical way, instead of building features that only
                    look impressive in a demo.
                  </p>
                </div>

                <div className="about-points">
                  <div className="about-point about-panel">
                    <h3>Clean architecture</h3>
                    <p>
                      Maintainable code, strong separation of concerns, and scalable structure.
                    </p>
                  </div>

                  <div className="about-point about-panel">
                    <h3>Real deployment</h3>
                    <p>
                      Projects should be usable, testable, and actually running in real
                      environments.
                    </p>
                  </div>

                  <div className="about-point about-panel">
                    <h3>Practical problem solving</h3>
                    <p>Useful features, realistic decisions, and solutions that make sense.</p>
                  </div>
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section className="contact-section" id="contact">
              <div className="section-heading">
                <p className="section-label">Contact</p>
                <h2>Let’s build something good</h2>
                <p>
                  I’m open to internships, junior opportunities, and software or AI-related work
                  where I can contribute and keep growing.
                </p>
              </div>

              <div className="contact-card">
                <p className="contact-lead">
                  Have an opportunity, collaboration, or role that fits? Reach out and let’s talk.
                </p>

                <div className="contact-links contact-links-large">
                  <a href="mailto:tsankov.b@gmail.com">Email</a>
                  <a
                    href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href="/cv.pdf" target="_blank" rel="noreferrer">
                    CV
                  </a>
                </div>
              </div>
            </section>
          </SectionReveal>

          <footer className="site-footer">
            <p>© 2026 Boris Tsankov. Built with React and TypeScript.</p>
          </footer>
        </div>
      </main>
    </>
  )
}

export default Home