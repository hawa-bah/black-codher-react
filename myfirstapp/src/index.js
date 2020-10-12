import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LogForm = () => {
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [location,setLocation] = useState('');
  const [hasSubmitted, sethasSubmitted] = useState('');

  console.log(name, age, location);
 
  function handleSubmit(event) {
    event.preventDefault();
    sethasSubmitted(true);
    // alert('A name was submitted: ' + name);
    // const ele = <p>A name was submitted:</p> + name;

    
  }

    return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br/>
        <label type="number" value={age} onChange={(e) => setAge(e.target.value)}>
            Age 
            <input type="number"/>
        </label>
        <br/>
        <label type="text" value={location} onChange={(e) => setLocation(e.target.value)}>
            Location:
            <input type="text"/>
        </label>


        <input type="submit" value="Submit" />
      </form>
        {hasSubmitted && (
      <p>
          You have submitted
          <ul>
              <li>Name: {name} </li> 
              <li>Age: {age}</li>
              <li>Location: {location}</li>
          </ul>
      </p>)
}
      </>
    );
}

ReactDOM.render(<LogForm />,document.getElementById('root'));


// from previous sessions--------------------------



//  import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// //import App from './App';
// import * as serviceWorker from './serviceWorker';

// //example of JSX
// // const element = <h1>My Reading List</h1>;
// // console.log(element);
// // ReactDOM.render(element, document.getElementById('root') );

// //-----this is in session 2 and session 3 
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// //---------



// // //---this is session 3
// // const name ='Hawa';
// // const elementt = <h1>{name}'s Reading List</h1>;
// // console.log(elementt);
// // ReactDOM.render(elementt, document.getElementById('root') );


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
