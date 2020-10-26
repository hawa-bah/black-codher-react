import React, { useState } from 'react';
import './HeartBtn.css';

const HeartBtn = () => {
    
    const HeartClicked = () => {
        const heart = document.getElementsByClassName('heart');
        heart.className = "is-active";
        console.log(heart.className);
        console.log('hello');
        // $(this).toggleClass(":active");
    }
    return(
        <React.Fragment>
            {/* <div className="HeartBtn">
                <div className="HeartBtn-content">
                    <div className="Heart1"></div>
                </div>
            </div> */}
            <input id="toggle-heart" type="checkbox" />
            <label for="toggle-heart">❤</label> 

            {/* <div className="stage">
                <div className="heart" onClick={() => { HeartClicked(); console.log(document.getElementsByClassName('heart'))}}></div>
            </div> */}
        

        </React.Fragment>

    )
}
export default HeartBtn;

// https://codepen.io/mindstorm/pen/aZZvKq