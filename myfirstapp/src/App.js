import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const h1Style = { "color": "blue", "fontSize":"80px", "color": "blue",
  "textDecoration": "uppercase", "textDecoration":"underline"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
        style = {h1Style}
        className ="titleApp"
        >
          Welcome to myfirstApp</h1>
        

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          //style={h1Style}
          //exericse 6 put it in css
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
