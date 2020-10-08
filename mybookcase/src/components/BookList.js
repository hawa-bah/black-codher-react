import React from 'react';
import Book from './Book.js';
// import ReactDOM from 'react-dom';

const BookList = (props) => {
    return (
        <div>
            {props.books.map((book) => (
            <Book key={book.id} book={book} />))}
        </div>
    )
}

export default BookList;