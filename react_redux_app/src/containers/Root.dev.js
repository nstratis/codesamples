import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import DevTools from './DevTools';
import App from './App';
import HomePage from './pages/HomePage';
import GridPage from './pages/GridPage';
import FormPage from './pages/FormPage';
import LoginPage from './pages/LoginPage';

const Root = ({ store, history }) => {
  // console.log(store, typeof history.push);
  return (<Provider store={store}>
    <App>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/grid" component={GridPage} />
      <Route exact path="/form" component={FormPage} />
    </App>
    <DevTools />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
