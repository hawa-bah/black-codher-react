import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import {Form, Button} from 'react-bootstrap';


import './Search.css';

const Search = (props) => {
    const [keyword, setKeyword] = useState('');
    const [searchType, setSearchType] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        //
        props.findBooks(keyword, searchType);
    };
    
    return(
        
        /* <form className="searchForm" onSubmit={handleSubmit}>
            <label className="searchLabel">
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                 
                <input type="submit" value="Submit" />
                <p>{keyword  && 'Searching for keyword:' + keyword}</p>
            </label>
        </form> */
        <Form onSubmit={handleSubmit} >
            <Form.Group controlId="searchKeyword">
                <Form.Label>Enter Search</Form.Label>
                <Form.Control 
                    type="keyword" 
                    placeholder="Enter keyword" 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                />
            </Form.Group>
            <Form.Group controlId="searchBy">
                <Form.Label>Search By</Form.Label>
                <Form.Control 
                    as="select" 
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}>
                    <option value="Author">Author</option>
                    <option value="Title">Title</option>
                    <option value="Subject">Subject</option>
            
                </Form.Control>
            </Form.Group>


            <Button variant="primary" type="submit" >
            Submit
            </Button>
        </Form>
        
    );
}

export default Search;