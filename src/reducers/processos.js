import { GET_PROCESSOS } from "../actions/types";

const initialState = {
    processos: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSOS:
            return {
                ...state, 
                processos: action.payload
            }
        default:
            return state;
    }
}