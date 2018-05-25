import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Router extends Component {
    render() {
    
        return (
            <Switch>
                <Redirect exact from = '/' to = '/login' />
                <Route exact path = '/login' render = { () => 
                    <button onClick = {this.props.loginUser}>Login</button>
                } />
                <Route path = '/' render={() => 404} />
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
        loginUser: () => dispatch({type: 'LOGIN'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)