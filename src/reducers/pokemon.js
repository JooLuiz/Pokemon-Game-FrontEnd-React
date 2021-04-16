import { GET_POKEMONS, GET_POKEMON, CHANGE_PAGE_POKEMON } from "../actions/types";

const initialState = {
    pokemons: [],
    pokemon:{},
    currPage: 1,
    pageSize: 42,
    lastPage: 21
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
        case CHANGE_PAGE_POKEMON:
            return {
                ...state, 
                currPage: action.payload
            }
        default:
            return state;
    }
}