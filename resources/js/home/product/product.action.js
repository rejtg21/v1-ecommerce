import {axios} from '../../shared/bootstrap';
// let axios = bootstrap.axios;
// console.log('BOOTSTRAP', bootstrap);
// console.log('axios', axios);
export function getProductLists() {
    return (dispatch) => {
        return axios.get('home/products').then((response) => {
            dispatch({
                type: 'GET_PRODUCT_LIST',
                payload: response.data
            });
        });
    }
}
