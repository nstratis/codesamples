import { EXECUTE_REQUEST } from '../constants/actions';
import { execute } from './fetch';

/**
 * @function api
 * @description A middleware, executed when actions are dispatched.
 * @param {Object} store - The redux store object reference
 * @param {Function} next - The action dispatcher reference
 * @param {Object} action - The current action handle for the request
 */
export default store => next => action => {
  console.log('API');
  // console.log(store, next, action, execute);
  const req = action[EXECUTE_REQUEST];
  if (req === undefined) {
    return next(action);
  }
  let responseAction = {};
  const successAction = action[EXECUTE_REQUEST].types[0],
  failedAction = action[EXECUTE_REQUEST].types[1];
  return execute(req.path, req.data)
  .then(response => {
    responseAction.payload = response;
    if (response.code === 200) {
      if (typeof successAction === 'function') {
        responseAction = successAction(next);
      } else {
        responseAction.type = action[EXECUTE_REQUEST].types[0];
      }
    } else if (response.code === 401) {
      if (typeof failedAction === 'function') {
        responseAction = failedAction(next);
      } else {
        responseAction.type = action[EXECUTE_REQUEST].types[1];
      }
    }
    return next(responseAction);
  });
};
