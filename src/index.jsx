import React from 'react'
import ReactDOM from 'react-dom'
import  { applyMiddleware, createStore } from 'redux'
import  { Provider } from 'react-redux'

import promise from 'redux-promise'

import reducers from './main/reducers'
import App from  './main/app'

const store = applyMiddleware(promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={ store }>    
       <App />
    </Provider>
, document.getElementById('app'))