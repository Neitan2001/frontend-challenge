import React from 'react';
import '../styles/components/search-bar.css';
import searchIcon from '../assets/search-icon.svg';

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="search-icon">
                <img src={searchIcon} alt="search-icon" />
            </div>
            <input type="search" className="search-box" placeholder="Search Book" />
        </div>
    );
}

export default SearchBar;

