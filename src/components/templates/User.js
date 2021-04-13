import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../../actions/users';

export class User extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    }

    componentWillMount(){
        this.props.getUser(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                    <p>{this.props.user.username}</p>
                    <p>{this.props.user.email}</p>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = (state, props) =>({
    user: state.users.users.length > 0 ? state.users.users.filter(user => user._id === props.match.params.id)[0] : state.users.user
});

export default connect(mapStateToProps, { getUser })(User)