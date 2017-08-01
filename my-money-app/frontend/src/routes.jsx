import React from 'react'
import {Route, Router, Redirect, hashHistory} from 'react-router'

import Dashboard from './containers/dashboard2'
import BillingCycles from './containers/billingCycles'

const Routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycles} />
        <Redirect from='*' to='/' />
    </Router>
)

export default Routes