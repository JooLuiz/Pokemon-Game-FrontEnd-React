import { combineReducers } from 'redux'
import processos from "./processos"
import auth from "./auth"

export default combineReducers({
    processos,
    auth
})