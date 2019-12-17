import { API_PATH } from '../constants';

/**
 * @function execute
 * @description Utilizes fetch and promises to make a Request.
 * This is a limited example that only allows for POST requests
 * @param {String} path - The API endpoint to execute
 * @param {Object} data - The data to post to the server
 */
export const execute = (path, data) => {
  const url = API_PATH + path + '.php';
  const request = {
    method: 'POST',
    // mode: 'cors',
    headers: {
      'content-type':	'application/json; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest',
      'access-control-allow-methods': 'GET, POST',
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'x-requested-with, content-type'
    }
  };

  request.body = JSON.stringify(data);
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
