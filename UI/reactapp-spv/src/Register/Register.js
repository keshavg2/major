import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Register.css";

export default class SignUp extends Component {
    render() {
        return (
            <div className="App">
            <div className="container">
                <div className="outer">
                    <div className="inner">
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Adhar Number</label>
                    <input type="text" className="form-control" placeholder="Adhar No" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Link to="/Home"> <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button></Link>
                <p className="forgot-password text-right">
                    Already registered <Link to="/Login"><a href="#">log in?</a></Link>
                </p>
            </form>
            </div>
            </div>
            </div>
            </div>
        );
    }
}