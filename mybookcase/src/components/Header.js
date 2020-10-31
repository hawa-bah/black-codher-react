import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search.js';

import './Header.css';

const Header = () => {
    return (
    <React.Fragment>
        <h1>My bookcase</h1>
        <div className="navBar Home">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/allbooks" className="navLink allbooks">Books</Link>
            <Link to="/bookcase" className="navLink bookLink">Bookcase</Link>
            <Link to="/about" className="navLink aboutLink">About</Link>
        </div>
        {/* <Search /> */}
        
        
    </React.Fragment>
    )
};
export default Header;