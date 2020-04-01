import React from 'react';
import {NavLink} from "react-router-dom";

import AfterHeaderMenu from "./AfterHeaderMenu";
import Search from "./Search";
import './AfterHeader.css';

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
