import { userLoginApi } from './api'



export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const LOGIN_REMOVE_ERROR = "LOGIN_REMOVE_ERROR";




const userLoginStart = () => ({
    type: USER_LOGIN_START,
    isLoading: true,
  });
  
  const userLoginSuccess = (user) => ({
    type: USER_LOGIN_SUCCESS,
    isLoading: false,
    user,
  });
  
  const userLoginError = (errMsg) => ({ //TODO
    type: LOGIN_USER_ERROR,
    isLoading: true,
    errMsg,
  });
  
  export const removeError = () => ({
    type: LOGIN_REMOVE_ERROR,
    errMsg: null
  });
  
  

export const userLogin = (value, history) => async (dispatch) => {
    dispatch(userLoginStart());
    try {
      const res = await userLoginApi(value);
      if (!!res && !!res.data ) {
        dispatch(userLoginSuccess(res.data));
        // history.push("/user-action");
      }
    } catch (error) {
      !!error &&
        !!error.response &&
        !!error.response.data &&
        dispatch(userLoginError(error.response.data));
    }
  };
  


