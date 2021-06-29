import React from 'react';
import '../styles/pages/bookDetail.css';
import leftArrow from '../assets/left-arrow.svg';
import bookCover from '../assets/book-cover.svg';

const BookDetail = () => {
    return (
        <div className="detail-container">
            <div className="detail-book-cover">
                <div className="left-arrow">
                    <img src={leftArrow} alt="left-arrow" />
                </div>
                <img src={bookCover} alt="detail-book-img" className="detail-book-img" />
            </div>
            <div className="detail-book-info">
                <h1 className="detail-title">Títuloooo</h1>
                <h2 className="detail-author">Autoooorrr</h2>
                <p className="detail-description">Descriçãoaaaaa</p>
            </div>
        </div>
    );
}

export default BookDetail;
