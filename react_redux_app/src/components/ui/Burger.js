/* eslint no-unused-vars:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Burger extends Component {
  static propTypes = {
  }

  state = {
    active: false
  }

  handleClick = () => {
    this.setState({ active: !this.state.active });
    this.props.onClick(!this.state.active);
  }

  render() {
    let isActive = (this.state.active) ? ' active' : '';
    return (<div className={`icon-burger ${isActive}`} onClick={this.handleClick}>
      <div className="line"> </div>
      <div className="line"> </div>
      <div className="line"> </div>
    </div>);
  }
}
