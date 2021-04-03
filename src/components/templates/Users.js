import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/users';

export class Users extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getUsers();
        debugger
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    users: state.users.users
});

export default connect(mapStateToProps, { getUsers })(Users)
