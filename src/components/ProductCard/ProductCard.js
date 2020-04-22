import React from "react";
import {NavLink} from "react-router-dom";

import noProductImg from "../../img/product-no-image.jpg";
import "./ProductsCard.css";

const ProductCard = (props) => {
    const msg = "Товар добавлен в корзину";
    let isNew = props.isNew || false;
    const addProduct = (id) => () => {
        props.addProductCart(id, 1);
        props.callPopUp(msg);
    };

    return (
        <div className="product">
            {isNew && <p className="isNew">Новинка</p>}
            <NavLink to={`/products/${props.product.id}`} key={props.product.id}>
                <div className="productPhoto">
                    {props.product.img && <img src={props.product.img} />}
                    {!props.product.img && <img src={noProductImg} />}
                </div>
                <h2 className="productTitle">{props.product.name}</h2>
            </NavLink>
            {props.product["stock_quantity"]>0 &&
                <div className="productFooter">
                    <p className="productPrice">{props.product.price} грн.</p>
                    <p className="buy" onClick={addProduct(props.product.id, 1)}>Купить</p>
                </div>
            }
            {!props.product["stock_quantity"] &&
                <div className="productFooter">
                    <p className="productColor"> нет в наличии</p>
                </div>
            }
        </div>
    )
};

export default ProductCard;
