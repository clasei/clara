import React from 'react';
import profilePic from '../../assets/images/cla-sei-profile.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header-container">
            <img src={profilePic} alt="Clara Seijo" className="profile-pic"/>
            <h1>clara</h1>
            <h2>front-end developer</h2>
            <h2>×</h2>
            <h2>digital strategist</h2>
        </div>
    );
}

export default Header;

