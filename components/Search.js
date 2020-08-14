import React from 'react';

function Search(props)
{
    return(
    <form onSubmit={(e)=>{
        e.preventDefault();
        props.onSubmit(e.target.recipename.value);
    }}>
        <div classNmae="Searchbar">
            <input type="text" name="recipename" placeholder="Enter ingredient or dish"></input>
            <button type="submit">Search</button>
        </div>
    </form>
    );
}

export default Search;