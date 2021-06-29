import React from 'react';
import '../styles/components/nav-bar.css';
import homeIcon from '../assets/home-icon.svg';
import libraryIcon from '../assets/library-icon.svg';
import profileIcon from '../assets/profile-icon.svg';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="home-icon">
                <img src={homeIcon} alt="home-icon"/>
                <p>Home</p>
            </div>
            <div className="library-icon" alt="libary-icon">
                <img src={libraryIcon} alt="labrary-icon"/>
                <p>Libraries</p>
            </div>
            <div className="profile-icon" alt="profile-icon">
                <img src={profileIcon} alt="profile-icon"/>
                <p>Profile</p>
            </div>
        </div>
    );
}

export default NavBar;
