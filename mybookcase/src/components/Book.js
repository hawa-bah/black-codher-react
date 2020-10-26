import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Book.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import HeartBtn from './HeartBtn.js'
// import './HeartBtn.css';
import Heart from "react-animated-heart";



const Book = (props) => {
    let {id, 
        volumeInfo: {title, authors, description, imageLinks: {smallThumbnail, thumbnail}},
        saleInfo: {listPrice}
    } = props.book;

    // we are moving this to App.js in sess.5 
    // function addBook (title) {
    //     console.log(`The Book '${title}' was clicked`);
    // }
    const [isClick, setClick] = useState(false);


    return (
        <div className="BookDiv">
            <div className="BookSub1">
                <h2>{title}</h2>
                <p>by {authors? authors.join(',') : 'No authors'}</p>
                {/* ---in here we could have a ternary operators,  */}
                <p>{listPrice && listPrice.amount}</p>
                {/* <p>{listPrice.amount}</p> */}
                <img className="imgBook" src={smallThumbnail || thumbnail} alt={title}/>
                {/* <img className="imgBook" src={ thumbnail} alt={title}/> */}
                {/* add another props.removeBook */}
                {/* the button only appears if addBook works */}
                {props.addBook && (
                <button className="btnAdd btnbook" onClick={() => {props.addBook(title, id); props.createFlash(title,id)}}>Add +</button>)}

                {props.removeBook && (
                <button 
                    className="btnRemove btnbook" 
                    onClick={() => props.removeBook(id)}>remove</button>)}
                {/* <Button>Btn2</Button> */}
                <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                
                {/* < HeartBtn onClick={() => console.log('hello')}/> */}
                {/* <input id="toggle-heart" type="checkbox"/>
                <label for="toggle-heart">❤</label>  */}
            </div>
            
            <p className="BookDescp">{description}</p>
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
