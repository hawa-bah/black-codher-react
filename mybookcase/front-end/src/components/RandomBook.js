import React from 'react';
import data from '../models/books.json';
import {Link} from 'react-router-dom';

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
                <p>by {data[RandomNum].volumeInfo.authors}</p>
                <img src={data[RandomNum].volumeInfo.imageLinks.thumbnail} alt={data[RandomNum].volumeInfo.title}></img>
                <div className="homeLinkDiv">
                    <Link to='/' className="homeLink">Click to see a random book suggestion</Link>
                </div>
            </div>
        </>
    )
}

export default RandomBook;