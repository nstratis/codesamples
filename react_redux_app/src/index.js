import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from "./history";
import Root from './containers/Root';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const defaultState = {
  userLoggedIn: false,
  isAlert:{
    active: false,
    title: '',
    message: ''
  },
  menuIsOpen: false
};
const store = configureStore(defaultState);

render(
  <Router>
    <Root store={store} history={history} />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
