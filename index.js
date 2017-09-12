/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.4
 *  12/09/2017
 *
 */

import 'babel-polyfill'

import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import promise from 'redux-promise'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'

export const API_BASE = "https://electronics.local:9002";
export const API_STORE = "electronics";
export const API_URL = `${API_BASE}/rest/v2/${API_STORE}`;

let store = createStore(
   reducer,
    applyMiddleware(ReduxThunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
