import React, {useState} from "react";
import {Redirect} from "react-router-dom";

import CheckoutForm from "./CheckoutForm/CheckoutForm";
import ProductForCart from "../Cart/ProductForCart/ProductForCart";
import {totalPriceAllOrder} from "../../helpers/totalPriceAllOrder";
import Fetching from "../Fetching/Fetching";
import "./styles.css";

const Checkout = ({user, isAuth, productsCartData, productsCart, createNewOrder, addCount, reduceCount, deleteProductCart, registerAndCreateNewOrder, isUserError, msgUserError, isCartError, msgCartError, ...props}) => {
    let [initialForm, setInitialForm] = useState({
        first_name: user.first_name,
        second_name: user.second_name,
        email: user.email,
        mobile_phone: user.mobile_phone});

        const submit = (data) => {
        setInitialForm({...data});
        let products = productsCartData.map(product => {
            let result = {
                quantity: productsCart.find(p=>p.id===product.id).count,
                guarantee: product.guarantee,
                id_products: product.id,
                price: product.price,
            };
            result.total_price = result.price*result.quantity;
            return result
        });
        if (isAuth) {
            delete data.first_name;
            delete data.second_name;
            delete data.email;
            delete data.mobile_phone;
            createNewOrder({...data, total_price, products});
        } else {
            let user = {
                first_name: data.first_name,
                second_name: data.second_name,
                login: data.login,
                pass: data.password,
                email: data.email,
                mobile_phone: data.mobile_phone,
                isadmin: false,
            };
            delete data.first_name;
            delete data.second_name;
            delete data.email;
            delete data.mobile_phone;
            delete data.password;
            delete data.login;
            registerAndCreateNewOrder(user, {...data, total_price, products})
        }
    };

    let total_price = totalPriceAllOrder(productsCartData, productsCart);

    return (
        <div className="center">
            {total_price===0 && !props.isFetchingCheckout && <Redirect to='/catalog' />}
            <div className="checkout">
                {props.isFetchingCheckout && <Fetching />}
                <div className="checkout-form">
                    {isUserError && <p className="checkout-error">{msgUserError}</p>}
                    {isCartError && <p className="checkout-error">{msgCartError}</p>}
                    <h2>Оформление заказа:</h2>
                    {!props.isFetchingCheckout && <CheckoutForm onSubmit={submit} isAuth={isAuth} initialValues={initialForm} />}
                </div>
                <div className="checkout-products">
                    <h3>Ваш заказ:</h3>
                    {productsCartData.map(p=> <ProductForCart key={p.id}
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
                    <div className="checkout-total-price">
                        <h3>Сумма заказа:</h3>
                        <p>{total_price} <span>грн.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Checkout;
