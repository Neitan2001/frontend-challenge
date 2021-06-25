import React from 'react';
import '../styles/pages/home.css';
import SearchBar from '../components/search-bar';
import DiscoverNewBook from '../components/discover-new-book';
import greetinIcon from '../assets/greeting-icon.svg';

const Home = () => {
    return(
        <div className="home-container">
            <SearchBar />
            <div className="greeting-container">
                <h1>Olá, </h1>
                <h1 className="user-name">Natan Tavares</h1>
                <img src={greetinIcon} alt="greeting-icon" className="greeting-icon" />
            </div>
            <div className="discover-div">
                <DiscoverNewBook />
            </div>
        </div>
    );
}

export default Home;

  