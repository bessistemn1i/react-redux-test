import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css'
const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">ReStore</Link>
            <span><i className="cart-icon fa fa-shopping-cart"/>{numItems} items (${total})</span>
        </header>
    )
}

export default ShopHeader;