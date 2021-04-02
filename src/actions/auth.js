import axios from 'axios'

import { LOGIN_ESCAVADOR_SUCCESS,LOGIN_ESCAVADOR_WAITING,LOGIN_ESCAVADOR_FAILURE } from './types'

//LOGIN_ESCAVADOR_SUCCESS
export const loginEscavador = ( email, password ) => (dispatch) =>  {
    dispatch({
        type: LOGIN_ESCAVADOR_WAITING,
    })

    //HEADERS
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest'
        }
    }

    const body = JSON.stringify({
        username:email, password
    })

    axios.post('https://api.escavador.com/api/v1/request-token', body, config)
    .then(res => {
        dispatch({
            type: LOGIN_ESCAVADOR_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
        dispatch({
            type: LOGIN_ESCAVADOR_FAILURE,
        })
    })
}