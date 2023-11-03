import React, { } from 'react';
import './ProjectLinks.css';
import ProjectButtonLink from './ProjectButtonLink';
import projectLogo from '../../assets/logos/lego-brick.svg';


const projects = [
    {
        name: "twinkleCircle",
        link: "https://clasei.github.io/twinkle-circle/",
        image: projectLogo
    },
    {
        name: "OtroProyecto",
        link: "https://enlace-a-otro-proyecto.com",
        image: projectLogo 
    },

];

const ProjectLinks = () => {
    return (
        <div>
            {projects.map(project => (
                <ProjectButtonLink key={project.name} project={project} />
            ))}
        </div>
    );
}

export default ProjectLinks;