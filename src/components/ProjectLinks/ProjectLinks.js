import React, { useState } from 'react';
import './ProjectLinks.css';
import projectLogo from '../../assets/logos/lego-brick.svg';

const ProjectLinks = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="project-card" onClick={toggleOpen}>
            <div className="project-header">
                <img src={projectLogo} alt="Project logo" className="project-logo"/>
                <h3>twinkleCircle</h3>
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
