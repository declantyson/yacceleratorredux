/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.2
 *  12/12/2016
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ProductView from './../containers/Product'
import BasketView from './../containers/Basket'
import { fetchProducts } from '../actions/product'

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        console.log(this.props);
        let products = [];
        if(this.props.products) {
            products = this.props.products.map((product) => {
                return (
                    <ProductView sku={product.code}/>
                );
            });
        }

        return (
            <div onClick={this.props.onClick}>
                <BasketView />
                {products}
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
