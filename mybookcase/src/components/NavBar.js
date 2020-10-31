import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Search from './Search.js';
import {Button} from 'react-router-dom';
import './NavBar.css';
import Dropdown from './Dropdown.js';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () =>  setClick(!click);
    const closeMenu = () => setClick(false);
    
    const onMouseEnter = () =>{
        console.log('testMouseEnter');
        if(window.innerWidth < 960) { setDropdown(false);
        }else{setDropdown(true)}
        console.log('testMouseEnter');
    };
    // function onMouseOver(){
    //     console.log('over')
    // }
    const onMouseLeave = () =>{
        if(window.innerWidth < 960) { 
            setDropdown(false);
        }else{setDropdown(false);
        }
    };
    

    return (
    <React.Fragment>
        <nav className="navBar-2">
            <Link to="/" className="navbar-logo">BOOKY</Link>
            <div className="menu-icon" onClick={ handleClick }>
                <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/allbooks" className="nav-links" onClick={closeMenu}>Books</Link>
                </li>
                <li 
                    className="nav-item" 
                    // onMouseOver={onMouseOver}
                    onClick={onMouseEnter}
                    // onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave}
                >
                    <p className="nav-links">Categories</p>
                    {/* <Link to="/categories" className="nav-links" onClick={closeMenu}>Categories<i className="fas fa-caret-down" /></Link> */}
                    {dropdown && <Dropdown/>}
                    {console.log('dropdown =' + dropdown)}
                </li>
                <li className="nav-item" >
                    <Link to="/bookcase" className="nav-links" onClick={closeMenu}>Bookcase</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMenu}>About</Link>
                </li>


            </ul>
        </nav>        
        
    </React.Fragment>
    )
};
export default NavBar;