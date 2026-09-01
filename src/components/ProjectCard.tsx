import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__topline">
        <span>{project.index}</span>
        <span className="project-card__signal" aria-hidden="true" />
      </div>
      <p className="project-card__label">{project.label}</p>
      <h3>{project.title}</h3>
      <p className="project-card__detail">{project.detail}</p>
      <div className="project-card__footer">
        <p>{project.outcome}</p>
        <ul aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
