import axios from 'axios'

import { LOGIN_SUCCESS, 
         LOGIN_WAITING, 
         LOGIN_FAILURE, 
         REGISTER_SUCCESS, 
         REGISTER_WAITING, 
         REGISTER_FAILURE, 
         LOGOUT } from './types'

//LOGIN_SUCCESS
export const login = ( username, password ) => (dispatch) =>  {
    dispatch({
        type: LOGIN_WAITING,
    })

    //HEADERS
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest'
        }
    }

    const body = JSON.stringify({
        username, password
    })

    //TODO login
    axios.post('http://localhost:3000/auth/login', body, config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
        dispatch({
            type: LOGIN_FAILURE,
        })
    })
}

export const register = ( username, email, firstName, lastName, password ) => (dispatch) =>  {
    dispatch({
        type: REGISTER_WAITING,
    })

    //HEADERS
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest'
        }
    }

    const body = JSON.stringify({
        username, email, firstName, lastName, password
    })

    //TODO register
    axios.post('http://localhost:3000/auth/register', body, config)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
        dispatch({
            type: REGISTER_FAILURE,
        })
    })
}

export const getLoggedUser = () => (dispatch, getState) =>  {
    const token = getState().auth.token;
    if(token){
        dispatch({
            type: LOGIN_WAITING,
        })

    
        //HEADERS
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'X-Requested-With':'XMLHttpRequest'
            }
        }

        config.headers['x-auth-token'] = `${token}`
        
        //TODO login
        axios.post('http://localhost:3000/auth/getLoggedUser', null, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: LOGIN_FAILURE,
            })
        })
    }
}

export const logout = () => (dispatch) =>  {
    dispatch({
        type: LOGOUT,
    })
}