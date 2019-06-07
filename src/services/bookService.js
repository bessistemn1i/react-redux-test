export default class BookService {
    data = [
    {id: 1, author: 'Terry Pratchett', title: 'Watch', coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51lyK7uZkjL._SX279_BO1,204,203,200_.jpg', price: 120},
    {id: 2, author: 'Nill Geiman', title: 'Good Omens', coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51xhIeG0zRL._SX308_BO1,204,203,200_.jpg', price: 328}
    ];

    getBooks() {
        return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(this.data);
                }, 700);
                //reject(new Error('Something bad happened'));
        });
    }
}