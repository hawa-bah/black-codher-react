import React, { useState } from 'react';
import './Search.css';

const Search = (props) => {
    const [keyword, setKeyword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        //
        props.findBooks(keyword);
    };
    return(

        <form className="searchForm" onSubmit={handleSubmit}>
            <label className="searchLabel">
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                {/* <input type="submit" value="submit" onSubmit="">Search Now</input> */}
                <input type="submit" value="Submit" />
                <p>{keyword  && 'Searching for keyword:' + keyword}</p>
            </label>
            
        </form>
    );
}

export default Search;