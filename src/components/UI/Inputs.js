import React from 'react'

import './Inputs.css'

export const InputText = props => {

    return (
        <div className='input-group'>
            <input
                className='input-text'
                type = { props.type }
                name = { props.name }
                placeholder = { props.placeholder }
                required = { props.required }
            />
        </div>
    )

}