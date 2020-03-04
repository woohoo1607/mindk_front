import React from "react";
import "./ProductsPage.css";
import noProductImg from "../../img/product-no-image.jpg";
import CharacteristicsTable from "./CharacteristicsTable";
import MainCharacteristics from "./MainCharacteristics";

const ProductPage = (props) => {
    let Main = true;
    let Characteristics = false;
    let Description = false;
    if (props.productMenuNavigator=="Main") {
        Main = true;
        Characteristics = false;
        Description = false;
    }
    if (props.productMenuNavigator=="Characteristics") {
        Main = false;
        Characteristics = true;
        Description = false;
    }
    if (props.productMenuNavigator=="Description") {
        Main = false;
        Characteristics = false;
        Description = true;
    }
    console.log(props.products.product);
    let photos = [];
    let mainCharacteristics = [];
    if (props.products.product.attributes!==undefined) {
        photos = props.products.product.attributes.filter(a => {
            if (a.name === "Фото") {
                return a
            }
        });
        mainCharacteristics = props.products.product.attributes.filter(a => {
            if (a.name === "Диагональ дисплея" || a.name === "Разрешение дисплея" || a.name === "Оперативная память" || a.name === "Основная камера" || a.name === "Класс защиты") {
                return a
            }
        });
    }
    return (
        <div className="center">
            <div className="productInfo">
                <div className="productMenu">
                    <ul>
                        <li className={Main ? "activeLi" : "noActiveLi"} onClick={()=>props.changeProductMenuNavigator("Main")}>Главное</li>
                        <li className={Characteristics ? "activeLi" : "noActiveLi"} onClick={()=>props.changeProductMenuNavigator("Characteristics")}>Характеристики</li>
                        <li className={Description ? "activeLi" : "noActiveLi"} onClick={()=>props.changeProductMenuNavigator("Description")}>Описание</li>
                    </ul>
                    <div className="clr"></div>
                </div>
                <div className="productInfoPictures">
                    {photos.length>0 && <img src={photos[0].value} />}
                    {photos.length===0 && <img src={noProductImg} />}
                </div>
                <div className="productInfoInfo">
                    <h2>{props.products.product.name}</h2>
                    {Main &&
                        <MainCharacteristics mainCharacteristics={mainCharacteristics}
                                             product={props.products.product}
                                             changeProductMenuNavigator={props.changeProductMenuNavigator}
                        />
                    }
                    {Characteristics &&
                        <CharacteristicsTable attributes={props.products.product.attributes}/>
                    }

                </div>
            </div>
            <div className="clr"></div>
        </div>
    )
};

export default ProductPage;
