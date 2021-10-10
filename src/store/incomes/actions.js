import _ from 'lodash';
import * as types from './actionTypes';
import firebaseService from '../../services/FirebaseService';

export function fetchIncomes(){
    return async(dispatch, getState) => {
        try{
            let responseObject = await firebaseService.peticionGet('2021','10','ingresos').then(); //Dinamizar el mes y año

            let incomesArray = []

            Object.keys(responseObject).map(index => {
                incomesArray.push({
                        id: index,
                        estado: responseObject[index].estado,
                        fecha: responseObject[index].fecha,
                        motivo: responseObject[index].motivo,
                        total: responseObject[index].total
                })
            })

            dispatch({type: types.INCOMES_FETCHED, incomesArray:incomesArray})

        }catch(error){
            console.error(error)
        }
    };
}


