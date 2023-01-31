import { LOG_IN, LOG_OUT } from "../actions/session";

export const initialState = {
    loggedIn: false,
    userId: ""
}

export const sessionReducer = (state, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                userId: action.userId,
            };
        }
        default:
            return state
    }
}