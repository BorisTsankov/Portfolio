import { stackGroups } from '../data/stack'

function StackSection() {
  return (
    <section className="stack-section" id="stack">
      <div className="section-heading">
        <p className="section-label">Tech Stack</p>
        <h2>Technologies I work with</h2>
        <p>
          A focused stack across frontend, backend, cloud, and delivery. I care about
          choosing tools that fit the problem and support maintainable, real-world software.
        </p>
      </div>

      <div className="stack-groups">
        {stackGroups.map((group) => (
          <article key={group.title} className="stack-group-card">
            <div className="stack-group-head">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="stack-group-items">
              {group.items.map((item) => {
                const Icon = item.icon

                return (
                  <span key={item.name} className="stack-badge">
                    <span className="stack-badge-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span>{item.name}</span>
                  </span>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StackSection