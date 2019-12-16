/**
 * @description Actions for showing/hiding the alert dialog
 */
import { SHOW_ALERT_DIALOG, HIDE_ALERT_DIALOG } from '../constants/actions';

/**
 * @function hideAlert
 * @description Action dispatch to hide the alert dialog
 */
export const hideAlert = () => ({ type: HIDE_ALERT_DIALOG });

/**
 * @function showAlert
 * @description Action dispatch to show the alert dialog
 * @param {String} title - The title to display in the alert
 * @param {String} message - The message to display in the alert
 */
export const showAlert = (title, message) => ({
  type: SHOW_ALERT_DIALOG,
  title: title,
  message: message
});
