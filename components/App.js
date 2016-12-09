/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

import React from 'react'
import ProductView from './../containers/Product'
import BasketView from './../containers/Basket'

class App extends React.Component {

  render() {
    return (
      <div>
        <BasketView />
        <ProductView sku="123" />
        <ProductView sku="456" />
        <ProductView sku="789" />
      </div>
    )
  }
}

export default App