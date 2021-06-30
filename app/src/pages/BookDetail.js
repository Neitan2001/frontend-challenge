import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../styles/pages/bookDetail.css';
import Loading from '../components/loading';
import leftArrow from '../assets/left-arrow.svg';
import readIcon from '../assets/book-open.svg';
import headphones from '../assets/headphones.svg';
import share from '../assets/share.svg';
import api from '../services/api';

const BookDetail = () => {
    const history = useHistory();
    const { id } = useParams();
    const [book, setBook] = useState({
        title: "",
        authors: [""],
        imageLinks: {
            thumbnail: ""
        },
        description: ""
    });

    const getBooks = async () => {
        const res = await api.get(`/volumes/${id}`);
        setIsLoading(true);
        setBook(res.data.volumeInfo);
    };

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getBooks();
    }, []);


    return (
        <div className="detail-container">
            <div className="detail-book-cover">
                <div className="left-arrow" onClick={() => { history.push('/') }}>
                    <img src={leftArrow} alt="left-arrow" />
                </div>
                {
                    isLoading ? (
                        <img src={book.imageLinks.thumbnail} alt="detail-book-img" className="detail-book-img" />
                    ) : (
                        <Loading />
                    )
                }

            </div>
            <div className="detail-book-info">
                <h2 className="detail-title">{book.title}</h2>
                <h4 className="detail-author">{book.authors}</h4>
                <div className='detail-description' dangerouslySetInnerHTML={{ __html: book.description }} />
            </div>
            <div className="navbar-detail">
                <div className="navbar-detail-content">
                    <div className="read-icon">
                        <img src={readIcon} alt="read-icon" />
                        <p>Read</p>
                    </div>
                    <div className="listen-icon">
                        <img src={headphones} alt="listen-icon" />
                        <p>Listen</p>
                    </div>
                    <div className="share-icon">
                        <img src={share} alt="share-icon" />
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
