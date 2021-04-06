import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser, editUser } from '../../actions/users';

export class EditUsers extends Component {
    state={
        id: this.props.user.id,
        username: this.props.user.username,
        email: this.props.user.email,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName
    }

    componentWillMount(){
        this.props.getUser(this.props.match.params.id);
    }

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    onSubmit = e => {
        e.preventDefault();
        let user = 
        {
            username: this.state.username,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        this.props.editUser(this.props.match.params.id, user)
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

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

const mapStateToProps = (state, props) =>({
    user: state.users.users.length > 0 ? state.users.users.filter(user => user._id == props.match.params.id)[0] : state.users.user
});

export default connect(mapStateToProps, { getUser, editUser })(EditUsers)
