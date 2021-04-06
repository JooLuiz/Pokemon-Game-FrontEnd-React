import axios from 'axios'

import { GET_USERS, GET_USER, EDIT_USER } from './types'

//GET_USERS
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
        config.headers['Authorization'] = `${token}`
    }

    axios.get('http://localhost:3000/users', config)
    .then(res => {
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

//GET_USER
export const getUser = (id) => (dispatch, getState)  =>  {
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
        config.headers['Authorization'] = `${token}`
    }

    axios.get('http://localhost:3000/users/' + id, config)
    .then(res => {
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

//EDIT_USER
export const editUser = (id, user) => (dispatch, getState)  =>  {
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
        config.headers['Authorization'] = `${token}`
    }

    const body = JSON.stringify({
        username:user.username,
        email:user.email,
        firstName:user.firstName,
        lastName:user.lastName
    })

    axios.post('http://localhost:3000/users/' + id, body, config)
    .then(res => {
        dispatch({
            type: EDIT_USER,
            payload: res.data
        })
    }).catch(err => console.log(err))
}