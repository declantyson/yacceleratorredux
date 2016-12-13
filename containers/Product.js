/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  13/12/2016
 *
 */

import { connect } from 'react-redux'
import { addToBasket } from './../actions/product'
import Product from './../components/Product'
import ProductInBasket from './../components/ProductInBasket'

const mapStateToProps = (state, ownProps) => {
    return {
        sku: ownProps.sku
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            let product = {
                sku: ownProps.sku,
                image: ownProps.image,
                name: ownProps.name,
                price: ownProps.price
            };
            dispatch(addToBasket(product))
        }
    }
};

const ProductOverview = connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);

export const ProductBasketView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductInBasket);

export default ProductOverview;