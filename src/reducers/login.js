/* eslint-disable import/no-anonymous-default-export */
import { LOGIN, LOGOUT } from '../actions/login'

const initialState = {
    logStatus: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                    ...state,
                    logStatus: true
            }
        case LOGOUT:
            return {
                ...state,
                logStatus: false
            }
        default:
            return state
    }
}