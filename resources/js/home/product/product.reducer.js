let initialState = {
    lists: []
}

export default function(state = initialState, action = {}) {
    let newState = {...state}
    switch (action.type) {	     

        case 'GET_PRODUCT_LIST': 
            newState.lists = action.payload;
            return newState;
            
        default:return newState;
    }	     
}
