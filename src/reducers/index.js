import updateBookList from '../reducers/updateBookList';
import updateShoppingCart from '../reducers/updateShoppingCart';

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reducer;