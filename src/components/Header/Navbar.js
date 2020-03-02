import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/catalog">Catalog</NavLink></li>
                <li><NavLink to="/">Delivery & Payment</NavLink></li>
                <li><NavLink to="/">Guarantee</NavLink></li>
                <li><NavLink to="/">About Us</NavLink></li>
                <div className="clr"></div>
            </ul>
        </nav>
    )
}

export default Navbar;