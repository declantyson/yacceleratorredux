/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

import React, { PropTypes } from 'react'

const Basket = ({ items }) => {
    console.log(items);
    return (
        <div>
            <h2>Basket</h2>
            <p>{ items }</p>
        </div>
    )
};

Basket.propTypes = {
    items: PropTypes.array
};

export default Basket