import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginEscavador } from '../../actions/auth';
import {  Redirect } from "react-router-dom";

export class Login extends Component {

    state={
        email: '',
        password:''
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.loginEscavador(this.state.email, this.state.password)
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    render() {

        if(this.props.isAuthenticated){
            return <Redirect to="/" />
        }

        const {email, password} = this.state;

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body m-5">
                    <h2 className="text-center"> Login </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={email}
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginEscavador } )(Login)
