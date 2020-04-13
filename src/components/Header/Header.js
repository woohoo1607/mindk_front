import React from 'react';
import {NavLink} from "react-router-dom";

import AdminHeader from "./AdminHeader";
import Logo from "../../img/logo_shop.png";
import Navbar from './Navbar';
import './Header.css'
import CartContainer from "../Cart/CartContainer";

const Header = (props) => {

    const openCart = () => {
        props.openCart();
    };

    return (
        <header>
            <div className="clr"></div>
            <div className="center">
                    <NavLink to='/' className='logo'>
                        <img src={Logo} width='70' height='70' alt="logo"/>
                    </NavLink>
                <Navbar/>
                <div className="auth">
                    {!props.isAuth && <NavLink to="/login">SIGN IN</NavLink>}
                    {props.isAuth && <NavLink to="/profile">{props.user.login}</NavLink>}
                </div>
                <div className="basket">
                    <p onClick={openCart}>Cart <span>{props.countProductsCart}</span></p>
                </div>
                <div className="clr"></div>
            </div>
            <div className="clr"></div>
            <CartContainer />
        </header>
    )
};

export default Header;
