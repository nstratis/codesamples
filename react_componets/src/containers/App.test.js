import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Test Main App Initialization and Mounting', () => {
  const rendered = render(<App />);
  const wrapper = rendered.container.querySelector('#wrapper');
  expect(wrapper.id).toBe('wrapper');
});
