import React from 'react';
import '../styles/components/discover-new-book.css';
import StatisticsIcon from '../assets/statistics-icon.svg';
import GeometricForms from '../assets/geometric-forms.svg';
import BookCover from '../assets/book-cover.svg';

const DiscoverNewBook = () => {
    return (
        <div className="discover-container">
            <div className="discover-title">
                <h2>Discover New Book</h2>
                <p>More</p>
            </div>
            <div className="new-books-container">
                <div className="first-book">
                    <div className="book-info">
                        <div className="book-name">
                            <h1>Hooked</h1>
                            <h4>Nir Eyal</h4>
                        </div>
                        <div className="book-statistics">
                            <img src={StatisticsIcon} alt="statistics-icon" />
                            <p>120 + </p>
                            <p>Read More</p>
                        </div>
                    </div>
                    <div className="book-cover">
                        <img src={GeometricForms} alt="geometric-forms" className="geometric-forms" />
                        <img src={BookCover} alt="book-cover" className="book-img" />
                    </div>
                </div>
                <div className="first-book">
                    <div className="book-info">
                        <div className="book-name">
                            <h1>Hooked</h1>
                            <h4>Nir Eyal</h4>
                        </div>
                        <div className="book-statistics">
                            <img src={StatisticsIcon} alt="statistics-icon" />
                            <p>120 + </p>
                            <p>Read More</p>
                        </div>
                    </div>
                    <div className="book-cover">
                        <img src={GeometricForms} alt="geometric-forms" className="geometric-forms" />
                        <img src={BookCover} alt="book-cover" className="book-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverNewBook;

