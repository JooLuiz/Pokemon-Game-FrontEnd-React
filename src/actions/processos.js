import axios from 'axios'

import { GET_PROCESSOS } from './types'

//GET_PROCESSO
export const getProcessos = () => dispatch =>  {
    //todo
    axios.get('https://api.mocki.io/v1/1ce81622')
    .then(res => {
        dispatch({
            type: GET_PROCESSOS,
            payload: res.data
        })
    }).catch(err => console.log(err))
}