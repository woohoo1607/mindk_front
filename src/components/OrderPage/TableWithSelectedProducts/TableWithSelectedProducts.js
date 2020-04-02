import {NavLink} from "react-router-dom";
import React from "react";


const TableWithSelectedProducts = ({products, isFetching, total_price}) => {
    return (
        <table>
            <tbody>
            {!isFetching && products.map((p,i) => {
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
                <th className="order-total-price">{total_price} грн.</th>
            </tr>
            </tbody>
        </table>
    )
};

export default TableWithSelectedProducts;
