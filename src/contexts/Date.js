import React, { createContext, useReducer } from "react";
import { SET_DATE } from "../actions/date";
import { dateReducer,initialState } from "../reducers/date";

export const DateContext = createContext();

const { Provider } = DateContext;

export const DateProvider = ({ children }) => {
    
    const [state,dispatch] = useReducer(dateReducer,initialState);

    const setDate = (year, month) => {
        dispatch({type:SET_DATE, payload: {year:year, month: month}})
    }

    return <Provider value={{ state, setDate}}> {children}</Provider>

}