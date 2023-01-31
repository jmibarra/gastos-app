import React, { createContext, useReducer } from "react";
import {LOG_IN, LOG_OUT} from "../actions/session";
import { sessionReducer,initialState } from "../reducers/session";

export const SessionContext = createContext();

const { Provider } = SessionContext;

export const SessionProvider = ({ children }) => {
    
    const [sessionState,dispatch] = useReducer(sessionReducer,initialState);

    const login = (userId) => {
        dispatch({type:LOG_IN, payload: {loggedIn:true, userId: userId}})
    }

    const logout = (userId) => {
        dispatch({type:LOG_OUT, payload: {loggedIn:false, userId: ""}})
    }

    return <Provider value={{ sessionState, login,logout}}> {children}</Provider>

}