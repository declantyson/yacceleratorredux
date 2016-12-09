/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

import { combineReducers } from 'redux'
import { PRODUCT_CLICK } from './../actions'

const product = (state = { }, action) => {
    switch (action.type) {
        case PRODUCT_CLICK:
            return Object.assign({}, state, { sku: 'Hello, World!' });
        default:
            return state;
    }
};

export default product;