import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';


import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookService from './services/bookService';
import { BookServiceProvider } from './components/book-store-service-context';

import Store from './store';

const bookService = new BookService();
ReactDOM.render(
    <Provider store={Store}>
        <ErrorBoundary>
            <BookServiceProvider value = {bookService}>
                <Router>
                    <App/>
                </Router>
            </BookServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);