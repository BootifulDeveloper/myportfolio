import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import projectData from "../portfolio/projectsData.json";

const ProjectArchive = () => {
  return (
    <section className="projectArchive">
      <div className="projectArchiveHeader">
        <PageHeader title="Project Archive" description="A timeline view of every build" />
        <p>
          Use this archive to scan every project quickly. Jump into details or revisit the live demos from
          here.
        </p>
        <Link className="btn btn-secondary" to="/projects">
          Back to Projects
        </Link>
      </div>
      <div className="projectArchiveTable">
        <div className="archiveRow archiveHeader">
          <span>Project</span>
          <span>Year</span>
          <span>Focus</span>
          <span>Stack</span>
          <span>Links</span>
        </div>
        {projectData.map((project) => (
          <div className="archiveRow" key={project.slug}>
            <span className="archiveTitle">{project.title}</span>
            <span>{project.year}</span>
            <span>{project.category}</span>
            <span>{project.technologies}</span>
            <span className="archiveLinks">
              <Link to={`/projects/${project.slug}`}>Details</Link>
              <a href={project.deployed} target="_blank" rel="noreferrer">
                Live
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectArchive;
