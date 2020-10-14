import React, {useEffect, useState} from 'react';
import Book from './Book.js';
// import Alert from '@material-ui/lab/Alert';

// import {BrowserRouter as Router, Route } from 'react-router-dom';

// import ReactDOM from 'react-dom';

const BookList = (props) => {
    return (
        <React.Fragment >
            {/* <Alert>You have added the following book: {props.title}!</Alert>   */}
            <div className="BookListDiv">
                
                {props.books.map((book) => (
                    <Book key={book.id} book={book} addBook={props.addBook}/>
                ))}  
            </div>                        
        </React.Fragment>
    );
}

export default BookList;