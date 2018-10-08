// Action types
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_ACOOUNTS = 'UPDATE_ACCOUNTS'


// Action creators
export const login = () => {
    return {
        type: LOGIN
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const updateAccounts = (accounts) => {
    return {
        type: UPDATE_ACOOUNTS,
        accounts: accounts
    }
}