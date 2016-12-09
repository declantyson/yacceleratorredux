/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

export const PRODUCT_CLICK = 'PRODUCT_CLICK';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export const productClick = () => {
    return {
        type: PRODUCT_CLICK
    }
};

export const addToBasket = (sku) => {
    return {
        type: ADD_TO_BASKET,
        sku
    }
};