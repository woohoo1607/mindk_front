import {deviceTypes} from "../filter-const";

const createCaseMaterialFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Материал корпуса');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.WATCH) {
        let parameters = ["Аллюминий","Сталь", "Керамика", "другой"];
        let count = [0,0,0,0];
        valuesArr.forEach(elem => {
            let val = elem.value;
            if (val==="Аллюминий") {
                count[0]++;
            } else if (val==="Сталь") {
                count[1]++;
            } else if (val==="Керамика") {
                count[2]++;
            } else {
                count[3]++;
            }
        });
        return {name: filterInfo.name, parameters, count}
    }
};

export default createCaseMaterialFilters;
