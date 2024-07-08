import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer">
        <footer>
            <span id="currentYear">{ currentYear } </span>
            × built by <a href="https://github.com/clasei" target="_blank" rel="noopener noreferrer">→ clara</a>
            <span id="rocketIcon"> 🚀 </span>
            pragmatic full-stack developer 
        </footer>
    </div>
  );
}

export default Footer;