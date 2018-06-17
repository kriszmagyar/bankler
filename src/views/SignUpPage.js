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
            <div className='jumbotron left'>
                <form className='form small'>
                    <InputText label='First Name' type='text' name='userFirstName' placeholder='First name'/>
                    <InputText label='Last Name' type='text' name='userLastName' placeholder='Last name'/>
                    <InputText label='Email Address' type='email' name='userEmail' placeholder='Email'/>
                    <InputText label='Password' type='password' name='userPassword' placeholder='Password'/>
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