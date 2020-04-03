import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

const ProductForCart = ({id, name, price, img, productsCart, addCount, reduceCount}) => {

    let count = productsCart.find(p=>p.id===id).count;
    let total_price = price*count;

    let removeIconColor = "disabled";
    let removeIconCursor = "inherit";
    if (count>1) {
        removeIconColor = "inherit";
        removeIconCursor = "pointer";
    }

    return (
        <div className="product-for-cart">
            <div className="cart-img">
                <NavLink to={`/products/${id}`}>
                    <img src={img}/>
                </NavLink>
            </div>
            <div className="cart-container">
                <div className="cart-title">
                    <NavLink to={`/products/${id}`}>
                        <h2>{name}</h2>
                    </NavLink>
                    <DeleteTwoToneIcon color="error" cursor="pointer"/>
                </div>
                <div className="count">
                    <RemoveIcon color={removeIconColor} onClick={()=>reduceCount(id)} cursor={removeIconCursor}/>
                    <p>{count}</p>
                    <AddIcon onClick={()=>addCount(id)} cursor="pointer"/>
                </div>
                <p className="price">x {price} грн.</p>
                <p className="total-product-price">{total_price} грн.</p>
            </div>
            <div className="clr"></div>
        </div>
    )
};

export default ProductForCart;
