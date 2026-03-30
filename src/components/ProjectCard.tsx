import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <span className="mini-subtitle">{project.subtitle}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="stack-list">
        {project.stack.map((item) => (
          <span key={item} className="stack-pill">
            {item}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Visit project →
        </a>
      )}
    </article>
  )
}

export default ProjectCard