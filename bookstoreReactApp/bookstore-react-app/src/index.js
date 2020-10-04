import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';

const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
})
//----------------------- exercise 2 sess 4
function allBooks(){
  let elements = []
  let i
  for(let i=0; i<books.length; i++){
    let book = books[i];
      let {id, 
        volumeInfo: {title, authors, description, imageLinks: {smallThumbnail}}} = book;
      const element = <Fragment>
      {/* <h1 id={id}>{title} = {formatter.format(amount)}</h1> */}
      <h1 id={id}>{title} by {authors}</h1>
      <img src={smallThumbnail}></img>

      </Fragment>;

      elements.push(element);
   }
return elements;
}
ReactDOM.render(allBooks(),document.getElementById('root'));




// books.map((book) =>{
//   // const title = book.volumeInfo.title;
//   // const author = book.volumeInfo.author;

//   let {id, 
//     volumeInfo: {title, authors, description}, 
//     saleInfo: {listPrice: {amount}}} = book;
  
//   const element = <Fragment>
//   <h1 id={id}>{title} = {formatter.format(amount)}</h1>
//   </Fragment>;
// })





// const book = books[0];
// let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;
// const element = <Fragment>
//   <h1 id={id}>{title} = {formatter.format(amount)}</h1>
// </Fragment>;

//ReactDOM.render(element,document.getElementById('root'));


//-------------------------exercise 1 sess 4
// import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import BookCounter from './BookCounter';
// const element = <Fragment>
// <h1>Welcome to My Library</h1>
// <BookCounter library={{name:"Sarah",theme:"Modern"}}/>
// </Fragment>;
// ReactDOM.render(element,document.getElementById('root'));



//-------------------------before sess 4 (THIS IS SESSION 3)----------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// //import './index.css';
// import App from './App';
// //import * as serviceWorker from './serviceWorker';

// //example of JSX
// //------------------ execise 2
// const name ='Hawa';
// const elementt = <h1>{name}'s Reading List</h1>;
// console.log(elementt);
// ReactDOM.render(elementt, document.getElementById('root') );
//
// //---------------exercise2, part2
// function Greeting(user) {
//   if(user) {
//     return <h1>{name}'s Reading List</h1>;
//   }
//   return <h1>Just a Reading List</h1>;
// }
//
// console.log(Greeting(name));
// // ReactDOM.render(Greeting(name), document.getElementById('root') );
// //---------------end exercise 2-----------------------------------------------------------

// ------- example  of class 






// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// //serviceWorker.unregister();
