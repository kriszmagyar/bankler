import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateAccounts } from '../../store/actions'
import { instance as axios } from '../../axios'
import { isEmptyObj } from '../../utility'

import { Account } from '../../components/Account/Account'
import { Loader } from '../../components/Loader'

class AccountsView extends Component {

    goToAccount = id => {
        this.props.history.push('/accounts/' + id)
    }
    
    render() {
    
        return (
            <div className='container'>
                <Account 
                    name = 'My Account'
                    currency = 'USD'
                    cash = { 200000 }
                    number = '0000-0000-0000'
                />
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