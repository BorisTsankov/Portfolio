import { stats } from '../data/stats'
import { liveProjects, featuredProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import profilePic from '../assets/ProfilePic.JPG'

const allProjects = [...liveProjects, ...featuredProjects]

function Home() {
  return (
    <main className="portfolio">
      <div className="page-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack Developer · Machine Learning Engineer</p>

            <h1 className="hero-title">
              Hi, I’m <span>Boris Tsankov</span>.
            </h1>

            <p className="hero-text">
              I build full-stack applications that are practical, structured well,
              and ready to run in real environments.
            </p>

            <p className="hero-subtext">
              Software Engineering student at Fontys ICT, currently focused on
              <strong> AI, Machine Learning, Data,</strong> and scalable web applications.
            </p>

        
          </div>

          <div className="hero-media">
            <img src={profilePic} alt="Boris Tsankov" className="hero-image" />
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading projects-heading">
            <p className="section-label">Projects</p>
            <h2>Selected work</h2>
            <p>
              A focused view of projects that show how I build, deploy, and think through
              real software.
            </p>
          </div>

          <div className="projects-scroll">
            {allProjects.map((project) => (
              <div key={project.title} className="project-slide">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading">
            <p className="section-label">About</p>
            <h2>What I care about when building</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I like projects that feel complete. Not just code that works once, but systems
                with cleaner structure, solid UX, practical features, and deployment in mind.
              </p>
              <p>
                My strongest interest is in combining software engineering with AI and data,
                especially when the result solves a real user problem instead of just being a demo.
              </p>
            </div>

            <div className="about-points">
              <div className="about-point">
                <h3>Clean architecture</h3>
                <p>Separation of concerns, maintainable code, and clear structure.</p>
              </div>
              <div className="about-point">
                <h3>Real deployment</h3>
                <p>Projects should be usable, testable, and actually running.</p>
              </div>
              <div className="about-point">
                <h3>Practical problem solving</h3>
                <p>Strong focus on useful features and realistic implementation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-heading">
            <p className="section-label">Contact</p>
            <h2>Let’s work together</h2>
            <p>
              Open to internships, junior roles, and interesting software or AI-related work.
            </p>
          </div>

          <div className="contact-links contact-links-large">
            <a href="mailto:tsankov.b@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">
              CV
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home