import React, { useEffect} from 'react';
import './Dropdown.css';
import { HashLink } from 'react-router-hash-link';

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
    },
    {
        title:'Love',
        path: '/Categories',
        hash: '#Love',
        cName: 'dropdown-link'
    }
];
const Dropdown = (props) => {

//    const targetRef=React.CreateRef();


    // const handleClick = () => setClick(!click);
    // function handleClick2() {
    //     setClick(!click);
    //     console.log('hanle2');
    //     console.log(click);
    // };

    useEffect((props) => {
        // setTimeout(() => {
        //     this.setState({favoritecolor: "yellow"})
        //   }, 1000)
        // console.log(this.props)
    })

    // activate later----------------------------------------
    // const[click, setClick] = useState(false);
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
                    <li key={index} className='dropdown-link'>
                        {/* <Link 
                            className='dropdown-link' 
                            to={{
                                pathname: item.path,
                                hash: item.hash,
                                state: {fromDashboard: true}
                            }} 
                            onClick={() => {setClick(false); 
                            // {document.getElementById(item.title).scrollIntoView()}
                        }}
                            // targetRef={targetRef}
                        >{item.title}</Link> */}
                        <HashLink 
                            className='dropdown-link' 
                            to={item.path+item.hash} 
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end', duration: 4000 })}
                            // activate later ---------------------------------------------------------------
                            // onClick={() => {setClick(false); }}
                        >{item.title}</HashLink>
                    </li>
                    </>
                )
                )} 
                
            </ul>
        
        </>
    );
}
export default Dropdown;