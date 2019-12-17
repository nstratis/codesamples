/* eslint no-unused-vars:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * @class GridPage
 * @description A page displaying a datagrid component
 */
class GridPage extends Component {
  static propTypes = {
  }

  render() {
    return (<>
      <p className="copy">This is the grid page</p>
    </>);
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  return {
  };
};

export default withRouter(connect(mapStateToProps, {})(GridPage));
