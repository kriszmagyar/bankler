import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateAccounts } from '../../store/actions'
import { instance as axios } from '../../axios'
import { isEmptyObj } from '../../utility'

import { Account } from '../../components/Account/Account'
import { Loader } from '../../components/Loader'

class AccountsView extends Component {

    componentDidMount() {
        this.getAccountData()
    }

    getAccountData = () => {
        //Checking if the accounts are already loaded
        if (!isEmptyObj(this.props.accounts)) {
            return
        }
        //Fetch the accounts
        const uri = 'users/user/accounts.json'
        axios.get(uri).then(res => {
            this.props.updateAccounts(res.data)
        })
    }

    goToAccount = id => {
        this.props.history.push('/accounts/' + id)
    }
    
    render() {
        //Return a Loader if the data is currently loading
        if (isEmptyObj(this.props.accounts)) return <Loader />

        //Generate and display the accounts
        const Accounts = Object.keys(this.props.accounts).map(key => (
                <Account
                    key = { this.props.accounts[key].id }
                    name = { this.props.accounts[key].name }
                    currency = { this.props.accounts[key].currency }
                    cash = { this.props.accounts[key].cash }
                    number = { this.props.accounts[key].number }
                    onClick = { () => this.goToAccount(key) }
                />
            ))
    
        return (
            <div>
                { Accounts }
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