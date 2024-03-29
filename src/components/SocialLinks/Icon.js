import React from 'react';
import './SocialLinks.css';

const Icon = ({ path, fillColor = "whitesmoke", viewBox = "0 0 30 30" }) => (
    <svg className="icon-svg" width="45" height="45" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d={path} fill={fillColor}></path>
    </svg>
);

export default Icon;
