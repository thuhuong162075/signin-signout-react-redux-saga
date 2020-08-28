import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div style={{ width: '700px', margin: '0 auto', border: '1px solid black', paddingTop: '30px' }}>
                <form style={{width: '700px'}}>
                    <h3>Đăng ký</h3>
                    <div className="form-group">
                        <label style={{display: 'flex', marginLeft: '50px'}}>First name</label>
                        <input type="text" className="form-control" placeholder="First name" style={{ width: '600px', margin: '0 auto'}} />
                    </div>

                    <div className="form-group">
                        <label style={{display: 'flex', marginLeft: '50px'}}>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" style={{ width: '600px', margin: '0 auto'}} />
                    </div>

                    <div className="form-group">
                        <label style={{display: 'flex', marginLeft: '50px'}}>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" style={{ width: '600px', margin: '0 auto'}} />
                    </div>

                    <div className="form-group">
                        <label style={{display: 'flex', marginLeft: '50px'}}>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" style={{ width: '600px', margin: '0 auto'}} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" style={{ width: '600px', margin: '0 auto'}}>Sign Up</button>
                    <p className="forgot-password text-right mt-3 mr-3">
                        Already registered sign in?
                    </p>
                </form>
            </div>
        );
    }
}