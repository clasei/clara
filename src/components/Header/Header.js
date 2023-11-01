import React from 'react';
import profilePic from '../../assets/images/cla-sei-profile.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header-container">
            <img src={profilePic} alt="Clara Seijo" className="profile-pic"/>
            <h1>clara seijo</h1>
            <p>pragmatic front-end developer</p>
            <p>×</p>
            <p>digital strategist</p>
        </div>
    );
}

export default Header;

