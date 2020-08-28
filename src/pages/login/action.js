//action từ phía view
export const ACTION_LOGIN = 'ACTION_LOGIN'
export const ATCION_LOGOUT = 'ACTION_LOGOUT'
//action từ phía saga
export const HANDLE_LOGIN = 'HANDLE_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const actionLogin = (username, password) => ({
    type: ACTION_LOGIN,
    username,
    password
})
export const actionLogout = () => ({
    type: ATCION_LOGOUT
})
export const handleLogin = payload => ({
    type: HANDLE_LOGIN,
    payload
})
export const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
})
export const loginFailure = payload => ({
    type: LOGIN_FAILURE,
    payload
})