/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.4
 *  12/09/2017
 *
 */

import { combineReducers } from 'redux'
import { ADD_TO_BASKET, RECEIVE_BASKET_SUCCESS, TOGGLE_BASKET_VIEW } from './../actions/basket'
import { API_URL } from '../index'

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

            fetch(`${API_URL}/users/anonymous/carts/${state.basket.guid}/entries?code=${action.product.sku}`, {
                    method: 'POST'
                })
                .then(response => response.json())
                .then(json => dispatch(receiveBasket(json)));

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
