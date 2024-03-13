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
        name: "GitHub → code + README",
        link: "https://github.com/clasei",
        image: Hobbes 
    },
    {
        name: "twinkleCircle | React",
        link: "https://clasei.github.io/twinkle-circle",
        image: projectLogo
    },
    {
        name: "sparkForm | React + Firebase",
        link: "https://spark-form-7.web.app",
        image: projectLogo
    },
    {
        name: "neutronLink | React + Firebase",
        link: "https://neutron-link-0.web.app",
        image: projectLogo
    },
    {
        name: "galacticHitchhiker | Angular",
        link: "https://clasei.github.io/galactic-hitchhiker",
        image: projectLogo
    },
    {
        name: "quantumCookies | Angular",
        link: "https://clasei.github.io/quantum-cookies",
        image: projectLogo
    },
    {
        name: "spaceTime | JS",
        link: "https://clasei.github.io/space-time",
        image: projectLogo
    },
    {
        name: "matterAnimation | JS",
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
