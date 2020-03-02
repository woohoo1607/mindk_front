import React from "react";
import "./ProductsCard.css";
import noProductImg from "../../img/product-no-image.jpg";

const ProductCard = (props) => {
    return (
        <div className="product">
            <div className="productPhoto">
                {props.product.img && <img src={props.product.img} />}
                {!props.product.img && <img src={noProductImg} />}
            </div>
            <h2 className="productTitle">{props.product.name}</h2>
            {props.product["stock_quantity"]>0 &&
                <div className="productFooter">
                    <p className="productPrice">{props.product.price} грн.</p>
                    <p className="buy">Купить</p>
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
