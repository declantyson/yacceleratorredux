/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

import { combineReducers } from 'redux'
import { ADD_TO_BASKET } from './../actions'

const basket = (state = { items : [] }, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            let basketItems = [];
            state.items.forEach(function (i) {
               basketItems.push(i);
            });
            basketItems.push(action.sku);

            return Object.assign({}, state, { items: basketItems });
        default:
            return state;
    }
};

export default basket;