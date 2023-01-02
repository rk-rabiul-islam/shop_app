import axios from "axios";
import { PRODUCT_DELETED, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT } from "./actionTypes"

// Request for products
export const productRequest = () => ({
    type : PRODUCT_REQUEST
});

// get products Success
export const productSuccess = (payload) => ({

    type : PRODUCT_SUCCESS,
    payload
});

// Request Fail
export const productFail = (payload) => ({

    type : PRODUCT_FAIL,
    payload
});

// get all products
export const getAllProduct = () => async (dispatch) => {

    try {
        dispatch(productRequest())

        setTimeout(() => {
            axios.get('http://localhost:5050/api/v1/product')
            .then( res => {
                dispatch(productSuccess(res.data));
            })
            .catch(error =>{
                dispatch(productFail(error.message))
            })
        }, 2000)
       
    } catch (error) {
        dispatch(productFail(error.message))
    }
}

// Create new products
export const createProduct = (data) => async (dispatch) => {

    try {
        await axios.post('http://localhost:5050/api/v1/product', data)
        .then( res => {
            dispatch(getAllProduct());
        })
        .catch(error =>{
            dispatch(productFail(error.message))
        })
       
    } catch (error) {
        dispatch(productFail(error.message))
    }
}

// Create new products
export const getSingleProduct = (id) => (dispatch) => {

    try {
        dispatch({
            type : SINGLE_PRODUCT,
            payload : id
        })

       
    } catch (error) {
        dispatch(productFail(error.message))
    }
}

// delete products
export const deleteProduct = (id) => async (dispatch) => {

    try {
        await axios.delete(`http://localhost:5050/api/v1/product/${id}`)
        .then( res => {
            dispatch({
                type : PRODUCT_DELETED,
                payload : id
            });
        })
        .catch(error =>{
            dispatch(productFail(error.message))
        })
       
    } catch (error) {
        dispatch(productFail(error.message))
    }
}