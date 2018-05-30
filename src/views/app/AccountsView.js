import React from 'react'
import PropTypes from 'prop-types'

import { Account } from './Account';

export const AccountsView = props => {

    const Accounts = Object.keys(props.data).map(key => (
            <Account
                key = { key }
                name = { props.data[key].name }
                currency = { props.data[key].currency }
                cash = { props.data[key].cash }
                number = { props.data[key].number }
            />
        ))

    return (
        <div>
            { Accounts }
        </div>
    )

}

AccountsView.propTypes = {
    data: PropTypes.object
}