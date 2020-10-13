import React, { useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import data from './models/books.json'
import Header from './components/Header.js';
import About from './pages/About.js';
import BookList from './components/BookList.js'
import Search from './components/Search.js';

const App = (props) => {
  //-- data is the first initial state
  const [books, setBooks] = useState(data);

  function addBook(title, id) {
// ex.4
// check filter if it's not maching 
    const newBookList = books.filter(book => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book '${title}' was clicked`);
  }

  return(
      // {/* -----we are using books from the states */}
      // {/* <Header /> */}
    <>
    
      <Router >
        <Route exact path="/" render={() => (
          <>
            <Header />
            <Search />
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
