import React from 'react';
import {NavLink} from "react-router-dom";

const AfterHeaderMenu = () => {
    return (
        <div className="afterHeaderMenu">
            <ul>
                <li><NavLink to="/">Top Sales</NavLink></li>
                <li><NavLink to="/">Best Sellers</NavLink></li>
                <li><NavLink to="/">Brand Focus</NavLink></li>
                <li><NavLink to="/">Hi-Tech</NavLink></li>
                <div className="clr"></div>
            </ul>
        </div>
    )
};

export default AfterHeaderMenu;