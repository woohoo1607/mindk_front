import {deviceTypes} from "../filter-const";

const createCaseColorFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Цвет');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.WATCH) {
        let parameters = ["Золотой","Серый", "Белый", "Черный", "Синий", "другой"];
        let count = [0,0,0,0,0,0];
        valuesArr.forEach(elem => {
            let val = elem.value;
            if (val==="Золотой") {
                count[0]++;
            } else if (val==="Серый") {
                count[1]++;
            } else if (val==="Белый") {
                count[2]++;
            } else if (val==="Черный") {
                count[3]++;
            } else if (val==="Синий") {
                count[4]++;
            } else {
                count[5]++;
            }
        });
        return {name: filterInfo.name, parameters, count}
    }
};

export default createCaseColorFilters;
