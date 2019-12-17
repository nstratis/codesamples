import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Menu from '../components/ui/menu/Menu';
import PanelAlert from '../components/panel/PanelAlert';
import { resetErrorMessage, hideMenu, showMenu } from '../actions';

/**
 * @class App
 * @description The main applicaton wrapper component. The default wrapper
 * elements will be determined by the users logged in state.
 */
class App extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    pathName: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  // Empty State required for the new lifecycle
  // getDerivedStateFromProps
  state = {};

  /**
   * @function getDerivedStateFromProps
   * @description New lifecycle to replace the UNSAFE methods
   * @param {Boolean} active - The state of the menu
   */
  static getDerivedStateFromProps(props, state) {
    /*
      WARNING: For example purposes only, not for production use.
    */
    if (props.userLoggedIn && props.location.pathname === '/login') {
      props.location.pathname = '/';
    }

    if (!props.userLoggedIn && props.location.pathname !== '/login') {
      window.location = '/login';
    }
    return null;
  }

  /**
   * @function toggleMenu
   * @description Handles the action dispatch request for toggling the
   * menu open and closed
   * @param {Boolean} active - The state of the menu
   */
  toggleMenu = (active) => {
    if (active) {
      this.props.showMenu();
      return;
    }
    this.props.hideMenu();
  }

  /**
   * @function render
   * @description Render the main application layers
   */
  render() {
    const { children, pathName, userLoggedIn } = this.props,
    menuClass = (this.props.menuIsOpen) ? ' menu-open' : '';
    if (pathName === 'login' && !userLoggedIn) {
      return (
        <div id="wrapper">
          {children}
          <PanelAlert />
        </div>
      );
    }
    return (
      <div id="wrapper">
        <div id="app-container" className="main">
          <Header toggleMenu={this.toggleMenu} />
          <section className="main">
            <div className={`app-inner-content ${menuClass}`}>
              <div className="area-left">
                <Menu />
              </div>
              <div className="area-main">
                {children}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userLoggedIn: state.userLoggedIn,
  errorMessage: state.errorMessage,
  pathName: ownProps.location.pathname.substring(1),
  menuIsOpen: state.menuIsOpen
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideMenu: () => dispatch(hideMenu()),
    showMenu: () => dispatch(showMenu()),
    resetErrorMessage: () => dispatch(resetErrorMessage())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
