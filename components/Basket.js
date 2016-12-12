/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.2
 *  12/12/2016
 *
 */

import React, { PropTypes } from 'react'

const Basket = ({ items }) => {
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