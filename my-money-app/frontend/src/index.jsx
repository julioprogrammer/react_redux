import React from 'react'
import { render } from 'react-dom'
import App from './containers/main/app'

render(
    <App />,
    document.querySelector('[data-js="app"]')
)