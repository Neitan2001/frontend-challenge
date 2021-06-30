import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/discover-new-book.css';
import Loading from './loading';
import StatisticsIcon from '../assets/statistics-icon.svg';
import GeometricForms from '../assets/geometric-forms.svg';
import api from '../services/api';

const DiscoverNewBook = () => {
    const history = useHistory();
    const [firstBook, setFirstBook] = useState({
        id: "",
        volumeInfo: {
            title: "",
            authors: [""],
            imageLinks: {
                thumbnail: ""
            }
        }
    });
    const [secondBook, setSecondBook] = useState({
        id: "",
        volumeInfo: {
            title: "",
            authors: [""],
            imageLinks: {
                thumbnail: ""
            }
        }
    });
    const [thirdBook, setThirdBook] = useState({
        id: "",
        volumeInfo: {
            title: "",
            authors: [""],
            imageLinks: {
                thumbnail: ""
            }
        }
    });

    const [isLoading, setIsLoading] = useState(false);

    const getBooks = async () => {
        const firstBook = await api.get('/volumes/Ca_aDwAAQBAJ');
        setFirstBook(firstBook.data);

        const secondBook = await api.get('/volumes/LrQPAQAAMAAJ');
        setSecondBook(secondBook.data);

        const thirdBook = await api.get('/volumes/3bdbiVvMph4C');
        setThirdBook(thirdBook.data);

        setIsLoading(true);
    };

    useEffect(() => {
        getBooks();
    }, []);


    return (
        <div className="discover-container">
            <div className="discover-title">
                <h2>Discover New Book</h2>
                <p>More</p>
            </div>
            {
                isLoading ? (
                    <div className="new-books-container">
                        <div className="first-book" onClick={() => { history.push(`/detail/${firstBook.id}`) }}>
                            <div className="book-info">
                                <div className="book-name">
                                    <h2>{firstBook.volumeInfo.title}</h2>
                                    <p>By {firstBook.volumeInfo.authors}</p>
                                </div>
                                <div className="book-statistics">
                                    <img src={StatisticsIcon} alt="statistics-icon" />
                                    <p>120 + </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="book-cover">
                                <img src={GeometricForms} alt="geometric-forms" className="geometric-forms" />
                                <img src={firstBook.volumeInfo.imageLinks.thumbnail} alt="book-cover" className="book-img" />
                            </div>
                        </div>
                        <div className="second-book" onClick={() => { history.push(`/detail/${secondBook.id}`) }}>
                            <div className="book-info">
                                <div className="book-name">
                                    <h2>{secondBook.volumeInfo.title}</h2>
                                    <p>By {secondBook.volumeInfo.authors}</p>
                                </div>
                                <div className="book-statistics">
                                    <img src={StatisticsIcon} alt="statistics-icon" />
                                    <p>120 + </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="book-cover">
                                <img src={GeometricForms} alt="geometric-forms" className="geometric-forms" />
                                <img src={secondBook.volumeInfo.imageLinks.thumbnail} alt="book-cover" className="book-img" />
                            </div>
                        </div>
                        <div className="first-book" onClick={() => { history.push(`/detail/${thirdBook.id}`) }}>
                            <div className="book-info">
                                <div className="book-name">
                                    <h2>{thirdBook.volumeInfo.title}</h2>
                                    <p>By {thirdBook.volumeInfo.authors}</p>
                                </div>
                                <div className="book-statistics">
                                    <img src={StatisticsIcon} alt="statistics-icon" />
                                    <p>120 + </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="book-cover">
                                <img src={GeometricForms} alt="geometric-forms" className="geometric-forms" />
                                <img src={thirdBook.volumeInfo.imageLinks.thumbnail} alt="book-cover" className="book-img" />
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="discover-loading">
                        <Loading />
                    </div>
                )
            }
        </div>
    );
}

export default DiscoverNewBook;

