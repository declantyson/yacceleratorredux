/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.4
 *  12/09/2017
 *
 */

import { connect } from 'react-redux'
import Basket from './../components/Basket'
import { createBasket, toggleBasketView } from './../actions/basket'

const mapStateToProps = (state, ownProps) => {
    return {
        basket: state.basket.basket,
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
