import React, {useEffect, useState} from 'react';
import Book from './Book.js';
import Alert from '@material-ui/lab/Alert';
import bookAdded from '../App.js'

const Flash = (props) => {
    const [flash, setFlash] = useState(null);


    return (
    <Alert style={{position: "fixed"}}> the book {bookAdded} has been added</Alert>
    )
};

export default Flash;