import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import withBookService from '../hoc';
import { fetchBooks, addBooksToCart } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

const BookList = ({books, onAddToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (<li key={book.id}><BookListItem book = {book} addBookToCart={() => onAddToCart(book.id)}/></li>)
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books, loading, error, onAddToCart } = this.props;

        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <ErrorIndicator/>
        }
        return <BookList books={books} onAddToCart={onAddToCart}/>
    }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookService }) => {
    return {
        fetchBooks: fetchBooks(bookService, dispatch),
        onAddToCart: (id) => dispatch(addBooksToCart(id))
    }
}

export default compose(
                    withBookService(),
                    connect(mapStateToProps, mapDispatchToProps))(BookListContainer);