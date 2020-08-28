import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
//lưu trú state vào storage
import storage from 'redux-persist/lib/storage';
import LoginReducer from './pages/login/reducer'

const persistRootConfig = {
    key: 'root',
    storage: storage,
    blackList: ['isLoading', 'error', 'accessToken']
}

localStorage.clear('persist:persistedStore')
const rootReducer = combineReducers({
    // login: persistReducer(persistLoginConfig, LoginReducer)
    login: LoginReducer
})
export default persistReducer(persistRootConfig, rootReducer)