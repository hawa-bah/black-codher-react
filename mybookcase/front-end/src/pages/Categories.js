import React from 'react';
import NavBar from '../components/NavBar.js';
import Row from '../components/Row.js';


const Categories = () => {

    return (
        <>
        <div className="CategoriesDiv" style={{backgroundColor:"black"}}>
            <NavBar />
            <h1 className="pageTitle">Categories</h1>
            <Row title="Adventure" />
            <Row title="Drama" />
            <Row title="Horror" />
            <Row title="self-help" />
            <Row title="Love" />

        </div>
            
        </>



    )
};

export default Categories;