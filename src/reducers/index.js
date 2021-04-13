import { combineReducers } from 'redux'

import login from './login'
import postList from './postList'

export default combineReducers({
    login,
    postList
})