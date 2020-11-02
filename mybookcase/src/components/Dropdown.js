import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import {MenuItems} from './MenuItems';
import './Dropdown.css';

const MenuItems = [
    {
        title:'Adventure',
        path: '/Adventure',
        cName: 'dropdown-link'
    },
    {
        title:'Drama',
        path: '/Categories',
        cName: 'dropdown-link'
    },
    {
        title:'Horror',
        path: '/Horror',
        cName: 'dropdown-link'
    },
    {
        title:'Self-help',
        path: '/Self-help',
        cName: 'dropdown-link'
    }
];
const Dropdown = () => {

    const[click, setClick] = useState(false);


    // const handleClick = () => setClick(!click);
    function handleClick2() {
        setClick(!click);
        console.log('hanle2');
        console.log(click);
    }

    return(
        <>
            <ul 
                //  onClick={() => handleClick2()}
                //  className={click ? 'drop-menu' : 'drop-menu-clicked'}
                className='test'
                // className='nav-link' 

            >

                
             {MenuItems.map((item,index) => (
                    <>
                    <li key={index}>
                        <Link 
                            className='dropdown-link'
                            // className='nav-link' 
                            // className={'menu-link'} 
                            to={item.path} 
                            onClick={() => setClick(false)}>{item.title}</Link>
                    </li>
                    </>
                )
                )} 
                
            </ul>
        
        </>
    );
}
export default Dropdown;