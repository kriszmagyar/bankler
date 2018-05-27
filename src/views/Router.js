import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { login, logout } from '../store/actions'

class Router extends Component {
    render() {
    
        return (
            <Switch>
                <Route exact path = '/' render = {() => 'Landing page'}/>
                <Route exact path = '/login' render = { () => 
                    <div>
                        <button onClick = {this.props.loginUser}>Login</button>
                        <button onClick = {this.props.logoutUser}>Logout</button>
                    </div>
                } />
                <Route path = '/' render = {() => 404} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: () => dispatch(login()),
        logoutUser: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)