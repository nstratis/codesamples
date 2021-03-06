import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PanelLogin from '../../components/panel/PanelLogin';
import { showAlert } from '../../actions/alert';
import { loginUser } from '../../actions/api';

/**
 * @class LoginPage
 * @description The login page elements, displaying the panel for the user
 */
class LoginPage extends Component {
  static propTypes = {
    showAlert: PropTypes.func,
    loginUser: PropTypes.func
  }

  /**
   * @function validate
   * @description New lifecycle to replace the UNSAFE methods
   * @param {String} username - The username input to validate
   * @param {String} password - The password input to validate
   */
  validate = (username, password) => {
    if (username === '' || password === '') {
      this.props.showAlert(
        'Invalid Credentials',
        `Please enter a valid username and password, for this
                  example please user bob/abcde`
      );
      return;
    }
    this.props.loginUser(username, password);
  }

  /**
   * @function render
   * @description Render the login page components
   */
  render() {
    return (
      <div id="app-container">
        <PanelLogin validate={this.validate} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (title, message) => dispatch(showAlert(title, message)),
    loginUser: (username, password) => dispatch(loginUser(username, password))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
