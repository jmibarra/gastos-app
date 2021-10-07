// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    year:'',
    month:'',
    month_name:'',
    date_selector_open: false
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
      case types.GET_CURRENT_DATE:
        return state.merge({
            year: action.year,
            month: action.month,
            month_name: action.month_name
        });
        case types.UPDATE_DATE:
            return state.merge({
                year: action.year,
                month: action.month,
                month_name: action.month_name
            })
        case types.OPEN_DATE_DIALOG:
            return state.merge({
                date_selector_open:true
        });
        case types.CLOSE_DATE_DIALOG:
            return state.merge({
                date_selector_open:false
        });
      default:
        return state;
    }
}
  
// selectors
export function getYear(state) {
    return state.dates.year;
}

export function getMonth(state) {
    return state.dates.month;   
}

export function getMonthName(state) {
    return state.dates.month_name;
}

export function isSelectorDateOpen(state) {
    return state.dates.date_selector_open;
}