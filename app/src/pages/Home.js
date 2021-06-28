import React from 'react';
import '../styles/pages/home.css';
import SearchBar from '../components/search-bar';
import DiscoverNewBook from '../components/discover-new-book';
import CurrentReading from '../components/current-reading';
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
            <div className="current-div">
                <CurrentReading />
            </div>
            <div className="reviews">
                <h2>Reviews of The Days</h2>
                <p>All Video</p>
            </div>
        </div>
    );
}

export default Home;

  