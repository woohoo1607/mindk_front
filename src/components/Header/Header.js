import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import AdminHeader from "./AdminHeader";
import {NavLink} from "react-router-dom";
import Logo from "../../img/logo_shop.png";

const Header = (props) => {
    return (
        <header>
            {/*{props.user.isAdmin && <AdminHeader user = {props.user}/>}*/}

            <div className="clr"></div>
            <div className="center">

                    <NavLink to='/' className='logo'>
                        <img src={Logo} width='70' height='70' alt="logo"/>
                    </NavLink>
                <Navbar/>
                <div className="auth">
                    <NavLink to="/login">SIGN IN</NavLink>
                </div>
                <div className="basket">
                    <NavLink to="/">Cart <span>0</span></NavLink>
                </div>
                <div className="clr"></div>
            </div>
            <div className="clr"></div>
        </header>
    )
};

export default Header;
