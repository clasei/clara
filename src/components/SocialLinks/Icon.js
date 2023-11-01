import React from 'react';

const Icon = ({ path, fillColor = "white", viewBox = "0 0 30 30" }) => (
    <svg width="30" height="30" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d={path} fill={fillColor}></path>
    </svg>
);

export default Icon;
