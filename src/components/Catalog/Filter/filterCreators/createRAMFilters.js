import {deviceTypes} from "../filter-const";

const createRAMFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Встроенная память');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.MOBILE) {
        let parameters = ["менее 16 Гб", "16 Гб", "32 Гб", "64 Гб" ,"128 Гб" ,"256 Гб", "512 Гб", "более 512 Гб"];
        let query = ["0-16","16","32","64","128","256","512","512-0"];
        let count = [0,0,0,0,0,0,0,0];
        valuesArr.forEach(elem => {
            let val = +elem.value.split(' ')[0];
            if (val<16) {
                count[0]++;
            } else if (val===16) {
                count[1]++;
            } else if (val===32) {
                count[2]++;
            } else if (val===64) {
                count[3]++;
            } else if (val===128) {
                count[4]++;
            } else if (val===256) {
                count[5]++;
            } else if (val===512) {
                count[6]++;
            } else {
                count[7]++;
            }
        });
        return {name: filterInfo.name, parameters, count, searchName:filterInfo.id, query}
    }
};

export default createRAMFilters;
