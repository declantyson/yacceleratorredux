/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  13/12/2016
 *
 */

import React, { PropTypes } from 'react'
import { ProductBasketView } from './../containers/Product'

const Basket = ({ items, visibility, onClick }) => {
    let products = [];
    if(items) {
        products = items.map((product, i) => {
            let imageBase = "https://apparel-uk.profiledemo.aws.e2y.co.uk";
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

    return (
        <div className="basket">
            <h2 onClick={onClick}>Basket ({items.length})</h2>
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