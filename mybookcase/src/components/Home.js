import React from 'react';
import {Link} from 'react-router-dom';



const Home  = () => {

    return(
        <React.Fragment>
        <div className="navBar Home">
            <Link to="/" className="navLink HomeLink">Home</Link>
            <Link to="/allbooks" className="navLink allbooksLink">Books</Link>
            <Link to="/bookcase" className="navLink bookLink">Bookcase</Link>
            <Link to="/about" className="navLink aboutLink">About</Link>
        </div>
        <div className="homeDiv">
            <div className="homeText">
                <h1 className="Home-title">BOOKY</h1>
                <h2 className="Home-subtitle">The bookcase you were looking for.</h2>
            </div>
            
        </div>
        </React.Fragment>
    )
};

export default Home;
