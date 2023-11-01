import React from 'react';

function IconButton({ icon, link }) {
    return (
        <a href={link} className="icon-button">
            {/* Render the icon here */}
        </a>
    );
}

export default IconButton;