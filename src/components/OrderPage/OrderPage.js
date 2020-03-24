import React from "react";
import {NavLink} from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';

import "./OrderPage.css";
import noProductImg from "../../img/product-no-image.jpg";

const OrderPage = (props) => {
    console.log(props);
    return (
        <div className="center order-page">
            <div id="order-details">
                <h2>Детали заказа:</h2>
                <table>
                    <colgroup>
                        <col width="35%"/>
                        <col/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>Дата заказа</th>
                        <td>
                            <Moment format="DD.MM.YYYY в HH:MM" date={props.order["date_start"]}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Статус</th>
                        <td>{props.order.status}</td>
                    </tr>
                    <tr>
                        <th>Адрес доставки</th>
                        <td>{props.order.address}</td>
                    </tr>
                    <tr>
                        <th>Имя, Фамилия</th>
                        <td>{props.user["first_name"]} {props.user["second_name"]}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{props.user.email}</td>
                    </tr>
                    <tr>
                        <th>Номер телефона</th>
                        <td>{props.user["mobile_phone"]}</td>
                    </tr>
                    <tr>
                        <th>Коментарий к заказу</th>
                        <td>{props.order.comments}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div id="order-products">
                <h4>{props.user["first_name"]} {props.user["second_name"]}, мы очень рады что Вы выбрали наш
                    магазин.</h4>
                <h2>Ваш заказ №{props.order.id}</h2>
                <h3>
                    Статус: {props.order.status}
                    <span/>
                </h3>
                <table>
                    <tbody>
                    {!props.isFetching && props.order.products.map((p,i) => {
                        return (
                            <tr key={i}>
                                <td>{p.fullProductInfo.attributes
                                    .filter(a => a.name == "Фото")
                                    .map((a, index, arr)=> {
                                        return (
                                            <NavLink to={`/products/${p["id_products"]}`} key={index}>
                                                <img src={a.value}/>
                                            </NavLink>
                                        )
                                    })}
                                </td>
                                <td style={{width: '200px'}}>
                                    <NavLink to={`/products/${p["id_products"]}`} key={i}>
                                        {p.fullProductInfo.name}
                                    </NavLink>
                                </td>
                                <td>{p.price} грн.</td>
                                <td>x{p.quantity} шт.</td>
                                <td>{p.total_price} грн.</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th>К оплате</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="order-total-price">{props.order.total_price} грн.</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default OrderPage;
