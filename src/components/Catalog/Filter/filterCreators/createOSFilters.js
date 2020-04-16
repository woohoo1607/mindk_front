import {deviceTypes} from "../filter-const";

const createOSFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Операционная система');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType===deviceTypes.WATCH) {
        let parameters = ["WatchOS","Tizen", "WearOS", "другая"];
        let query = ["WatchOS", "Tizen","WearOS","другая"];
        let count = [0,0,0,0];
        valuesArr.forEach(elem => {
            let val = elem.value;
            if (val==="WatchOS") {
                count[0]++;
            } else if (val==="Tizen") {
                count[1]++;
            } else if (val==="WearOS") {
                count[2]++;
            } else {
                count[3]++;
            }
        });
        return {name: filterInfo.name, parameters, count, searchName:filterInfo.id, query}
    }
};

export default createOSFilters;
