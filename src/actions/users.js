import axios from 'axios'

import { GET_USERS } from './types'

//GET_USER
export const getUsers = () => (dispatch, getState)  =>  {
    //todo
    const token = getState().auth.token;
    const tokenType = getState().auth.tokenType;

    //HEADERS
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    if(token && tokenType){
        config.headers['Authorization'] = `${tokenType} ${token}`
    }

    axios.get('http://localhost:3000/users', config)
    .then(res => {
        debugger
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }).catch(err => console.log(err))
}