import React from 'react';
import BookList from '../book-list';
import ShopingCartTable from '../shoping-cart-table';

const HomePage = () => {
    return (
        <div>
            <BookList/>
            <ShopingCartTable/>
        </div>
    )
}

export default HomePage;