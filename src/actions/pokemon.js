import axios from 'axios'

import { GET_POKEMONS } from './types'

//GET_POKEMONS
export const getPokemons = () => (dispatch)  =>  {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=42')
    .then(res => {

        let allPokemon = res.data.results;
        const promises = [];
        allPokemon.map((poke) => {
            promises.push(
                axios.get(poke.url)
                .then(internRes => {
                    if(allPokemon[internRes.data.id - 1]){
                        allPokemon[internRes.data.id - 1]["defaultPic"] = internRes.data.sprites.front_default;
                        allPokemon[internRes.data.id - 1]["id"] = internRes.data.id;
                        allPokemon[internRes.data.id - 1] = allPokemon[internRes.data.id - 1];
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