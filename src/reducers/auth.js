import { LOGIN_SUCCESS, LOGIN_WAITING, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER_WAITING } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    isLoading: false,
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_WAITING, REGISTER_WAITING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS, REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.access_token)
            return{
                ...state,
                user: action.payload.user,
                isLoading:false,
                isAuthenticated:true,
            }
        case LOGIN_FAILURE, REGISTER_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}