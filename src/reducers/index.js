import { combineReducers } from 'redux'
import users from "./users"
import auth from "./auth"
import pokemon from "./pokemon"

export default combineReducers({
    users,
    auth,
    pokemon
})