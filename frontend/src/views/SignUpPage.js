import React, { Component } from 'react'
import {instance as axios} from '../axios'

import { connect } from 'react-redux'
import { login, logout } from '../store/actions'
import { ui } from '../main/js/ui'

import { InputText } from '../components/UI/Inputs'
import { Button } from '../components/UI/Button'

class SignUpPage extends Component {

    state = {
        firstname: 'Krisz',
        lastname: 'Magyar',
        email: 'test@test.hu',
        password: 'asd'
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        axios({
            method: 'post',
            url: '/user',
            params: this.state
        })
        .then(res => {
            console.log(res)
            this.auth()
        })
        .catch(err => {
            console.log(err.response)
            ui.alert({
                content: err.response.data,
                type: 'danger'
            })
        })

    }

    auth = () => {

        this.props.history.push('/accounts')
        this.props.loginUser()
        ui.alert({
            content: 'Login successfull!',
            type: 'success'
        })
    }
    
    render() {

        return (
            <div className='jumbotron left'>
                <form className='form small' onSubmit={this.handleSubmit} noValidate>
                    <InputText label='First Name' type='text' name='firstname' placeholder='First name' onChange={this.handleChange} value={this.state.firstname} />
                    <InputText label='Last Name' type='text' name='lastname' placeholder='Last name' onChange={this.handleChange} value={this.state.lastname} />
                    <InputText label='Email Address' type='email' name='email' placeholder='Email' onChange={this.handleChange} value={this.state.email} />
                    <InputText label='Password' type='password' name='password' placeholder='Password' onChange={this.handleChange} value={this.state.password} />
                    <Button text='Sign Up!' />
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