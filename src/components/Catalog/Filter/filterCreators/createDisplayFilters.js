import {deviceTypes} from "../filter-const";

const createDisplayFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Диагональ дисплея');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.MOBILE) {
        let parameters = ["до 4\"", "от 4\" до 5\"", "от 5\" до 6\"", "более 6\""];
        let query = ["0-4", "4-5","5-6","6-0"];
        let count = [0,0,0,0];
        valuesArr.forEach(elem => {
            let val = +elem.value;
            if (val<4) {
                count[0]++;
            } else if (4<=val && val<5) {
                count[1]++;
            } else if (5<=val && val<6) {
                count[2]++;
            } else {
                count[3]++;
            }
        });
        return {name: filterInfo.name, parameters, count, searchName:filterInfo.id, query}
    }
};

export default createDisplayFilters;
