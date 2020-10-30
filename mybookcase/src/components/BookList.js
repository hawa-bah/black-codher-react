import React, {useEffect, useState} from 'react';
import Book from './Book.js';
import './Pagination.css'
import Pagination from "react-js-pagination"
import Heart from "react-animated-heart"

// require("bootstrap/less/bootstrap.less");
// import Alert from '@material-ui/lab/Alert';S
// import {BrowserRouter as Router, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';

const BookList = (props) => {
    return (
        <React.Fragment >
            <div className="BookListDiv">
                
                {props.renderedBooks && (props.renderedBooks.map((book) => (
                    <Book 
                        key={book.id} 
                        book={book} 
                        addBook={props.addBook}
                        removeBook={props.removeBook} 
                        createFlash={props.createFlash}
                        isClick={props.isClick}
                        setClick={props.setClick}
                        handleHeart={props.handleHeart}
                    />
                )))}
                
            </div>   
            
            {/* <div className="error">
                {props.errorSearch && (
                    <h2>There are no books found</h2>
                )}
            </div> */}
            <Pagination
                activePage={props.activePage}
                itemsCountPerPage={props.itemsCountPerPage}
                totalItemsCount={props.books.length}
                pageRangeDisplayed={ 4 }
                onChange={props.handlePageChange}
                className="paginationCompnent"
            />                     
        </React.Fragment>
    );
}

export default BookList;


    // const [itemsCountPerPage, setItemsPerPage] = useState(5);
    // const [activePage, setActivePage] = useState(2);
    // const [pageRangeDisplayed] = useState(8);
    // const handlePageChange = (pageNumber)=> {
    //     console.log(`active page is ${pageNumber}`);
    //     setActivePage(pageNumber);
    // };
 


    // before I made changes with renderedBooksBookcase
// {props.renderedBooks.map((book) => (
//         <Book 
//         key={book.id} 
//         book={book} 
//         addBook={props.addBook}
//         removeBook={props.removeBook} 
//         createFlash={props.createFlash}
//     />
// ))}