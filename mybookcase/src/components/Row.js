import React,{useState, useEffect} from 'react';
import './Row.css'

const Row = (props) => {

    const [rowBooks, setRowBooks] = useState([]);
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);

    const [description, setDesciption] = useState('');
    const [authors, setAuthor] = useState('');
    

    useEffect(() => {
        async function getRowBooks() {
                let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${props.title}`).then(res => res.json());
                if(!results.error){ 
                    setRowBooks(results.items);
                }
            }
        getRowBooks();
    }, []);
    // console.log(rowBooks);
    // console.log(rowBooks.length);
    // console.log(rowBooks.table);

    return (
        <>
    
        <div className="row-div" id={props.title}>
            <h3 className="row-categories-titles">{props.title}({rowBooks.length})</h3>
            <div className="row-books" >
                {rowBooks.map((book)=> (
                    <>
                        <div className="row-book" 
                            onMouseEnter={()=> {
                                setClick(true); 
                                setDesciption(book.volumeInfo.description);
                                setAuthor(book.volumeInfo.authors)}}    
                            onMouseOut={() => {
                                if(click2){setClick(false)
                                }}}>
                            <p>{book.volumeInfo.title}</p>
                            <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail } alt={book.volumeInfo.title}></img>
                        </div>
                    </>
                ))}
                
            </div>
            { click &&
                <div 
                    className="description"
                    // onMouseOver={()=> setClick(true)} 
                    // onMouseOut={() => setClick(false)}
                    >
                    <p className="description-title">Description</p>
                    <p
                        className="description-text"
                        onMouseOver={()=> setClick2(true)}
                        onMouseOver={()=> setClick(true)}
                        onMouseOut={() => setClick(false)}
                    >
                        {description}
                    </p>
                    <p className="description-author">by <span>{authors}</span></p> 
                </div>
            }
        </div>   
        </>
    )
};

export default Row;