import {USER_LOGIN_START, USER_LOGIN_SUCCESS, LOGIN_USER_ERROR, LOGIN_REMOVE_ERROR} from "./action";


const initialState = {
    isLoading: false,
    user: {},
    loggedInUser: false,
    errMsg: "",
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_START:
      case LOGIN_USER_ERROR: {
        return {
          ...state,
          ...action,
        };
      }
  
      case USER_LOGIN_SUCCESS: {
        return {
          ...state,
          user: action.user,
          loggedInUser: true,
          errMsg: "",
        };
      }
  
      case LOGIN_REMOVE_ERROR: {
        return {
          ...state,
          errMsg: action.errMsg
        }
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };
  