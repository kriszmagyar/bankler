import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { LandingPage } from './LandingPage'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage';
import AccountsView from './app/AccountsView'
import AccountHistoryView from './app/AccountHistoryView'
import { NoMatchPage } from './NoMatchPage'
import { NavTop } from '../components/Nav';

class Router extends Component {
    render() {

        return (
            <div>
                <NavTop />
                <Switch>
                    <Route exact path = '/' component = { LandingPage } />
                    <Route exact path = '/login' component = { LoginPage } />
                    <Route exact path = '/signup' component = { SignUpPage } />
                    <Route exact path = '/accounts' component = { AccountsView } />
                    <Route exact path = '/accounts/:id' component = { AccountHistoryView } />
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

export default withRouter(connect(mapStateToProps)(Router))