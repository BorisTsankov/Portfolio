import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const primaryLink = project.demo || project.link
  const hasActions = primaryLink || project.github

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-index">{String(index).padStart(2, '0')}</span>
        <span className="mini-subtitle">{project.subtitle}</span>
      </div>

      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="stack-list">
        {project.stack.map((item) => (
          <span key={item} className="stack-pill">
            {item}
          </span>
        ))}
      </div>

      <div className="project-card-footer">
        {hasActions ? (
          <div className="project-actions">
            {primaryLink && (
              <a
                href={primaryLink}
                target="_blank"
                rel="noreferrer"
                className="project-action-btn project-action-primary"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-action-btn project-action-secondary"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        ) : (
          <span className="text-link text-link-disabled">Private project</span>
        )}
      </div>
    </article>
  )
}

export default ProjectCard