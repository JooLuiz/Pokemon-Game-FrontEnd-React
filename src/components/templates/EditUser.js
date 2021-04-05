import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/users';

export class EditUsers extends Component {

    state={
        id: this.props.match.params.id,
        username: this.props.users.map((user) => {if(user._id == this.props.match.params.id){ return user.username }}),
        email: this.props.users.map((user) => {if(user._id == this.props.match.params.id){ return user.email }}),
        firstName: this.props.users.map((user) => {if(user._id == this.props.match.params.id){ return user.firstName }}),
        lastName: this.props.users.map((user) => {if(user._id == this.props.match.params.id){ return user.lastName }})
    }
    
    static propTypes = {
        users: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        const {id, username, email, firstName, lastName } = this.state;

        return (
            <div className="card">
                <div className="col-md-6 m-auto">
                <div className="card card-body m-5">
                    <h2 className="text-center"> Edit usuario </h2>
                    <form onSubmit={this.onSubmit}>
                        <div hidden={true} className="form-group">
                            <label>Id</label>
                            <input
                                type="text"
                                className="form-control"
                                name="id"
                                value={id}
                            />
                        </div>
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
                            <button
                                type="submit"
                                className="btn btn-primary">
                                    Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    users: state.users.users
});

export default connect(mapStateToProps, { getUsers })(EditUsers)
