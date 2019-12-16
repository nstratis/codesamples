import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_USER
} from '../constants/actions';

export const userLoggedIn = (state = false, action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      return true;
    case LOGIN_FAILED:
    case LOGOUT_USER:
      return false;
    default:
      return state;
  }
};
