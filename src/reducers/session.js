import { LOG_IN, LOG_OUT } from "../actions/session";

export const initialState = {
    loggedIn: false,
    user: {} 
}

export const sessionReducer = (state, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                user: action.payload.user,
                loggedIn: action.payload.loggedIn
            };
        }
        default:
            return state
    }
}