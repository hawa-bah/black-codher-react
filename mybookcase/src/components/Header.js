import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
    <React.Fragment>
        <h1>My bookcase</h1>
        <div className="navBar">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/bookcase" className="navLink bookLink">Bookcase</Link>
            <Link to="/about" className="navLink aboutLink">About</Link>
        </div>
        
    </React.Fragment>
    )
};
export default Header;