import React from 'react'
import PropTypes from 'prop-types'

import './Account.css'

import { Button } from '../../components/UI/Button'

export const Account = props => {

    return (
        <div className='account'>
            <div>{props.name}</div>
            <div>{props.currency}</div>
            <div>{props.cash.toLocaleString()}</div>
            <div>{props.number}</div>
            <Button text = 'Details'/>
        </div>
    )

}

Account.propTypes = {
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    cash: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired
}