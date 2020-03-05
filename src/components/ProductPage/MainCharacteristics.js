import React from "react";

const MainCharacteristics = (props) => {
    return (
        <div className="mainCharacteristics">
            {props.product["stock_quantity"]>0 ? <p className="availability">Есть в наличии</p> : <p className="noAvailability">Нет в наличии</p>}
            <div className="priceAndPurchase">
                <p>{props.product.price} <span>грн.</span></p>
                <button className="add-to-cart-btn">Купить</button>
            </div>
            <div className="productInfoLeft">
                <h3>Краткие технические характеристики:</h3>
                {props.mainCharacteristics.map(a=> {
                    return (
                        <p key={a.id}>
                            <span className="spanAttributesName">{a.name}: </span>
                            <span>{a.value}</span>
                        </p>
                    )
                })}
                <div className="moreCharacteristics" onClick={()=>props.setProductNavigation("Characteristics")}></div>
            </div>
            <div className="productInfoRight">
                <div className="productDelivery">
                    <h3>Доставка:</h3>
                    <ul>
                        <li>Самовывоз из магазина</li>
                        <li>Доставка в отделение "Нова пошта"</li>
                        <li>Адрессная доставка "Нова пошта"</li>
                    </ul>
                </div>
                <div className="productGuarantee">
                    <h3>Гарантия:</h3>
                    <ul>
                        <li>Гарантия {props.product.guarantee ? props.product.guarantee : 12} месяцев</li>
                        <li>Обмен/возврат в течении 14 дней</li>
                    </ul>
                </div>
                <div className="productPayment">
                    <h3>Оплата:</h3>
                    <ul>
                        <li>Наличными при получении</li>
                        <li>Картой на сайте</li>
                        <li>Картой в магазине</li>
                        <li>Наложенный платеж</li>
                        <li>Рассрочка онлайн</li>
                        <li>Перевод с VISA/MasterCard</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default MainCharacteristics;
