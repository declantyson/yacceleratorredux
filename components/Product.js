/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

import React, { PropTypes } from 'react'

const Product = ({ onClick, sku }) => {
    return (
        <div>
            <h1>{ sku }</h1>
            <button onClick={onClick}>Add to basket</button>
        </div>
    )
};

Product.propTypes = {
    onClick: PropTypes.func.isRequired,
    sku: PropTypes.string.isRequired
};

export default Product
