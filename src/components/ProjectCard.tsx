import type { Project } from '../types'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { techIcons } from '../data/techIcons'

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
        {project.stack.map((item) => {
          const Icon = techIcons[item]

          return (
            <span key={item} className="stack-pill">
              {Icon && (
                <span className="stack-pill-icon" aria-hidden="true">
                  <Icon />
                </span>
              )}
              {item}
            </span>
          )
        })}
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
                Live Demo
                <span className="project-action-icon" aria-hidden="true">
                  <FiExternalLink />
                </span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-action-btn project-action-secondary"
              >
                GitHub
                <span className="project-action-icon" aria-hidden="true">
                  <FaGithub />
                </span>
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