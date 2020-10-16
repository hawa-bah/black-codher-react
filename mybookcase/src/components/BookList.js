import React, {useEffect, useState} from 'react';
import Book from './Book.js';
// import Alert from '@material-ui/lab/Alert';S
// import {BrowserRouter as Router, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';

const BookList = (props) => {
    return (
        <React.Fragment >
            <div className="BookListDiv">
                
                {props.books.map((book) => (
                    <Book 
                        key={book.id} 
                        book={book} 
                        addBook={props.addBook} 
                        createFlash={props.createFlash}
                    />
                ))}  
            </div>                        
        </React.Fragment>
    );
}

export default BookList;