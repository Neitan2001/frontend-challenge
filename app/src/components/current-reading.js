import React, { useEffect, useState } from 'react';
import '../styles/components/current-reading.css';
import Loading from './loading';
import bookIcon from '../assets/book-icon.svg';
import api from '../services/api';

const CurrentReading = () => {

    const [currentBook, setCurrentBook] = useState({
        title: "",
        authors: [""],
        imageLinks: {
            thumbnail: ""
        }
    });

    const [isLoading, setIsLoading] = useState(false);

    const getBooks = async () => {
        const currentBook = await api.get('/volumes/XuyaDwAAQBAJ');
        setCurrentBook(currentBook.data.volumeInfo);

        setIsLoading(true);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="current-container">
            {
                isLoading ? (
                    <>
                        <div className="current-title">
                            <h2>Current Reading</h2>
                            <p>All</p>
                        </div>
                        <div className="book-display">
                            <img src={currentBook.imageLinks.thumbnail} alt="book-cover" className="current-cover" />
                            <div className="current-info">
                                <div>
                                    <h4>{currentBook.title}</h4>
                                    <p>By {currentBook.authors}</p>
                                </div>
                                <div className="current-pages">
                                    <img src={bookIcon} alt="book-icon" />
                                    <p>Chapter</p>
                                    <p className="styled-number">2</p>
                                    <p>From 9</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="current-loading">
                        <Loading />
                    </div>
                )
            }
        </div>
    );
}

export default CurrentReading;

