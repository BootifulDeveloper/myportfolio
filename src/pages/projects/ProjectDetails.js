import { Link, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import projectData from "../portfolio/projectsData.json";

const ProjectDetails = () => {
  const { slug } = useParams();
  const projectIndex = projectData.findIndex((item) => item.slug === slug);
  const project = projectData[projectIndex];
  const nextProject = projectData[(projectIndex + 1) % projectData.length];

  if (!project) {
    return (
      <section className="projectDetails">
        <PageHeader title="Project Not Found" description="This project isn’t in the library yet." />
        <p>Try the archive to browse every project and timeline.</p>
        <div className="projectDetailsActions">
          <Link className="btn" to="/projects">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="projectDetails">
      <div className="projectDetailsHeader">
        <PageHeader title={project.title} description={project.category} />
        <p>{project.summary}</p>
        <div className="projectDetailsMeta">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.role}</span>
          <span>•</span>
          <span>{project.technologies}</span>
        </div>
      </div>
      <div className="projectDetailsBody">
        <div className="projectDetailsImage" style={{ backgroundColor: project.bgcolor }}>
          <img src={project.image} alt={`${project.title} preview`} />
        </div>
        <div className="projectDetailsContent">
          <h4>Overview</h4>
          <p>{project.description}</p>
          <h4>Highlights</h4>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="projectDetailsActions">
            <a className="btn" href={project.deployed} target="_blank" rel="noreferrer">
              Live Experience
            </a>
            <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">
              View Source
            </a>
          </div>
        </div>
      </div>
      <div className="projectDetailsFooter">
        <p>Next up: {nextProject.title}</p>
        <Link className="btn" to={`/projects/${nextProject.slug}`}>
          View Next Project
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
