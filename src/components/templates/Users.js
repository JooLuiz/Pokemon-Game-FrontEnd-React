import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/users';
import { Link } from 'react-router-dom'

export class Users extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        return (
            <div className="card">
                {this.props.users.map((user) => {
                    return(
                        <div className="card container">
                            <p hidden={true} id={user._id}></p>
                            <p>Nome: {user.firstName} {user.lastName}</p>
                            <p>Usuário: {user.username}</p>
                            <p>E-mail: {user.email}</p>
                            <Link to={"/user/" + user._id} >Detalhe</Link>
                            <Link to={"/user/edit/" + user._id} >Edit</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    users: state.users.users
});

export default connect(mapStateToProps, { getUsers })(Users)
