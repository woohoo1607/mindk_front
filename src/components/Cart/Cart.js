import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {NavLink} from "react-router-dom";

import ProductForCart from "./ProductForCart/ProductForCart";
import {totalPriceAllOrder} from "../../helpers/totalPriceAllOrder";
import "./styles.css";



const Cart = ({isOpen, onClose, productsCart, productsCartData, isFetching, addCount, reduceCount, deleteProductCart}) => {

    let total_price = totalPriceAllOrder(productsCartData, productsCart);

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                Корзина
            </DialogTitle>
            {total_price===0 &&
                <DialogContent>
                    <h3>Ваша корзина к сожалению пуста=(</h3>
                </DialogContent>
            }
            {total_price!==0 &&
                <DialogContent>
                    {productsCartData.map(p => <ProductForCart key={p.id}
                                                               id={p.id}
                                                               name={p.name}
                                                               price={p.price}
                                                               img={p.img}
                                                               stock_quantity={p.stock_quantity}
                                                               productsCart={productsCart}
                                                               addCount={addCount}
                                                               reduceCount={reduceCount}
                                                               deleteProductCart={deleteProductCart}
                    />)}
                    <div className="dialog-footer">
                        <div className="total-price-cart">
                            <h3>Сумма заказа:</h3>
                            <p>{total_price} <span>грн.</span></p>
                        </div>
                        <NavLink to="/checkout" className="create-order" onClick={onClose}>
                            <p>Оформить заказ</p>
                        </NavLink>
                    </div>
                </DialogContent>
            }
        </Dialog>
    )
};

export default Cart;
