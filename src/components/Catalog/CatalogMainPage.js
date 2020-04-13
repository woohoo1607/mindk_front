import React from "react";
import {NavLink} from "react-router-dom";

import apple from "../../img/forCategories/Apple.jpg";
import laptop from "../../img/forCategories/laptop.jpeg";
import pc from "../../img/forCategories/pc.jpg";
import smartWatches from "../../img/forCategories/smart-watches.png";
import smartphones from "../../img/forCategories/smartphones.jpeg";
import tablet from "../../img/forCategories/tablet.jpg";

const linkBase = 'catalog?page=1&category=';

const CatalogMainPage = (props) => {
    return (
        <div className="catalog-main-page">
            <div className="one-category-link">
                <NavLink to={linkBase+1}>
                    <h2>Apple Store</h2>
                    <img src={apple} />
                </NavLink>
            </div>
            <div className="one-category-link">
                <NavLink to={linkBase+9}>
                    <h2>Ноутбуки</h2>
                    <img src={laptop} />
                </NavLink>
            </div>

            <div className="one-category-link">
                <NavLink to={linkBase+10}>
                    <h2>ПК</h2>
                    <img src={pc} />
                </NavLink>
            </div>
            <div className="one-category-link">
                <NavLink to={linkBase+22}>
                    <h2>Смарт-часы</h2>
                    <img src={smartWatches} />
                </NavLink>
            </div>
            <div className="one-category-link">
                <NavLink to={linkBase+7}>
                    <h2>Смартфоны</h2>
                    <img src={smartphones} />
                </NavLink>
            </div>
            <div className="one-category-link">
                <NavLink to={linkBase+23}>
                    <h2>Планшеты</h2>
                    <img src={tablet} />
                </NavLink>
            </div>
        </div>
    )
};

export default CatalogMainPage;
