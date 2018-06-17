import React, { Component } from 'react'
import { connect } from 'react-redux'

class AccountHistoryView extends Component {
    render() {

        const id = this.props.match.params.id

        return (
            <div>
                {this.props.accounts[id].name}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps)(AccountHistoryView)