import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Redirect } from "react-router-dom";
import { getPokemon } from '../../actions/pokemon';

export class Pokemon extends Component {
    static propTypes = {
        pokemon: PropTypes.object.isRequired
    }

    componentWillMount(){
        this.props.getPokemon(this.props.match.params.id);
    }

    pokeDetailScreen() {
        return (
        <div className="container">
            <div className="card">
                <img className="card-image" style={{ 
                            height: "180px",
                            width: "180px",
                            alignSelf: "center" 
                        }} src={this.props.pokemon.sprites.front_default}/>
                <h3>{this.props.pokemon.id}. {this.props.pokemon.name}</h3>
                <p>height: {this.props.pokemon.height}</p>
                <p>weight: {this.props.pokemon.weight}</p>
            </div>  
        </div>
        )
    }

    render() {
        if(this.props.pokemon){
            return this.pokeDetailScreen()
        }else{
            return <Redirect to="/pokemon/all" />
        }
    }
}

const mapStateToProps = (state, props) =>({
    pokemon: state.pokemon.pokemons.length > 0 ? state.pokemon.pokemons.filter(pokemon => pokemon.id.toString() === props.match.params.id)[0] : state.pokemon.pokemon
});

export default connect(mapStateToProps, { getPokemon })(Pokemon)