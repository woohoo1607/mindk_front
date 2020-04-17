import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';

import "./OrderPage.css";
import noProductImg from "../../img/product-no-image.jpg";
import TableWithSelectedProducts from "./TableWithSelectedProducts/TableWithSelectedProducts";

const OrderPage = (props) => {

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
            <TableWithSelectedProducts products={props.order.products} isFetching={props.isFetching} total_price={props.order.total_price}/>
            </div>
        </div>
    )
};

export default OrderPage;
