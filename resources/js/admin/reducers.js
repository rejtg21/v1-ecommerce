import {combineReducers} from 'redux';
import ProductReducer from './product/product.reducer';

const Reducers = combineReducers({
    product: ProductReducer
});

export default Reducers;
