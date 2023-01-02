

// create reducer

import { PRODUCT_DELETED, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT } from "./actionTypes.js";
import initialState from "./initialState.js";

const productReducer = ( state = initialState, {type, payload}) => {

    switch (type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                skeletonEffect : true
            }
        case PRODUCT_SUCCESS:
            return {
                ...state,
                skeletonEffect : false,
                products : payload
            }
        case PRODUCT_FAIL:
            return {
                ...state,
                skeletonEffect : false,
                error : payload
            }
        case SINGLE_PRODUCT:
            return {
                ...state,
                singleProductshow : state.products.find( data => data._id === payload)
            }
        case PRODUCT_DELETED:
            return {
                ...state,
                products : state.products.filter( data => data._id !== payload)
            }
    
        default:
            return state;
    }

}

export default productReducer;