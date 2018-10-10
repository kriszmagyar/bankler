import React, { Component } from 'react'
import {instance as axios} from '../axios'

import { connect } from 'react-redux'
import { login, logout } from '../store/actions'

import { InputText } from '../components/UI/Inputs';
import { Button } from '../components/UI/Button';
import { ui } from '../main/js/ui'

class LoginPage extends Component {
    
    state = {
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
            method: 'get',
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
        
        const Form = (
            <form className='form small' onSubmit={this.handleSubmit} noValidate>
                <InputText label='Email address' type='email' name='email' placeholder='Email' onChange={this.handleChange} value={this.state.email}/>
                <InputText label='Password' type='password' name='password' placeholder='Password' onChange={this.handleChange} value={this.state.password}/>
                <Button text='Get Started' />
            </form>
        )

        return (
            <div className='jumbotron left'>
                { Form }
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

export default connect(null, mapDispatchToProps)(LoginPage)