import {deviceTypes} from "../filter-const";

const createNFCFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'NFC');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.WATCH) {
        let parameters = ["есть","нету"];
        let query = ["есть", "нету"];
        let count = [0,0];
        valuesArr.forEach(elem => {
            let val = elem.value;
            if (val==="есть") {
                count[0]++;
            } else {
                count[1]++;
            }
        });
        return {name: filterInfo.name, parameters, count, searchName:filterInfo.id, query}
    }
};

export default createNFCFilters;
