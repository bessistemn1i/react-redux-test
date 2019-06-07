import React from 'react';
import './book-list-item.css';
const BookItem = ({book, addBookToCart}) => {
    const {author, title, price, coverImage } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt={title}/>
            </div>
            <div className="book-details">
                <p className="book-title">Title: <span>{title}</span></p>
                <div className="book-author">{author}</div>
                <div className="book-price">{price}</div>
                <button className="btn btn-info add-to-cart" onClick={addBookToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default BookItem;