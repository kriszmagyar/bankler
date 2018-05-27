import * as actionTypes from './actions'
import { updateObject } from './utility'

//Default state
const initialState =  {
    isLoggedIn: false
}

//Main reducer function
export const reducer = (state = initialState, action) => {
    switch ( action.type ) {

        case actionTypes.LOGIN : return login(state, action)
        case actionTypes.LOGOUT : return logout(state, action)
        
        default : return state
    }
}

//Logic in the reducer function
const login = (state, action) => {
    return updateObject(state, { isLoggedIn: true })
}
const logout = (state, action) => {
    return updateObject(state, { isLoggedIn: false })
}