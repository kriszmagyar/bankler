import React from 'react'
import PropTypes from 'prop-types'

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

InputText.propTypes = {
    type: PropTypes.oneOf(['email', 'password', 'text']).isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}