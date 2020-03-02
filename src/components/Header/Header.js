import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import AdminHeader from "./AdminHeader";
import {NavLink} from "react-router-dom";
// import Logo from "./logo.jpg";

const Header = (props) => {
    return (
        <header>
            {/*{props.user.isAdmin && <AdminHeader user = {props.user}/>}*/}

            <div className="clr"></div>
            <div className="center">
                <div className="logo">
                    LOGO
                </div>
                <Navbar/>
                <div className="auth">
                    <NavLink to="/">SIGN IN</NavLink>
                </div>
                <div className="basket">
                    <NavLink to="/">Cart <span>0</span></NavLink>
                </div>
                <div className="clr"></div>
            </div>
{/*            <NavLink to='/' className='logo'>
                <img src={Logo} width='70' height='50' alt="logo"/>
            </NavLink>*/}
            <div className="clr"></div>
        </header>
    )
};

export default Header;
