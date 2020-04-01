import React from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import OneFilter from "./OneFilter";

const createDisplayFilters = (deviceType, attributes, values) => {
    /*deviceType => mobile, tablet, laptop, tv, monitor*/

    let filterInfo = attributes.find(a => a.name === 'Диагональ дисплея');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType==="mobile") {
        let parameters = ["до 4\"", "от 4\" до 5\"", "от 5\" до 6\"", "более 6\""];
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
        return {name: filterInfo.name, parameters, count}
    }
};

const createROMFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Оперативная память');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType==="mobile") {
        let parameters = ["менее 1 Гб","1 Гб", "2 Гб", "3 Гб", "4 Гб", "6 Гб", "8 Гб", "более 8 Гб"];
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
        return {name: filterInfo.name, parameters, count}
    }
};

const createRAMFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Встроенная память');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType==="mobile") {
        let parameters = ["менее 16 Гб", "16 Гб", "32 Гб", "64 Гб" ,"128 Гб" ,"256 Гб", "512 Гб", "более 512 Гб"];
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
        return {name: filterInfo.name, parameters, count}
    }
};

const createMainCameraFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Основная камера');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType==="mobile") {
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

const createFrontCameraFilters = (deviceType, attributes, values) => {
    let filterInfo = attributes.find(a => a.name === 'Фронтальная камера');
    let valuesArr = values.filter(v=>v.id_product_attributes===filterInfo.id);
    if (deviceType==="mobile") {
        let parameters = ["до 5 Мп", "от 5 до 8 МП", "от 8 до 13 МП", "более 13 МП"];
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
        return {name: filterInfo.name, parameters, count}
    }
};


const createFilters = (attributes, values, categoryName) => {
    if (categoryName==='smartphones') {
        let displayFilters = createDisplayFilters("mobile", attributes, values);
        let ROMFilters = createROMFilters("mobile", attributes, values);
        let RAMFilters = createRAMFilters("mobile", attributes, values);
        let MainCamera = createMainCameraFilters("mobile", attributes, values);
        let FrontCamera = createFrontCameraFilters("mobile", attributes, values);
        return [displayFilters,ROMFilters,RAMFilters,MainCamera,FrontCamera];
    }
};



const Filter = (props) => {


    let filters = createFilters(props.filtersData.attributes, props.filtersData.values, props.filtersData.categoryName) || [];
    console.log(filters);
    return (
        <div className="filter">
            {filters.map((filter, index) => <OneFilter index={index} filter={filter}/>)}
        </div>
    )
};

export default Filter;
