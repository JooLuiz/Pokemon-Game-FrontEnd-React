import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemons } from '../../actions/pokemon';
import { Link } from 'react-router-dom'

export class Pokemons extends Component {
    static propTypes = {
        pokemons: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getPokemons();
    }

    render() {
        return (
            <div className="container">
                <h1>Pokedex</h1>
                <ul id="pokedex" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gridGap: "20px",
                    paddingInlineStart: 0
                }}>
                {this.props.pokemons.map((pokemon) => {
                    return(
                        <Link 
                        to={"/pokemon/" + pokemon.id}
                        key={pokemon.id}
                        className="card" 
                        style={{
                            listStyle: "none",
                            padding: "40px",
                            backgroundColor: "#f4f4f4",
                            color: "#222",
                            textAlign: "center",
                        }}>
                            <img className="card-image" style={{ 
                                height: "180px",
                                width: "180px",
                                alignSelf: "center" 
                            }} src={pokemon.sprites.front_default}/>
                            <h2 
                                className="card-title" 
                                style={{
                                    textTransform: "capitalize",
                                    marginBottom: "0px",
                                    fontSize: "32px",
                                    fontWeight: "normal"
                                }}>
                                    {pokemon.id}. {pokemon.name}
                                </h2>
                        </Link>
                    )
                })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    pokemons: state.pokemon.pokemons
});

export default connect(mapStateToProps, { getPokemons })(Pokemons)