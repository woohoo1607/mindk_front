import * as axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
let getToken = () => {
    return ({headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
};

export const productsAPI = {
    getProducts(search= "?page=1") {
        return instance.get(`products/${search}`, getToken()).then(response => {
            return response.data
        })
    },

    getProduct(id) {
        return instance.get(`products/${id}`, getToken()).then(response => {
            return response.data
        }).catch(err=> {
            return {
                ...JSON.parse(err.request.responseText),
                status: JSON.parse(err.request.status)
            }
        });
    }
};

export const authAPI = {
    login(username, password) {
        let data = qs.stringify({username, password});
        return instance.post(`login`, data).then(response => {
            return response.data
        }).catch(err=> JSON.parse(err.request.responseText));
    },
    logout(id) {
        let data = qs.stringify({id});
        return instance.post(`login`, data).then(response => {
            return response.data
        })
    },
    register(user) {
        let data = qs.stringify(user);
        return instance.post(`users`, data).then(response => {
            return response.data
        }).catch(err=> JSON.parse(err.request.responseText));
    },
    me() {
        return instance.get('me', getToken()).then(response => {
            return response.data
        })
    }
};

export const userAPI = {

};

export const ordersAPI = {
    getOrders () {
        return instance.get(`orders`, getToken()).then(response => {
            return response.data
        })
    },
    getOrderById (id) {
        return instance.get(`orders/${id}`, getToken()).then(response => {
           return response.data
        }).catch(err=> {
            return {
                ...JSON.parse(err.request.responseText),
                status: JSON.parse(err.request.status)
            }
        });
    },
    addOrder (orderData) {
        let data = qs.stringify(orderData);
        return instance.post(`orders`, data, getToken()).then(response => {
           return response.data
        }).catch(err=> JSON.parse(err.request.responseText));
    }
};

export const categoriesAPI = {
    getCategories () {
        return instance.get(`categories`).then(response=> {
            return response.data
        })
    },
};
