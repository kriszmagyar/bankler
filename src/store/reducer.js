const initialState =  {
    isLoggedIn: false
}

export const reducer = (state = initialState, action) => {
    if (action.type === 'LOGIN') {
        return {
            isLoggedIn: true
        }
    }
    return state
}