import {deviceTypes} from "../filter-const";

const createMainCameraFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Основная камера');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.MOBILE) {
        let parameters = ["до 8 Мп", "от 8 до 13 МП", "от 13 до 20 МП", "более 20 МП"];
        let count = [0,0,0,0];
        valuesArr.forEach(elem => {
            let val = +elem.value.split('+')[0].slice(0, -2);
            if (val<8) {
                count[0]++;
            } else if (8<=val && val<13) {
                count[1]++;
            } else if (13<=val && val<20) {
                count[2]++;
            } else {
                count[3]++;
            }
        });
        return {name: filterInfo.name, parameters, count}
    }
};

export default createMainCameraFilters;
