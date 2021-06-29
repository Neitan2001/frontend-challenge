import React from 'react';
import '../styles/pages/home.css';
import SearchBar from '../components/search-bar';
import DiscoverNewBook from '../components/discover-new-book';
import CurrentReading from '../components/current-reading';
import greetinIcon from '../assets/greeting-icon.svg';
import NavBar from '../components/nav-bar';



const Home = () => {

    const reviewVideos = [
        {
            name: "Don't Make Me Think",
            src: "https://i.ytimg.com/vi/vBzBgewl4ac/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAtbXNCBM81reFzf6jGqBWScJICwQ"
        },
        {
            name: "Porém Bruxa, Carol Chiovatto",
            src: "https://i.ytimg.com/vi/edUeMCa_Zf4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCtmW0eTDr5zet4ZyqgIw01ZrByeQ"
        }
    ]

    return (
        <div className="home-container">
            <div className="search-bar-container">
                <SearchBar />
            </div>
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
            <div className="reviews-container">
                <div className="reviews-titles">
                    <h2>Reviews of The Days</h2>
                    <p>All Video</p>
                </div>
                {
                    reviewVideos.map((videos) => {
                        return (
                            <div key={videos.name} className="videos-container">
                                <img src={videos.src} alt={videos.name} />
                            </div>
                        );
                    })
                }
            </div>
            <div className="nav-bar-div">
                <NavBar/>
            </div>
        </div>
    );
}

export default Home;

