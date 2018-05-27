// Action types
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


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