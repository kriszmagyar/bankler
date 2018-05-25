import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

export const Router = () => (
    <Switch>
        <Redirect exact from = '/' to = '/login' />
        <Route exact path = '/login' render={() => 'Login'} />
        <Route path = '/' render={() => 404} />
    </Switch>
)