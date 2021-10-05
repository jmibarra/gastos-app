import _ from 'lodash';
import * as types from './actionTypes';
import firebaseService from '../../services/FirebaseService';
import * as expensesSelectors from './reducer';

export function fetchExpenses(){
    return async(dispatch, getState) => {
        try{
            firebaseService.peticionGetGastos('2021','10').then( 
                response => console.log("Espero que llegue de firebase: " + response) 
            );
            //console.log("Espero que llegue de firebase: " + expensesArray)
            //dispatch({type: types.EXPENSES_FETCHED, expensesArray});
        }catch(error){
            console.error(error)
        }
    };
}


