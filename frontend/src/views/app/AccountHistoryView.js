import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateAccounts } from '../../store/actions'
import { instance as axios } from '../../axios'
import { isEmptyObj } from '../../utility'

import { Loader } from '../../components/Loader'
import { HistoryItem } from '../../components/Account/HistroyItem'
import { Button } from '../../components/UI/Button';

class AccountHistoryView extends Component {

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

    goToAccouns = () => {
        this.props.history.push('/accounts')
    }

    viewHistory = id => {
        console.log(id)
    }

    
    render() {
        
        if (isEmptyObj(this.props.accounts)) return <Loader />
        
        const id = this.props.match.params.id
        const accountHistory = this.props.accounts[id].history
        const accountName = this.props.accounts[id].name
        let historyList

        if (!accountHistory) {
            historyList = 'There is no account history...'
        } else {
            historyList = Object.keys(accountHistory).map(key => (
                <HistoryItem
                    key = { accountHistory[key].id }
                    name = { accountHistory[key].name }
                    accNum = { accountHistory[key].accNum }
                    amount = { accountHistory[key].amount }
                    category = { accountHistory[key].category }
                    onClick = { () => this.viewHistory(key) }
                />
            ))
        }


        return (
            <div className='container'>
                <Button text='Back' onClick={this.goToAccouns}/>
                { accountName }
                <h3>Account History</h3>
                { historyList }
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountHistoryView)