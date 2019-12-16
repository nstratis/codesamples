/* eslint no-unused-vars:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  static propTypes = {
  }

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

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  return {
  };
};

export default connect(mapStateToProps, {})(HomePage);
