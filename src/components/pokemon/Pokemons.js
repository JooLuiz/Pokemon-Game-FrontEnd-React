import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemons, nextPage, previousPage } from '../../actions/pokemon';
import { Link } from 'react-router-dom'

export class Pokemons extends Component {
    static propTypes = {
        pokemons: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getPokemons();
    }

    onNext(){
        debugger
        this.props.nextPage();
    }

    onPrevious(){
        debugger
        this.props.previousPage();
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
                <ul style={{
                    margin: 0,
                    padding: 0,
                    textAlign: "center"  
                }}>
                    {this.props.currPage !== 1 ? 
                    <li style={{
                       display: 'inline'
                    }}><button 
                        onClick={() => this.onPrevious()} 
                        style={{
                            borderRadius: "5px",
                            WebkitTransition: "background-color 0.3s",
                            transition: "background-color 0.3s",
                            display: "inline-block",
                            textDecoration: "none",
                            padding: "5px 10px",
                            color: "#000"
                        }}>«</button></li> :
                        <div></div>
                    }
                    <li style={{
                       display: 'inline'
                    }}><div 
                        style={{
                            borderRadius: "5px",
                            WebkitTransition: "background-color 0.3s",
                            transition: "background-color 0.3s",
                            display: "inline-block",
                            textDecoration: "none",
                            padding: "5px 10px",
                            color: "#000"
                        }}>{this.props.currPage}</div></li>
                    <li style={{
                       display: 'inline'
                    }}><button 
                        onClick={() => this.onNext()}
                        style={{
                            borderRadius: "5px",
                            WebkitTransition: "background-color 0.3s",
                            transition: "background-color 0.3s",
                            display: "inline-block",
                            textDecoration: "none",
                            padding: "5px 10px",
                            color: "#000"
                        }}>»</button></li>
                </ul> 
            </div>
        )
    }
}

const mapStateToProps = state =>({
    pokemons: state.pokemon.pokemons,
    currPage: state.pokemon.currPage
});

export default connect(mapStateToProps, { getPokemons, nextPage, previousPage })(Pokemons)