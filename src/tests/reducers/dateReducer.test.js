import DateUtils from "../../utils/DateUtils";
import { SET_DATE } from "../../actions/date";
import { dateReducer, initialState } from "../../reducers/date";

describe("dateReducer", () => {
  it("should return the initial state", () => {
    expect(dateReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle SET_DATE", () => {
    const year = "2022";
    const month = "12";
    const action = {
      type: SET_DATE,
      payload: {
        year,
        month,
      },
    };
    const expectedState = {
      year,
      month,
      month_name: DateUtils.getMonthName(month),
    };
    expect(dateReducer(initialState, action)).toEqual(expectedState);
  });
});
