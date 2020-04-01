import React from "react";
import {NavLink} from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';

import "./Profile.css";

const OrdersHistory = (props) => {
    return (
        <div>
            <h2>Мои заказы</h2>
        <ul id="orders-history">
            {props.ordersList.map((o,i)=> {
                return (
                    <li key={i}>
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
