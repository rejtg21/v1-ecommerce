let initialState = {
    lists: [],
    pages: 1
}

export default function(state = initialState, action = {}) {
    let newState = {...state}
    switch (action.type) {	     

        case 'GET_PRODUCT_LIST': 
        console.log('action payload', action.payload)
            newState.lists = action.payload.lists;
            newState.pages = action.payload.pages
            return newState;
            
        default:return newState;
    }	     
}
