import * as axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

export const productsAPI = {
    getProducts(currentPage=1) {
        return instance.get(`products/?page=${currentPage}`).then(response => {
            return response.data
        })
    },

    getProduct(id) {
        return instance.get(`products/${id}`).then(response => {
            return response.data
        })
    }
};
