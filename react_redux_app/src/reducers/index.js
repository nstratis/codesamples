import { combineReducers } from 'redux';
import { isAlert, menuIsOpen } from './ui';
import { userLoggedIn } from './user';

const rootReducer = combineReducers({
  userLoggedIn,
  isAlert,
  menuIsOpen
});

export default rootReducer;
