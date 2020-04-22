import {deviceTypes} from "../filter-const";

const createStrapColorFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Цвет ремешка');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.WATCH) {
        let parameters = ["Золотой","Серый", "Белый", "Черный", "Синий", "Розовый", "другой"];
        let query = ["Золотой", "Серый","Белый","Черный", "Синий", "Розовый", "другой"];
        let count = [0,0,0,0,0,0,0];
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
            } else if (val==="Розовый") {
                count[5]++;
            } else {
                count[6]++;
            }
        });
        return {name: filterInfo.name, parameters, count, searchName:filterInfo.id, query}
    }
};

export default createStrapColorFilters;
