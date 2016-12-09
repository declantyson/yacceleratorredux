/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

import { connect } from 'react-redux'
import Basket from './../components/Basket'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.basket.items
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(addToBasket(ownProps.sku))
        }
    }
};

const BasketView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Basket);

export default BasketView