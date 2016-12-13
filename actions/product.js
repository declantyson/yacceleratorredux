/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.2
 *  13/12/2016
 *
 */

import fetch from 'isomorphic-fetch'

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export const addToBasket = product => {
    return {
        type: ADD_TO_BASKET,
        product
    }
};

export const receiveProducts = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products
    }
};

export const fetchProducts = () => {
    return (dispatch, getState) => {
        return fetch('https://apparel-uk.profiledemo.aws.e2y.co.uk/rest/v2/apparel-uk/products/search?pageSize=20&fields=FULL')
            .then(response => response.json())
            .then(json => dispatch(receiveProducts(json.products)));
    };
};

