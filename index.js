/*
 *
 *  accelerator-redux/
 *  Declan Tyson
 *  v0.0.2
 *  12/12/2016
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