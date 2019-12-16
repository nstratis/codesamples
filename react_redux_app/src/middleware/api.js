import { API_PATH } from '../constants';
import { EXECUTE_REQUEST } from '../constants/actions';

const execute = (path, data) => {
  const url = API_PATH + path + '.php';
  const request = {
    method: 'POST',
    // mode: 'cors',
    headers: {
      'content-type':	'application/json; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest',
      'access-control-allow-methods': 'GET, POST',
      // 'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'x-requested-with, content-type'
      // 'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
    }
  };

  request.body = JSON.stringify(data);
  console.log(request);
  return fetch(url, request)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default store => next => action => {
  console.log('API');
  // console.log(store, next, action, execute);
  const req = action[EXECUTE_REQUEST];
  console.log(req);

  const responseAction = {
    type: action[EXECUTE_REQUEST].types[0]
  };

  return execute(req.path, req.data)
  .then(response => {
    responseAction.data = response;
    if (response.code === 200) {
      responseAction.type = action[EXECUTE_REQUEST].types[0];
    } else if (response.code === 401) {
      responseAction.type = action[EXECUTE_REQUEST].types[1];
    }
    return next(responseAction);
  });
};
