import React from 'react';
import books from '../models/books.json'
///----- in here Book is a function component
let i = 0;
const Book = (props) => {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
       })
    //--we assign book to the first book from the array books
    const book = books[i];
    //--this is destructuring the object book
    let {id, volumeInfo:{title, authors, description, imageLinks:{thumbnail}}} = book;
    // --- this is what i did in step 5 of HOMEWORK
    i = i + 1;
    return (
        <div>
            <h2>{title} </h2>
            <h3>{authors}</h3>
            <p>{description}</p>
            <img src={thumbnail}></img>
            
        </div>
    );
    //------------------


    // --- this is what was before i did in step 5
    // return (
    //     <div>
    //         <h2>{props.book.volumeInfo.title}</h2>
    //     </div>
    // );
}
export default Book;
// let {id, volumeInfo: {title, authors, description}, saleInfo:
// {listPrice: {amount}}} = book;
