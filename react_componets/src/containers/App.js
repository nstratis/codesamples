import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from '../components/tabs/Tabs';

/**
 * @class App
 * @description The main applicaton wrapper component. The default wrapper
 * elements will be determined by the users logged in state.
 */
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  /**
   * @function render
   * @description Render the main application layers
   */
  render() {
    return (
      <div id="wrapper">
        <div className="component-container">
          This page demonstrates some simple react components.
          <Tabs />
        </div>
      </div>
    );
  }
}

export default App;
