import * as axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded',
/*              'Authorization': 'Bearer' + localStorage.getItem('token'),*/
    }
});
let getToken = () => {
    return ({headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
};

export const productsAPI = {
    getProducts(currentPage=1) {
        return instance.get(`products/?page=${currentPage}`, getToken()).then(response => {
            return response.data
        })
    },

    getProduct(id) {
        return instance.get(`products/${id}`).then(response => {
            return response.data
        })
    }
};

export const authAPI = {
    login(username, password) {
        let data = qs.stringify({username, password});
        return instance.post(`login`, data).then(response => {
            return response.data
        })
    },
    logout() {

    },
    register() {

    },
    me() {
        return instance.get('me', getToken()).then(response => {
            return response.data
        })
    }
};

export const userAPI = {

};
