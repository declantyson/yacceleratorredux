/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.1
 *  09/12/2016
 *
 */

import { combineReducers } from 'redux';
import product from './product'
import basket from './basket'

export default combineReducers({
    product,
    basket
});