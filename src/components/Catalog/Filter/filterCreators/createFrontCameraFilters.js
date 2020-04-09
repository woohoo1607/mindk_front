import {deviceTypes} from "../filter-const";

const searchName="front_camera";

const createFrontCameraFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Фронтальная камера');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.MOBILE) {
        let parameters = ["до 5 Мп", "от 5 до 8 МП", "от 8 до 13 МП", "более 13 МП"];
        let query = ["0-5","5-8","8-13","13-0"];
        let count = [0,0,0,0];
        valuesArr.forEach(elem => {
            let val = +elem.value.split('+')[0].slice(0, -2);
            if (val<5) {
                count[0]++;
            } else if (5<=val && val<8) {
                count[1]++;
            } else if (8<=val && val<13) {
                count[2]++;
            } else {
                count[3]++;
            }
        });
        return {name: filterInfo.name, parameters, count, searchName:filterInfo.id, query}
    }
};

export default createFrontCameraFilters;
