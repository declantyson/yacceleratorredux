/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  13/12/2016
 *
 */

import fetch from 'isomorphic-fetch'

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
    console.log("creating a basket");
    return (dispatch, getState) => {
        return fetch('https://apparel-uk.profiledemo.aws.e2y.co.uk/rest/v2/apparel-uk/users/anonymous/carts', { method: 'POST' })
            .then(response => response.json())
            .then(json => dispatch(receiveBasket(json)));
    };
};


