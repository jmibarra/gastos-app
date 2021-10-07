import _ from 'lodash';
import * as types from './actionTypes';
import firebaseService from '../../services/FirebaseService';
import * as expensesSelectors from './reducer';

export function fetchExpenses(){
    return async(dispatch, getState) => {
        try{
            await firebaseService.peticionGetGastos('2021','10').then( 
                response => dispatch({type: types.EXPENSES_FETCHED, expensesArray:response})
            );
        }catch(error){
            console.error(error)
        }
    };
}


