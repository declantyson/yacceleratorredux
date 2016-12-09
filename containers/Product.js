/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

import { connect } from 'react-redux'
import { addToBasket } from './../actions'
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

