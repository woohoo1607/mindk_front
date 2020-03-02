import React from "react";
import "./ProductsPage.css";
import noProductImg from "../../img/product-no-image.jpg";

const ProductPage = (props) => {
    console.log(props.products.product);
    let photos = [];
    if (props.products.product.attributes!==undefined) {
        photos = props.products.product.attributes.filter(a => {
            if (a.name === "Фото") {
                return a
            }
        });
    }
    return (
        <div className="center">
            <div className="productInfo">
                <div className="productInfoPictures">
                    {photos.length>0 && <img src={photos[0].value} />}
                    {photos.length===0 && <img src={noProductImg} />}
                </div>
                <div className="productInfoInfo">
                    <h2>{props.products.product.name}</h2>
                    {props.products.product["stock_quantity"]>0 ? <p className="availability">Есть в наличии</p> : <p className="noAvailability">Нет в наличии</p>}
                    <div className="priceAndPurchase">
                        <p>{props.products.product.price} <span>грн.</span></p>
                        <button className="add-to-cart-btn">Купить</button>
                    </div>
                    <div>
                        
                    </div>
                    <div>
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
                                <li>Гарантия {props.products.product.guarantee ? props.products.product.guarantee : 12} месяцев</li>
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
            </div>
            <div className="clr"></div>
        </div>
    )
};

export default ProductPage;
