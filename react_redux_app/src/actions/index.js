import {
  SHOW_MENU,
  HIDE_MENU,
  RESET_ERROR_MESSAGE
} from '../constants/actions';

/**
 * @function resetErrorMessage
 * @description Resets the error display
 */
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
});

/**
 * @function hideMenu
 * @description Action dispatch to hide the menu
 */
export const hideMenu = () => ({ type: HIDE_MENU });

/**
 * @function showMenu
 * @description Action dispatch to show the menu
 */
export const showMenu = () => {
  console.log('Action: showMenu');
  return { type: SHOW_MENU };
};
