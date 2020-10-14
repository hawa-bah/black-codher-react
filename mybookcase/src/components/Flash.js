import React, {useEffect, useState} from 'react';
import Book from './Book.js';
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

import bookAdded from '../App.js'

const Flash = (props) => {
    const [flash, setFlash] = useState(null);


    return (
        <div>
            {
            flash
            ?(<Alert style={{position: "fixed"}} > the book Component{} has been added</Alert>)
            : null
            }
        </div>

        
    )
};

export default Flash;