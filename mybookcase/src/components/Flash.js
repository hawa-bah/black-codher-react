import React, {useEffect, useState} from 'react';
import Book from './Book.js';
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

import bookAdded from '../App.js'

const Flash = (props) => {



    return (
        <div>
            {
            props.flash
            ?(<Alert style={{position: "fixed"}} > 
                    The book <b>{props.bookTitleAdded}</b> has been added
                </Alert>
                )
            : null
            }
        </div>      
    )
};

export default Flash;