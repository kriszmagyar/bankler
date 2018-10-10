import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './Nav.css'

const NavTop = props => {

    return (
        <nav className='nav light'>
            <div className="container">
                <div className="brand">
                    <Link to='/'>
                        <span className="logo"></span>
                    </Link>
                </div>
                <button className="toggle">
                    <span className="toggle-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>
                <div className="collapse right">
                    <ul>
                        <li className="item">
                            <Link className='link' to='/'>Home</Link>
                        </li>
                        { props.isLoggedIn ? (
                            [<li key = {1} className = "item">
                                <Link className='link' to='/accounts'>Accounts</Link>
                            </li>,
                            <li key = {2} className="item">
                                <Link className='link' to='/analytics'>Analytics</Link>
                            </li>]
                        ) : (
                            [<li key = {1} className="item">
                                <Link className='link' to='/login'>Login</Link>
                            </li>,
                            <li key = {2} className="item">
                                <Link className='link' to='/signup'>Sign Up</Link>
                            </li>]
                        ) }
                    </ul>
                </div>
            </div>
        </nav>
    )

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(NavTop)