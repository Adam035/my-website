import Bar from "./Bar";
import Project from "./Project"
import projects from "../projects.json";
import '../styles/Page.css'

const Projects = () => {
    return (
        <div>
            <Bar />
            <div className="container">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;