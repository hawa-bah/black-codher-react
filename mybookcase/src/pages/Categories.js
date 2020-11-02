import React,{useEffect, useState} from 'react';
import NavBar from '../components/NavBar.js';
import Row from '../components/Row.js';


const Categories = () => {

//     const [Drama, setDrama] = useState([]);
//     const [Horror, setHorror] = useState([]);


//     useEffect(() => {
//         async function getRowBooks() {
//                 let resultsDrama = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:Drama`).then(res => res.json());
//                 console.log(resultsDrama);
//                 console.log(resultsDrama.items);
//                 if(!resultsDrama.error){
//                     setDrama(resultsDrama.items);
//                 }

//                 let resultsHorror = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:Horror`).then(res => res.json());
//                 if(!resultsHorror.error){
//                     setHorror(resultsHorror.items);
//                 }

//                 // return resultsDrama;

//             }
//         getRowBooks();
//     }, []);

// //    getRowBooks();
//     console.log(Drama.length);
//         console.log(Drama.table);

    return (
        <>
            <NavBar />
            <Row title="Adventure" />
            <Row title="Drama" />
            <Row title="Horror" />
            <Row title="self-help" />
            <Row title="Love" />


            {/*<Row title="A" />
            <Row title="Drama" />
            <Row title="Drama" /> */}

            {/* <Row  title='Drama' rowBooks={Drama}/> */}
            {/* <p>{Drama.length}</p>
            <h2>Drama({Horror.length})</h2>
            <div className="categories">

            
            <div className="row">
                {Drama.map((book)=> {
                    return(
                        <>
                        <div className="row-item row-Drama">
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img>
                            <p>{book.volumeInfo.title}</p>
                        </div>
                        </>
                    
                    )
                })}
            </div>
            
            <div className="row">
                <h2>Horror({Horror.length})</h2>
                {Horror.map((book)=> {
                    return(
                        <>
                        <div className="row-item row-Drama">
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img>
                            <p>{book.volumeInfo.title}</p>
                        </div>
                        </>
                    
                    )
                })}
            </div>
            </div> */}
            
            
        </>



    )
};

export default Categories;