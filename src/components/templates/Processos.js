import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProcessos } from '../../actions/processos';

export class Processos extends Component {
    static propTypes = {
        processos: PropTypes.object.isRequired
    }

    componentDidMount(){
        this.props.getProcessos();
    }

    render() {
        return (
            <div>
                <h1>Processos</h1>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    processos: state.processos.processos
});

export default connect(mapStateToProps, { getProcessos })(Processos)
