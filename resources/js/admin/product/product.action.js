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

