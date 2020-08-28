import { put, call, take, fork } from 'redux-saga/effects'
import {
    handleLogin,
    loginSuccess,
    loginFailure,
    ACTION_LOGIN
} from './action'
import  { api } from '../../service/api'

function* postLoginAction(username, password) {
    try {
        yield put(handleLogin(true))
        let response = yield call(api.postLogin, username, password ) //gọi api 
        if(response.code === 200) {
            yield put(loginSuccess(response.token_user))
        }else {
            yield put(loginFailure('Username hoặc password không đúng'))
        }
    } catch(e) {
        console.log(e)
    }
}
export default function* loginSaga() {
    while (true) {
        const { username, password } = yield take(ACTION_LOGIN)
        yield fork(postLoginAction, username, password)
    }
}   
