import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Product.js';
import Product from './Product';


//   this is a functional component
function App() {
  return (
    <div className="App">
      <Product 
      name ='Queenie' 
      price = '0.99'
      img = "/img/queenie.jpg"
      alt = 'Queenie'
      author = 'by Candice Carty-Williams'
      description = "THE SUNDAY TIMES BESTSELLER SHORTLISTED FOR THE COSTA FIRST NOVEL AWARD LONGLISTED FOR THE WOMEN'S PRIZE FOR FICTION 'Hilarious, compelling, painful, enlightening, honest. I loved it' - Dolly Alderton 'Brilliant, timely, funny, heartbreaking' - Jojo Moyes 'A deliciously funny, characterful, topical ..."
      />
      <Product 
        name='Ghana must go'
        price='2.99'
        img = 'https://images-na.ssl-images-amazon.com/images/I/81impI32R8L.jpg'
        alt='Ghana-must-go'
        author = 'by Taiye Selasi'
        description = 'A stunning novel, spanning generations and continents, Ghana Must Go by rising star Taiye Selasi is a tale of family drama and forgiveness, for fans of Zadie Smith and Chimamanda Ngozi Adichie. This is the story of a family -- of the simple, devastating ways in which families tear themselves apart, ...'
      />
      <Product 
        name='Such a Fun Age' 
        price='9.09'
        image = "img/fun.jpg"
        alt='Such a Fun Age'
        author = 'by Kiley Reid'
        description = "A new literary star/' The Times A Reese Witherspoon Book Club Pick // A Zoella Book Club Pick // A Times, Stylist, Elle, Glamour and BBC Best Book of 2020 When Emira is apprehended at a supermarket for 'kidnapping' the white child she's actually babysitting, it sets off an explosive chain of events. ..."
      />
      
      {/*--------------- this is from session 3 (ex.1)
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
