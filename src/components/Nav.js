import React from 'react'

import { Link } from 'react-router-dom'

import './Nav.css'

export const NavTop = props => {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/accounts'>Accounts</Link>
        </nav>
    )

}