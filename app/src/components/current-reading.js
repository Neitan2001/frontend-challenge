import React from 'react';
import '../styles/components/current-reading.css';
import BookCover from '../assets/book-cover.svg';
import bookIcon from '../assets/book-icon.svg';

const CurrentReading = () => {
    return (
        <div className="current-container">
            <div className="current-title">
                <h2>Current Reading</h2>
                <p>All</p>
            </div>
            <div className="book-display">
                <img src={BookCover} alt="book-cover" className="current-cover" />
                <div className="current-info">
                    <div>
                        <h4>Originals</h4>
                        <p>By Adam Grant</p>
                    </div>
                    <div className="current-pages">
                        <img src={bookIcon} alt="book-icon" />
                        <p>Chapter</p>
                        <p className="styled-number">2</p>
                        <p>From 9</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentReading;

