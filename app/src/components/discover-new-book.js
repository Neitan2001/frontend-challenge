import React, { useEffect, useState } from 'react';
import '../styles/components/discover-new-book.css';
import Loading from './loading';
import StatisticsIcon from '../assets/statistics-icon.svg';
import GeometricForms from '../assets/geometric-forms.svg';
import api from '../services/api';

const DiscoverNewBook = () => {
    const [firstBook, setFirstBook] = useState({
        title: "",
        authors: [""],
        imageLinks: {
            thumbnail: ""
        }
    });
    const [secondBook, setSecondBook] = useState({
        title: "",
        authors: [""],
        imageLinks: {
            thumbnail: ""
        }
    });
    const [thirdBook, setThirdBook] = useState({
        title: "",
        authors: [""],
        imageLinks: {
            thumbnail: ""
        }
    });

    const [isLoading, setIsLoading] = useState(false);

    const getBooks = async () => {
        const firstBook = await api.get('/volumes/Ca_aDwAAQBAJ');
        setFirstBook(firstBook.data.volumeInfo);

        const secondBook = await api.get('/volumes/LrQPAQAAMAAJ');
        setSecondBook(secondBook.data.volumeInfo);

        const thirdBook = await api.get('/volumes/3bdbiVvMph4C');
        setThirdBook(thirdBook.data.volumeInfo);

        setIsLoading(true);
    };

    useEffect(() => {
        getBooks();
    }, []);


    return (
        <div className="discover-container">
            <div className="discover-title">
                <h2>Discove New Book</h2>
                <p>More</p>
            </div>
            {
                isLoading ? (
                    <div className="new-books-container">
                        <div className="first-book">
                            <div className="book-info">
                                <div className="book-name">
                                    <h1>{firstBook.title}</h1>
                                    <h4>By {firstBook.authors}</h4>
                                </div>
                                <div className="book-statistics">
                                    <img src={StatisticsIcon} alt="statistics-icon" />
                                    <p>120 + </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="book-cover">
                                <img src={GeometricForms} alt="geometric-forms" className="geometric-forms" />
                                <img src={firstBook.imageLinks.thumbnail} alt="book-cover" className="book-img" />
                            </div>
                        </div>
                        <div className="second-book">
                            <div className="book-info">
                                <div className="book-name">
                                    <h1>{secondBook.title}</h1>
                                    <h4>By {secondBook.authors}</h4>
                                </div>
                                <div className="book-statistics">
                                    <img src={StatisticsIcon} alt="statistics-icon" />
                                    <p>120 + </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="book-cover">
                                <img src={GeometricForms} alt="geometric-forms" className="geometric-forms" />
                                <img src={secondBook.imageLinks.thumbnail} alt="book-cover" className="book-img" />
                            </div>
                        </div>
                        <div className="first-book">
                            <div className="book-info">
                                <div className="book-name">
                                    <h1>{thirdBook.title}</h1>
                                    <h4>By {thirdBook.authors}</h4>
                                </div>
                                <div className="book-statistics">
                                    <img src={StatisticsIcon} alt="statistics-icon" />
                                    <p>120 + </p>
                                    <p>Read More</p>
                                </div>
                            </div>
                            <div className="book-cover">
                                <img src={GeometricForms} alt="geometric-forms" className="geometric-forms" />
                                <img src={thirdBook.imageLinks.thumbnail} alt="book-cover" className="book-img" />
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

