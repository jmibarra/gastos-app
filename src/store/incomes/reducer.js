// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    incomesArray: [],
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
      case types.INCOMES_FETCHED:
        return state.merge({
            incomesArray: action.incomesArray
        });
      default:
        return state;
    }
  }
  
  // selectors
  export function getIncomes(state) {
    return state.incomes.incomesArray;
  }