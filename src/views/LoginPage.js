import React, { Component } from 'react'

import { connect } from 'react-redux'
import { login, logout } from '../store/actions'

class LoginPage extends Component {
    
    auth = () => {
        this.props.history.push('/accounts')
        this.props.loginUser()
    }
    
    render() {

        return (
            <div>
                {
                    this.props.isLoggedIn ? (
                        <button onClick = { this.props.logoutUser }>Logout</button>
                    ) : (
                        <button onClick = { this.auth }>Login</button>
                    )
                }
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)