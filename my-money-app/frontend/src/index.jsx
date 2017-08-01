import React from 'react'
import {render} from 'react-dom'
import App from './containers/main/app'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './redux/reducers'
import promise from 'redux-promise'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('[data-js="app"]')
)