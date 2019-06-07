const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const fetchBooks = (bookService, dispatch) => () => {
    dispatch(booksRequested());
    bookService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}

export const addBooksToCart = (bookId) => {
    return {
        type: 'BOOK_ADD_TO_CART',
        payload: bookId
    }
}

export const removeBookFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
}

export const removeBooksFromCart = (bookId) => {
    return {
        type: 'BOOKS_REMOVE_FROM_CART',
        payload: bookId
    }
}
export {
    fetchBooks
}