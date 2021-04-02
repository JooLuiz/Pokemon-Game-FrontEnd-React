import { LOGIN_ESCAVADOR_SUCCESS, LOGIN_ESCAVADOR_WAITING,LOGIN_ESCAVADOR_FAILURE } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    tokenType: localStorage.getItem('tokenType'),
    isAuthenticated: null,
    isLoading: false,
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_ESCAVADOR_WAITING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_ESCAVADOR_SUCCESS:
            localStorage.setItem("token", action.payload.access_token)
            localStorage.setItem("tokenType", action.payload.token_type)
            return{
                ...state,
                isLoading:false,
                isAuthenticated:true,
            }
        case LOGIN_ESCAVADOR_FAILURE:
            localStorage.removeItem('token');
            localStorage.removeItem('tokenType');
            return {
                ...state,
                token: null,
                tokenType: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}