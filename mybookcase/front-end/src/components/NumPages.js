import React from 'react';
import {Form} from 'react-bootstrap';
import './NumPages.css'

const NumPages =  (props) => {

    function handleNumPage (e){
        props.setItemsPerPage(e.target.value);
    };
 return (
     <>
     <div className="NumPagesDiv">
        <Form>
            <Form.Label>Items per page</Form.Label>
            <Form.Control as="select" value={props.itemsCoutPerPage} onChange={(e) => handleNumPage(e)}>
                <option value="select">Select</option>    
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </Form.Control>
        </Form>
     </div>
     </>

 )

};

export default NumPages;

