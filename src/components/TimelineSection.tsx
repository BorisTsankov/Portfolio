import { timelineItems } from '../data/timeline'

function TimelineSection() {
  return (
    <section className="timeline-section" id="experience">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2>Timeline & growth</h2>
        <p>
          A quick look at how my experience is developing through study, projects,
          and deeper work in full-stack engineering, cloud, and AI.
        </p>
      </div>

      <div className="timeline">
        {timelineItems.map((item) => (
          <article key={`${item.period}-${item.title}`} className="timeline-item">
            <div className="timeline-marker" />

            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p className="timeline-description">{item.description}</p>

              <ul className="timeline-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection