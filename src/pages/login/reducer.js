import * as Types from './action'
const initialState = {
    accessToken: '',
    isLoading: false,
    error: '',
}
const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.HANDLE_LOGIN: {
            return {
                ...state,
                ...{
                    isLoading: action.payload
                }
            }
        }
        case Types.LOGIN_SUCCESS: {
            return {
                isLoading: false,
                accessToken: action.payload,
                error: ''
            }
        }
        case Types.LOGIN_FAILURE: {
            return {
                ...state,
                ...{
                    isLoading: false,
                    error: action.payload
                }
            }
        }
        case Types.ATCION_LOGOUT: {
            return {
                ...state,
                ...{
                    error: '',
                    accessToken: ''
                }
            }
        }
        default: return state
    }
}
export default LoginReducer