import React from 'react';
import {NavLink} from "react-router-dom";

const AdminHeader = (props) => {
    return (
        <div id="adminHeader">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/admin">Admin Panel</NavLink></li>
                <li><NavLink to="/">Menu1</NavLink></li>
                <li><NavLink to="/">Menu2</NavLink></li>
                <div className="clr"></div>
            </ul>
            <div id="adminHeaderProfile">
                <div className="avatar"></div>
                <p>{props.user.login}</p>
            </div>
        </div>
    )
};

export default AdminHeader;