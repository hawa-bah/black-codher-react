//import React from "react";
import React, {useEffect, useState} from "react";
import Button from "./Button";
///---------session 3 creating a functional component 
//---------- the first is only text the second is including PROPS 
//
// function Product() {
//     return (
//         <div>
//             <h2>Shoes</h2>
//             <p>9£</p>
//             <p>Nice shoes</p>
//         </div>
//     )
    
// }

function Product(props) {
    const [count, setCount] = useState(0);
    
    // useEffect(() => {
    //     document.title = ${count} 'items in basket';
    // })

    return (
        <div style={{border: 'solid black 1px'}}>
            <h2>{props.name}</h2>
            <p>£{props.price}</p>
            <p>{props.description}</p>
            <p>
                <img src={props.image} alt={props.alt} style={{height: '100px'}}></img>
            </p>
            <p>I have added {count} items</p>
            <p>
                <button
                onClick={() => setCount(count + 1)}>Add iteam

                </button>
               
            </p>
            {/* //<Button /> */}
            
        </div>
    )
    
}


export default Product;

//after creating the function go to app.js and import Product, also put Product as a tag in return from the function App
//then uncomment the render for the App
//index only renders App.js, ideally everything shoulld conect to App to be more organised
