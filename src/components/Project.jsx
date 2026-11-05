import { useEffect, useRef, useState } from "react";

const Project = ({ project }) => {
    const margin = 80;
    const ref = useRef();
    const [width, setWidth] = useState(margin);
    const [expandedProjects, setExpandedProjects] = useState([]);

    useEffect(() => {
        if (ref.current)
            setWidth(ref.current.offsetWidth);
    }, [])

    let n = Math.floor((width - margin) / 11.25);
    if (n > 0) n--;
    const line = '-'.repeat(n);

    const expand = (id) => {
        setExpandedProjects((prev) =>
          prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
      };

    return(
        <div className="project-container" ref={ref}>
            <p>{line}</p>
            <p className="title">{project.title}</p>
            <div className="image-container">
                {project.image && <img src={project.image} alt={project.title} />}
            </div>
            <p className="show-details" onClick={() => expand(project.id)}>
                {expandedProjects.includes(project.id) ? "Hide details" : "Show details"}
            </p>
            {expandedProjects.includes(project.id) && (
                <div>
                    <p>{project.details}</p>
                    <p>{project.link && <a href={project.link}>{project.link}</a>}</p>
                </div>
          )}
        </div>
    );
}

export default Project;
