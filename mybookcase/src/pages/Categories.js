import React,{useEffect, useState} from 'react';
import Row from '../components/Row.js'

const Categories = () => {

    const [Drama, setDrama] = useState([]);
    const [Horror, setHorror] = useState([]);

    useEffect(() => {
        async function getRowBooks() {
                let resultsDrama = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:Drama`).then(res => res.json());
                // let resultsDrama = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:Drama&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
                console.log(resultsDrama);
                console.log(resultsDrama.items);
                if(!resultsDrama.error){
                    setDrama(resultsDrama.items);
                }
                return resultsDrama;
            }
        getRowBooks();
    }, []);
    

//    getRowBooks();
//     console.log(Drama.length);


    return (
        <>
            <Row  title='Drama' rowBooks={Drama}/>
            <p>{Drama.length}</p>
            {/* <div className="rowBooks Drama">
            </div> */}
        </>



    )
};

export default Categories;