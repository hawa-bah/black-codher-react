import React, { useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import data from './models/books.json'
import Header from './components/Header.js';
import About from './pages/About.js';
import BookList from './components/BookList.js'
import Search from './components/Search.js';

const App = (props) => {
  //-- data is the first initial state
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');


  function addBook(title, id) {
// ex.4
// check filter if it's not maching 
    const newBookList = books.filter(book => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book '${title}' was clicked`);
  }

  async function findBooks (value) {
    //ex.2 sess.7. doing the search books api
  
    const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
    
    if(!results.error){
    setBooks(results.items);
    }
  };

  return(
      // {/* -----we are using books from the states */}
    <>
      <Router >
        <Route exact path="/" render={() => (
          <>
            <Header />
            {/* {findbooks} is the value of the function findBooks */}
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
            <BookList books={books}  addBook={addBook}/>
          </>
        )} />

        <Route exact path="/bookcase" render={() => (
          <>
            <Header />
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
