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
                
            </div>
        )
    }
}

const mapStateToProps = state =>({
    users: state.users.users
});

export default connect(mapStateToProps, { getUsers })(Users)
