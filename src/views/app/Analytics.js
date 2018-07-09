import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { instance as axios } from '../../axios'
// import { isEmptyObj } from '../../utility'

class Analytics extends Component {

    
    render() {
        
        return (
            <div className='container'>
                <h1>Analytics</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps)(Analytics)