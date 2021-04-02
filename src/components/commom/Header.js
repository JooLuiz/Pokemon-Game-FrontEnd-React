import { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Header extends Component {
    render(){
        return (
            <div className="container">
                <header className='header'>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="nav-link active">CPJurídico</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        {this.props.auth.isAuthenticated ?
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/processos" className="nav-link active">Processos</Link>
                            </li>
                        </ul>
                        </div> : null
                        }
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
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

export default connect(mapStateToProps)(Header)
