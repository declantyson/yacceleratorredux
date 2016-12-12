/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.2
 *  12/12/2016
 *
 */

import { FETCH_PRODUCTS_SUCCESS } from './../actions/product'

const product = (state = { }, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            console.log("product fetch success!");
            return Object.assign({}, state, { products: action.products });
        default:
            return state;
    }
};

export default product;