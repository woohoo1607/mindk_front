import React from "react";
import {NavLink} from "react-router-dom";
import "./Profile.css";
import Moment from 'react-moment';
import 'moment-timezone';

const OrdersHistory = (props) => {
    return (
        <div>
            <h2>Мои заказы</h2>
        <ul id="orders-history">
            {props.ordersList.map(o=> {
                return (
                    <li>
                        <b><Moment format="DD.MM.YYYY " date={o.date_start}></Moment></b>
                        <NavLink to={`/orders/${o.id}`}>Заказ №{o.id}</NavLink>
                        , {o.status}
                        <NavLink to={`/orders/${o.id}`} className="order-more">Детали заказа</NavLink>
                    </li>
                )
            })}
        </ul>
        </div>
    )
};

export default OrdersHistory;
