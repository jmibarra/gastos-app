import DateUtils from "../utils/DateUtils"
import { SET_DATE } from "../actions/date"

export const initialState = {
    year: DateUtils.getCurrentYear(),
    month: DateUtils.getCurrentMonth(),
    month_name: DateUtils.getMonthName(DateUtils.getCurrentMonth())
}

export const dateReducer = (state, action) => {
    switch (action.type) {
        case SET_DATE: {
            return {
                year: action.payload.year,
                month: action.payload.month,
                month_name: DateUtils.getMonthName(action.payload.month)
            };
        }
        default:
            return state
    }
}