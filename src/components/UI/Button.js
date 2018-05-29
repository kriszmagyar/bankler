import React from 'react'

import './Button.css'

export const Button = props => {
    return (
        <button className='btn' onClick={props.onClick}>{props.text}</button>
    )

}