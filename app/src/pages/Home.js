import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/pages/home.css';
import searchIcon from '../assets/search-icon.svg';
import DiscoverNewBook from '../components/discover-new-book';
import CurrentReading from '../components/current-reading';
import greetinIcon from '../assets/greeting-icon.svg';
import NavBar from '../components/nav-bar';
import api from '../services/api';



const Home = () => {
    const history = useHistory();
    const reviewVideos = [
        {
            name: "Don't Make Me Think",
            src: "https://i.ytimg.com/vi/vBzBgewl4ac/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAtbXNCBM81reFzf6jGqBWScJICwQ",
            url: "https://www.youtube.com/watch?v=vBzBgewl4ac"
        },
        {
            name: "Porém Bruxa, Carol Chiovatto",
            src: "https://i.ytimg.com/vi/edUeMCa_Zf4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCtmW0eTDr5zet4ZyqgIw01ZrByeQ",
            url: "https://www.youtube.com/watch?v=edUeMCa_Zf4"
        }
    ]

    const [bookSearch, setBookSearch] = useState();
    const [bookResults, setBookResults] = useState([
        {
            id: "",
            volumeInfo: {
                title: "",
                authors: [""],
                imageLinks: {
                    thumbnail: ""
                }
            }
        }
    ]);
    const [searchLimit, setSearchLimit] = useState(10);
    const [userName, setUserName] = useState("");

    const SearchBook = async () => {

        if (bookSearch) {

            const res = await api.get(`/volumes?q=${bookSearch}&maxResults=${searchLimit}`);
            console.log(res.data.items);
            setBookResults(res.data.items);

        }
        setSearchLimit(10);

    }

    const UpdateLimit = async () => {
        const newLimit = searchLimit + 10;
        setSearchLimit(newLimit);
        const res = await api.get(`/volumes?q=${bookSearch}&maxResults=${newLimit}`);
        console.log(res.data.items);
        setBookResults(res.data.items);
    }

    useEffect(() => {
        const userName = localStorage.getItem('@bookapp/userName');
        const _userId = localStorage.getItem('@bookapp/userId');

        if (userName && _userId) {
            setUserName(userName);
        }

    }, []);

    useEffect(() => {
        SearchBook();
         // eslint-disable-next-line
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
                    <>
                        <div className="search-book-grid">
                            {
                                bookResults.map((book) => {
                                    if (book.volumeInfo.imageLinks) {
                                        return (
                                            <div key={book.id} className="books-search" onClick={() => { history.push(`/detail/${book.id}`) }}>
                                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                                <p className="book-search-title">{book.volumeInfo.title}</p>
                                                <p className="book-search-author">By {book.volumeInfo.authors}</p>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </div>
                        {
                            searchLimit < 40 ? (
                                <div className="load-more" onClick={UpdateLimit}>
                                    <p>Load More</p>
                                </div>
                            ) : (
                                <div className="no-more-books">
                                    <p>No More Books</p>
                                </div>
                            )
                        }
                    </>
                ) : (
                    <>
                        <div className="greeting-container">
                            <h1>Olá, </h1>
                            <h1 className="user-name">{userName}</h1>
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
                                        <div key={videos.name} className="videos-container" onClick={() => window.open(videos.url, "_blank")}>
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

