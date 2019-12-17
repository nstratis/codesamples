import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '../components/grid/Grid';
import MessageDisplay from '../components/review/MessageDisplay';
import CreateReview from '../components/review/CreateReview';

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

          <h1>Grid</h1>
          <div className="component-item">
            <Grid />
          </div>
          <h1>Review Comments</h1>
          <div className="component-item">
            <MessageDisplay />
            <CreateReview />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
