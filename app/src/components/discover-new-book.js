import React, { useEffect, useState } from 'react';
import '../styles/components/discover-new-book.css';
import StatisticsIcon from '../assets/statistics-icon.svg';
import GeometricForms from '../assets/geometric-forms.svg';
import api from '../services/api';

const DiscoverNewBook = () => {
    const [firstBook, setFirstBook] = useState();

    const getBooks = async () =>{
        const res = await api.get('/Ca_aDwAAQBAJ');
        console.log(res.data);
        setFirstBook(res.data.volumeInfo);
    };

    useEffect(()=>{
        getBooks();
    }, []);


    return (
        <div className="discover-container">
            <div className="discover-title">
                <h2>Discove New Book</h2>
                <p>More</p>
            </div>
            {
                firstBook ? (
                    <div className="new-books-container">
                <div className="first-book">
                    <div className="book-info">
                        <div className="book-name">
                            <h1>{firstBook.title}</h1>
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
                        <img src={firstBook.imageLinks.thumbnail} alt="book-cover" className="book-img" />
                    </div>
                </div>
                <div className="second-book">
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
                        <img src={firstBook.imageLinks.thumbnail} alt="book-cover" className="book-img" />
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
                        <img src={firstBook.imageLinks.thumbnail} alt="book-cover" className="book-img" />
                    </div>
                </div>
                
            </div>
                ) : (
                    <h1>Carregando...</h1>
                )
            }
        </div>
    );
}

export default DiscoverNewBook;

