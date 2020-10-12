import React from 'react';
import PropTypes from 'prop-types';
//-- this is a functional component
const Book = (props) => {
    let {id, 
        volumeInfo: {title, authors, description, imageLinks: {smallThumbnail, thumbnail}},
        saleInfo: {listPrice}
    } = props.book;

    // we are moving this to App.js in sess.5 
    // function addBook (title) {
    //     console.log(`The Book '${title}' was clicked`);
    // }


    return (
        <div>
            <h2>{title}</h2>
            <p>by {authors? authors.join(',') : 'No authors'}</p>
            {/* ---in here we could have a ternary operators,  */}
            <p>{listPrice && listPrice.amount}</p>
            {/* <p>{listPrice.amount}</p> */}
            <p>{description}</p>
            <img src={smallThumbnail || thumbnail} alt={title}/>
            <button onClick={() => props.addBook(title, id)}>Add +</button>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string,
        volumeInfo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
            imageLinks: PropTypes.shape({
                thumbnail: PropTypes.string,
                smallThumbnail: PropTypes.string,
            }),
        }).isRequired,
        saleInfo: PropTypes.shape({
            listPrice: PropTypes.shape({
                amount: PropTypes.number
            })
        }),

    }),
       
}


export default Book;


//------------------ that's my attempt
// import React from 'react';
// import books from '../models/books.json'
// ///----- in here Book is a function component
// let i = 0;
// const Book = (props) => {
//     const formatter = new Intl.NumberFormat('en-GB', {
//         style: 'currency',
//         currency: 'GBP'
//        })
//     //--we assign book to the first book from the array books
//     const book = books[i];
//     //--this is destructuring the object book
//     let {id, volumeInfo:{title, authors, description, imageLinks:{thumbnail}}} = book;
//     // --- this is what i did in step 5 of HOMEWORK
//     i = i + 1;
//     return (
//         <div>
//             <h2>{title} </h2>
//             <h3>{authors}</h3>
//             <p>{description}</p>
//             <img src={thumbnail}></img>
            
//         </div>
//     );
//     //------------------


//     // --- this is what was before i did in step 5
//     // return (
//     //     <div>
//     //         <h2>{props.book.volumeInfo.title}</h2>
//     //     </div>
//     // );
// }
// export default Book;
// // let {id, volumeInfo: {title, authors, description}, saleInfo:
// // {listPrice: {amount}}} = book;
