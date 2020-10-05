import React, { useState } from 'react';
import Book from './components/Books.js';
import data from './models/books.json'

const App = (props) => {
  const [books] = useState(data);

  return(
    <div>
      {books.map(book => <Book key={book.id} book={book} />)}
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
