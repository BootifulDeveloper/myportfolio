import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import projectData from "../portfolio/projectsData.json";

const ProjectsOverview = () => {
  const categories = useMemo(() => {
    const unique = new Set(projectData.map((project) => project.category));
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectData;
    }
    return projectData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="projects">
      <div className="projectsHero">
        <PageHeader title="Projects" description="Case studies, experiments, and product builds" />
        <p>
          Explore detailed write-ups, key outcomes, and the technology stacks behind each project. Use the
          category filters to jump to what interests you most.
        </p>
        <div className="projectsActions">
          <Link className="btn" to="/projects/archive">
            View Project Archive
          </Link>
          <Link className="btn btn-secondary" to="/portfolio">
            Back to Featured
          </Link>
        </div>
      </div>
      <div className="projectsFilters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filterButton ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projectsGrid">
        {filteredProjects.map((project) => (
          <article key={project.slug} className="projectPreview">
            <div className="projectPreviewImage" style={{ backgroundColor: project.bgcolor }}>
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
            </div>
            <div className="projectPreviewContent">
              <div className="projectMeta">
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.role}</span>
              </div>
              <h4>{project.title}</h4>
              <p>{project.summary}</p>
              <div className="projectTags">
                {project.technologies.split("|").map((tech) => (
                  <span key={`${project.slug}-${tech}`}>
                    {tech.trim()}
                  </span>
                ))}
              </div>
              <div className="projectPreviewActions">
                <Link className="btn" to={`/projects/${project.slug}`}>
                  View Details
                </Link>
                <a className="btn btn-secondary" href={project.deployed} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsOverview;
