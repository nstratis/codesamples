/* eslint no-unused-vars:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import Input from '../form/Input';

/**
 * @class PanelLogin
 * @description The login panel which is displayed on the login page.
 */
export default class PanelLogin extends Component {
  state = {
    username: 'bob',
    password: 'abcde'
  }

  static propTypes = {
    panelText: PropTypes.string
  }

  static defaultProps = {
  }

  /**
   * @function handleClick
   * @description  Handles the click event for the login button
   * @param {Object} e - The event object
   */
  handleClick = (e) => {
    this.props.validate(this.state.username, this.state.password);
  }

  /**
   * @function handleInput
   * @description  Handles the onChange event for the form input
   * given they are controlled components
   * @param {Object} e - The event object
   */
  handleInput = (e) => {
    const value = e.currentTarget.value,
    name = e.currentTarget.name;
    this.setState({ [name]: value });
  }

  /**
   * @function render
   * @description Render the login panel component
   */
  render() {
    return (<div id="login-panel" className="panel visible">
      <header className="panel-hdr login">
        <Logo />
      </header>
      <div className="panel-stn">
        <p>Enter your credentials below to login to the application.</p>
        <form method="get">
          <fieldset className="field-grp">
            <Input
              name="username"
              label="Username"
              type="text"
              value={this.state.username}
              onChange={this.handleInput}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <div className="form-bt">
              <Button label="Login" onClick={this.handleClick} />
            </div>
          </fieldset>
        </form>
      </div>
    </div>);
  }
}
