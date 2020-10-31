import React,{Fragment} from 'react';
import Book from './Book';
import data from '../models/books.json'

const RandomBook = (props) => {

    // let {id, 
    //     volumeInfo: {title, authors, description, imageLinks: {smallThumbnail, thumbnail}},
    //     saleInfo: {listPrice}
    // } = data;

    // console.log(props.books);

    const RandomNum = Math.floor(Math.random()*data.length);
    console.log(RandomNum);

    return(
        <>
            <div className="randomBookDiv">
                {/* <div>{data[RandomNum].volumeInfo.imageLinks.smallthumbnail}</div> */}
                <h2>{data[RandomNum].volumeInfo.title}</h2>
            </div>
        </>
    )
}

export default RandomBook;