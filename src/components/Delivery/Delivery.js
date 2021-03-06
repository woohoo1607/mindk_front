import React from "react";

import newPostLogo from "../../img/novoy_pochtoy-2.jpg";
import "./styles.css";

const Delivery = () => {
    return (
        <div className="center">
            <div className="delivery-container">
                <h2>Доставка</h2>
                <img src={newPostLogo}  alt="nova-poshta-logo"/>
                <h3>Доставка в отделение «Новая Почта»</h3>
                <p>Доставка осуществляется в любое выбранное вами отделение Новой почты. Стоимость доставки зависит от типа оплаты и стоимости товара. Пересылка товара по Украине оплачивается покупателем согласно тарифов службы доставки "Новая Почта". При поступлении посылки в ваше отделение Вы получите уведомление и сможете забрать ваш заказ.<br />
                    При подтверждении заказа до 14:00, отправка производится в день заказа. Сроки доставки в отделение 1 - 3 дня.<br />
                    После отправки заказа Вы получите SMS-сообщение с номером экспресс-накладной.<br />
                    Узнать дату получения и стоимость доставки вашего заказа Вы можете позвонив на нашу горячую линию или посетив сайт компании «Новая Почта».<br />
                </p>
                <h3>Адресная доставка курьером Новой почты</h3>
                <p>
                    Вы можете воспользоваться адресной доставкой по всей Украине. Этот тип доставки осуществляется курьерами Новой Почты. С тарифами доставки "до двери" вы можете ознакомится на официальном сайте службы доставки “Новая Почта”.<br />
                    Такой вид доставки осуществляется после полной предварительной оплаты заказа.<br />
                </p>
            </div>
        </div>
    )
};
export default Delivery;
