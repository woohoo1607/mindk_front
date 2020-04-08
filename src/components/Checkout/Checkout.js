import React from "react";

import CheckoutForm from "./CheckoutForm/CheckoutForm";
import ProductForCart from "../Cart/ProductForCart/ProductForCart";
import {totalPriceAllOrder} from "../../helpers/totalPriceAllOrder";
import "./styles.css";

const Checkout = ({user, isAuth, productsCartData, productsCart, createNewOrder, addCount, reduceCount, deleteProductCart, registerAndCreateNewOrder}) => {

    const submit = (data) => {
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

    let initial = {
        first_name: user.first_name,
        second_name: user.second_name,
        email: user.email,
        mobile_phone: user.mobile_phone
    };

    let total_price = totalPriceAllOrder(productsCartData, productsCart);

    return (
        <div className="center">
            <div className="checkout">
                <div className="checkout-form">
                    <h2>Оформление заказа:</h2>
                    <CheckoutForm onSubmit={submit} isAuth={isAuth} initialValues={initial}/>
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
