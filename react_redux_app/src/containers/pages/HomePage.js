import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * @class HomePage
 * @description Simple Homepage component rendering some text
 */
class HomePage extends Component {
  /**
   * @function render
   * @description Render the home page components
   */
  render() {
    return (
      <>
        <h1 className="title">Sample Application Home</h1>
        <p className="copy">
          This is a sample application build with "FRAMEWORK", and is a simple
          demonstration of code formatting and style.
        </p>
      </>
    );
  }
}
export default connect(null, null)(HomePage);
