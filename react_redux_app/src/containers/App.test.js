import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {render
  // screen
  // fireEvent
} from '@testing-library/react';
import rootReducer from '../reducers';
import App from './App';

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState)} = {}
  ) {
  return {
    ...render(
      <Router><Provider store={store}>{ui}</Provider></Router>),
    store
  }
}

test('Test Main App Initialization and Mounting', () => {
  const rendered = renderWithRedux(<App />);
  const wrapper = rendered.container.querySelector('#wrapper');
  const app = wrapper.querySelector('#app-container');
  expect(wrapper.id).toBe('wrapper');
  expect(app.classList.contains('main')).toBe(true);
});
