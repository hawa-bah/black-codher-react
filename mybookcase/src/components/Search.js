import React, { useState } from 'react';

const Search = (props) => {
    const [keyword, setKeyword] = useState('');
    return(
        <form>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <button type="submit" value="submit">Search</button>
            <p>{keyword}</p>
        </form>
    );
}

export default Search;