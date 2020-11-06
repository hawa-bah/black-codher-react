import React from 'react';
import Alert from '@material-ui/lab/Alert';


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