import React, { useState } from 'react';
import Book from './components/Book.js';
import data from './models/books.json'
import BookList from './components/BookList.js'

const App = (props) => {
  //-- data is the first initial state
  const [books] = useState(data);

  return(
    <div>
      {/* -----we are using books from the states */}
      {/* <Header /> */}
      <BookList books={books} />
    </div>
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
