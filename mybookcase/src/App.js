import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './models/books.json';
import Home from './components/Home.js'
import About from './pages/About.js';
import Categories from './pages/Categories.js'
import BookList from './components/BookList.js'
import Search from './components/Search.js';
import NumPages from './components/NumPages.js';
import RandomBook from './components/RandomBook.js';
import NavBar from './components/NavBar.js'
import './App.css'

import Flash from './components/Flash';

// import Heart from "react-animated-heart"

const App = (props) => {
  //-- data is the first initial state
  // THESE ARE THE BOOKS AT HOME
  const [books, setBooks] = useState(data);
  // states for search
  const [keyword, setKeyword] = useState('');
  const [searchType, setSearchType] = useState('');
  const [errorSearch, seterrorSearch] = useState(false);
  // THESE ARE THE BOOKS AT THE BOOKCASE
  const [bookCase, setBookCase] = useState([]);
  // 
  const [flash, setFlash] = useState(null);
  // the title that has been added:
  const [bookTitleAdded, setBookTitleAdded] = useState('');
  // I might use this later 
  // const [loading, setLoading] = useState('false');
  const [itemsCountPerPage, setItemsPerPage] = useState(4);
  const [activePage, setActivePage] = useState(1);
  // const [pageRangeDisplayed] = useState(8);
  const indexOfLastBook = activePage * itemsCountPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsCountPerPage;
  //if there are books use slice
  const renderedBooks = books && books.slice(indexOfFirstBook, indexOfLastBook);
  const renderedBooksBookcase = bookCase.slice(indexOfFirstBook, indexOfLastBook);
  // 
  // const [isClick, setClick] = useState('false');
  // const [isClick, setClick] = useState(false);
  
  //
//   function handleHeart(title,id) {
//     // this.setClick(!this.isClick);
//     console.log(`The Book '${title}' was clicked`);
//     books.map((book) => {
//       // console.log(book.id)
//       if(book.id == id){
//         console.log(book.volumeInfo.title + "and"+  title);
//         this.setClick(!this.isClick);
//       }else{
//         setClick(false);
//       }
//     })
//     // if( id === id ) {
//     //   this.setClick(!this.isClick);

//     // }
// }

  // 
  const handlePageChange = (pageNumber)=> {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };
  function addBook(title, id) {
// ex.4
    //we are deleating the book from the booksList everytime it's added
    const newBookList = books.filter(book => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book '${title}' was clicked`);
    const chosenBook = books.filter(book => book.id === id);
    setBookCase([...bookCase, ...chosenBook]);
// === THIS IS ANOTHER WAY OF DOING IT
    // const remainingBooks = [];
    // let chosenBook = null;
    // books.forEach((book) => {
    //   if(book.id !== id) {
    //     remainingBooks.push(book);
    //   } else {
    //     chosenBook = book;
    //   }
    // });
    // setBooks(remainingBooks);
    // setBookCase([...bookCase, chosenBook]);
  }

  function removeBook(id) {
    const newBookCaseList = bookCase.filter(book => book.id !== id);
    // const newBookCaseList = books.filter(book => book.id !== id);
    setBookCase(newBookCaseList)
    // WE ALSO WANT TO PUT THE BOOK BACK TO HOME ONCE IT HAS BEEN REMOVED FROM BOOKCASE
    const removedBook = bookCase.filter(book => book.id === id);
    setBooks([...books, ...removedBook]);

  }
  

  function createFlash(title, id) {
    setFlash(true);
    setTimeout(() => {
      setFlash(null);
    }, 2000);

    console.log(`The Flag '${title}' is working`);

    // let bookAdded = title};
    setBookTitleAdded(title)

  }
  
 // creating a function
  async function findBooks (term, searchType) {
  
    switch(searchType){
      case "Author":
        console.log("author");
        console.log(term);

        let results1 = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${term}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
        if(!results1.error && results1.totalItems > 0){
        setBooks(results1.items);
        seterrorSearch(false);
        }else{
          seterrorSearch(true);
        }
        break;
      case "Title":
        console.log("Title");
        console.log(term);

        let results2 = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}+intitle:${term}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
        if(!results2.error && results2.totalItems > 0){
        setBooks(results2.items);
        seterrorSearch(false);
        }else{
          seterrorSearch(true);
        }

        break;
      case "Subject":
        console.log("subject");
        console.log(term);
        let results3 = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}+subject:${term}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
        if(!results3.error && results3.totalItems > 0){
        setBooks(results3.items);
        seterrorSearch(false);
        } else{
          seterrorSearch(true);
        }
        break;
      default:
        console.log("default in switch is working");

    }
  //ex.2 sess.7. doing the search books api
    // const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
    
    // if(!results.error){
    // setBooks(results.items);
    // }
  };

  // useEffect is what happends when everything has been rendered 
  useEffect(() => {
    let countBookCase = bookCase.length;
    document.title = `${countBookCase} Book(s) in your bookCase`
  
  });

  return(
      // {/* -----we are using books from the states */}
    <>
      <Router >
        <Route exact path="/" render={() =>(
          <React.Fragment>
            <Home />
          </React.Fragment>
        )}
        />
        <Route exact path="/allbooks" render={() => (
          <>
            <NavBar />
            <h1 className="pageTitle dark">Books</h1>
            <Flash flash={flash} bookTitleAdded={bookTitleAdded}/>
            {/* {findbooks} is the value of the function findBooks */}
            
            <Search 
              findBooks={findBooks} 
              keyword={keyword} 
              setKeyword={setKeyword}
              searchType={searchType}
              setSearchType={setSearchType}
            />
            <div className="midDiv">
              <p className="pageSubTit dark">Books in the bookcase: {bookCase.length}</p>
              <NumPages 
                setItemsPerPage={setItemsPerPage}
                itemsCountPerPage={itemsCountPerPage} 
              />
            </div>
            
            {/* I added createFlash as an atribute because it is also used when each button from the Booklist is clicked */}
            <div className="error">
                {errorSearch && (
                    <h2>There are no books found</h2>
                )}
            </div>
            {!errorSearch && (
              <BookList 
              books={books}  
              addBook={addBook} 
              createFlash={createFlash} 
              // pageRangeDisplayed={pageRangeDisplayed}
              renderedBooks={renderedBooks}
              itemsCountPerPage={itemsCountPerPage}
              // setItemsPerPage={setItemsPerPage} 
              activePage={activePage}
              handlePageChange={handlePageChange}
              seterrorSearch={seterrorSearch}
              />
            )}
            

          </>
        )} />

        <Route exact path="/bookcase" render={() => (
          <>
            <NavBar />
            <h1 className="pageTitle dark">Bookcase</h1>
            {(bookCase.length === 0)
            ? <h2>Add some books to your bookcase</h2>
            : <p>Total books: {bookCase.length}</p>}
            <BookList 
              books={bookCase} 
              removeBook={removeBook} 
              // renderedBooks={renderedBooks}
              // renderedBooks={bookCase}
              // renderedBooksBookcase={bookCase}              
              renderedBooks={renderedBooksBookcase}
              itemsCountPerPage={itemsCountPerPage} 
              activePage={activePage}
              handlePageChange={handlePageChange}
            />

          </>
        )} />

        <Route exact path="/about" render={() => (
          <>
            <About />
          </>
        )} />

        <Route exact path="/categories" render={() => (
          <>
          <div className="Categories-div" style={{backgroundColor:"black"}}>
            <Categories />
          </div>
          </>
        )}
        />

      </Router>
    </>

  );
}
export default App;
// export default bookAdded;


