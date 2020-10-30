import React, {useEffect, useState, Fragment} from 'react';
import {Form} from 'react-bootstrap';

const NumPages =  (props) => {

    function handleNumPage (e){
        props.setItemsPerPage(e.target.value);
    };
 return (
     <>
     <div className="NumPagesDiv">
        <Form>
            <Form.Label>How many items do you want to see per page?</Form.Label>
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

