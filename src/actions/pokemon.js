import axios from 'axios'

import { GET_POKEMONS, GET_POKEMON, NEXT_PAGE_POKEMON, PREVIOUS_PAGE_POKEMON} from './types'

//GET_POKEMONS
export const getPokemons = () => (dispatch, getState)  =>  {
     let limit = getState().pokemon.pageSize;
     let offset = getState().pokemon.pageSize * (getState().pokemon.currPage - 1);
     let url = 'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset;
    axios.get(url)
    .then(res => {

        let allPokemon = res.data.results;
        const promises = [];
        allPokemon.map((poke) => {
            promises.push(
                axios.get(poke.url)
                .then(internRes => {
                    if(allPokemon[(internRes.data.id - 1 - offset)]){
                        let url = allPokemon[(internRes.data.id - 1 - offset)]["url"];
                        allPokemon[(internRes.data.id - 1 - offset)] = internRes.data;
                        allPokemon[(internRes.data.id - 1 - offset)]["url"] = url;
                        allPokemon[(internRes.data.id - 1 - offset)] = allPokemon[(internRes.data.id - 1 - offset)];
                    }
                })
            )
        })
        Promise.all(promises).then(() => {
            dispatch({
                type: GET_POKEMONS,
                payload: allPokemon
            })
        })
    }).catch(err => console.log(err))
}

export const getPokemon = (id) => (dispatch)  =>  {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(res => {
        dispatch({
            type: GET_POKEMON,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

export const nextPage = () => (dispatch, getState)  =>  {
    debugger
    let limit = getState().pokemon.pageSize;
     let offset = getState().pokemon.pageSize * ((getState().pokemon.currPage + 1) - 1);
     let url = 'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset;
    axios.get(url)
    .then(res => {

        let allPokemon = res.data.results;
        const promises = [];
        allPokemon.map((poke) => {
            promises.push(
                axios.get(poke.url)
                .then(internRes => {
                    if(allPokemon[(internRes.data.id - 1 - offset)]){
                        let url = allPokemon[(internRes.data.id - 1 - offset)]["url"];
                        allPokemon[(internRes.data.id - 1 - offset)] = internRes.data;
                        allPokemon[(internRes.data.id - 1 - offset)]["url"] = url;
                        allPokemon[(internRes.data.id - 1 - offset)] = allPokemon[(internRes.data.id - 1 - offset)];
                    }
                })
            )
        })
        Promise.all(promises).then(() => {
            dispatch({
                type: GET_POKEMONS,
                payload: allPokemon
            });
            dispatch({
                type: NEXT_PAGE_POKEMON,
            });
        })
    }).catch(err => console.log(err))
}

export const previousPage = () => (dispatch, getState)  =>  {
    debugger
    let limit = getState().pokemon.pageSize;
     let offset = getState().pokemon.pageSize * ((getState().pokemon.currPage - 1) - 1);
     let url = 'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset;
    axios.get(url)
    .then(res => {

        let allPokemon = res.data.results;
        const promises = [];
        allPokemon.map((poke) => {
            promises.push(
                axios.get(poke.url)
                .then(internRes => {
                    if(allPokemon[(internRes.data.id - 1 - offset)]){
                        let url = allPokemon[(internRes.data.id - 1 - offset)]["url"];
                        allPokemon[(internRes.data.id - 1 - offset)] = internRes.data;
                        allPokemon[(internRes.data.id - 1 - offset)]["url"] = url;
                        allPokemon[(internRes.data.id - 1 - offset)] = allPokemon[(internRes.data.id - 1 - offset)];
                    }
                })
            )
        })
        Promise.all(promises).then(() => {
            dispatch({
                type: GET_POKEMONS,
                payload: allPokemon
            });
            dispatch({
                type: PREVIOUS_PAGE_POKEMON,
            });
        })
    }).catch(err => console.log(err))
}