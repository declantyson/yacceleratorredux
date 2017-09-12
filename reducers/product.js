/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  13/12/2016
 *
 */

import { ADD_TO_BASKET, FETCH_PRODUCTS_SUCCESS } from './../actions/product'

const product = (state = { }, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return state;
        case FETCH_PRODUCTS_SUCCESS:
            console.log("product fetch success!");
            return Object.assign({}, state, { products: action.products });
        default:
            return state;
    }
};

export default product;
