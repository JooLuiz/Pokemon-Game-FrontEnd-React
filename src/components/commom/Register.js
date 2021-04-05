import React, { Component } from 'react'
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Redirect, Link } from "react-router-dom";

export class Register extends Component {
    state={
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirmation: ''
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.email, this.state.firstName, this.state.lastName, this.state.password)
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    render() {

        if(this.props.isAuthenticated){
            return <Redirect to="/" />
        }

        const {username, email, firstName, lastName, password, passwordConfirmation} = this.state;

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body m-5">
                    <h2 className="text-center"> Register </h2>
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
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                onChange={this.onChange}
                                value={firstName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                onChange={this.onChange}
                                value={lastName}
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
                            <label>Password Confirmation</label>
                            <input
                                type="password"
                                className="form-control"
                                name="passwordConfirmation"
                                onChange={this.onChange}
                                value={passwordConfirmation}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary">
                                    Register
                            </button>
                        </div>
                    </form>
                    <div >
                        <p style={{textAlign:'center'}}>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register } )(Register)
