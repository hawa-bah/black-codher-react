import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import data from './models/books.json'
import Header from './components/Header.js';
import About from './pages/About.js';
import BookList from './components/BookList.js'
import Search from './components/Search.js';

import Flash from './components/Flash';
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

const App = (props) => {
  //-- data is the first initial state
  // THIS ARE THE BOOKS AT HOME
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');
  // THIS ARE THE BOOKS AT THE BOOKCASE
  const [bookCase, setBookCase] = useState([]);


  const [flash, setFlash] = useState(null);
  // the title that has been added:
  const [bookTitleAdded, setBookTitleAdded] = useState('');



  function addBook(title, id) {
// ex.4
// check filter if it's not maching 

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
  async function findBooks (term) {
  

    

  //ex.2 sess.7. doing the search books api
  const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
    
    if(!results.error){
    setBooks(results.items);
    }
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
        <Route exact path="/" render={() => (
          <>
            <Header />
            <Flash flash={flash} bookTitleAdded={bookTitleAdded}/>

            {/* {
              flash
              ?(<Fade in={flash} timeout={{ enter: 300, exit: 1000 }}>
                  <Alert style={{position: "fixed"}} > the book {bookTitleAdded} has been added</Alert>
                </Fade>)
              : null
            } */}
            
            {/* {findbooks} is the value of the function findBooks */}
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
            {/* I added createFlash as an atribute because it is also used when each button from the Booklist is clicked */}
            <BookList books={books}  addBook={addBook} createFlash={createFlash} />
          </>
        )} />

        <Route exact path="/bookcase" render={() => (
          <>
            <Header />
            {/* maybe add a remove functionality instead of add */}
            <BookList books={bookCase} removeBook={removeBook} />

          </>
        )} />

        <Route exact path="/about" render={() => (
          <>
            <About />
          </>
        )} />

      </Router>
    </>

  );
}
export default App;
// export default bookAdded;



//------------ this is what come as a default  
// 
// 
//
//import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
