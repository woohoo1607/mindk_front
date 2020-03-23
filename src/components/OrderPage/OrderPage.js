import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';

import "./OrderPage.css";

const OrderPage = (props) => {
    console.log(props);
    return (
        <div className="center order-page">
            <h2>Ваш заказ №{props.order.id}</h2>
            <table id="order-details">
                <caption>Детали заказа:</caption>
                <colgroup>
                    <col width="35%" />
                    <col />
                </colgroup>
                <tbody>
                    <tr>
                        <th>Дата заказа</th>
                        <td>
                            <Moment format="DD.MM.YYYY в HH:MM" date={props.order["date_start"]} />
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
                        <th>email</th>
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
    )
};

export default OrderPage;
