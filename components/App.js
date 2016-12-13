/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  13/12/2016
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ProductOverview from './../containers/Product'
import BasketView from './../containers/Basket'
import { fetchProducts } from '../actions/product'
import { createBasket } from '../actions/basket'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        let products = [];
        if(this.props.products) {
            products = this.props.products.map((product, i) => {
                let imageBase = "https://apparel-uk.profiledemo.aws.e2y.co.uk";
                return (
                    <ProductOverview
                        sku={product.code}
                        image={imageBase + product.images[0].url}
                        name={product.name}
                        price={product.price.formattedValue}
                        key={i} />
                );
            });
        }

        return (
            <div>
                <header>
                    <BasketView />
                </header>
                <div className="products">
                    {products}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    products: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        products: state.product.products
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onLoad: () => {
            dispatch(fetchProducts());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
