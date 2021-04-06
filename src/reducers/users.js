import { GET_USERS, GET_USER, EDIT_USER  } from "../actions/types";

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
                users: this.state.users.filter((user) => user._id != action.payload._id).push(action.payload)
            }
        default:
            return state;
    }
}