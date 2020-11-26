import React from 'react';
import './HeartBtn.css';

const HeartBtn = () => {

    return(
        <React.Fragment>
            {/* <div className="HeartBtn">
                <div className="HeartBtn-content">
                    <div className="Heart1"></div>
                </div>
            </div> */}
            <input id="toggle-heart" type="checkbox"/>
            <label for="toggle-heart">❤</label>
        

        </React.Fragment>

    )
}
export default HeartBtn;

// https://codepen.io/mindstorm/pen/aZZvKq