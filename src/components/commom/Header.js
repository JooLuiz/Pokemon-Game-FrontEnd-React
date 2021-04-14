import { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

export class Header extends Component {

    logout() {
        this.props.logout();
    }

    render(){
        return (
            <div className="container" >
                <header className='header' >
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="nav-link active">Pokemon Game</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        {this.props.auth.isAuthenticated ?
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a onClick={() => this.logout()} className="nav-link active">logout</a>
                                </li>
                            </ul>
                        </div> : 
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link active">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link active">Register</Link>
                            </li>
                        </ul>
                    </div> }
                    </div>
                    </nav>
                </header>
            </div>
        )
    };
}
Header.defaultProps = {
    title: "Consulta de procesos jurídicos",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const mapStateToProps = state =>({
    auth: state.auth
});

export default connect(mapStateToProps, { logout } )(Header)
