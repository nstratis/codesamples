import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  EXECUTE_REQUEST
} from '../constants/actions';

import { showAlert } from './alert';

/**
 * @function executeRequest
 * @description This Action will trigger the middleware API request
 * @param {String} credentials - The users credentials to post
 * @param {Array} types - The action response types [SUCCESS_ACTION, FAILED_ACTION]
 * @param {String} path - The endpoint path for the request
 */
const executeRequest = (credentials, types, path) => ({
  [EXECUTE_REQUEST]:{
    types,
    path,
    data: credentials
  }
});

/**
 * @function loginFailed
 * @description Execute the Action to trigger the api middleware request
 * WARNING: This is a not a "Secure" login method as is meant for demonstration only
 * @param {String} username - The username to post
 * @param {String} password - The password to post
 */
export const loginFailed = (dispatch) => {
  console.log(dispatch);
  dispatch(showAlert(
    'Validation Error',
    `The credentials you have supplied could not be
    validated on the system, please try again.`
  ));
  return {
    type: LOGIN_FAILED
  };
}

/**
 * @function loginUser
 * @description Execute the Action to trigger the api middleware request
 * WARNING: This is a not a "Secure" login method as is meant for demonstration only
 * @param {String} username - The username to post
 * @param {String} password - The password to post
 */
export const loginUser = (username, password) => (dispatch, getState) => {
  return dispatch(executeRequest(
      { username, password },
      [LOGIN_SUCCESS, loginFailed],
      'auth'
    ));
}
