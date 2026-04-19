import { leaderships } from '../data/leaderships'

function LeadershipSection() {
  return (
    <section className="leadership-section" id="leadership">
      <div className="section-heading">
        <p className="section-label">Leadership & Activities</p>
        <h2>Beyond technical work</h2>
        <p>
          Alongside my studies and projects, I stay involved in initiatives that helped me grow in
          leadership, communication, and teamwork.
        </p>
      </div>

      <div className="leadership-grid">
        {leaderships.map((item) => (
          <article key={`${item.title}-${item.period}`} className="leadership-card">
            <p className="leadership-period">{item.period}</p>
            <h3>{item.title}</h3>
            <p className="leadership-role">{item.role}</p>
            <p className="leadership-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LeadershipSection