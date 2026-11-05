import { useState } from "react";

const Project = ({ project }) => {
    const [expanded, setExpanded] = useState(false);

    return(
        <article className="project-container">
            <hr className="separator" />
            <h2 className="title">{project.title}</h2>
            <div className="image-container">
                {project.image && <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.title} loading="lazy" />}
            </div>
            <button className="show-details" type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
                {expanded ? "Hide details" : "Show details"}
            </button>
            {expanded && (
                <div>
                    <p>{project.details}</p>
                    {project.link && <p><a href={project.link} target="_blank" rel="noopener noreferrer">View project on GitHub</a></p>}
                </div>
          )}
        </article>
    );
}

export default Project;
