import React from "react";

const CharacteristicsTable = (props) => {
    return (
        <table id="product-attributes">
            <caption>Характеристики:</caption>
            <colgroup>
                <col width="35%" />
                <col />
            </colgroup>
            {props.attributes && props.attributes.map(a => {
                if (a.name!=="Фото") {
                    return (
                        <tr key={a.id}>
                            <th className="tableLable">{a.name}</th>
                            <td className="tableData">{a.value}</td>
                        </tr>
                    )
                }})}
        </table>
    )
};

export default CharacteristicsTable;
