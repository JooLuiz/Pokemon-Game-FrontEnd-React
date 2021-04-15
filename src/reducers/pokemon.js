import { GET_POKEMONS, GET_POKEMON, NEXT_PAGE_POKEMON, PREVIOUS_PAGE_POKEMON } from "../actions/types";

const initialState = {
    pokemons: [],
    pokemon:{},
    currPage: 1,
    pageSize: 42
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state, 
                pokemons: action.payload
            }
        case GET_POKEMON:
            return {
                ...state, 
                pokemon: action.payload
            }
        case NEXT_PAGE_POKEMON:
            return {
                ...state, 
                currPage: state.currPage + 1
            }
        case PREVIOUS_PAGE_POKEMON:
            return {
                ...state, 
                currPage: state.currPage - 1
            }
        default:
            return state;
    }
}