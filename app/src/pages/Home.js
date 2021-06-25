import React from 'react';
import '../styles/pages/home.css';
import searchIcon from '../assets/search-icon.svg';
import greetinIcon from '../assets/greeting-icon.svg';

const Home = () => {
    return(
        <div className="home-container">
            <div className="search-container">
                <div className="search-icon">
                    <img src={searchIcon} alt="search-icon" />
                </div>
                <input type="search" className="search-box" placeholder="Search Book" />
            </div>
            <div className="greeting-container">
                <h1>Olá, </h1>
                <h1 className="user-name">Natan Tavares</h1>
                <img src={greetinIcon} alt="greeting-icon" className="greeting-icon" />
            </div>
        </div>
    );
}

export default Home;

  