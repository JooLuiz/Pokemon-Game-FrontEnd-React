import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import {  Redirect, Link } from "react-router-dom";
import { getUsers } from '../../actions/users';

export class Login extends Component {

    state={
        username: '',
        password:''
    }

    componentDidMount(){
        this.props.getUsers();
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    render() {

        if(this.props.isAuthenticated){
            return <Redirect to="/" />
        }

        const {username, password} = this.state;

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body m-5">
                    <h2 className="text-center"> Login </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary">
                                    Login
                            </button>
                        </div>
                    </form>
                    <div>
                        <p style={{textAlign:'center'}}>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, getUsers } )(Login)
