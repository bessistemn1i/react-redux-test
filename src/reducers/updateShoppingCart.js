const updateCartItems = (items, item, itemIndex) => {
    // добавление нового элемента
    if(itemIndex === -1) {
        return [...items, item]
    }
    // удаление элемента массива
    if(item.count === 0 ) {
        return [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];
    }
    // изменение элемента массива
    return [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
    
}

const updateCartItem = ( item = {}, book, quantity ) => {
    const { id = book.id, name = book.title, count = 0, total = 0 } = item;
    return {
        id,
        name,
        count: count + quantity,
        total: total + book.price * quantity
    };
}

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartOrder } } = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = cartOrder.findIndex(({id}) => id === bookId);
    const item = cartOrder[itemIndex];
    
    let newItem = updateCartItem(item, book, quantity);

    return {
        cartTotal: 0,
        cartOrder: updateCartItems(cartOrder, newItem, itemIndex)
    }
}



const updateShoppingCart = (state, action) => {
    if(state === undefined) {
        return {
            cartOrder: [],
            cartTotal: 0
        }
    }

    switch(action.type) {
        case 'BOOK_ADD_TO_CART':
                return updateOrder(state, action.payload, 1);
            
            case 'BOOK_REMOVE_FROM_CART':
                return (updateOrder(state, action.payload, -1));
    
            case 'BOOKS_REMOVE_FROM_CART':
                const item = state.shoppingCart.cartOrder.find(({id}) => id === action.payload);
                return updateOrder(state, action.payload, -item.count);

            default:
                return state.shoppingCart
    }
}

export default updateShoppingCart;