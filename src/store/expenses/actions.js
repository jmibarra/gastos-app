import _ from 'lodash';
import * as types from './actionTypes';
import firebaseService from '../../services/FirebaseService';
import * as expensesSelectors from './reducer';

export function fetchExpenses(){
    return async(dispatch, getState) => {
        try{
            let responseObject = await firebaseService.peticionGetGastos('2021','10').then();

            let expensesArray = []

            Object.keys(responseObject).map(index => {
                expensesArray.push({
                        id: index,
                        estado: responseObject[index].estado,
                        fecha: responseObject[index].fecha,
                        motivo: responseObject[index].motivo,
                        total: responseObject[index].total
                })
            })

            dispatch({type: types.EXPENSES_FETCHED, expensesArray:expensesArray})

        }catch(error){
            console.error(error)
        }
    };
}


