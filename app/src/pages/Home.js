import React, { useEffect, useState } from 'react';
import '../styles/pages/home.css';
import searchIcon from '../assets/search-icon.svg';
import DiscoverNewBook from '../components/discover-new-book';
import CurrentReading from '../components/current-reading';
import greetinIcon from '../assets/greeting-icon.svg';
import NavBar from '../components/nav-bar';
import noCover from '../assets/no-cover.png';
import api from '../services/api';



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

    const [bookSearch, setBookSearch] = useState();
    const [bookResults, setBookResults] = useState([
        {
            volumeInfo: {
                title: "",
                authors: [""],
                imageLinks: {
                    thumbnail: ""
                }
            }
        }
    ]);

    const SearchBook = async () => {

        if (bookSearch) {
            const res = await api.get(`/volumes?q=${bookSearch}&maxResults=40`);
            console.log(res.data.items);
            setBookResults(res.data.items);
        }

    }

    useEffect(() => {
        SearchBook();
    }, [bookSearch]);

    return (
        <div className="home-container">
            <div className="search-bar-container">
                <div className="search-container">
                    <div className="search-icon">
                        <img src={searchIcon} alt="search-icon" />
                    </div>
                    <input onChange={(e) => {
                        setBookSearch(e.target.value);
                    }
                    } type="search" className="search-box" placeholder="Search Book" />
                </div>
            </div>
            {
                bookSearch ? (
                    <div className="search-book-grid">
                        {
                            bookResults.map((book) => {
                                return (
                                    <div key={book.id} className="books-search">
                                        <img src={book.volumeInfo.imageLinks ? (book.volumeInfo.imageLinks.thumbnail) : (noCover)} alt={book.volumeInfo.title} />
                                        <p className="book-search-title">{book.volumeInfo.title}</p>
                                        <p className="book-search-author">By {book.volumeInfo.authors}</p>
                                    </div>
                                );

                            })
                        }
                    </div>
                ) : (
                    <>
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
                            <NavBar />
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Home;

