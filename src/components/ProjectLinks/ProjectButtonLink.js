import React from 'react';
import './ProjectLinks.css';

const ProjectButtonLink = ({ project }) => {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-header">
                <img src={project.image} alt="Project logo" className="project-logo" />
                <h3>{project.name}</h3>
            </div>
        </a>
    );
}

export default ProjectButtonLink;