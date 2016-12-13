/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  13/12/2016
 *
 */

import { combineReducers } from 'redux'
import { ADD_TO_BASKET, RECEIVE_BASKET_SUCCESS, TOGGLE_BASKET_VIEW } from './../actions/basket'

const basket = (state = { items : [], visibility: "hidden" }, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            let basketItems = [];
            if(state.items) {
                state.items.forEach(function (i) {
                    basketItems.push(i);
                });
            }
            basketItems.push(action.product);

            return Object.assign({}, state, { items: basketItems });
        case RECEIVE_BASKET_SUCCESS:
            return Object.assign({}, state, { basket: action.basket });
        case TOGGLE_BASKET_VIEW:
            let visibility = state.visibility === "hidden" ? "visible" : "hidden";
            return Object.assign({}, state, { visibility: visibility });
        default:
            return state;
    }
};

export default basket;