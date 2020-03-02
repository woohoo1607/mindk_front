import React from 'react';
import AfterHeaderMenu from "./AfterHeaderMenu";
import Search from "./Search";
import './AfterHeader.css';
import {NavLink} from "react-router-dom";

const AfterHeader = () => {
    return (
        <div className="afterHeader center">
            <AfterHeaderMenu/>
            <Search/>
            <div className="support">
                <NavLink to="/">Support</NavLink>
            </div>
            <div className="clr"></div>
        </div>
    )
};

export default AfterHeader;