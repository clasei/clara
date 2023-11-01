import React, { useState } from 'react';
import './ProjectLinks.css';
import projectLogo from '../../logos/lego-brick.svg';

const ProjectLinks = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="project-card" onClick={toggleOpen}>
            <div className="project-header">
                <img src={projectLogo} alt="Project logo" className="project-logo"/>
                <h2>{project.title}</h2>
            </div>
            {isOpen && (
                <div className="project-details">
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
                </div>
            )}
        </div>
    )
}

export default ProjectLinks;
