import {deviceTypes} from "../filter-const";

const createROMFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Оперативная память');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.MOBILE) {
        let parameters = ["менее 1 Гб","1 Гб", "2 Гб", "3 Гб", "4 Гб", "6 Гб", "8 Гб", "более 8 Гб"];
        let query = ["0-1","1","2","3","4","6","8","8-0"];
        let count = [0,0,0,0,0,0,0,0];
        valuesArr.forEach(elem => {
            let val = +elem.value.split(' ')[0];
            if (val<1) {
                count[0]++;
            } else if (val===1) {
                count[1]++;
            } else if (val===2) {
                count[2]++;
            } else if (val===3) {
                count[3]++;
            } else if (val===4) {
                count[4]++;
            } else if (val===6) {
                count[5]++;
            } else if (val===8) {
                count[6]++;
            } else {
                count[7]++;
            }
        });
        return {name: filterInfo.name, parameters, count, searchName:filterInfo.id, query}
    }
};

export default createROMFilters;
