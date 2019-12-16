import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  EXECUTE_REQUEST } from '../constants/actions';


const executeRequest = (credentials, types, path) => ({
  [EXECUTE_REQUEST]:{
    types,
    path,
    data: credentials
  }
});

export const loginUser = (username, password) => (dispatch, getState) => {
  return dispatch(executeRequest(
      { username, password },
      [LOGIN_SUCCESS, LOGIN_FAILED],
      'auth'
    ));
}
