let initialState = {
    lists: [],
    // pages: 1,
    currencies: [],
    types: [],
}

export default function(state = initialState, action = {}) {
    let newState = {...state}
    switch (action.type) {	     

        case 'GET_PRODUCT_LIST': 
            newState.lists = action.payload.lists;
            // newState.pages = action.payload.pages
            return newState;
        case 'GET_PRODUCT_CURRENCIES': 
            newState.currencies = action.payload;
            return newState;
        case 'GET_PRODUCT_TYPES': 
            newState.types = action.payload;
            return newState;
            
        case 'SAVE_PRODUCT': 
        newState.lists.push(action.payload.product);
        return newState;
            
        default:return newState;
    }	     
}
