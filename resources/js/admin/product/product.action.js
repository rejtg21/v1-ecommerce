import {axios} from '../../shared/bootstrap';

export function getProductLists() {
    return (dispatch) => {
        return axios.get('admin/products').then((response) => {
            dispatch({
                type: 'GET_PRODUCT_LIST',
                payload: response.data
            });
        });
    }
}

export function getCurrencies() {
    return (dispatch) => {
        return axios.get('admin/product/currencies').then((response) => {
            dispatch({
                type: 'GET_PRODUCT_CURRENCIES',
                payload: response.data
            });
            return response.data;
        });
    }
}

export function getTypes() {
    return (dispatch) => {
        return axios.get('admin/product/types').then((response) => {
            dispatch({
                type: 'GET_PRODUCT_TYPES',
                payload: response.data
            });
            return response.data;
        });
    }
}

export function saveProduct(data) {
    return (dispatch) => {
        return axios.post('admin/products', data).then((response) => {
            dispatch({
                type: 'SAVE_PRODUCT',
                payload: response.data
            });
            
            return response.data
        });
    }
}

