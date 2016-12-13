/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  13/12/2016
 *
 */

import React, { PropTypes } from 'react'

const ProductInBasket = ({ sku, image, name, price }) => {
    let className = `product product-${sku}`;
    return (
        <div className={className}>
            <img src={image} alt={name} />
            <h1>{ name }</h1>
            <h2>{ price }</h2>
            <div className="clearfix"></div>
        </div>
    )
};

ProductInBasket.propTypes = {
    sku: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default ProductInBasket
