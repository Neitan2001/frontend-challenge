import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/current-reading.css';
import Loading from './loading';
import bookIcon from '../assets/book-icon.svg';
import api from '../services/api';

const CurrentReading = () => {
    const history = useHistory();

    const [currentBook, setCurrentBook] = useState({
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
        const currentBook = await api.get('/volumes/XuyaDwAAQBAJ');
        setCurrentBook(currentBook.data);

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
                        <div className="book-display" onClick={() => { history.push(`/detail/${currentBook.id}`) }}>
                            <img src={currentBook.volumeInfo.imageLinks.thumbnail} alt="book-cover" className="current-cover" />
                            <div className="current-info">
                                <div>
                                    <h3>{currentBook.volumeInfo.title}</h3>
                                    <p>By {currentBook.volumeInfo.authors}</p>
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

