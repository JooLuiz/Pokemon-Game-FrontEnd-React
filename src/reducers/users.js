import { GET_USERS, GET_USER, EDIT_USER, DELETE_USER } from "../actions/types";

const initialState = {
    users: [],
    user: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USERS:
            return {
                ...state, 
                users: action.payload
            }
        case GET_USER:
            return {
                ...state, 
                user: action.payload
            }
        case EDIT_USER:
            return {
                ...state,
                user: action.payload,
                users: state.users.filter((user) => user._id !== action.payload._id).push(action.payload)
            }
        case DELETE_USER:
            return{
                ...state,
                user: {},
                users: state.users.filter((user) => user._id !== action.payload.id)
            }
        default:
            return state;
    }
}