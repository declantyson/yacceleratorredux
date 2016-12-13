/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.3
 *  13/12/2016
 *
 */

import { connect } from 'react-redux'
import Basket from './../components/Basket'
import { createBasket, toggleBasketView } from './../actions/basket'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.basket.items,
        visibility: state.basket.visibility
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(toggleBasketView())
        },
        onLoad: () => {
            dispatch(createBasket())
        }
    }
};

const BasketView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Basket);

export default BasketView