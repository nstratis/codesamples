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

const Root = ({ store }) => {
  const isLoggedIn = () => {
    return store.getState().userLoggedIn;
  };

  const checkAuth = (history) => {
    const path = history.location.pathname;
    if (isLoggedIn()) {
      switch(path) {
        case '/':
        return (<HomePage />);
        case '/login':
        return (<LoginPage />);
        case '/grid':
        return (<GridPage />);
        case '/form':
        return (<FormPage />);
        default:
        return (<HomePage />);
      }
    } else {
      if (path !== '/login') {
        window.location.pathname = '/login';
      }
      return (
        <LoginPage />
      );
    }
  };

  return (<Provider store={store}>
    <App>
      <Route exact path="/" render={checkAuth} />
      <Route exact path="/login" render={checkAuth} />
      <Route exact path="/grid" render={checkAuth} />
      <Route exact path="/form" render={checkAuth} />
    </App>
    <DevTools />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
