import React, { useState } from 'react';
import './ProjectLinks.css';
import projectLogo from '../../assets/logos/lego-brick.svg';

const ProjectLinks = ({ project }) => {
    return (
        <a href="https://clasei.github.io/twinkle-circle/" target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-header">
                <img src={projectLogo} alt="Project logo" className="project-logo" />
                <h3>twinkleCircle</h3>
            </div>
        </a>
    );
}

export default ProjectLinks;

