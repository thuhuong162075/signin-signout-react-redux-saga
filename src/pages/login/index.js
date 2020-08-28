import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { loadingLogin, acssetToken, errorToken } from './reselect'
import { actionLogin } from './action'
import { Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Error from "../../components/Error";
import Arrow from '../../assets/image/arrow.png'
import '../../assets/css/home.css'
import Validate from "../../components/Validate";

export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errUsername, setErrName] = useState(false)
    const [errPassword, setErrPass] = useState(false)
    const dispatch = useDispatch();
    const {loading, token_user, error } = useSelector(createStructuredSelector({
        loading: loadingLogin,
        token_user: acssetToken,
        error: errorToken
    }));
    const handleLoginAction = (e) => {
        e.preventDefault();
        password === '' ? setErrPass(true) : setErrPass(false)
        email === '' ? setErrName(true) : setErrPass(false)
        if (email !== '' && password !== '') {
            dispatch(actionLogin(email, password))
        } 
    }
    const onChangeUsername = (e) => {
        setEmail(e.target.value)
        setErrName(false)
    }
    const OnChangePassword = (e) => {
        setPassword(e.target.value)
        setErrPass(false)
    }
    if(token_user !== '' ) {
       return (
           <Redirect to='/index' />
       )
    }

    return (
        <div className="home">
            <form className="form-login">
                <h3>Đăng nhập</h3>
                <div className="form-group-login login-username">
                    <label className="label label-username">Tên đăng nhập</label>
                    {errUsername ? <Validate text = 'Tên đăng nhập không đúng' valiClassName='invalid-username'/> : <div></div>}
                    <input 
                        type="username" 
                        className="form-control"
                        placeholder="Nhập tên đăng nhập" 
                        onChange={onChangeUsername}
                    />
                </div>
                <div className="form-group-login login-password">
                    <label className="label label-password" >Mật khẩu</label>
                    {errPassword ? <Validate text = 'Mật khẩu không đúng' valiClassName='invalid-password'/> : <div></div>}
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Nhập mật khẩu" 
                        onChange={OnChangePassword}
                    />
                </div>
                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="customCheck1" 
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
                {loading ? 
                    <div className="loading">
                        <Spinner className="my-3" animation="border" />
                    </div> : (
                        <div>
                            {!error ? <div></div> : <Error /> }
                            <button 
                                type="submit" 
                                className="btn btn-primary" 
                                style={{ width: '300px', margin: '0 auto'}}
                                onClick={handleLoginAction}
                            >
                                Submit
                            </button>
                        </div>
                    )
                }
            </form>
        </div>
    );
}