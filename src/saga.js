import { all, call } from "redux-saga/effects";
import  loginSaga from "./pages/login/saga";

// theo doi tat ca cac saga
export default function* rootSaga() {
  yield all([
    call(loginSaga),
  ])
}