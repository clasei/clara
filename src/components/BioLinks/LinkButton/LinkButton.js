import React from 'react';

function LinkButton({ image, text, link }) {
    return (
        <a href={link} className="link-button">
            {/* render the favicon/image and text here */}
        </a>
    );
}

export default LinkButton;