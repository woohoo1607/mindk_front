import {deviceTypes} from "../filter-const";

const createStrapMaterialFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Материал ремешка');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.WATCH) {
        let parameters = ["фторэластомер","Силикон", "Кожа", "Сталь", "другой"];
        let query = ["фторэластомер", "Силикон","Кожа","Сталь", "другой"];
        let count = [0,0,0,0,0];
        valuesArr.forEach(elem => {
            let val = elem.value;
            if (val==="фторэластомер") {
                count[0]++;
            } else if (val==="Силикон") {
                count[1]++;
            } else if (val==="Кожа") {
                count[2]++;
            } else if (val==="Сталь") {
                count[3]++;
            } else {
                count[4]++;
            }
        });
        return {name: filterInfo.name, parameters, count, searchName:filterInfo.id, query}
    }
};

export default createStrapMaterialFilters;
