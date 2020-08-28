import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import SignUp from './pages/signup';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Index from './components/Index';
import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { acssetToken } from './pages/login/reselect'
import { actionLogout } from './pages/login/action'

function App() {
  const {token_user } = useSelector(createStructuredSelector({
    token_user: acssetToken
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(actionLogout())
  }
  return (
    <Router>
      <div className="App" style={{textAlign: 'center'}}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                { 
                  token_user === '' ? 
                  (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <NavLink 
                          className="nav-link" 
                          to={"/sign-in"}
                          activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                        >
                          Đăng nhập
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink 
                          className="nav-link" 
                          to={"/sign-up"}
                          activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                        >
                          Đăng ký
                        </NavLink>
                      </li>
                    </ul>
                  )
                   :
                  (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item" onClick = {onLogout} style={{cursor: 'pointer'}}>
                        <NavLink 
                          className="nav-link" 
                          to={"/index"}
                        >
                          Đăng xuất
                        </NavLink>
                      </li>
                    </ul>
                  )           
                }
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Index} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route exact path='/index' component={Index} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
