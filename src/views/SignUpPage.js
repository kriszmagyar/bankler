import React, { Component } from 'react'

import { connect } from 'react-redux'
import { login, logout } from '../store/actions'

import { InputText } from '../components/UI/Inputs';
import { Button } from '../components/UI/Button';

class SignUpPage extends Component {
    
    auth = () => {
        this.props.history.push('/accounts')
        this.props.loginUser()
    }
    
    render() {

        return (
            <div className='content-center'>
                <form>
                    <InputText type='text' name='userFirstName' placeholder='First name'/>
                    <InputText type='text' name='userLastName' placeholder='Last name'/>
                    <InputText type='email' name='userEmail' placeholder='Email'/>
                    <InputText type='password' name='userPassword' placeholder='Password'/>
                    <Button text='Sign Up!' onClick={this.auth}/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: () => dispatch(login()),
        logoutUser: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignUpPage)