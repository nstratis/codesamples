import {
  SHOW_ALERT_DIALOG,
  HIDE_ALERT_DIALOG,
  SHOW_MENU,
  HIDE_MENU
} from '../constants/actions';

export const menuIsOpen = (state = false, action) => {
  switch(action.type){
    case SHOW_MENU:
      return true;
    case HIDE_MENU:
      return false;
    default:
      return state;
  }
};

export const isAlert =
    (state = { open: false, title: '', message: '' }, action) => {
  switch(action.type){
    case SHOW_ALERT_DIALOG:
      return {
        active: true,
        title: action.title,
        message: action.message
      };
    case HIDE_ALERT_DIALOG:
      return {
        active: false,
        title: '',
        message: ''
      };
    default:
      return state;
  }
};
