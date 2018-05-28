import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { LandingPage } from './LandingPage'
import LoginPage from './LoginPage'
import { AppPage } from './AppPage'
import { NoMatchPage } from './NoMatchPage'

class Router extends Component {
    render() {

        return (
            <div>
                <Switch>
                    <Route exact path = '/' component = { LandingPage } />
                    <Route exact path = '/login' component = { LoginPage } />
                    <Route exact path = '/accounts' component = { AppPage } />
                    <Route component = { NoMatchPage } />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Router)