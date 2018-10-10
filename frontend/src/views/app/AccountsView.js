import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateAccounts } from '../../store/actions'
import { instance as axios } from '../../axios'
import { isEmptyObj } from '../../utility'
import { ui } from '../../main/js/ui'

import { Account } from '../../components/Account/Account'
import { Loader } from '../../components/Loader'
import { Button } from '../../components/UI/Button'
import { InputText } from '../../components/UI/Inputs'

class AccountsView extends Component {

    state = {
        number: 200
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // componentDidMount() {
        
    //     axios({
    //         method: 'get',
    //         url: '/account',
    //         params: this.state
    //     })
    //     .then(res => {
    //         console.log(res)
    //         this.auth()
    //     })
    //     .catch(err => {
    //         console.log(err.response)
    //         ui.alert({
    //             content: err.response.data,
    //             type: 'danger'
    //         })
    //     })

    // }

    addAccount() {

        axios({
            method: 'post',
            url: '/account',
            params: this.state
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.response)
            ui.alert({
                content: err.response.data,
                type: 'danger'
            })
        })

    }
    
    render() {

        const Form = (
            <form className='form small' onSubmit={this.handleSubmit} noValidate>
                <InputText
                    label='Number'
                    type='text'
                    name='number'
                    placeholder='Number'
                    onChange={this.handleChange}
                    value={this.state.number}
                />
                <Button text='Add account' onClick={this.addAccount} />
            </form>
        )
    
        return (
            <div className='container'>
                { Form }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAccounts: accounts => dispatch(updateAccounts(accounts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountsView))