/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.4
 *  12/09/2017
 *
 */

import fetch from 'isomorphic-fetch'
import { API_URL } from '../index'

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const RECEIVE_BASKET_SUCCESS = 'RECEIVE_BASKET_SUCCESS';
export const TOGGLE_BASKET_VIEW = 'TOGGLE_BASKET_VIEW';

export const receiveBasket = basket => {
    return {
        type: RECEIVE_BASKET_SUCCESS,
        basket
    };
};

export const toggleBasketView = () => {
    return {
        type: TOGGLE_BASKET_VIEW
    };
};

export const createBasket = () => {
    return (dispatch, getState) => {
        return fetch(`${API_URL}/users/anonymous/carts`, { method: 'POST' })
            .then(response => response.json())
            .then(json => dispatch(receiveBasket(json)));
    };
};


