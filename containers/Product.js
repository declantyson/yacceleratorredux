/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.2
 *  12/12/2016
 *
 */

import { connect } from 'react-redux'
import { addToBasket } from './../actions/product'
import Product from './../components/Product'


const mapStateToProps = (state, ownProps) => {
    return {
        sku: ownProps.sku
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(addToBasket(ownProps.sku))
        }
    }
};

const ProductView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);

export default ProductView

