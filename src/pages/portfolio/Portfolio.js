import { Link } from "react-router-dom";
import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";

const Portfolio = () => {
  const featuredProjects = projectData.slice(0, 4);

  const ProjectList = () =>
    featuredProjects.map((project) => (
      <Project
        key={project.id}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
        slug={project.slug}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Featured Projects" description="A curated selection of recent work" />
      <div className="portfolioIntro">
        <p>
          Here is a snapshot of my latest builds. Explore the full project library for detailed case studies,
          timelines, and tech stacks.
        </p>
        <Link className="btn btn-secondary" to="/projects">
          Explore All Projects
        </Link>
      </div>
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
