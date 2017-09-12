/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.4
 *  12/09/2017
 *
 */

import React, { PropTypes } from 'react'
import { ProductBasketView } from './../containers/Product'

const Basket = ({ basket, items, visibility, onClick }) => {
    let products = [];
    if(items) {
        products = items.map((product, i) => {
            return (
                <ProductBasketView
                    sku={product.sku}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    key={i}/>
            );
        });
    }

    if(products.length === 0) {
        products = "Your basket is currently empty.";
    }

    let itemsClass = `items ${visibility}`;

    let basketCode = "";
    if(typeof basket !== "undefined") {
        basketCode = ( <small>{basket.code}</small> );
    }

    return (
        <div className="basket">
            <h2 onClick={onClick}>Basket ({items.length}) <br/>{basketCode}</h2>
            <div className={itemsClass}>
                {products}
            </div>
        </div>
    );
};

Basket.propTypes = {
    items: PropTypes.array,
    basket: PropTypes.object
};

export default Basket
