import React from "react";
import {NavLink} from "react-router-dom";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

import noProductImg from "../../../img/product-no-image.jpg";

const ProductForCart = ({id, name, price, img, stock_quantity, productsCart, addCount, reduceCount, deleteProductCart}) => {

    let count = productsCart.find(p=>p.id===id).count;
    let total_price = price*count;

    const reduceProduct = (id, count) => () => {
        if (count>1) {
            reduceCount(id)
        }
    };

    const addProduct = (id, count) => () => {
        if (count<stock_quantity) {
            addCount(id);
        }
    };

    let removeIconColor = "disabled";
    let removeIconCursor = "inherit";
    let addIconColor = "disabled";
    let addIconCursor = "inherit";

    if (count>1) {
        removeIconColor = "inherit";
        removeIconCursor = "pointer";
    }

    if (count<stock_quantity) {
        addIconColor = "inherit";
        addIconCursor = "pointer";
    }

    return (
        <div className="product-for-cart">
            <div className="cart-img">
                <NavLink to={`/products/${id}`} target="_blank">
                    <img src={img || noProductImg}/>
                </NavLink>
            </div>
            <div className="cart-container">
                <div className="cart-title">
                    <NavLink to={`/products/${id}`} target="_blank">
                        <h2>{name}</h2>
                    </NavLink>
                    <DeleteTwoToneIcon color="error" cursor="pointer" onClick={()=>deleteProductCart(id)}/>
                </div>
                <div className="count">
                    <RemoveIcon color={removeIconColor} onClick={reduceProduct(id, count)} cursor={removeIconCursor}/>
                    <p>{count}</p>
                    <AddIcon color={addIconColor} onClick={addProduct(id, count)} cursor={addIconCursor}/>
                </div>
                <p className="price">x {price} грн.</p>
                <p className="total-product-price">{total_price} грн.</p>
            </div>
            <div className="clr"></div>
        </div>
    )
};

export default ProductForCart;
