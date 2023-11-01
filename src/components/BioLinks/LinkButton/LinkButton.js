import React from 'react';

function LinkButton({ image, text, link }) {
    return (
        <a href={link} className="link-button">
            {/* Render the favicon/image and text here */}
        </a>
    );
}

export default LinkButton;