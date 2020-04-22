import React from "react";

import reactLogo from "../../img/react.png";
import reduxLogo from "../../img/redux.png";
import nodejsLogo from "../../img/nodejs.png";
import postresqlLogo from "../../img/postgresql.png";
import "./styles.css";

const Footer = () => {
    return (
        <footer>
            <div className="center">
                <div className="footer-info">
                    <div className="footer-left">
                        <p>Разработал: <a href="https://www.linkedin.com/in/maksym-volkov-04659619b/" target="_blank">Максим Волков</a></p>
                        <p>Моб.тел: <a href="tel:050-307-80-40">050-307-80-40</a></p>
                        <p>Email: <a href="mailto:woohoo1607@gmail.com">woohoo1607@gmail.com</a></p>
                    </div>
                    <div className="footer-right">
                        <img src={reactLogo}/>
                        <img src={reduxLogo}/>
                        <img src={nodejsLogo}/>
                        <img src={postresqlLogo}/>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
