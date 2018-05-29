import React, { Component } from 'react'

import { instance as axios } from '../../axios'
import { Loader } from '../../components/Loader'

export class AppPage extends Component {

    state = {
        isCurrentlyLoading: true,
        accounts: {}
    }

    componentDidMount() {
        this.getAccountData()
    }

    getAccountData = () => {
        const uri = 'users/user/accounts.json'
        axios.get(uri).then(res => {
            this.setState({
                isCurrentlyLoading: false,
                accounts: res.data
            })
        })
    }

    render() {

        if (this.state.isCurrentlyLoading) return <Loader />
        console.log(this.state)
        return (
            <div>
                {this.state.accounts.account1.name}
            </div>
        )
    }
}