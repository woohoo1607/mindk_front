import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


import ProductForCart from "./ProductForCart/ProductForCart";
import "./styles.css";


const Cart = ({isOpen, onClose, productsCart, productsCartData, isFetching, addCount, reduceCount}) => {

    let total_price = productsCartData.reduce((sum,p) => {
        return sum+(+productsCart.find(c=>c.id===p.id).count)*(+p.price)
    },0);

    return (
        <Dialog open={/*isOpen*/true} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                Корзина
            </DialogTitle>
            <DialogContent>
                {productsCartData.map(p=> <ProductForCart key={p.id}
                                                          id={p.id}
                                                          name={p.name}
                                                          price={p.price}
                                                          img={p.img}
                                                          productsCart={productsCart}
                                                          addCount={addCount}
                                                          reduceCount={reduceCount}
                />)}
                <div className="dialog-footer">
                    <div className="total-price-cart">
                        <h3>Сумма заказа:</h3>
                        <p>{total_price} <span>грн.</span></p>
                    </div>
                    <div className="create-order">
                        <p>Оформить заказ</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
};

export default Cart;
