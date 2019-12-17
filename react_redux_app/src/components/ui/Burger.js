/* eslint no-unused-vars:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class Burger
 * @description The menu toggle button in the header
 */
export default class Burger extends Component {
  static propTypes = {
  }

  state = {
    active: false
  }

  /**
   * @function handleClick
   * @description  Handles the click event for the toggle button
   * @param {Object} e - The event object
   */
  handleClick = () => {
    this.setState({ active: !this.state.active });
    this.props.onClick(!this.state.active);
  }

  /**
   * @function render
   * @description Render the toggle component
   */
  render() {
    let isActive = (this.state.active) ? ' active' : '';
    return (<div className={`icon-burger ${isActive}`} onClick={this.handleClick}>
      <div className="line"> </div>
      <div className="line"> </div>
      <div className="line"> </div>
    </div>);
  }
}
