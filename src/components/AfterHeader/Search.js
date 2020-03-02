import React from 'react';
import {NavLink} from "react-router-dom";

const Search = () => {
    return (
        <div className="search">
            <NavLink to="/" id="buttonSearch"></NavLink>
            <p>I`m looking for...</p>
        </div>
    )
};

export default Search;