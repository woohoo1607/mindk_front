import React, {useState} from "react";

import noProductImg from "../../img/product-no-image.jpg";
import CharacteristicsTable from "./CharacteristicsTable";
import MainCharacteristics from "./MainCharacteristics";
import "./ProductsPage.css";

const ProductPage = (props) => {
    let [productNavigation, setProductNavigation] = useState("Main");
    let photos = [];
    let mainCharacteristics = [];
    if (props.product.attributes!==undefined) {
        photos = props.product.attributes.filter(a => {
            if (a.name === "Фото") {
                return a
            }
        });
        mainCharacteristics = props.product.attributes.filter(a => {
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
                        <li className={productNavigation==="Main" ? "activeLi" : "noActiveLi"} onClick={()=>setProductNavigation("Main")}>Главное</li>
                        <li className={productNavigation==="Characteristics" ? "activeLi" : "noActiveLi"} onClick={()=>setProductNavigation("Characteristics")}>Характеристики</li>
                        <li className={productNavigation==="Description" ? "activeLi" : "noActiveLi"} onClick={()=>setProductNavigation("Description")}>Описание</li>
                    </ul>
                    <div className="clr"></div>
                </div>
                <div className="productInfoPictures">
                    {photos.length>0 && <img src={photos[0].value} />}
                    {photos.length===0 && <img src={noProductImg} />}
                </div>
                <div className="productInfoInfo">
                    <h2>{props.product.name}</h2>
                    {productNavigation==="Main" &&
                        <MainCharacteristics mainCharacteristics={mainCharacteristics}
                                             product={props.product}
                                             setProductNavigation={setProductNavigation}
                                             addProductCart={props.addProductCart}
                        />
                    }
                    {productNavigation==="Characteristics" &&
                        <CharacteristicsTable attributes={props.product.attributes}/>
                    }

                </div>
            </div>
            <div className="clr"></div>
        </div>
    )
};

export default ProductPage;
