import { LOG_IN, LOG_OUT } from "../../actions/session";
import { initialState, sessionReducer } from "../../reducers/session";


describe("sessionReducer", () => {
  it("should return the initial state", () => {
    expect(sessionReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle LOG_IN", () => {
    const user = { username: "user1" };
    const loggedIn = true;
    const action = {
      type: LOG_IN,
      payload: {
        user,
        loggedIn,
      },
    };
    const expectedState = {
      user,
      loggedIn,
    };
    expect(sessionReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle LOG_OUT", () => {
    const action = {
      type: LOG_OUT,
    };
    const expectedState = {
      loggedIn: false,
      user: {},
    };
    expect(sessionReducer(initialState, action)).toEqual(expectedState);
  });
});
