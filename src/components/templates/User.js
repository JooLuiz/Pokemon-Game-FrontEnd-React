import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/users';

export class User extends Component {
    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                {this.props.users.map((user) => {
                    if(user._id == this.props.match.params.id){
                        return(
                            <div>
                                <h3>{user.firstName} {user.lastName}</h3>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    users: state.users.users
});

export default connect(mapStateToProps, { getUsers })(User)