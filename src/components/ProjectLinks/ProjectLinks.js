import React, { } from 'react';
import './ProjectLinks.css';
import ProjectButtonLink from './ProjectButtonLink';
import projectLogo from '../../assets/logos/lego-brick.svg';
import dbdLogo from '../../assets/logos/do-bees-dream-logo.png';
import Hobbes from '../../assets/images/cla-sei-hobbes.png';


const projects = [
    {
        name: "Do Bees Dream → web",
        link: "https://dobeesdream.com",
        image: dbdLogo 
    },
    {
        name: "GitHub → code",
        link: "https://github.com/clasei",
        image: Hobbes 
    },
    {
        name: "twinkleCircle",
        link: "https://clasei.github.io/twinkle-circle/",
        image: projectLogo
    },
    {
        name: "spaceTime",
        link: "https://clasei.github.io/space-time/",
        image: projectLogo
    },
    {
        name: "quantumCookies",
        link: "https://clasei.github.io/quantum-cookies/",
        image: projectLogo
    },
    {
        name: "matterAnimation",
        link: "https://clasei.github.io/matter-animation/",
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
