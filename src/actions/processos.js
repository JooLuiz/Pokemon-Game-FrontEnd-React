import axios from 'axios'

import { GET_PROCESSOS } from './types'

//GET_PROCESSO
export const getProcessos = () => (dispatch, getState)  =>  {
    //todo
    const token = getState().auth.token;
    const tokenType = getState().auth.tokenType;

    //HEADERS
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest'
        }
    }

    if(token && tokenType){
        config.headers['Authorization'] = `${tokenType} ${token}`
    }

    axios.get('https://api.mocki.io/v1/1ce81622', config)
    .then(res => {
        dispatch({
            type: GET_PROCESSOS,
            payload: res.data
        })
    }).catch(err => console.log(err))
}