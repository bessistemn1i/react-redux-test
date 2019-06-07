import React from 'react';
import './shoping-cart-table.css';
import { connect } from 'react-redux';
import { addBooksToCart, removeBookFromCart, removeBooksFromCart } from '../../actions';

const ShopingCartTable = ({items, total, onIncrease, onDecrease, onDelete }) => {
    
    const renderRow = (item, idx) => {
        const {id, name, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button className="btn btn-outline-danger btn-small" onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button className="btn btn-outline-success btn-small" onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning btn-small" onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="shopping-cart-table">
            <h2>You order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(renderRow)
                    }
                </tbody>
            </table>
            
            <div className="total">Total: ${total}</div>
        </div>
    )
}

const mapStateToProps = ({shoppingCart: {cartOrder, cartTotal}}) => {
    return {
        items: cartOrder,
        total: cartTotal
    }
}

const mapDispatchToProps = {
    onIncrease: addBooksToCart,
    onDecrease: removeBookFromCart,
    onDelete: removeBooksFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopingCartTable);