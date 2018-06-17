import React from 'react'
import PropTypes from 'prop-types'

export const HistoryItem = props => {

    return (
        <div className='historyItem'>
            <div>{props.name}</div>
            <div>{props.accNum}</div>
            <div>{props.amount}</div>
            <div>{props.category}</div>
        </div>
    )

}

HistoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    accNum: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}