import _ from 'lodash';
import * as types from './actionTypes';
import  DateUtils from '../../utils/DateUtils';

export function calculateDate(){
    return (dispatch, getState) => {
        try{
            let dateUtils = new DateUtils()
            const year = dateUtils.getCurrentYear();
            const month = dateUtils.getCurrentMonth();
            const month_name = dateUtils.getMonthName(month);
            dispatch({type: types.GET_CURRENT_DATE, year:year,month:month,month_name:month_name});
        }catch(error){
            console.error(error)
        }
    };
}

export function updateDate(year,month){
    return (dispatch, getState) => {
        try{
            let dateUtils = new DateUtils()
            const month_name = dateUtils.getMonthName(month);
            dispatch({type: types.GET_CURRENT_DATE, year:year,month:month,month_name:month_name});
        }catch(error){
            console.error(error)
        }
    };
}

export function openDateDialog(){
    return (dispatch, getState) => {
        try{
            dispatch({type: types.OPEN_DATE_DIALOG});
        }catch(error){
            console.error(error)
        }
    };
}

export function closeDateDialog(){
    return (dispatch, getState) => {
        try{
            dispatch({type: types.CLOSE_DATE_DIALOG});
        }catch(error){
            console.error(error)
        }
    };
}