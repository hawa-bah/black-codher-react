import React, {useState, componentDidMount} from 'react';
import { Link } from 'react-router-dom';
// import {MenuItems} from './MenuItems';
import './Dropdown.css';

const MenuItems = [
    {
        title:'Adventure',
        path: '/Categories',
        hash: '#Adventure',
        cName: 'dropdown-link'
    },
    {
        title:'Drama',
        path: '/Categories',
        hash: '#Drama',
        cName: 'dropdown-link'
    },
    {
        title:'Horror',
        path: '/Categories',
        hash: '#Horror',
        cName: 'dropdown-link'
    },
    {
        title:'Self-help',
        path: '/Categories',
        hash: '#self-help',
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
    };

    // componentDidMount() {
    //     // setTimeout(() => {
    //     //     this.setState({favoritecolor: "yellow"})
    //     //   }, 1000)
    //     console.log(this.props)
    // } 
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
                    <li key={index} className='dropdown-links'>
                        <Link 
                            className='dropdown-link' 
                            to={{
                                pathname: item.path,
                                hash: item.hash,
                                state: {fromDashboard: true}
                            }} 
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