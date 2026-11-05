import Bar from "./Bar";
import Project from "./Project"
import projects from "../projects.json";
import '../styles/Page.css'

const Projects = () => {
    return (
        <div>
            <Bar />
            <main className="container">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </main>
        </div>
    );
};

export default Projects;
